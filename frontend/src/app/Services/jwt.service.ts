import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService{

  constructor() { }

  public decodePayload<T extends JwtPayload>(token: string): T | null{
    try{
      return jwtDecode<T>(token);
    }catch(error: any){
      return null;
    }
  }
}
