import { TagService } from '../services/tag.service';
import * as _ from 'lodash';
import {  Tag  } from './tag';

export default class Note {
  title: string;
  body: string;
  createdAt: number;
  tags: any;

  constructor(t: string, b: string, createdAt ? : number) {
    this.title = t;
    this.body = b;
    this.createdAt = createdAt || Note.NewCreatedAt();
    this.tags = TagService.GenerateNoteTags(this.body);
  }

  static NewCreatedAt() {
    return new Date().getTime();
  }
}
