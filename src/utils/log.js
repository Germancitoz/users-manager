import fs from "fs";
import path from "path";

/**
 * Save a message in file.log
 * @param  {string} message String to display
 */
const save = (message) => {
  fs.writeFile(path.join(path.resolve(), "/logs/file.log"), message, () => {});
};

/**
 * Send a message to the console
 * @param  {string} type Type of message
 * @param  {string} message String to display
 */
const send = (type, message) => {
  const template = `[${type}] : ${message}`;
  save(template);
  console.log(template); //Only for (server console)
};

const Log = { save, send };
export default Log;
