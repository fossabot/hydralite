import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum BugReportSeverity {
  catastrophic = "catastrophic",
  critical = "critical",
  high = "high",
  medium = "medium",
  low = "low",
}

registerEnums({ BugReportSeverity });
registerEnumType(BugReportSeverity, { name: "BugReportSeverity" });
