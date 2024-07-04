import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar'

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  delProdId:any;
  
  constructor(activatedroute : ActivatedRoute, private productService : ProductService, private route: Router, private _snackBar : MatSnackBar) { 
    activatedroute.params.subscribe(val =>{
      this.delProdId = val.id
    })
  }

  ngOnInit(): void {

  }
  delItem(){
    this.productService.deleteProduct(this.delProdId).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/products'])
      this._snackBar.open('Item has Deleted','Splash', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
      })
    })
  }
  ngDestroy(){
    this.delItem();
  }
}
