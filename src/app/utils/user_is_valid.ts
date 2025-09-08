import UserId from './user_id';
import UserEmail from './user_email';
import UserDpi from './user_dpi';
import UserName from './user_name';
import UserAge from './user_age';

export default class UserIsValid {
    private isValid: boolean;

    constructor(isValid: boolean) {
        this.isValid = isValid;
    }
    
    public validate(
        id: string, 
        email: string, 
        dpi: string, 
        name: string, 
        age: number
    ): undefined | boolean {

        const user_id = new UserId(id);
        const user_email = new UserEmail(email);
        const user_dpi = new UserDpi(dpi);
        const user_name = new UserName(name);
        const user_age = new UserAge(age);

        if (
        user_id.isValid() &&
        user_dpi.isValid() &&
        user_email.isValid() &&
        user_name.isValid() &&
        user_age.isValid()
        ) {
            this.isValid = true;
            return true;
        } else {
            this.isValid = false;
            return false;
        }
    }
}

const a = new UserIsValid(true);
const b = a.validate("1", "prueba@gmail.com", "1234567890123", "nombre", 25);
console.log(b);
