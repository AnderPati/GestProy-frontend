// AuthService provides methods for handling authentication: login, register, logout, and token storage/retrieval.
//----
// Este servicio maneja la autenticación: login, registro, logout, y gestión del token (guardar, recuperar y eliminar).

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Base URL for API endpoints | URL base para los endpoints de la API

  constructor(private http: HttpClient) {}

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }); // Sends login credentials to backend | Envía las credenciales de login al backend
  }

  loginWithGoogle(token: string): Observable<any> {
    return this.http.post<{ token: string; user: any }>(
      `${this.apiUrl}/login/google`, // Asegúrate de que este endpoint coincida con Laravel
      { token },
      { withCredentials: false } // Necesario si usas cookies/Sanctum
      ).pipe(
      tap(response => {
        localStorage.setItem('auth_token', response.token);
      })
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password })
  } // Handles user registration | Maneja el registro de usuario

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}); // Sends logout request to backend | Envía la petición de logout al backend
  }

  saveToken(token: string, rememberMe: boolean) {
    if (rememberMe) {
      localStorage.setItem('auth_token', token); // Persists token across sessions if 'rememberMe' is true | Guarda el token de forma persistente si se marcó 'recordarme'
    } else {
      sessionStorage.setItem('auth_token', token); // Session-only token storage | Guarda el token solo para la sesión actual
    }
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token'); // Retrieves token from either storage | Recupera el token desde cualquiera de los dos almacenamientos
  }

  // Validar token con el backend
  validateToken(token: string): Observable<boolean> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.apiUrl}/user`, { headers }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
  
  removeToken() {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token'); // Clears token from both storages | Borra el token de ambos almacenamientos
  }
  
}
