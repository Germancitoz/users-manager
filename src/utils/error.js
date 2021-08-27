const errorUtil = {};

errorUtil.send = (response, errorCode, errorMessage) => {
    response.status(errorCode).send({ message: errorMessage, status: errorCode });
};


export { errorUtil };