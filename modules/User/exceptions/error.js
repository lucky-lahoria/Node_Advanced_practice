'use strict'

class ErrorHandler extends Error{

    constructor (stusCode, message){
        super();
        this.statusCode =  statusCode || 500;
        this.message = message;
    }
}


const handleError = (err, res)=>{
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send({
        message: 'Internal Server Error',
        error: err.message,
        success: false,
        code: err.statusCode
    });
};


const errorCommon = async (error)=>{
    if(error && error.original && error.original.Error){
        error.status = 412
        error.message = error.original.Error;
    }
    else if(error && error.errors && error.errors[0].message){
        error.status = 412,
        error.message = error.message
    }
    else if(error && error.message){
        error.status = 412,
        error.message = error.message;
    }
    else{
        error = {message:error}
    }
    error.status = (error.status ? error.status : 500)
    return error;
}

module.exports = {
    ErrorHandler,
    handleError,
    errorCommon
}