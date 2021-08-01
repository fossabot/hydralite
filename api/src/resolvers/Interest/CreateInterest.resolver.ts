import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Interest, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { CreateInterestArgs } from "./args/CreateInterestArgs";

@Resolver()
export class CreateInterestResolver {
  @Mutation(() => Interest)
  @IsAuthenticated()
  createInterest(
    @Arg("args") { name }: CreateInterestArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Interest | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    return executeOrFail(async () => {
      const createdInterest = await prisma.interest.create({
        data: {
          name,
          creator: { connect: { id: user.id } },
          uses: 0,
        },
      });
      return createdInterest;
    });
  }
}
