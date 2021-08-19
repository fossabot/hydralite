import { AttachmentType } from "~/enums/AttachmentType";
import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { BugReport } from "./BugReport";
import { FeatureRequest } from "./FeatureRequest";
import { Post } from "./Post";

@Model()
@ObjectType()
export class Attachment {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  attachmentURL: string;

  @Field(() => AttachmentType)
  @Property(() => AttachmentType)
  type?: AttachmentType;

  @Relation()
  @Field(() => Post, { nullable: true })
  @Property(() => Post, { nullable: true })
  post?: Post;

  @Field(() => FeatureRequest)
  @Property(() => FeatureRequest)
  @Relation()
  featureRequest?: FeatureRequest;

  @Field(() => BugReport)
  @Property(() => BugReport)
  @Relation()
  bugReport?: BugReport;

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
