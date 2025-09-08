export default class UserEmail {
    private _email: string;

    constructor(email: string) {
        this._email = email;
    }

    private isValidEmail(email: string): boolean {
        return email.includes('@') || email.includes('.')
    }

    public get value(): string {
        return this._email;
    }

    public isValid(): boolean {
        return this.isValidEmail(this._email);
    }
}