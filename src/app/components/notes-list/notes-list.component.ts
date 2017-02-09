import Note from '../../types/note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  inputs: [ 'notes' ]
})
export class NotesListComponent implements OnInit {

  public notes: Array<Note>;

  constructor() {
   }

  ngOnInit() {

  }

}
