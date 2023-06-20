import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Lego } from '../MODELS/CLASSES/Lego';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  private legoList: Lego[] = [];

  constructor(private storageService: StorageService) { 
    this.legoList = [
      new Lego(1, "Lego 1", false, 1203, [102, 320, 90, 370]),
      new Lego(1, "Lego 2", false, 1423, [102, 320, 90]),
      new Lego(1, "Lego 3", true, 803, [102, 320, 90]),
      new Lego(1, "Lego 4", false, 83, [20, 320, 90]),
      new Lego(1, "Lego 5", false, 893, [5, 20, 320, 90, 900]),
      new Lego(1, "Lego 6", true, 293, [50, 20, 320, 90, 900]),
      new Lego(1, "Lego 7", false, 8093, [587, 20, 320, 90, 900]),
    ]
  }

   getFakeLegoList(): Lego[] {
    return this.legoList;
   }

   get Total(): number {
    let total: number = 0;
    this.legoList.forEach(element => {
      total += element.Partial;
    });
    console.log("total: ", total);
    return total;
   }

   newLego () {

   }

  
  // public get value() : string {
  //   return 
  // }
  

}
