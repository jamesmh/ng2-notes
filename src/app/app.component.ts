import { NoteService } from './services/note.service';
import Note from './types/note';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notes: Note[];
  activeNote: Note = null;
  $noteService: NoteService;

  constructor($noteService: NoteService) {
    this.$noteService = $noteService;
    this.notes = [
      new Note("Read Me...", `This is a simple Angular 2 based note taking demo app. While typing new content into a note you'll see that it auto-updates in the left menu with the most recent content and uses a flash animation. Pretty cool eh!`)
    ];
    this.activeNote = this.notes[0];
  }

  NoteSelected(note) {
    this.activeNote = note;
  }

  SaveNote(note) {
    this.notes = this.$noteService.SaveNotes(this.notes, note);
  }

  AddNote() {
    debugger;
    const result = this.$noteService.CreateNew(this.notes);
    this.notes = result.notes;
    this.activeNote = result.new;
  }

  DeleteNote(note) {
    this.notes = this.$noteService.DeleteNote(this.notes, note);
    this.activeNote = null;
  }
}
