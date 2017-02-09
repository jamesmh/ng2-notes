import Note from './types/note';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notes: Note[];

  constructor() {
    this.notes = [
      new Note("test", "Am I  going to be truncated? Lets find out if this text is going to be truncated."),
      new Note("Another Test", "I am James and I live in Moncton, NB")
    ];
  }
}
