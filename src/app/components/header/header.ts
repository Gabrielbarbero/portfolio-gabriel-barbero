import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchTerm = signal("")
  onSearch() {
    console.log("Buscando por:", this.searchTerm());
  }
  DestinyScroll(idRef: string){
    const elemento =document.getElementById(idRef)
    if (elemento){
          elemento.scrollIntoView({
      behavior: "smooth",
      block: "start"
      })
    }
    
  }
}
