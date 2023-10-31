## Running a local Node.js app against [scrivito_js](https://github.com/infopark/scrivito_js) / Testing your local Scrivito SDK in a Node environment

In the folder `scrivito_js/js/` run:

- `npm install`
- `npm run start:sdk:node:watch`

This will start Scrivito SDK in watch mode.

In the folder **above** `scrivito_js/` run:

- `git clone https://github.com/markus-codewrangler/node_example_app.git`
- `cd node_example_app`
- `git checkout onDevSdk`
- `npm install`
- copy `.env.example` to `.env` and set `SCRIVITO_TENANT` to your Scrivito tenant ID
- `npm start`

This will start the _onDevSdk_ branch of the Node Example App.

---

For running Node Example App against a Scrivito NPM package release, see [main branch](https://github.com/markus-codewrangler/node_example_app).
