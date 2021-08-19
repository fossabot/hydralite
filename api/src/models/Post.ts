import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { PostType } from "~/enums/PostType";
import { Attachment } from "./Attachment";
import { Hashtag } from "./Hashtag";
import { PostComment } from "./PostComment";
import { PostLabel } from "./PostLabel";
import { Project } from "./Project";
import { User } from "./User";

@Model()
@ObjectType()
export class Post {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  title: string;

  @Field(() => String, { nullable: true })
  @Property(() => String, { nullable: true })
  description?: string | null;

  @Field()
  @Property()
  isAnnouncement: boolean;

  @Field(() => PostType)
  @Property(() => PostType)
  type:
    | "post"
    | "article"
    | "question"
    | "feedback"
    | "suggestion"
    | "appreciation";

  @Field(() => [PostLabel])
  @Property(() => [PostLabel])
  labels?: PostLabel[];

  @Field()
  @Property()
  isPublic?: boolean;

  @Field(() => [User])
  @Property(() => [User])
  @Relation("PostVisibleToRelation")
  visibleTo?: User[];

  @Field(() => Project)
  @Property(() => Project)
  @Relation()
  project?: Project;

  @Field(() => [User])
  @Property(() => [User])
  @Relation("UserLikedPostsRelation")
  likers?: User[];

  @Field(() => [PostComment])
  @Property(() => [PostComment])
  comments?: PostComment[];

  @Field(() => [Attachment])
  @Property(() => [Attachment])
  attachments?: Attachment[];

  @Field(() => [Hashtag])
  @Property(() => [Hashtag])
  hashtags?: Hashtag[];

  @Field(() => User)
  @Relation("UserOwnedPostsRelation", true)
  @Property(() => User)
  creator?: User;

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
