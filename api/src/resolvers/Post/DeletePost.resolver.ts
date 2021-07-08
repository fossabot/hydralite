// import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
// import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
// import ContextType from "~/types/Context.type";
// import { User } from "~/resolver-types/models";
// import { DeletePostArgs } from "./args/DeletePostArgs";
// import { PostRepo } from "~/db/PostRepo";
// import executeOrFail from "~/util/executeOrFail";

// const postRepo = new PostRepo();
// @Resolver()
// export class DeletePostResolver {
//   @UseMiddleware(isAuthenticated)
//   @Mutation(() => String)
//   async deletePost(
//     @Arg("args") args: DeletePostArgs,
//     @Ctx() { req, prisma }: ContextType
//   ): Promise<String | null> {
//     // retrieve the currently logged in user
//     const user: User = req.user as User;

//     // ensure the user trying to delete the post was the creator
//     await postRepo.userIsCreatorOfPost(user.id, args.postId);

//     // delete the post
//     executeOrFail(async () => {
//       await prisma.post.delete({
//         where: { id: args.postId },
//       });
//     }, "Error deleting post");

//     return "Successfully deleted post";
//   }
// }
