import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes: Note [];
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.noteService.getNoteList().subscribe(value => {
      this.notes = value;
    }, error => console.log(error));
  }
  updateNote(id: number): void {
    this.router.navigate(['update-note', id]);
  }
}
