import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  admin = new Subject<boolean>();
  userName = new Subject<string>();
  constructor() { }
}
