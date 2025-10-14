export default class UserEmail {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    //falta arreglarlo :) roger no puede
    private isValid(email: string) {
        if (!email.includes('@') || !email.includes('.')) {
            throw new Error("Formato de Email No Valido");
        }
    }
}