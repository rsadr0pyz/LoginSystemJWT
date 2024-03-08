import { JwtPayload } from "jwt-decode";
import { LoggedUserDto } from "./LoggedUserDto";


export interface JwtPayloadDto extends JwtPayload, LoggedUserDto{}