export default (request, response, next) => {
    response.status(404).json({ error: "Page not found" });
};
