import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalsService {

  constructor() { }

  isLoding: boolean = false;

  setIsLodaing(value){
    debugger;
    this.isLoding = value;
  }

  getIsLodaing(){
    debugger;
    return this.isLoding;
  }

}
