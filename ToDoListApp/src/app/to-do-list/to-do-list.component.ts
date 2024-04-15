import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  completed: boolean;
  deadline: Date;
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
    { name: 'Hit the gym', completed: false, deadline: new Date() },
    { name: 'Pay bills', completed: false, deadline: new Date() },
    { name: 'Meet John', completed: false, deadline: new Date() },
    { name: 'Buy eggs', completed: false, deadline: new Date() },
    { name: 'Read a book', completed: false, deadline: new Date() },
    { name: 'Organize office', completed: false, deadline: new Date() },
    { name: 'Eat dinner', completed: false, deadline: new Date() },
    { name: 'Buy apples', completed: false, deadline: new Date() },
    { name: 'Meet George', completed: false, deadline: new Date() },
    { name: 'Feed the cat', completed: false, deadline: new Date() },
    { name: 'Write a letter', completed: false, deadline: new Date() },
    { name: 'Run 1 km', completed: false, deadline: new Date() }
  ];

  newTaskName = '';
  newTaskDeadline: Date = new Date(); // Змінна для нового дедлайну

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask(taskName: string) {
    if (taskName.trim()) {
      this.tasks.push({ name: taskName.trim(), completed: false, deadline: this.newTaskDeadline });
      this.newTaskName = '';
      this.newTaskDeadline = new Date(); // Скидання дедлайну після додавання завдання
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