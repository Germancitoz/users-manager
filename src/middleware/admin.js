export default (request, response, next) => {
    const isAdmin = request.user.admin;
    console.log(request.user)
    console.log(isAdmin)
    if (!isAdmin) {
        return response.status(401).json({ error: "You are not allowed to do this" });
    }
    next();
};