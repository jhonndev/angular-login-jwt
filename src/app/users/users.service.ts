import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";


@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient, private cookies: CookieService, private router: Router) {}

    // Creamos los servicios para consumir la API 

    login(user: any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", user);
    }

    register(user: any): Observable<any> {
        return this.http.post("https://reqres.in/api/register", user);
    }

    // Almacenamos el Token en las Cookies

    setToken(token: string) {
        this.cookies.set("token", token);
    }

    getToken() {
        return this.cookies.get("token");
    }

    // Obtenemos el usuario logueado

    getUser() {
        return this.http.get("https://reqres.in/api/users/2");
    }

    getUserLogged() {
        const token = this.getToken();
        return token;
    }

    logout() {
        console.log("Cerrando sesion");
        this.cookies.delete("token");
        this.router.navigate(['/homepage']);
    }
}