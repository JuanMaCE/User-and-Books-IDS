import UserDto from "./user-dto";
import NotificationSender from "./notification-sender";

export default class EmailNotificationSender implements NotificationSender {
    private client =  "correodeempresa@gmail.com"; 

    async send(user: UserDto){
        try{
            console.log("Enviando correo a " + user.email);            
        }catch{
            throw new Error("Failed to save email");
        } 
    }
}   