import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private api: ApiService){}
  todos:any
  newTaskTitle: string = ''
  ngOnInit(){
    this.api.geTodo().subscribe((data: any)=>{
      this.todos=data
    })
  }



  del(data:any)
{
  this.api.deleteTodo(this.todos.id).subscribe((response)=>{
  this.todos=this.todos.filter((item:{ id:any;})=>item.id!==data.id);
  })
}
addNewTask(){
  if(this.newTaskTitle.trim() !== ''){
    const newTask = {title:this.newTaskTitle,finished: false};
    this.todos.push(newTask);
    this.newTaskTitle = '';
  }
}
}

