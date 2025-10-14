import { User } from "./user";
import RepositorySelector from "./repository-selector";
import PostgresRepositorySelector from "./postgres-repository-selector";

export default interface UserRepository {
    save(user: User): Promise<void>;

    find(id: string): Promise<User>;
}