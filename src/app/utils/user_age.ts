export default class UserAge {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(age: string) {
        if (parseInt(age) < 18) {
            throw new Error("Edad No Valida");
        }
    }
}