import userDto from './user-dto';
import UserEmail from './user_email';
import UserDpi from './user_dpi';
import UserName from './user_name';
import UserAge from './user_age';
import UserIsActivated from './user_is_activated';
import UserPassword from './user_password';
import UserDto from './user-dto';


export class User {
  private email: UserEmail;
  private dpi: UserDpi;
  private name: UserName;
  private age: UserAge;
  private password: UserPassword;
  private isactivated: UserIsActivated;

  constructor(
    email: UserEmail,
    dpi: UserDpi,
    name: UserName,
    age: UserAge,
    password: UserPassword,
    isactivated: UserIsActivated
  ) {
    this.email = email
    this.dpi = dpi
    this.name = name
    this.age = age
    this.password = password
    this.isactivated = isactivated
  }



  public static create(params: {
    email: string;
    dpi: string;
    name: string;
    age: string;
    password: string;
    isactivated: string;
  }): User {
    return new User(
      new UserEmail(params.email),
      new UserDpi(params.dpi),
      new UserName(params.name),
      new UserAge(params.age),
      new UserPassword(params.password),
      new UserIsActivated(params.isactivated)
    );
  }

  public static fromPrimitives(params: {
    email: string;
    dpi: string;
    name: string;
    age: string;
    password: string;
    isactivated: string;
  }): User {
    return new User(
      new UserEmail(params.email),
      new UserDpi(params.dpi),
      new UserName(params.name),
      new UserAge(params.age),
      new UserPassword(params.password),
      new UserIsActivated(params.isactivated)
    );
  }

  public toPrimitives(): UserDto {
    const NewDto = new userDto(this);
    return NewDto;
  }

}
