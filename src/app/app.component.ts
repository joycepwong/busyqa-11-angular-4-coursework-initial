import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To Do List';

  newTask: string = "";
  tasks: string[] = [];
  mode: string = "";

  onAddTask(): void {
    this.tasks.push(this.newTask);
    this.newTask = "";
    this.mode = "added";
    setTimeout(() => {
      this.mode = '';
    }, 5000);
  }

  onRemove(index: number): void {
    this.tasks.splice(index, 1);
    this.mode = "removed";
    setTimeout(() => {
      this.mode = '';
    }, 5000);
  }
}
