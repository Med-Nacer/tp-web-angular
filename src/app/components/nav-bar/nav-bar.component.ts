import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currPath: string='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPath();
  }
  
  getPath(){
    this.route.url.subscribe(res=>{
      this.currPath = res[0].path;
    })
  }
}
