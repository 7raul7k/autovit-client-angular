import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasinaService} from "../../service/masina.service";
import {MasinaDTO} from "../../models/api/MasinaDTO";

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css']
})
export class NewcarComponent implements OnInit, OnDestroy {

  ownerValue = "";
  brandValue = "";
  makeValue  = "";
  colorValue = "";
  yearValue : number = Number("");

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  constructor(public masinaService:MasinaService) {
  }

  save(){

    let masinaDTO : MasinaDTO = {

      owner: this.ownerValue,
      brand : this.brandValue,
      make : this.makeValue,
      color: this.colorValue,
      year : this.yearValue
    };

    this.masinaService.addCar(masinaDTO).subscribe({
      next:(data ) =>{
        alert(data);
      },
      complete:() =>{

      },
      error:(err) =>{
        alert(err);
      }
    });
    }

}
