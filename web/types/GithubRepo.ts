export default interface GithubRepo {
  name: string;
  url: string | null;
  private: boolean;
  description: string | null;
  licenseName?: string | null;
  stars?: number | null;
  watchers?: number | null;
  forks?: number | null;
}
