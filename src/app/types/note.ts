import * as _ from 'lodash';
import {
  Tag
} from './tag';

export default class Note {
  title: string;
  body: string;
  createdAt: number;
  tags: any;

  constructor(t: string, b: string, createdAt ? : number) {
    this.title = t;
    this.body = b;
    this.createdAt = createdAt || Note.NewCreatedAt();
    this.tags = this.GenerateTags(this.body);
  }

  GenerateTags(text: string): Tag[] {
    return _(text.split(/[\s\r?\n|\r]+/))
      .map(RemovePunctuationAndNewLine)
      .filter(MoreThan(3))
      .map(ToLower)
      .groupBy(word => word)
      .map(GroupToTag)
      .value();
  }

  static NewCreatedAt() {
    return new Date().getTime();
  }
}

const RemovePunctuationAndNewLine = (str:string) => str.replace(/[^\w]/g, "");
const MoreThan = (num) => (text) => text.length > num;
const ToLower = (t) => t.toLowerCase();
const GroupToTag = (group): Tag => {
  return {
    name: group[0],
    amount: group.length
  }
};
