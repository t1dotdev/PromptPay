import { Elysia, redirect, t } from "elysia";
import { getPromptPay } from "./promptpay";
import html from "@elysiajs/html";
import Home from "./pages/home";

const app = new Elysia()
  .use(html())
  .get("/", () => {
    return Home();
  })
  .get(
    "/generate",
    async ({ query }) => {
      return redirect(`/${query.phone}/${query.amount}`);
      // return await getPromptPay(query.phone, query.amount);
    },
    {
      query: t.Object({
        phone: t.String(),
        amount: t.Optional(t.Number()),
      }),
    },
  )
  .get(
    "/:phone?/:amount?",
    async ({ params }) => {
      return await getPromptPay(params.phone, params.amount);
    },
    {
      params: t.Object({
        phone: t.String(),
        amount: t.Optional(t.Number()),
      }),
    },
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
