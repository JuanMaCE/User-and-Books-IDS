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
    id: UserId,
    email: UserEmail,
    dpi: UserDpi,
    name: UserName,
    age: UserAge,
    isValid: UserIsValid
  ) {
    this.id = id
    this.email = email
    this.dpi = dpi
    this.name = name
    this.age = age
    this.isValid = isValid
  }

  

  public static create(params: {
    id: string;
    email: string;
    dpi: string;
    name: string;
    age: string;
    isValid: string;
  }): User {
    return new User(
      new UserId(params.id),
      new UserEmail(params.email),
      new UserDpi(params.dpi),
      new UserName(params.name),
      new UserAge(params.age),
      new UserIsValid(params.isValid)
    );
  }

  public static fromPrimitives(params: {
    id: string;
    email: string;
    dpi: string;
    name: string;
    age: string;
    isValid: string;
  }): User {
    return new User(
      new UserId(params.id),
      new UserEmail(params.email),
      new UserDpi(params.dpi),
      new UserName(params.name),
      new UserAge(params.age),
      new UserIsValid(params.isValid)
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
