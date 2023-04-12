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
];

export default handlers;
