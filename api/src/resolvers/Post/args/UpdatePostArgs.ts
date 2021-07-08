import { Field, InputType } from "type-graphql";
import { PostType } from "~/resolver-types/enums";

@InputType()
export class UpdatePostArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  title?: string;

  @Field((_type) => String, {
    nullable: true,
  })
  description?: string;

  @Field((_type) => String, {
    nullable: false,
  })
  projectId!: string; // can not be used to alter the project a post lies in, only used to query post creator

  @Field((_type) => Boolean, {
    nullable: true,
  })
  isAnnouncement?: boolean;

  @Field((_type) => PostType, {
    nullable: true,
  })
  type?:
    | "post"
    | "article"
    | "question"
    | "feedback"
    | "suggestion"
    | "appreciation";

  @Field((_type) => Boolean, {
    nullable: true,
  })
  isPublic?: boolean;

  @Field((_type) => [String], {
    nullable: true,
  })
  labelIds?: string[];

  @Field((_type) => [String], {
    nullable: true,
  })
  categoryIds?: string[];

  @Field((_type) => [String], {
    nullable: true,
  })
  visibleToUserIds?: string[];

  // TASK: Add attachments

  @Field((_type) => [String], {
    nullable: true,
  })
  hashtagIds?: string[];
}
