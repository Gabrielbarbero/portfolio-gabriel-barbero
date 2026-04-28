import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchTerm = signal("");

  // IDs ajustados para bater com os títulos gerados no componente de Projetos
  private projects = signal([
    { id: 'Andromeda Void', name: 'Andromeda Void' },
    { id: 'Portifolio', name: 'Portfólio' }
  ]);

  filteredProjects = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return [];
    return this.projects().filter(p => 
      p.name.toLowerCase().includes(term)
    );
  });

  onSearch() {
    console.log("Buscando por:", this.searchTerm());
  }

  selectProject(idRef: string) {
    this.DestinyScroll(idRef);
    this.searchTerm.set(""); 
  }

  DestinyScroll(idRef: string) {
    const elemento = document.getElementById(idRef);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "center" // Coloquei center para o card ficar no meio da tela
      });
    }
  }
}