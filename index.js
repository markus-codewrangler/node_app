import "dotenv/config";
import { configure, createRestApiClient } from "scrivito";

const tenant = process.env.SCRIVITO_TENANT;

configure({
  tenant: tenant,
  apiKey: {
    clientId: process.env.IAM_CLIENT_ID,
    clientSecret: process.env.IAM_CLIENT_SECRET,
  },
});

const jrRestApi = createRestApiClient("https://api.justrelate.com");

const userinfo = await jrRestApi.get(`iam/instances/${tenant}/userinfo`);
const accountId = userinfo.aud[1];

const [account, teams] = await Promise.all([
  jrRestApi.get(`iam/accounts/${accountId}`),
  jrRestApi.get(`iam/accounts/${accountId}/teams`),
]);

const teamNames = userinfo.team_ids.map((id) => teams.results.find((team) => team.id === id).name);

console.log({
  name: userinfo.name,
  email: userinfo.email,
  account_title: account.title,
  account_id: accountId,
  tenant_id: tenant,
  teams: teamNames,
});
