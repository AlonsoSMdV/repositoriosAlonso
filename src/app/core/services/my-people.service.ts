import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paginated } from "../models/paginated.model";
import { Observable } from "rxjs";

export interface PaginatedRaw<T>{
    first: number,
    prev: number|null,
    next: number|null,
    last: number,
    pages: number,
    items: number,
    data: T[]
}

interface PersonRaw{
    id: string
    nombre: string
    apellidos: string
    email: string
    genero: string
    grupoId: string
}


@Injectable({
    providedIn: 'root'
  })

  export class MyPeopleService{
     private apiUrl = 'https://localhost:3000/personas'
     constructor(http: HttpClient){

     }
    getAll(page:number, pageSize:number): Observable<Paginated<Person>> {
        return this.http.get<PaginatedRaw<PersonRaw>>(`${this.apiUrl}/${this.resource}/?_page=${page}&_per_page=${pageSize}`)
        .pipe(map(res=>{
            return {
                id:data.id, 
                name:data.nombre, 
                surname:data.apellidos, 
                age:(data as any) ["age"]??0,
                picture:{
                    large:(data as any)["large"].large, 
                    thumbnail:(data as any)["thumbnail"].thumbnail
                }};;
        }));
      }
  }