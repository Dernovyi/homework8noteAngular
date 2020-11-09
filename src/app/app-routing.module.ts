import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListNotesComponent} from './list-notes/list-notes.component';
import {CreateNoteComponent} from './create-note/create-note.component';
import {UpdateNoteComponent} from './update-note/update-note.component';

const routes: Routes = [
  {path: 'notes', component: ListNotesComponent},
  {path: 'create-note', component: CreateNoteComponent},
  {path: 'update-note/:id', component: UpdateNoteComponent},
  {path: '', redirectTo: 'notes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
