import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }
  
  enroll(user: User) {
    return this.http.post(this.url, user);
  }
}
