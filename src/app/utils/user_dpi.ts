export default class UserDPI {
    private _dpi: string;

    constructor(dpi: string) {
        this._dpi = dpi;
    }

    private isValidDpi(dpi: string): boolean {
        return typeof dpi === 'string' && dpi.length === 13;
    }

    public get value(): string {
        return this._dpi;
    }

    public isValid(): boolean {
        return this.isValidDpi(this._dpi);
    }
}