import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/mocks/Item';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  items: Item[] = [];
  filter: string = '';
  subscription: Subscription | null = null;

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.subscription = this.catalogService
      .getCatalog()
      .subscribe((catalog: Item[]) => (this.items = catalog));
  }

  handleFilter(): void {
    console.log('oui');

    this.subscription = this.catalogService.getCatalog().subscribe(
      (catalog: Item[]) =>
        (this.items = catalog.filter((item: Item) => {
          return item.libelle.toLowerCase().includes(this.filter);
        }))
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
