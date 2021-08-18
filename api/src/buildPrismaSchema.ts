import { buildSchema } from "decotix";
import { applySignature } from "decotix/dist/lib/signatures";
import { join } from "path";
import { Int } from "type-graphql";

applySignature(Int, "Int", { name: "Int" });

buildSchema({
  input: [
    join(__dirname, "./enums/index.*"),
    join(__dirname, "./models/index.*"),
  ],
  emitTo: join(__dirname, "../prisma/schema.prisma"),
  baseSchemas: [join(__dirname, "../base.prisma")],
}).then(() => process.exit(0));
