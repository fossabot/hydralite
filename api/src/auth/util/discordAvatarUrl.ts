/**
 * Gets the Discord avatar URL for the given user ID.
 */
export default function discordAvatarUrl(
  id: string,
  discrim: number,
  hash?: string,
  size = 512
): string {
  const ext = hash?.startsWith("a_") ? "gif" : "png";

  return `https://cdn.discordapp.com/${hash ? "" : "embed/"}avatars/${
    hash ? `${id}/${hash}` : Number(discrim) % 5
  }.${hash ? ext : "png"}?size=${size}`;
}
