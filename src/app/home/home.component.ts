import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];
  searchKeyword = [];
  showStories: boolean = false;
  future = "2020-04-19";
  d = new Date();
  datez = moment(this.d).format().substring(0, 10);;
  readmore;

  constructor(private router: Router) {


  }

  ngOnInit(): void {


  }
  Search(keyword, date) {
    this.showStories = true;
    const url = `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&apiKey=daebbb953e894759ae7a5a0e4dea55cb`
    fetch(url)
      .then(response => response.json())
      .then((contents: any) => {
        console.log(contents.articles)
        this.articles = contents.articles;
        keyword = "";
        date = "";

      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  readMore(article) {
    this.router.navigate(['/readmore'], { state: { data: article } });
  }






}
