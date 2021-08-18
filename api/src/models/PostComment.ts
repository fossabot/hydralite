import { Model, Property, Id, Relation, Default, UpdatedAt } from "decotix";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { Post } from "./Post";
import { User } from "./User";

@Model()
@ObjectType()
export class PostComment {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  body: string;

  @Field(() => User)
  @Property(() => User)
  @Relation()
  creator: User;

  @Field(() => Post)
  @Property(() => Post)
  @Relation()
  post: Post;

  @Field()
  @Property()
  @Default("false")
  edited: boolean;

  @Field(() => [User])
  @Property(() => [User])
  @Relation("UserLikedCommentsRelation")
  likers: User[];

  @Field(() => Int)
  @Property(() => Int)
  likes: number;

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
