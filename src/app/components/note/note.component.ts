import Note from '../../types/note';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  inputs: ['note']
})
export class NoteComponent implements OnInit {

  @Output() onDelete: EventEmitter<Note> = new EventEmitter();
  note: Note;  

  constructor() { }

  ngOnInit() {
    
  }

  Delete() {
    this.onDelete.emit(this.note);
  }

}
