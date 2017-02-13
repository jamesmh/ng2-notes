import { TagService } from './services/tag.service';
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
  $tagService: TagService;

  constructor($noteService: NoteService, $tagService: TagService) {
    this.$tagService = $tagService;
    this.$noteService = $noteService;
    this.notes = [
      new Note("Read Me...", `This is a quick demo app, some highlights include: 

      - New note content auto-updates the left menu as you type in the editor
      - Nifty CSS3 animations
      - Real-time calculation of all your note's "tags" (i.e. words...) appearing in the right panel
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
    this.tags = this.$tagService.CalculateTagsFromNotes(this.notes);
  }

      
}
