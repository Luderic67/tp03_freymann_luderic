import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/mocks/Item';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
})
export class CatalogItemComponent implements OnInit {
  @Input() item: Item = { libelle: '', prix: 0 };

  constructor() {}

  ngOnInit(): void {}
}
