import { IsBoolean, IsDate, Max, Min } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTaskArgs {
  @Field()
  @Min(1)
  @Max(200)
  name: string;

  @Field({ nullable: true })
  @Max(1000)
  description: string;

  @Field(() => [String])
  coAuthorIds?: string[];

  @Field()
  projectId: string;

  @Field()
  taskBoardId: string;

  @Field()
  @IsDate()
  deadline?: Date;

  @Field()
  // TASK: validate min and max
  complexity: number;

  @Field()
  @Min(0)
  @Max(10)
  priority?: number;

  @Field()
  @IsBoolean()
  isOpenEndedTask?: boolean;

  @Field()
  @IsBoolean()
  acceptingTaskRequiresApproval?: boolean; // only applicable if isOpenEndedTask is set to true

  @Field(() => [String])
  rolesPermittedToAcceptTaskIds?: string[]; // only applicable if isOpenEndedTask is set to true

  @Field(() => [String])
  assigneeIds?: string[]; // only applicable if isOpenEndedTask is set to false

  @Field(() => [String])
  taskLocationIds?: string[];

  @Field(() => [String])
  taskCategoryIds?: string[];

  @Field(() => [String])
  attachmentIds?: string[];

  @Field(() => [String])
  checklistIds?: string[];

  @Field(() => [String])
  linkedBugReportIds?: string[];

  @Field(() => [String])
  linkedFeatureRequestIds?: string[];

  @Field(() => [String])
  duplicatedByTaskIds?: string[];

  @Field(() => [String])
  waitlistedByTaskIds?: string[];

  @Field(() => [String])
  waitlistingTaskIds?: string[];

  @Field(() => [String])
  linkedCommitUrls: string[];

  @Field(() => [String])
  linkedPrUrls: string[];
}
