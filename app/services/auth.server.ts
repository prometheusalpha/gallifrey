import { GoogleProfile, GoogleStrategy } from "remix-auth-google";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./storage.server";

export let authenticator = new Authenticator<GoogleProfile>(sessionStorage);

let googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    callbackURL: "http://localhost:3000/callback",
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    return profile;
  }
);

authenticator.use(googleStrategy);
