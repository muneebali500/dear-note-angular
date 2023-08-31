import { Component, OnInit } from '@angular/core';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  notes: Note[] = [];

  ngOnInit() {
    const savedData = localStorage.getItem('notes');
    const entries = JSON.parse(savedData ?? '') || [];

    this.notes = entries;
  }

  addNote(note: Note) {
    if (note.title === '' || note.content === '') {
      return alert('Please fill in both the title and content fields');
    }

    const updatedNotes = [...this.notes, note];
    this.notes = updatedNotes;
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  removeNote(id: string) {
    const updatedNotes = this.notes.filter((note) => note.id !== id);
    this.notes = updatedNotes;
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }
}
