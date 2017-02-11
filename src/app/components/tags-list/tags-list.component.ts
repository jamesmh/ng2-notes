import { NoteService } from '../../services/note.service';
import { Component, Output, EventEmitter } from '@angular/core';
import Note from '../../types/note';
import { Tag } from '../../types/tag';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss'],
  inputs: [ 'tags' ]
})
export class TagsListComponent{
  tags: Tag[];
  $noteService: NoteService;
}
