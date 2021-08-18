import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { BugReportSeverity } from "~/enums/BugReportSeverity";
import { Attachment } from "./Attachment";
import { User } from "./User";

@Model()
@ObjectType()
export class BugReport {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  name: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  description?: string;

  @Field(() => BugReportSeverity)
  @Property(() => BugReportSeverity)
  severity?: BugReportSeverity;

  @Field(() => User)
  @Relation()
  @Property(() => User)
  creator?: User;

  @Field()
  @Property()
  isCreatedByProjectMember: boolean;

  @Field(() => [Attachment])
  @Property()
  attachments?: Attachment[];

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
