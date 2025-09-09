export class User {
  private id: string;
  private email: string;
  private dpi: string;
  private name: string;
  private age: number;
  private isValid: boolean;

  constructor(
    id: string,
    email: string,
    dpi: string,
    name: string,
    age: number,
    isValid: boolean
  ) {
    this.id = id;
    this.email = email;
    this.dpi = dpi;
    this.name = name;
    this.age = age;
    this.isValid = isValid;
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
