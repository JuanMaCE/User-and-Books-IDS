export default class UserPassword {
    private password: string;

    constructor(password: string) {
        if (this.isValid(password)) {
            this.password = password;
        } else {
            throw new Error('La contraseña no es valida');
        }
    }

    private isValid(password: string): boolean {
        const minLength = password.length >= 8;
        const hasLetter = /[A-Za-z]/.test(password);
        const hasNumber = /\d/.test(password);

        return minLength && hasLetter && hasNumber;
    }
}
