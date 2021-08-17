import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum BugReportSeverity {
  catastrophic,
  critical,
  high,
  medium,
  low,
}

registerEnums({ BugReportSeverity });
registerEnumType(BugReportSeverity, { name: "BugReportSeverity" });
