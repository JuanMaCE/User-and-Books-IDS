export default class UserEmail {
    private value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(email: string): boolean {
        return email.includes('@') || email.includes('.')
    }
}