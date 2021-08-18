import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { CreatePostCommentArgs } from "./args/CreatePostCommentArgs";
import ContextType from "~/types/Context.type";
import { PostComment, User } from "~/models/index";

@Resolver()
export class CreatePostCommentResolver {
  @Mutation(() => PostComment)
  @IsAuthenticated()
  async createPostComment(
    @Arg("args") args: CreatePostCommentArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    type postCommentType = Parameters<
      typeof prisma.postComment.create
    >[0]["data"];
    const postComment: postCommentType = {
      body: args.body,
      creator: { connect: { id: user.id } },
      post: { connect: { id: args.postId } },
    };

    const createdPostComment = await prisma.postComment.create({
      data: postComment,
    });
    return createdPostComment;
  }
}
