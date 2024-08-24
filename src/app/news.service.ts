import { Injectable } from '@angular/core';
import { NEWSLIST } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getNews(){
    return NEWSLIST;
  }
}
