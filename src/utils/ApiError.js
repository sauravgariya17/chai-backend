// Custom error class for handling API errors
// It extends JavaScript's built-in Error class
class ApiError extends Error{
     // Constructor receives information about the error
    constructor(
        statusCode,         // HTTP status code (400, 404, 500, etc.)
        message= "Something went wrong",        // Error message
        errors = [],          // Additional error details
        stack= ""           // Optional stack trace
    ){
        super(message)           // Call the parent Error class with the error message
        this.statusCode = statusCode   //// Store the HTTP status code
        this.data = null            // No data is returned when an error occurs
        this.message = message      // Store the error message
        this.success= false;        // Indicates that the API request was not successful
        this.errors = errors          // Store additional error details



        // If a stack trace is provided, use it
        if(stack){
            this.stack = stack
        }
        // Otherwise, automatically create a stack trace
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
export {ApiError}   // Export ApiError so it can be used in other files