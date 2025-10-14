import UserDto from "./user-dto";
import NotificationSender from "./notification-sender";


export default class WhatsappNotificationSender implements NotificationSender {
    private client = "wahtsappnumber";

    async send(user: UserDto){
        try{
            console.log("Enviando correo a " + user.email);            
        }catch{
            throw new Error("Failed to save email");
        } 
    }

}