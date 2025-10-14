import { User } from "./user";


export default class UserDto {
    public id: string;
    public email: string;
    public dpi: string;
    public name: string;
    public age: string; 
    public password: string;
    public isValid: string;

    constructor(data: User){
        this.id = data.get_Id();
        this.email = data.get_Email();
        this.dpi = data.get_Dpi()
        this.name = data.get_Name();    
        this.age = data.get_Age();
        this.password = data.get_Password();
        this.isValid = data.get_IsValid();
    }

}   
