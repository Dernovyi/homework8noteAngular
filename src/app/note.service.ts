import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://localhost:8080/notes';

  constructor(private httpClient: HttpClient) { }

  getNoteList(): Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.baseUrl);
  }

  // tslint:disable-next-line:ban-types
  createNote(note: Note): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, note);
  }

  getNoteById(id: number): Observable<Note> {
    return this.httpClient.get<Note>(`${this.baseUrl}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  updateNote(id: number, note: Note): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, note);
  }
  // tslint:disable-next-line:ban-types
  removeNote(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
