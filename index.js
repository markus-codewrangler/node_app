import "dotenv/config";
import Scrivito from "scrivito";

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
});

Scrivito.load(() => Scrivito.Obj.onAllSites().all().count()).then((count) =>
  console.log("count", count)
);
