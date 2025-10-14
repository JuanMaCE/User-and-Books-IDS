export default class UserDPI {
    private value: string;

    constructor(value: string) {
        const validate = this.isValid(value);
        if (validate) {
            this.value = value;
        } else {
            throw new Error('DPI is not valid');
        }

    }

    
    private isValid(dpi: string): boolean {
        try {        
            const number = parseInt(dpi, 10);
            return dpi.length === 13 && !isNaN(number);
        } catch (error) {
            return false;
        }
    }

}