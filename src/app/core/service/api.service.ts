import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = `/api`
    
    http = inject(HttpClient);

    get(endpoint: string){
        return this.http.get(`${this.baseUrl}/${endpoint}`);
    }

    getById(endpoint: string, id: number){
        return this.http.get(`${this.baseUrl}/${endpoint}/${id}`);
    }

    post(endpoint: string, data: any){
        return this.http.post(`${this.baseUrl}/${endpoint}`, data);
    }

    put(endpoint: string, id: number, data: any){
        return this.http.put(`${this.baseUrl}/${endpoint}/${id}`, data);
    }

    delete(endpoint: string, id: number){
        return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
    }
  
}