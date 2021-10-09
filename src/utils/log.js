import fs from "fs";
import path from "path";

export default class Log {

    /**
     * Save a message in file.log
     * @param  {string} message String to display
    */
    static save(message) {
        fs.writeFile(path.join(path.resolve(), "/logs/file.log"), message, () => {});
    };

    /**
     * Send a message to the console
     * @param  {string} type Type of message
     * @param  {string} message String to display
    */
    static send(type, message) {
        const template = `[${type}] : ${message}`;
        this.save(template);
        console.log(template); //Only for (server console)
    };
};
