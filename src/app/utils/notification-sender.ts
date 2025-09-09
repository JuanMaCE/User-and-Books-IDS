import { User } from "./user";

export default interface UserRepository {
    save(user: User): Promise<void>;

    find(id: string): Promise<void>;
}