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
  clicado = signal(false);
  onSearch() {
    console.log("Buscando por:", this.searchTerm());
  }
  aoclicar() {
    console.log("Botão pressionado");
    this.clicado.set(true);
  }
}
