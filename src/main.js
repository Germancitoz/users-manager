"use strict";

import { app } from "./server/index.js";
import mongoose from "mongoose";

import config from "./config/index.js";
import Log from "./utils/log.js";

const runServer = async () => {
    try {
        Log.send("CURRENT", "Connecting to MONGODB server");
        await mongoose.connect(config.database.URL, { useNewUrlParser: true, useUnifiedTopology: true });
        Log.send("SUCCESS", "Connected to MONGODB server");

        app.listen(config.server.PORT);
        Log.send("SUCCESS", `Server listening on port ${config.server.PORT}`);

        runEvents();
    } catch (error) {
        Log.send("ERROR", error.message.split(0, 1));
    }
};

const runEvents = () => {
    app.on("close", runServer);
    mongoose.connection.on("close", runServer);
};

runServer();
