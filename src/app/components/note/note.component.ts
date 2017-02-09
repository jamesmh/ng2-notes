import Note from '../../types/note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  inputs: ['note']
})
export class NoteComponent implements OnInit {

  note: Note;
  
  constructor() { }

  ngOnInit() {
    
  }

}
