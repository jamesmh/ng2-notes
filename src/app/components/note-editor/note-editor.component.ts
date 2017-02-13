import Note from '../../types/note';
import { Subject } from 'rxjs/Rx';
import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
  inputs: [ 'note' ]
})
export class NoteEditorComponent implements OnChanges {

  @Output() onUpdated: EventEmitter < Note > = new EventEmitter();

  note: Note;
  title: string;
  body: string;
  titleChangedStream: Subject <string> = new Subject <string> ();
  bodyChangedStream: Subject<string> = new Subject<string>();

  constructor() {}


  ngOnChanges() {
    if (this.note) {
      this.title = this.note.title;
      this.body = this.note.body;
    } else {
      this.title = "";
      this.body = "";
    }
    this.titleChangedStream
      .debounceTime(100)
      .distinctUntilChanged()
      .subscribe(model => {
        this.onUpdated.emit(new Note(model, this.body, this.note.createdAt))
      });

    this.bodyChangedStream
      .debounceTime(100)
      .distinctUntilChanged()
      .subscribe(model => {
        this.onUpdated.emit(new Note(this.title, model, this.note.createdAt))
      });
  }


  titleChanged(text: string) {
    this.titleChangedStream.next(text);
  }

  bodyChanged(text: string) {
    this.bodyChangedStream.next(text);
  }

}

