export default {
  app: {
    clientHost:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_HOST
        : "http://localhost:5173",
    port: process.env.POST || 3001,
    apiUrl: process.env.API_URL || "/api",
  },
  db: {
    url:
      process.env.DB_URL ||
      "mongodb+srv://someperson:somepassword@cluster0.vljookl.mongodb.net/auth-lecture-fswdoct-t3?retryWrites=true&w=majority",
  },
  constants: {
    email_regex:
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  },
  auth: {
    hashRounds: Number(process.env.HASH_ROUNDS) || 10,
    accessTokenExp: "1h",
    refreshTokenExp: "30d",
    accessTokenSecret:
      process.env.ACCESS_TOKEN_SECRET || "totallysecretpassword",
    refreshTokenSecret:
      process.env.REFRESH_TOKEN_SECRET ||
      "totallysecretpassword2electricboogaloo",
    cookieOptions: {
      sameSite: "lax",
      domain:
        process.env.NODE_ENV !== "production"
          ? "localhost"
          : process.env.DOMAIN,
      secure: process.env.NODE_ENV === "production",
      signed: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30 * 1000,
    },
    cookieSecret:
      process.env.COOKIE_SECRET || "whostolethecookiesfromthecookiejar",
    cookieName: process.env.COOKIE_NAME || "myapprt",
  },
};
