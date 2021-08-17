import { buildSchema } from "decotix";
import { join } from "path";

buildSchema({
  input: [join(__dirname, "./enums/*.*"), join(__dirname, "./models/*.*")],
  emitTo: join(__dirname, "../prisma/schema.prisma"),
  baseSchemas: [join(__dirname, "../base.prisma")],
});
