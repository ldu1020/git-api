import { Octokit } from "octokit";
import { string } from "yup";

class GitHubApi {
  public api: InstanceType<typeof Octokit>;
  public owner: string = "ldu1020";

  constructor(token: string) {
    this.api = new Octokit({
      auth: token,
    });
  }

  async getRepoComments(repo: string) {
    return this.api.request("GET /repos/{owner}/{repo}/comments", {
      owner: this.owner,
      repo,
    });
  }

  async getSource(param: { repo: string; path: string }) {
    return await this.api.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: this.owner,
      mediaType: {
        format: "row",
      },
      ...param,
    });
  }
}

export default GitHubApi;
