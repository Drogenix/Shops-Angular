import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly apiUrl:string;

  constructor(private http: HttpClient,
              private cookieService: CookieService)
  {
    this.apiUrl = "https://localhost:7224/api/";

  }

  private handleError(error:HttpErrorResponse)
  {
    return throwError(()=> new Error('Bad request! Status code - '+ error.status));
  }

  login(formData:FormData):Observable<string>
  {
    const url = this.apiUrl + 'Authentication'

    return this.http.post(url, formData, {responseType:"text"})
      .pipe(
        retry(10),
        catchError(err => this.handleError(err)),
        );
  }

  logout()
  {
    this.cookieService.delete('shopsApi');
  }

  getUserRole() : string
  {
    const token = this.cookieService.get('shopsApi')

    const decoded:any = jwtDecode(token)

    const role = decoded.role;

    console.log(role)

    return role;
  }

  isUserAuthorized():boolean
  {
    return this.cookieService.check('shopsApi');
  }
}
