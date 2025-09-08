export default class UserAge {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    private isValidAge(age: number): boolean {
        return age > 0 && typeof age === 'number';
    }

    public get value(): number {
        return this._age;
    }

    public isValid(): boolean {
        return this.isValidAge(this._age);
    }
}