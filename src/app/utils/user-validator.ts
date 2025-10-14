import UserRepository from "./user-repository"
import NotificacionSender from "./notification-sender"

export default class UserValidator {
    repository: UserRepository
    selector: NotificacionSender

    constructor(repository: UserRepository, selector: NotificacionSender) {
        this.repository = repository
        this.selector = selector
    }

    public async run(id: string) {
        const user = this.repository.find(id)

    }
}