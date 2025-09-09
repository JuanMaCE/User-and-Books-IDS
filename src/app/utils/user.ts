import userDto from './user-dto';
import UserId from './user_id';
import UserEmail from './user_email';
import UserDpi from './user_dpi';
import UserName from './user_name';
import UserAge from './user_age';
import UserIsValid from './user_is_valid'; 
import UserDto from './user-dto';


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

  public toPrimitives(): UserDto {
    const NewDto = new userDto(this);
    return NewDto;
  }

  public get_Id(): string {
    return this.id['value'];
  }

  public get_Email(): string {
    return this.email['value'];
  }

  public get_Dpi(): string {
    return this.dpi['value'];
  }

  public get_Name(): string {
    return this.name['value'];
  }

  public get_Age(): number {
    return this.age['value'];
  }

  public get_IsValid(): boolean {
    return this.isValid['value'];
  } 

}
