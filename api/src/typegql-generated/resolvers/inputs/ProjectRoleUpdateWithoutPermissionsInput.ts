import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberUpdateManyWithoutRolesInput } from "../inputs/ProjectMemberUpdateManyWithoutRolesInput";
import { ProjectRoleUpdatelinkedOpenEndedTasksInput } from "../inputs/ProjectRoleUpdatelinkedOpenEndedTasksInput";
import { ProjectUpdateOneRequiredWithoutRolesInput } from "../inputs/ProjectUpdateOneRequiredWithoutRolesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpdateWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleUpdatelinkedOpenEndedTasksInput, {
    nullable: true
  })
  linkedOpenEndedTasks?: ProjectRoleUpdatelinkedOpenEndedTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateManyWithoutRolesInput, {
    nullable: true
  })
  assignedMembers?: ProjectMemberUpdateManyWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutRolesInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutRolesInput | undefined;
}
