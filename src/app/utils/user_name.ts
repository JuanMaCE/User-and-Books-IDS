export default class UserName {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(name: string): boolean {
        return name.length > 3 && typeof name === 'string';
    }
}