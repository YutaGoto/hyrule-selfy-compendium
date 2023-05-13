import { Job, Pipeline } from "https://deno.land/x/cicada@v0.1.32/lib.ts";

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
    },
    {
      name: "Lint",
      run: "pnpm run lint",
    },
  ],
});

export default new Pipeline([job]);
