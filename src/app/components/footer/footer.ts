import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  DestinyScroll(idRef: string){
    const elemento =document.getElementById(idRef)
    if (elemento){
          elemento.scrollIntoView({
      behavior: "smooth",
      block: "start"
      })}
    }
}
