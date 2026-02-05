import { Elysia, env } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
  .onAfterHandle(({ set }) => {
    set.headers["x-powered-by"] = "Elysia";
  })
  .use(staticPlugin({ assets: "./dist", prefix: "" }))
  .all("*", ({ status }) => status(451))
  .listen(3000);
