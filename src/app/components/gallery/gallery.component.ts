import { Component } from '@angular/core';
import { RecommendedDesignComponent } from "../recommended-design/recommended-design.component";

interface Product{
  pName:string;
  pPrice:number;
  pDesc:string;
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedDesignComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  ShowImage($event: string) {
    throw new Error('Method not implemented.');
  }


  productList: Product[] = [
    {
      pName: 'Macbook Pro',
      pPrice: 1500,
      pDesc:
        'Apple MacBook Pro 2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD Good',
    },
    {
      pName: 'Samsung',
      pPrice: 1000,
      pDesc:
        'Samsung Tablet  2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD Excellent',
    },
    {
      pName: 'Toshiba',
      pPrice: 7000,
      pDesc:
        'Toshiba MacBook Pro 2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD VeryGood',
    },
    {
      pName: 'Macbook Pro',
      pPrice: 1500,
      pDesc:
        'Apple MacBook Pro 2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD Good',
    },
    {
      pName: 'Toshiba',
      pPrice: 7000,
      pDesc:
        'Toshiba MacBook Pro 2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD VeryGood',
    },
    {
      pName: 'Macbook Pro',
      pPrice: 1500,
      pDesc:
        'Apple MacBook Pro 2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD Good',
    },
    {
      pName: 'Samsung',
      pPrice: 1000,
      pDesc:
        'Samsung Tablet  2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD Excellent',
    },
    {
      pName: 'Macbook Pro',
      pPrice: 1500,
      pDesc:
        'Apple MacBook Pro 2020 A2251 13in Core i5 2.0 GHz 16GB RAM 1TB SSD Good',
    },
  ];
}
