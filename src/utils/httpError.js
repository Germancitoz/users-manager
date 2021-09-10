export default class HttpError {
    /**
     * Send a message to the console
     * @param  {object} response The client who sent the message
     * @param  {string} code Http code
     * @param  {string} message Http message response
     */
    static send(response, code, message) {
        response.status(code).json({ code, message });
    }
}
