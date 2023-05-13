import { Job, Pipeline } from "https://deno.land/x/cicada@v0.1.50/mod.ts";

const job = new Job({
  name: "Linter",
  image: "node:20-alpine",
  steps: [
    {
      name: "install pnpm",
      run: "npm i -g pnpm",
    },
    {
      name: "install dependencies",
      run: "pnpm i",
      cacheDirectories: ["node_modules"],
    },
    {
      name: "Lint",
      run: "pnpm run lint",
      cacheDirectories: ["node_modules"],
    },
  ],
});

export default new Pipeline([job], {
  on: {
    pullRequest: "all",
    push: ["main"],
  },
});
