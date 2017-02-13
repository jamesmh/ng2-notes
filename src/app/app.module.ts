import { TagService } from './services/tag.service';
import { NoteService } from './services/note.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteComponent } from './components/note/note.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    NoteComponent,
    TruncatePipe,
    NoteEditorComponent,
    TagsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ NoteService, TagService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
