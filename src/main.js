import app from "./server/index.js";
import { connectDatabase } from "./services/database.js";
import Log from "./utils/log.js";

import { serverConfig } from "./config/index.js";

(async () => {
  try {
    await connectDatabase();

    app.listen(serverConfig.PORT);
    Log.send("SUCCESS", `Server listening on port ${serverConfig.PORT}`);
  } catch (error) {
    Log.send("ERROR", error.message.split(0, 1));
  }
})();
