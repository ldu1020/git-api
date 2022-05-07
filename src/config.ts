import "dotenv/config";

function requireEnv(key: string, defaultValue?: string) {
  return process.env[key];
}

const CONFIG = {
  TOKEN: requireEnv("TOKEN"),
};

export default CONFIG;
