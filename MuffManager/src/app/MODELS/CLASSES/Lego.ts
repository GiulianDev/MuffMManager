import { ILego } from "../INTERFACES/ILego"

export class Lego implements ILego {

    ID: number;
    name: string;
    closed: boolean;
    paid: number;
    sell: number[];
    
    constructor (
        ID: number,
        name: string,
        closed: boolean,
        paid: number,
        sell: number[]
    ) {
       this.ID = ID;
       this.name = name;
       this.closed = closed;
       this.paid = paid;
       this.sell = sell;
    }


    get Partial(): number {
        let partial = -this.paid;
               this.sell.forEach(element => {
                   partial += element;
               });
               return partial;
    }
}

