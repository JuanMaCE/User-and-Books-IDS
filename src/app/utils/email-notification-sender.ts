import NotificacionSender from "./notification-sender";
import { User } from "./user";
import UserDto from "./user-dto";
import UserEmail from "./user_email";

class EmailNotificationSender implements NotificacionSender {
    private client = "correodeempresa@gmail.com";

    constructor() {
    }

    public async send(user: UserDto) {

    }
}