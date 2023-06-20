export class BadRequest extends Error {
    cause?: any;
    statusCode: number;

    constructor(message?: string, cause?: any) {
        super();
        if (message) {
            this.message = message;
        } else {
            this.message = 'Bad Request';
        }
        this.cause = cause;
        this.statusCode = 405;
    }
}
