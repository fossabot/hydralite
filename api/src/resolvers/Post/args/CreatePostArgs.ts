import { Field, InputType } from "type-graphql";
import { PostType } from "~/resolver-types/enums";

@InputType()
export class CreatePostArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  description?: string;

  @Field((_type) => Boolean, {
    nullable: true,
  })
  isAnnouncement?: boolean;

  @Field((_type) => PostType, {
    nullable: false,
  })
  type!:
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

  @Field((_type) => String, {
    nullable: false,
  })
  projectId!: string;

  // TASK: Add attachments

  @Field((_type) => [String], {
    nullable: true,
  })
  hashtagIds?: string[];
}
