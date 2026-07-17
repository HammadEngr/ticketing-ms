import { CustomErrors } from "./custom-errors.js";

export class DatabaseConnectionErrorr extends CustomErrors{
    statusCode = 500
    reason = "Error connecting to database";

    constructor(){
        super("Invalid db connection")
        // only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionErrorr.prototype)
    }

    serializeErrors(){
        return [
            {
                message: this.reason
            }
        ]
    }
}