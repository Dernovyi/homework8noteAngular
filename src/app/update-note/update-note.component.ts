import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  id: number;
  note: Note = new Note();
  constructor(private noteService: NoteService, private route: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.noteService.getNoteById(this.id).subscribe( data => {
      this.note = data;
      console.log(this.note);
    }, error => {
      console.log(error);
    });
  }


  routTo(id: number): void{
      this.rout.navigate(['update-note', id]);
  }
  routToList(): void{
    this.rout.navigate(['notes']);
  }

  onSubmit(): void {
    this.noteService.updateNote(this.id, this.note).subscribe( data => {
    }, error => {
      console.log(error);
    });
    this.routTo(this.id);
  }

  remove(): void {
    this.noteService.removeNote(this.id).subscribe(data => {
    }, error => {
      console.log(error);
    });
    this.routToList();
  }
}
