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
      new Note("First Note", "I am your first note. You can remove me or change me if you like!")
    ];
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
