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
  this.save(template);
  console.log(template); //Only for (server console)
};

export default Log;
