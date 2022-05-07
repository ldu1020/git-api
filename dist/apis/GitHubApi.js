"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const octokit_1 = require("octokit");
class GitHubApi {
    constructor(token) {
        this.owner = "ldu1020";
        this.api = new octokit_1.Octokit({
            auth: token,
        });
    }
    async getRepoComments(repo) {
        return this.api.request("GET /repos/{owner}/{repo}/comments", {
            owner: this.owner,
            repo,
        });
    }
    async getSource(param) {
        return await this.api.request("GET /repos/{owner}/{repo}/contents/{path}", Object.assign({ owner: this.owner, mediaType: {
                format: "row",
            } }, param));
    }
}
exports.default = GitHubApi;
//# sourceMappingURL=GitHubApi.js.map