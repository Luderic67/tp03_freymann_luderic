import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items: Item[] = [];

  setList(list: Item[]) {
    this.items = list;
  }
}
