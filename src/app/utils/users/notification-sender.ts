import UserDto from "./user-dto";

export default interface NotificacionSender {
    send(user: UserDto): Promise <void>;
}