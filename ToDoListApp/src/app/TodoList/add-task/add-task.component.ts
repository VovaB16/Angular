import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule,NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgForOf, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() createEvent = new EventEmitter<Task>();

  createForm = this.fb.group({
    name: ['', Validators.required],
    completed: [false],
    deadline: [new Date()]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.createForm.valid) {
      alert("Invalid data!");
      return;
    }
    const user = this.createForm.value as Task;

    this.createEvent.emit(user);
  }
}
