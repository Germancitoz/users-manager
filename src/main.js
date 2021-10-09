import app from "./server/index.js";
import mongoose from "mongoose";

import { serverConfig, databaseConfig } from "./config/index.js";
import Log from "./utils/log.js";

(async () => {
    try {
        Log.send("CURRENT", "Connecting to MONGODB server");
        await mongoose.connect(databaseConfig.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        Log.send("SUCCESS", "Connected to MONGODB server");

        app.listen(serverConfig.PORT);
        Log.send("SUCCESS", `Server listening on port ${serverConfig.PORT}`);
    } catch (error) {
        Log.send("ERROR", error.message.split(0, 1));
    }
})();
