import {  Tag  } from '../types/tag';
import Note from '../types/note';
import {  Injectable  } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class TagService {

  constructor() {}

  static GenerateNoteTags(text: string): Tag[] {
    return _(text.split(/[\s\r?\n|\r]+/))
      .map(RemovePunctuationAndNewLine)
      .filter(MoreThan(3))
      .map(ToLower)
      .groupBy(word => word)
      .map(GroupToTag)
      .value();
  }

  public CalculateTagsFromNotes(notes: Note[]): Tag[] {
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

const RemovePunctuationAndNewLine = (str: string) => str.replace(/[^\w]/g, "");
const MoreThan = (num) => (text) => text.length > num;
const ToLower = (t) => t.toLowerCase();
const GroupToTag = (group): Tag => {
  return {
    name: group[0],
    amount: group.length
  }
};

const GetTagsFromNote = (note: Note) => note.tags;
const TagName = (tag: any) => tag.name;
const GetReducedTagFromGroup = (group: any[]) => {
  return {
    name: group[0].name,
    amount: group.map(ToTagAmount).reduce((acc, curr) => acc + curr)
  };
};
const ByCountMoreThan = (num: number) => (tag: Tag) => tag.amount > num;
const ByTagName = (a, b) => a.name >= b.name ? 1 : -1;
const ToTagAmount = tag => tag.amount;
