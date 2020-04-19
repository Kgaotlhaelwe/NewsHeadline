import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
article
  constructor(public router:Router) { 
    this.article =this.router.getCurrentNavigation().extras.state.data ;
    console.log(this.article)
  }

  ngOnInit(): void {
  }

}
