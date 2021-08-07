import { graphql } from "graphql";
import { createSchema } from "~/util/createSchema";

export async function gqlCall({
  source,
  variableValues,
}: {
  source: string;
  variableValues: any;
}) {
  return graphql({
    schema: await createSchema(),
    source,
    variableValues,
  });
}
