import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private api: ApiService){}
  todos:any='';
  ngOnInit(){
    this.api.geTodo().subscribe((data: any)=>{
      this.todos=data
    })
  }

}
