import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {

  productList: any;
  constructor(private productservice : ProductService) { 
  
  }

  ngOnInit(): void {
    this.productservice.viewAllProduct().subscribe(res => {
      this.productList = res;
    });
  }
  isArray(obj: any): boolean {
    return Array.isArray(obj);
}

getSearchData(data: { searchInput: string; }){
  const word = data.searchInput;
  const firstLater =  word.charAt(0);
  const restOfLater = word.slice(1);
  const capitalizeLater = firstLater.toUpperCase()+restOfLater
  this.productservice.getSearchData(capitalizeLater).subscribe(res=>{
    console.log(res);
    this.productList = res;
  })
}
}
