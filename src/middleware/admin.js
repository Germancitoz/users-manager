export default (request, response, next) => {
  const isAdmin = request.user.admin;
  if (!isAdmin) {
    return response
      .status(401)
      .json({ error: "You are not allowed to do this" });
  }
  next();
};
