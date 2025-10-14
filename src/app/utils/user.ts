import userDto from './user-dto';
import UserEmail from './user_email';
import UserDpi from './user_dpi';
import UserName from './user_name';
import UserAge from './user_age';
import UserIsValid from './user_is_valid';
import UserDto from './user-dto';


export class User {
  private email: UserEmail;
  private dpi: UserDpi;
  private name: UserName;
  private age: UserAge;
  private isValid: UserIsValid;

  constructor(
    email: UserEmail,
    dpi: UserDpi,
    name: UserName,
    age: UserAge,
    isValid: UserIsValid
  ) {
    this.email = email
    this.dpi = dpi
    this.name = name
    this.age = age
    this.isValid = isValid
  }



  public static create(params: {
    email: string;
    dpi: string;
    name: string;
    age: string;
    isValid: string;
  }): User {
    return new User(
      new UserEmail(params.email),
      new UserDpi(params.dpi),
      new UserName(params.name),
      new UserAge(params.age),
      new UserIsValid(params.isValid)
    );
  }

  public static fromPrimitives(params: {
    email: string;
    dpi: string;
    name: string;
    age: string;
    isValid: string;
  }): User {
    return new User(
      new UserEmail(params.email),
      new UserDpi(params.dpi),
      new UserName(params.name),
      new UserAge(params.age),
      new UserIsValid(params.isValid)
    );
  }

  public toPrimitives(): UserDto {
    const NewDto = new userDto(this);
    return NewDto;
  }

}
