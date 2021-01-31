import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICreateUserRequestSchema } from '../models/register.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) { }

  registerUser(payload: ICreateUserRequestSchema): Observable<any> {
    const endpointURL = `${environment.apiUrl}/api/v1/users`;
    return this.http.post(endpointURL, payload);
  }
}
