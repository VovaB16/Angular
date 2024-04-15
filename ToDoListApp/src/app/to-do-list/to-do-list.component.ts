import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, NgForOf, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  tasks: Task[] = [
    { name: 'Hit the gym', completed: false },
    { name: 'Pay bills', completed: false },
    { name: 'Meet John', completed: false },
    { name: 'Buy eggs', completed: false },
    { name: 'Read a book', completed: false },
    { name: 'Organize office', completed: false },
    { name: 'Eat dinner', completed: false },
    { name: 'Buy apples', completed: false },
    { name: 'Meet George', completed: false },
    { name: 'Feed the cat', completed: false },
    { name: 'Write a letter', completed: false },
    { name: 'Run 1 km', completed: false }
  ];

  newTaskName = '';

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask(taskName: string) {
    if (taskName.trim()) {
      this.tasks.push({ name: taskName.trim(), completed: false });
      this.newTaskName = '';
    }
  }

  getTaskStyle(task: Task, index: number) {
    const baseStyle = {
      'list-style-type': 'none',
      padding: '8px',
      border: '1px solid #ccc',
      'border-radius': '4px',
      'margin-bottom': '8px',
    };

    if (task.completed) {
      return { ...baseStyle, background: '#eee', 'text-decoration': 'line-through' };
    }

    return baseStyle;
  }
}