export default class UserAge {
    private value: number;

    constructor(value: number) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(age: number): boolean {
        return age > 0 && typeof age === 'number';
    }
}