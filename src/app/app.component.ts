import { Component } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parent_data: any;
  title = 'tp03-freymann-luderic';
}
