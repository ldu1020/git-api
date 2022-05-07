async function getRepoComments() {
    const data = await octokit.request("GET /repos/{owner}/{repo}/comments", {
        owner: "ldu1020",
        repo: "practice-nest",
    });
}
//# sourceMappingURL=getComments.js.map