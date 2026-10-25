import fs from "fs/promises";

import path from "path";
import { yarg } from "./plugins/args.plugin.js";
import { ServerApp } from "./presentation/server-app.js";

const main = async () => {
  const { b, l, s, d, n } = yarg;
  ServerApp.run({ base: b, limit: l, showTable: s, destination: d, name: n });
};
(async () => {
  await main();
})();
