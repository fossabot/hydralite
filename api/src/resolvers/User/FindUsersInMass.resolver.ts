import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { FindUsersInMassArgs } from "./args/FindUsersInMassArgs";

@Resolver()
export default class FindUserByIdResolver {
  @Query(() => [User])
  findUsersInMass(
    @Arg("args") { skip, limit }: FindUsersInMassArgs,
    @Ctx() { prisma }: ContextType
  ) {
    return prisma.user.findMany({
      skip,
      take: limit,
    });
  }
}
