export class User {
  constructor(
    id_user: number,
    firstname: string,
    lastname: string,
    email: string,
    private password: string,
    admin: number | null,
    adimn: number | null
  ) {}

  get _password(){

    if(!this){

    }

    return this.password;
  }
}
