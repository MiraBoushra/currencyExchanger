import { Component ,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnChanges  {
  @Input() passedAmount:number = 0;
  @Input() passedCurrencies:any;
  @Input() passedFromValue: any;
  arraySelected: any;
  newArray:any;
  ngOnChanges(changes: SimpleChanges) {
    if(changes['passedCurrencies']){
     this.passedCurrencies =changes['passedCurrencies']?.currentValue;
     this.passedCurrencies =Object.keys(this.passedCurrencies)?.map((key) => [key,this.passedCurrencies[key]]);   
 
    }
    console.log(changes);
    if(changes['passedFromValue'])
    this.passedFromValue = changes['passedFromValue']?.currentValue;

    console.log(this.arraySelected)
    this.arraySelected= this.passedCurrencies.map((i: any[])=>{
      let cu = i[0];
      let amo = i[1];
      console.log(cu,'cu', amo);
      return    (amo / this.passedFromValue * 1).toFixed(4) + " " + cu
       })

  }
}
