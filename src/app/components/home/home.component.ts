import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit { 
  amount: number = 0;
  currencyList?: string[];
  fromValue: string = 'EUR';
  toValue: string = 'USD';
  currencyDetails: any;
  convertedResult: any;
  exchangeDetailsText: any;
  selectedCurrencies: any = {};
  valueOfFrom: any;

  constructor(private _service: CurrencyService) {}
  ngOnInit() {
    this._service.GetCurrencyData().subscribe((res) => {
      this.currencyList = Object.keys(res?.rates);
      this.currencyDetails = res.rates;
      this.exchangeDetailsText =
        '1.00 ' +
        this.fromValue +
        '=' +
        (
          (this.currencyDetails[this.toValue] /
            this.currencyDetails[this.fromValue]) *
          1
        ).toFixed(2) +
        ' ' +
        this.toValue;
      this.selectedCurrencies = Object.fromEntries(
        Object.entries(this.currencyDetails).slice(0, 9)
      );
      this.valueOfFrom = this.currencyDetails[this.fromValue];
    });
  }

  swapCurrency(e: any) {
    [this.fromValue, this.toValue] = [this.toValue, this.fromValue];
  }
  convertSelection() {
    this.convertedResult =
      (
        (this.currencyDetails[this.toValue] /
          this.currencyDetails[this.fromValue]) *
        this.amount
      ).toFixed(4) +
      ' ' +
      this.toValue;

    this.exchangeDetailsText =
      '1.00 ' +
      this.fromValue +
      '=' +
      (
        (this.currencyDetails[this.toValue] /
          this.currencyDetails[this.fromValue]) *
        1
      ).toFixed(2) +
      ' ' +
      this.toValue;
  }
  fromValueChanged() {
    this.valueOfFrom = this.currencyDetails[this.fromValue];
  }



}
