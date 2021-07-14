export function connectIdArray(arr: string[] | undefined) {
  return { connect: (arr || []).map((id) => ({ id })) };
}
