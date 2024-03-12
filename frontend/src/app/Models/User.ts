import { UserRole } from "./UserRole";

export class User{
        firstName: string = "";
        lastName: string = "";
        email: string = ""
        role: UserRole = UserRole.USER
}