import { Tag } from './types/tag';
import { NoteService } from './services/note.service';
import Note from './types/note';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  notes: Note[];
  activeNote: Note = null;
  $noteService: NoteService;
  tags: Tag[];

  constructor($noteService: NoteService) {
    this.$noteService = $noteService;
    this.notes = [
      new Note("Read Me...", `This is a quick demo app, some highlights include: 
      - New content auto-updates in the left menu
      - Nifty CSS3 animations
      - Real-time calculation of all your note's "tags" (i.e. words...) appearing in the right panel
      - Functional programming (see github link on top right and check files "src/app/services/note.service.ts" 
        and "src/app/types/note.ts")  )
      - No CSS frameworks being used :)
      `)
    ];
    this.activeNote = this.notes[0];
        this.UpdateTags(this.notes);
  }

  ngOnChanges(){

  }

  NoteSelected(note) {
    this.activeNote = note;
  }

  SaveNote(note) {
    this.notes = this.$noteService.SaveNotes(this.notes, note);
    this.UpdateTags(this.notes);
  }

  AddNote() {
    const result = this.$noteService.CreateNew(this.notes);
    this.notes = result.notes;
    this.activeNote = null;
    this.UpdateTags(this.notes);
  }

  DeleteNote(note) {
    this.notes = this.$noteService.DeleteNote(this.notes, note);
        this.UpdateTags(this.notes);
    this.activeNote = null;
  }

  UpdateTags(notes){
    this.tags = this.$noteService.GetTags(this.notes);
  }

      
}
