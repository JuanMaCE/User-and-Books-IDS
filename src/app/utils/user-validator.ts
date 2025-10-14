import UserRepository from "./user-repository"
import NotificacionSender from "./notification-sender"
import UserFinder from "./user-finder"
import { use } from "react"
import { User } from "./user";


export default class UserValidator {
    repository: UserFinder
    selector: NotificacionSender

    constructor(repository: UserFinder, selector: NotificacionSender) {
        this.repository = repository
        this.selector = selector
    }

    public async run(id: string) {
        const user = await this.repository.run(id); // user es User
        console.log(user.isactivated); // funciona perfectamente

        const destinatario = "example";
    }
}