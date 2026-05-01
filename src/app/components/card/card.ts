import { Component, Input } from '@angular/core';

export interface ProjetoData {
  titulo: string;
  imagem: string;
  subtitulo: string;
  recursos: string;
  porcentagem: number;
  corBarra: string;
  descricao?: string; // Opcional, caso algum não tenha
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({ required: true }) projeto!: ProjetoData; 

  mostrarDetalhes: boolean = false;

  abrirModal() {
    this.mostrarDetalhes = true;
  }

  fecharModal() {
    this.mostrarDetalhes = false;
  }
}