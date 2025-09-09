export default class UserName {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(name: string) {
        if(name.length < 3 && typeof name !== 'string'){
            throw new Error("Formato de nombre no valido");
        }
    }
}