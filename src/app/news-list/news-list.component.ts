import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { DatePipe, NgForOf } from '@angular/common';


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgForOf, DatePipe],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  news=[{title: "", description: "", date: "", image:""}] ;
  constructor (private newService: NewsService){

  }
  ngOnInit(){
    this.news=this.newService.getNews();

  }



}
