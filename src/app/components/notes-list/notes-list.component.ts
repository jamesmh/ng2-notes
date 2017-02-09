import Note from '../../types/note';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  inputs: [ 'notes' ]
})
export class NotesListComponent implements OnInit {

  @Output() onSelected: EventEmitter<Note> = new EventEmitter();
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
    @Output() onDelete: EventEmitter<Note> = new EventEmitter();


  public notes: Array<Note>;

  constructor() {
   }

  ngOnInit() {

  }

  NoteSelected(note) {
    this.onSelected.emit(note);
  }

  NewNote() {
    this.onAdd.emit();
  }

  DeleteNote(note) {
    this.onDelete.emit(note);
  }

}
