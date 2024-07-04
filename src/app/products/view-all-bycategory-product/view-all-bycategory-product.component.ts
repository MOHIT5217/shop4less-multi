import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-bycategory-product',
  templateUrl: './view-all-bycategory-product.component.html',
  styleUrls: ['./view-all-bycategory-product.component.scss']
})
export class ViewAllBycategoryProductComponent implements OnInit {
  searched = '';
  productList:any;
  constructor(private activatedroute : ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(val => {
      this.searched = val.id;
    })
    this.productService.viewAllProductByCategory(this.searched).subscribe(products =>{
      console.log(products);
      
      this.productList = products
    })
  }

}
