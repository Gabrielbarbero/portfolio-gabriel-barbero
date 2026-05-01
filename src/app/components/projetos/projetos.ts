import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card, ProjetoData } from '../card/card';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [FormsModule, Card],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  searchTerm = signal("");
  clicado = signal(false);

  listaProjetos = signal<ProjetoData[]>([
    {
      titulo: "Andromeda Void",
      imagem: "assets/Projetos/Andromeda-Void.png",
      subtitulo: "Tema para VS Code",
      recursos: "JSON, Design",
      porcentagem: 100,
      corBarra: "#23262E",
      descricao: "",
    },
    {
      titulo: "Portifolio",
      imagem: "assets/Projetos/Portifolio.png",
      subtitulo: "Front-end do Portifolio",
      recursos: "Angular, Html, Css, TypeScript",
      porcentagem: 30,
      corBarra: "#23262E" ,
      descricao: "",
    },
  ]);

  projetosFiltrados = computed(() => {
    const termo = this.searchTerm().toLowerCase().trim();
    // Se não tiver termo, retorna a lista completa (para os cards aparecerem)
    if (!termo) return this.listaProjetos();
    
    return this.listaProjetos().filter(p => 
      p.titulo.toLowerCase().includes(termo) || 
      p.recursos.toLowerCase().includes(termo)
    );
  });

  // FUNÇÃO DE SCROLL QUE ESTAVA FALTANDO
  scrollToProject(titulo: string) {
    const elemento = document.getElementById(titulo);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      // Opcional: limpa a busca para fechar a lista após o clique
      this.searchTerm.set(""); 
    }
  }

  onSearch() {
    console.log("Buscando por:", this.searchTerm());
  }
}