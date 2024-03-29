import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}
  geTodo()
  {
    return this.http.get(' https://jsonplaceholder.typicode.com/todos/')
  }


  deleteTodo(id:any)
{
  return this.http.delete("https://jsonplaceholder.typicode.com/todos/"+id)
}

}

