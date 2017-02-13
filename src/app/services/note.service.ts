import Note from '../types/note';
import { Injectable } from '@angular/core';
import { Tag } from '../types/tag';
import * as _ from 'lodash';

@Injectable()
export class NoteService {

  constructor() { }

  SaveNotes(notes: Note[], note: Note) {
    let match = notes.filter(n => n.createdAt == note.createdAt)[0];
    if (match) {
      return notes.filter(n => n.createdAt !== note.createdAt).concat(note).sort(ByCreatedAt);
    }
    else {
      return notes.concat(note).sort(ByCreatedAt);
    }
  }

  CreateNew(notes: Note[]): { notes: Note[], new: Note } {
    const note = new Note("New Note", "Fill me in");
    return {
      notes: this.SaveNotes(notes, note),
      new: note
    };
  }

  DeleteNote(notes: Note[], toDelete: Note) : Note[] {
    return notes.filter(n => n.createdAt !== toDelete.createdAt);
  }
}

const ByCreatedAt = (a, b) => a.createdAt > b.createdAt ? 1 : -1;
