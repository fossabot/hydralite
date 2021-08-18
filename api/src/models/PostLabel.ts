import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { Post } from "./Post";
import { Project } from "./Project";
import { User } from "./User";

@Model()
@ObjectType()
export class PostLabel {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  title: string;

  @Field()
  @Property()
  color: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  description?: string;

  @Field(() => Project)
  @Property(() => Project)
  @Relation()
  project?: Project;

  @Field(() => User)
  @Relation()
  @Property(() => User)
  creator?: User;

  @Field(() => [Post])
  @Property(() => [Post])
  posts?: Post[];

  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
