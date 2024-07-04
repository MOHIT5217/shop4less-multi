import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  prodId:any;
  productDetail: any;
  constructor(private activatedroute: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe(val => {
      this.prodId = val.id
      console.log(this.prodId);
      
    })
    this.productService.viewProduct(this.prodId).subscribe(res =>{
      this.productDetail  = res
      console.log(this.productDetail);
      
    })
  }

}
