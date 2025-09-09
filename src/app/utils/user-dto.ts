import { User } from "./user";


export default class UserDto {
    id: string;
    email: string;
    dpi: string;
    name: string;
    age: int; 
    isValid: bool;

    constructor(data: User){
        this.id = data['id'];
        this.email = data['email'];
        this.dpi = data['dpi'];
        this.name = data['name'];
        this.age = data['age'];
        this.isValid = data['isValid'];
    }

}