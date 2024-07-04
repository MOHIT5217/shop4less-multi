import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  prodId = '';
  prodData: any;
  product_id = '';
  product_img = '';
  name = '';
  description = '';
  price = 0;
  currency = '';
  category = '';
  manufacturer = '';
  availability: boolean = false;
  inventory = 0;
  tags = '';
  constructor(
    activatedroute: ActivatedRoute,
    private productServices: ProductService,
    private router: Router
  ) {
    activatedroute.params.subscribe((val) => {
      this.prodId = val.id;
    });
  }

  ngOnInit(): void {
    this.productServices.viewProduct(this.prodId).subscribe((res) => {
      this.prodData = res;
      this.product_id = this.prodData.product_id;
      this.product_img = this.prodData.product_img;
      this.name = this.prodData.name;
      this.description = this.prodData.description;
      this.price = this.prodData.price;
      this.currency = this.prodData.currency;
      this.category = this.prodData.category;
      this.manufacturer = this.prodData.manufacturer;
      this.availability = this.prodData.availability;
      this.inventory = this.prodData.inventory;
      this.tags = this.prodData.tags;
    });
  }

  onSubmit(data: NgForm) {

    const formData = {
      product_id: this.product_id,
      product_img: this.product_img,
      name: this.name,
      description: this.description,
      price: this.price,
      currency: this.currency,
      category: this.category,
      manufacturer: this.manufacturer,
      availability: this.availability,
      inventory: this.inventory,
      tags: Array.isArray(this.tags) ? this.tags : this.tags.split(','),
    };

    this.productServices
      .updateProduct(this.prodId, formData)
      .subscribe((res) => {
        this.router.navigate(['/products']);
      });
  }
}
