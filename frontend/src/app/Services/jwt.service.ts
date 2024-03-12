import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { User } from '../Models/User';
import { UserJwtPayload } from '../Models/UserJwtPayload';
import { UserRole } from '../Models/UserRole';

@Injectable({
        providedIn: 'root'
})
export class JwtService {

        constructor() { }

        public decodePayload<T extends JwtPayload>(token: string): T | null {
                try {
                        return jwtDecode<T>(token);
                } catch (error: any) {
                        return null;
                }
        }

        public getUserFromJwtToken(token: string): User | null {
                let payload = this.decodePayload<UserJwtPayload>(token);

                if (payload != null) {
                        let newUser = new User();
                        newUser.firstName = payload.firstName;
                        newUser.lastName = payload.lastName;
                        newUser.email = payload.email;
                        newUser.role = UserRole[payload.role as keyof typeof UserRole];

                        return newUser;
                } else {
                        return null
                }
        }
}
