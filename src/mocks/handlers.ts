import { rest } from "msw";
import { UserData } from "../types/types";

const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.post(`${apiUrl}/users/sign-up`, async (req, res, ctx) => {
    const user = await req.json<UserData>();
    const { username } = user;
    if (username === "Bertin Ousbourne") {
      return res(
        ctx.status(409),
        ctx.json({ error: "This username is already registered" })
      );
    }
    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${apiUrl}/users/login`, async (req, res, ctx) => {
    const { password } = await req.json<UserData>();

    if (password === "3333") {
      return res(ctx.status(401), ctx.json({ error: "Credenciales erroneas" }));
    }
    return res(ctx.status(200), ctx.json({ token: "tokenomics" }));
  }),
];

export default handlers;
