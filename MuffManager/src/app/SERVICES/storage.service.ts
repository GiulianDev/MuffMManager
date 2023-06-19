import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Lego } from '../MODELS/CLASSES/Lego';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  
  getItem = async () /* : Promise<Lego> */ => {
    const { value } = await Preferences.get({ key: 'item' });
    console.log(`value: ${value}!`);
  };
  
  checkItems = async () => {
    const { value } = await Preferences.get({ key: 'items' });
    console.log(`Hello ${value}!`);
  };

  removeName = async () => {
    await Preferences.remove({ key: 'name' });
  };


}
