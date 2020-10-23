import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {

    // url: string = 'http://localhost:5000'
    url: string = 'https://etiqa-freelancer-app.herokuapp.com'
    constructor(
        private http: HttpClient
    ) { }

    getFreelancerList(): Observable<any> {
        return this.http.get(`${this.url}/user/all`)
    }
   
    createUser(payload): Observable<any> {
        return this.http.post(`${this.url}/user/register` , payload)
    }
   
    deleteUser(id): Observable<any> {
        return this.http.delete(`${this.url}/user/${id}`)
    }
    updateUser(payload): Observable<any> {
        return this.http.put(`${this.url}/user/update` , payload)
    }
  
    findUser(username): Observable<any> {
        return this.http.get(`${this.url}/user/${username}`)
    }
}
