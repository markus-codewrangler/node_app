import "dotenv/config";
import Scrivito from "scrivito";

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  apiKey: {
    clientId: process.env.IAM_CLIENT_ID,
    clientSecret: process.env.IAM_CLIENT_SECRET,
  },
});

const res = await Scrivito.load(() =>
  Scrivito.unstable_JrRestApi.get("iam/userinfo")
);

console.log(res);
