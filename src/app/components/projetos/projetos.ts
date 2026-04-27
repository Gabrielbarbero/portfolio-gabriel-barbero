import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card, ProjetoData } from '../card/card'; // Lembre de ajustar o caminho se estiver em outra pasta

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [FormsModule, Card], // <-- Importe o componente Card aqui
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  searchTerm = signal("");
  clicado = signal(false);

  // Aqui fica o seu JSON (Array de objetos)
  listaProjetos = signal<ProjetoData[]>([
    {
      titulo: "Andromeda Void",
      imagem: "assets/Projetos/Andromeda-Void.png", // Coloque o caminho real da imagem
      subtitulo: "Tema para VS Code",
      recursos: "JSON, Design",
      porcentagem: 100,
      corBarra: "#23262E" // Usando HEX como você prefere
    },
    {
      titulo: "Portifolio",
      imagem: "assets/Projetos/Portifolio.png",
      subtitulo: "Front-end do Portifolio",
      recursos: "Angular, Html, Css, TypeScript",
      porcentagem: 100,
      corBarra: "#23262E"
    },
  ]);

  // Isso filtra os cards automaticamente quando você digita na barra de pesquisa
  projetosFiltrados = computed(() => {
    const termo = this.searchTerm().toLowerCase();
    return this.listaProjetos().filter(p => 
      p.titulo.toLowerCase().includes(termo) || 
      p.recursos.toLowerCase().includes(termo)
    );
  });

  onSearch() {
    console.log("Buscando por:", this.searchTerm());
  }
}