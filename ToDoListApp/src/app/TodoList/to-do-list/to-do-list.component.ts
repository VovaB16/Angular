import { Component } from '@angular/core';
import { CommonModule,NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Task } from '../task';
import { TASKS } from '../task-mock';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, NgForOf, FormsModule, AddTaskComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  tasks: Task[] = [...TASKS];

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  sortTasks() {
    this.tasks.forEach(task => {
      task.deadline = new Date(task.deadline);
    });
  
    this.tasks.sort((a, b) => {
      return a.deadline.getTime() - b.deadline.getTime();
    });
  
    this.tasks = [...this.tasks];
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  createTask(task: Task) {
    this.tasks.push(task);
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