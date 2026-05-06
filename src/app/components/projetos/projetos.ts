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
      descricao: [
      "O Andromeda Void é um tema customizado para o Visual Studio Code, desenvolvido do zero com um forte foco em UI/UX para ambientes de programação.",
      "A paleta de cores foi cuidadosamente projetada para maximizar o conforto visual e a legibilidade durante longas sessões de codificação. A escolha dos tons escuros e contrastes busca reduzir o cansaço visual, mantendo uma estética moderna, limpa e imersiva.",
      "Construído estruturando configurações JSON e regras de design, o tema aplica uma coloração semântica precisa para destacar a sintaxe de diversas linguagens, facilitando a identificação rápida de variáveis, métodos, funções e palavras-chave no código.",
      "O projeto foi publicado no marketplace oficial do VS Code e já ultrapassou a marca de 100 downloads, demonstrando uma adoção orgânica e a utilidade prática da interface para outros desenvolvedores da comunidade."
],
    },
    {
      titulo: "Portifolio",
      imagem: "assets/Projetos/Portifolio.png",
      subtitulo: "Front-end do Portifolio",
      recursos: "Angular, Html, Css, TypeScript",
      porcentagem: 30,
      corBarra: "#23262E" ,
      descricao: [
        "Este portfólio foi projetado e desenvolvido com um forte foco no Front-End, visando criar uma experiência de usuário (UX) imersiva e autêntica. O design visual foi cuidadosamente construído para refletir minha identidade como desenvolvedor, adotando uma estética customizada no estilo terminal (Command Line Interface), combinando funcionalidade técnica com um visual limpo e voltado para a produtividade.",
        "Stack Tecnológico e Arquitetura:",
        "• Angular: Framework principal escolhido para a construção de toda a interface de usuário. A arquitetura modular e escalável prepara o terreno para futuras integrações.",
        "• TypeScript: Utilizado na base de todo o projeto para garantir um código mais robusto, seguro e previsível.",
        "• UI/UX Customizada: Layout otimizado para legibilidade, com uma paleta de cores focada no conforto visual e na imersão no ambiente de desenvolvimento.",
        "• SPA (Single Page Application): Sistema de roteamento implementado para garantir transições rápidas e sem recarregamento de página."
      ]
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