import { buildSchema } from "decotix";
import "decotix/dist/mixins/typegraphql";
import { join } from "path";

buildSchema({
  input: [
    join(__dirname, "./enums/index.*"),
    join(__dirname, "./models/index.*"),
  ],
  emitTo: join(__dirname, "../prisma/schema.prisma"),
  baseSchemas: [join(__dirname, "../base.prisma")],
}).then(() => process.exit(0));
