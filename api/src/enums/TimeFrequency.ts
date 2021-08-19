import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum TimeFrequency {
  hourly = "hourly",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
  yearly = "yearly",
}

registerEnums({ TimeFrequency });
registerEnumType(TimeFrequency, { name: "TimeFrequency" });
