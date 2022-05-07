import { Octokit, App } from "octokit";
import CONFIG from "./config";
import fs from "fs";
import path from "path";
import GitHubApi from "./apis/GitHubApi";

const github = new GitHubApi(CONFIG.TOKEN);

async function main() {
  const { data } = await github.getSource({
    repo: "practice-docker",
    path: "app/package.json",
  });

  const decoded = Buffer.from((data as any).content, "base64").toString("utf8");

  fs.writeFileSync(
    path.resolve(process.env.PWD, "test.json"),
    decoded,
    "utf-8"
  );
}

main();
