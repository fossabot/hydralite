import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { FindUserByIdArgs } from "./args/FindUserByIdArgs";

@Resolver()
export default class FindUserByIdResolver {
  @Query(() => User, { nullable: true })
  findUserById(
    @Arg("args") { id }: FindUserByIdArgs,
    @Ctx() { prisma }: ContextType
  ) {
    return prisma.user.findUnique({
      where: { id },
    });
  }
}
