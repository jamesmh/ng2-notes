import { Subject } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

    inputModel: string;
    modelChanged: Subject<string> = new Subject<string>();  

    constructor() {
      this.modelChanged
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(model => {
          console.log(model);
        });
   }



  ngOnInit() {
  }

  textChanged(text: string) {
    this.inputModel = text;
      this.modelChanged.next(text);
   }

}
