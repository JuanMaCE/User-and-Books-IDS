export default class UserId {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(id: string) {
        if(id.length < 1 && typeof id !== 'string'){
            throw new Error("ID invalido");
        }
    }
}