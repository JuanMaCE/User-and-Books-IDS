export default class UserName {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    private isValidName(name: string): boolean {
        return name.length > 3 && typeof name === 'string';
    }

    public get value(): string {
        return this._name;
    }

    public isValid(): boolean {
        return this.isValidName(this._name);
    }
}