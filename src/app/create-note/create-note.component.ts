import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note: Note = new Note();
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNote(): void{
    this.noteService.createNote(this.note).subscribe( data => {
    }, error => console.log(error));
  }
  goToNoteList(): void{
      this.router.navigate(['/notes']);
  }
  onSubmit(): void {
    this.saveNote();
    this.goToNoteList();
  }
}
