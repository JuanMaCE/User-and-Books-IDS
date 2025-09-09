export default class UserId {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(id: string): boolean {
        return typeof id === 'string' && id.length > 0;
    }
}