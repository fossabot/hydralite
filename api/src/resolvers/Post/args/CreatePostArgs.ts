import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { PostType } from '~/resolver-types/enums';

@InputType()
export class CreatePostArgs {
  @Length(1, 100)
  @Field(() => String)
  title: string;

  @Length(1, 500)
  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true })
  isAnnouncement?: boolean;

  @Field(() => PostType)
  type: PostType;

  @Field(() => Boolean, { nullable: true })
  isPublic?: boolean;

  @Field(() => [String], { nullable: true })
  labelIds?: string[];

  @Field(() => [String], { nullable: true })
  categoryIds?: string[];

  @Field(() => [String], { nullable: true })
  visibleToUserIds?: string[];

  @Field(() => String)
  projectId: string;

  // TASK: Add attachments

  @Field(() => [String], { nullable: true })
  hashtagIds?: string[];
}
