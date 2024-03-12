import { JwtPayload } from "jwt-decode";

export interface UserJwtPayload extends JwtPayload{
        firstName: string,
        lastName: string,
        email: string,
        role: string
}