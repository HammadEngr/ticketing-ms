import type { ValidationError } from "express-validator";
import { CustomErrors } from "./custom-errors.js";

export class RequestValidationError extends CustomErrors{
    statusCode = 400
    constructor(public errors: ValidationError[]){
        super("Invalid request parameters")
        // only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors(){
        return this.errors.map(err=>{
            if (err.type === "field"){
                return {message: err.msg, field:err.path}
            }
            return {message: err.msg}
        })

    }
}