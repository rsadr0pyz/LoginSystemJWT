import { JwtPayload } from "jwt-decode";
import { User } from "./User";


export class JwtPayloadUser extends User implements JwtPayload{
        iss?: string;
        sub?: string;
        aud?: string[] | string;
        exp?: number;
        nbf?: number;
        iat?: number;
        jti?: string;
}