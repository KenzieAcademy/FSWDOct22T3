export default {
  app: {
    port: process.env.POST || 3001,
    apiUrl: process.env.API_URL || "/api",
    hashRounds: Number(process.env.HASH_ROUNDS) || 10,
    accessTokenSecret:
      process.env.ACCESS_TOKEN_SECRET || "totallysecretpassword",
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
};
