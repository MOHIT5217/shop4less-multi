import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(private productServices: ProductService) {}

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

  ngOnInit(): void {}
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
      tags: this.tags.split(','),
    };

    this.productServices.createProduct(formData).subscribe((res) => {
      console.log(res);
    });
  }
}
