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
    const note = new Note("New Note", "");
    return {
      notes: this.SaveNotes(notes, note),
      new: note
    };
  }

  DeleteNote(notes: Note[], toDelete: Note) : Note[] {
    return notes.filter(n => n.createdAt !== toDelete.createdAt);
  }

  GetTags(notes: Note[]) : Tag[] {
    return _(notes)
    .map(GetTagsFromNote)
    .flatten()
    .groupBy(TagName)
    .map(GetReducedTagFromGroup)
    .filter(ByCountMoreThan(0))
    .sort(ByTagName)
    .value();
  }

}

const ByCreatedAt = (a, b) => a.createdAt > b.createdAt ? 1 : -1;
const GetTagsFromNote = (note: Note) => note.tags;
const TagName = (tag:any) => tag.name;
const GetReducedTagFromGroup = (group: any[]) => {
  return {name: group[0].name, amount: group.map(ToTagAmount).reduce((acc, curr) => acc + curr) };
};
const ByCountMoreThan = (num:number) => (tag:Tag) => tag.amount > num;
const ByTagName = (a,b) => a.name >= b.name ? 1 : -1;
const ToTagAmount = tag => tag.amount;
