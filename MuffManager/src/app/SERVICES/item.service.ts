import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  constructor(private storageService: StorageService) {
    StorageService
   }
  

  
  // public get value() : string {
  //   return 
  // }
  

}
