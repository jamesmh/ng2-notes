import Note from '../types/note';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  constructor() { }

  SaveNotes(notes: Note[], note: Note) {
    let match = notes.filter(n => n.createdAt == note.createdAt)[0];
    if (match) {
      return notes.filter(n => n.createdAt !== note.createdAt).concat(note).sort(this.sortNotes);
    }
    else {
      return notes.concat(note).sort(this.sortNotes);
    }
  }

  CreateNew(notes: Note[]): { notes: Note[], new: Note } {
    const note = new Note("New Note", "");
    return {
      notes: this.SaveNotes(notes, note),
      new: note
    };
  }

  DeleteNote(notes: Note[], toDelete: Note) : Note[] {
    return notes.filter(n => n.createdAt != toDelete.createdAt);
  }

  private sortNotes(a, b) {
    return a.createdAt > b.createdAt ? 1 : -1;
  }

}
