import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() id: string = '';
  @Input() createdAt: string = '';

  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  handleDelete() {
    this.onRemove.emit(this.id);
  }
}
