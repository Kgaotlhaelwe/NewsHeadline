import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];
  searchKeyword = [];
  showStories: boolean = false;


  d = new Date();
  datez = moment(this.d).format().substring(0, 10);;
  readmore;

 
@ViewChild("phrase") keywor: ElementRef

 
  constructor(private router: Router) {


  }

  ngOnInit(): void {


  }
  Search(word, date) {
    if (word != "") {
      this.showStories = true;
      const url = `https://newsapi.org/v2/everything?q=${word}&from=${date}&apiKey=daebbb953e894759ae7a5a0e4dea55cb`
      fetch(url)
        .then(response => response.json())
        .then((contents: any) => {
          console.log(contents.articles)
          this.articles = contents.articles;
         })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    } else {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    }

  }

  readMore(article) {
    this.router.navigate(['/readmore'], { state: { data: article } });
  }






}
