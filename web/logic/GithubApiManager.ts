import { Octokit } from "octokit";
import GithubRepo from "~/types/GithubRepo";

export default class GithubApiManager {
  getUserRepos = async (githubUserName: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    let repos: GithubRepo[] = [];

    const result = await octokit.request("/user/repos", {
      per_page: 100,
    });

    if (result) {
      const data = result.data;

      data.forEach((obj: any) => {
        let license = null;
        if (obj.license != null) {
          license = obj.license.name;
        }

        if (obj.html_url.includes(`https://github.com/${githubUserName}`)) {
          repos.push({
            name: obj.name,
            url: obj.html_url,
            private: obj.private,
            description: obj.description,
            licenseName: license,
            stars: obj.stargazers_count,
            watchers: obj.watchers_count,
            forks: obj.forks_count,
          });
        }
      });
    }
    return repos;
  };

  createRepo = async (details: GithubRepo, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("POST /user/repos", {
      name: details.name,
      description: details.description,
      private: details.private,
    });
  };

  deleteRepo = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("DELETE /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
  };

  changeRepoVisibility = async (
    visible: boolean,
    owner: string,
    repo: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PATCH /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
      private: !visible!,
    });
  };

  getIssues = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: owner,
      repo: repo,
    });
  };

  createIssue = async (
    owner: string,
    repo: string,
    title: string,
    token: string,
    body: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("POST /repos/{owner}/{repo}/issues", {
      owner: owner,
      repo: repo,
      title: title,
      body: body,
    });
  };

  deleteIssue = async (
    owner: string,
    repo: string,
    issue_number: number,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
      owner: owner,
      repo: repo,
      issue_number: issue_number,
    });
  };

  updateIssue = async (
    owner: string,
    repo: string,
    issue_number: number,
    token: string,
    title: string,
    body: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PATCH /repos/{owner}/{repo}/issues/{issue_number}", {
      owner: owner,
      repo: repo,
      title: title,
      body: body,
      issue_number: issue_number,
    });
  };

  getRepo = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
  };

  getPullRequests = async (
    owner: string,
    repo: string,
    head: string,
    base: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("POST /repos/{owner}/{repo}/pulls", {
      owner: owner,
      repo: repo,
      head: head,
      base: base,
    });
  };

  getPullRequest = async (
    pull_number: number,
    owner: string,
    repo: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
      owner: owner,
      repo: repo,
      pull_number: pull_number,
    });
  };

  createPullRequest = async (
    owner: string,
    repo: string,
    head: string,
    base: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("POST /repos/{owner}/{repo}/pulls", {
      owner: owner,
      repo: repo,
      head: head,
      base: base,
    });
  };

  updatePullRequest = async (
    pull_number: number,
    owner: string,
    repo: string,
    title: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PATCH /repos/{owner}/{repo}/pulls/{pull_number}", {
      owner: owner,
      repo: repo,
      pull_number: pull_number,
      title: title,
    });
  };

  mergePullRequest = async (
    pull_number: number,
    owner: string,
    repo: string,
    commit_title: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request(
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge",
      {
        owner: owner,
        repo: repo,
        pull_number: pull_number,
        commit_title: commit_title,
      }
    );
  };

  listPullRequestCommits = async (
    owner: string,
    repo: string,
    pull_number: number,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request(
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits",
      {
        owner: owner,
        repo: repo,
        pull_number: pull_number,
      }
    );
  };

  listPullRequestFiles = async (
    owner: string,
    repo: string,
    pull_number: number,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request(
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/files",
      {
        owner: owner,
        repo: repo,
        pull_number: pull_number,
      }
    );
  };

  getPullRequestStatus = async (
    owner: string,
    repo: string,
    pull_number: number,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request(
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/merge",
      {
        owner: owner,
        repo: repo,
        pull_number: pull_number,
      }
    );
  };

  createCommit = async (
    owner: string,
    repo: string,
    message: string,
    tree: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("POST /repos/{owner}/{repo}/git/commits", {
      owner: owner,
      repo: repo,
      message: message,
      tree: tree,
    });
  };

  getCommit = async (
    owner: string,
    repo: string,
    commit_sha: string,
    token: string
  ) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request(
      "GET /repos/{owner}/{repo}/git/commits/{commit_sha}",
      {
        owner: owner,
        repo: repo,
        commit_sha: commit_sha,
      }
    );
  };

  listCommits = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: owner,
      repo: repo,
    });
  };

  getAuthenticatedUserInfo = async (token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /user");
  };

  updateUser = async (name: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PATCH /user", {
      name: name,
    });
  };

  getUserInfo = async (username: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /users/{username}", {
      username: username,
    });
  };

  getBlockedUsers = async (token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /user/blocks");
  };

  blockUser = async (username: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /user/blocks/{username}", {
      username: username,
    });
  };

  unblockUser = async (username: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PUT /user/blocks/{username}", {
      username: username,
    });
  };

  getNotifications = async (token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /notifications");
  };

  markNotificationsAsRead = async (last_read_at: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PUT /notifications", {
      last_read_at: last_read_at,
    });
  };

  listStargazers = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}/stargazers", {
      owner: owner,
      repo: repo,
    });
  };

  listStarredRepositories = async (token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /user/starred");
  };

  checkRepoStarred = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /user/starred/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
  };

  starRepository = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("DELETE /user/starred/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
  };

  unstarRepository = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("DELETE /user/starred/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
  };

  listWatchers = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("GET /repos/{owner}/{repo}/subscribers", {
      owner: owner,
      repo: repo,
    });
  };

  watchRepository = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("PUT /repos/{owner}/{repo}/subscription", {
      owner: owner,
      repo: repo,
      subscribed: true,
    });
  };

  unwatchRepository = async (owner: string, repo: string, token: string) => {
    const octokit = new Octokit({
      auth: token,
    });

    await octokit.request("DELETE /repos/{owner}/{repo}/subscription", {
      owner: owner,
      repo: repo,
    });
  };
}
