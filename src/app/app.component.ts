import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'repo20220121-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  progress = 0;
  // constructor(private http: HttpClient) {}
  onSelectedTemplate(ev : any) {
    // console.log(' AppComponent onSelectedTemplate ev', ev);
  }
}
