import { Component, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface Note {
  title: string;
  content: string;
  id: string;
  date: string;
}

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css'],
})
export class InputAreaComponent {
  note: Note = {
    title: '',
    content: '',
    id: '',
    date: '',
  };

  @Output() onAdd: EventEmitter<Note> = new EventEmitter<Note>();

  handleChange(event: Event, fieldName: string) {
    const value = (event.target as HTMLInputElement).value;
    this.note = {
      ...this.note,
      [fieldName]: value,
      id: uuidv4(),
      date: new Date().toLocaleString(),
    };
  }

  onAddClick() {
    this.onAdd.emit(this.note);
    this.note = {
      title: '',
      content: '',
      id: '',
      date: '',
    };
  }
}
