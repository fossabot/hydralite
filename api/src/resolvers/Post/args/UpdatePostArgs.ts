import { Field, InputType } from "type-graphql";
import { PostType } from "~/resolver-types/enums";

@InputType()
export class UpdatePostArgs {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  projectId: string; // can not be used to alter the project a post lies in, only used to query post creator

  @Field(() => Boolean, { nullable: true })
  isAnnouncement?: boolean;

  @Field(() => PostType, { nullable: true })
  type?:
    | "post"
    | "article"
    | "question"
    | "feedback"
    | "suggestion"
    | "appreciation";

  @Field(() => Boolean, { nullable: true })
  isPublic?: boolean;

  @Field(() => [String], { nullable: true })
  labelIds?: string[];

  @Field(() => [String], { nullable: true })
  categoryIds?: string[];

  @Field(() => [String], { nullable: true })
  visibleToUserIds?: string[];

  // TASK: Add attachments

  @Field(() => [String], { nullable: true })
  hashtagIds?: string[];
}
