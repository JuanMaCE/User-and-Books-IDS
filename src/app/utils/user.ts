import userDto from './user-dto';
import UserId from './user_id';
import UserEmail from './user_email';
import UserDpi from './user_dpi';
import UserName from './user_name';
import UserAge from './user_age';
import UserIsValid from './user_is_valid'; 


export class User {
  private id: UserId;
  private email: UserEmail;
  private dpi: UserDpi;
  private name: UserName;
  private age: UserAge;
  private isValid: UserIsValid;

  constructor(
    id: string,
    email: string,
    dpi: string,
    name: string,
    age: number,
    isValid: boolean
  ) {
    this.id = new UserId(id);
    this.email = new UserEmail(email);
    this.dpi = new UserDpi(dpi);
    this.name = new UserName(name);
    this.age = new UserAge(age);
    this.isValid = new UserIsValid(isValid);
  }

  

  public static create(params: {
    id: string;
    email: string;
    dpi: string;
    name: string;
    age: number;
    isValid: boolean;
  }): User {
    return new User(
      params.id,
      params.email,
      params.dpi,
      params.name,
      params.age,
      params.isValid
    );
  }

  public static fromPrimitives(params: {
    id: string;
    email: string;
    dpi: string;
    name: string;
    age: number;
    isValid: boolean;
  }): User {
    return new User(
      params.id,
      params.email,
      params.dpi,
      params.name,
      params.age,
      params.isValid
    );
  }

  public toPrimitives(): object {

    return {
      id: this.id,
      email: this.email,
      dpi: this.dpi,
      name: this.name,
      age: this.age,
      isValid: this.isValid,
    };
  }
}
