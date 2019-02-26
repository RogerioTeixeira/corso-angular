import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';
import { Observable } from 'rxjs';
import { Prodotti } from '../model/prodotti';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit , AfterViewInit  {
 

  @ViewChild('content') elementView: ElementRef;
  constructor(private renderer: Renderer2 , private el: ElementRef) {
    
  }

  ngOnInit() {
   

  }

  ngAfterViewInit(): void {
   
    const div = this.renderer.createElement("div") as HTMLDivElement
    this.renderer.setStyle(div,"width", "400px");
    this.renderer.setStyle(div,"overflow-wrap" , "break-word")
    
    const p = this.renderer.createElement("p");
    const text = this.renderer.createText("pppppppppppxczxczczxczxczx");
    this.renderer.appendChild(p,text);
    this.renderer.appendChild(div,p);


    /* this.renderer.appendChild(this.el.nativeElement, div); */

    
  }



}
