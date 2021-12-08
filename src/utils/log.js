import fs from "fs";
import path from "path";

const Log = {
  save: (message) => {
    fs.writeFile(
      path.join(path.resolve(), "/logs/file.log"),
      message,
      () => {}
    );
  },

  send: (type, message) => {
    const template = `[${type}] : ${message}`;
    Log.save(template);
    console.log(template); //Only for (server console)
  },
};
export default Log;
