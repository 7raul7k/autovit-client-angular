import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasinaDTO} from "../../models/api/MasinaDTO";
import {MasinaService} from "../../service/masina.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{

    cars : MasinaDTO[] = [];

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.masinaService.getMasina().subscribe({
      next : (data) =>{
        this.cars = data;
      },
      complete : () =>{

      },
      error : () =>{

      }
    })
  }

  constructor(private masinaService: MasinaService) {
  }


}
