import UserDto from "./user-dto";

export default interface UserRepository {
    send(user: UserDto): Promise <void>;
}