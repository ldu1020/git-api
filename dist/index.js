"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const GitHubApi_1 = __importDefault(require("./apis/GitHubApi"));
const github = new GitHubApi_1.default(config_1.default.TOKEN);
async function main() {
    const { data } = await github.getSource({
        repo: "practice-docker",
        path: "app/package.json",
    });
    const decoded = Buffer.from(data.content, "base64").toString("utf8");
    fs_1.default.writeFileSync(path_1.default.resolve(process.env.PWD, "test.json"), decoded, "utf-8");
}
main();
//# sourceMappingURL=index.js.map