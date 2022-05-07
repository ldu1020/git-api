"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
function requireEnv(key, defaultValue) {
    return process.env[key];
}
const CONFIG = {
    TOKEN: requireEnv("TOKEN"),
};
exports.default = CONFIG;
//# sourceMappingURL=config.js.map