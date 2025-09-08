export default class UserId {
    private _id: string;

    constructor(id: string) {
        this._id = id;
    }

    private isValidId(id: string): boolean {
        return typeof id === 'string' && id.length > 0;
    }

    public get value(): string {
        return this._id;
    }

    public isValid(): boolean {
        return this.isValidId(this._id);
    }
}