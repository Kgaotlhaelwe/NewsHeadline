import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [] ;
  searchKeyword = [] ;
  showStories :boolean =false;
  constructor() { 
    //this.getNews()
    
  }

  ngOnInit(): void {
  }

  getNews() {
   // const url = "https://newsapi.org/v2/top-headlines?country=us&category="+cat+"&apiKey=daebbb953e894759ae7a5a0e4dea55cb"; // site that doesn’t send Access-Control-*

    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=daebbb953e894759ae7a5a0e4dea55cb"; // site that doesn’t send Access-Control-*
    fetch(url)
      .then(response => response.json())
      .then((contents :any) =>{
        this.articles =contents.articles ;
        console.log(this.articles) ;
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

  }

  Search(keyword , date){
    this.showStories =true ;
    const url =`https://newsapi.org/v2/everything?q=${keyword}&from=${date}&apiKey=daebbb953e894759ae7a5a0e4dea55cb`
    
    fetch(url)
      .then(response => response.json())
      .then((contents :any) =>{
        console.log(contents.articles)
        this.articles =contents.articles ;
        
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  getNewsCat (cat){
    
  }

  
 

  

}
