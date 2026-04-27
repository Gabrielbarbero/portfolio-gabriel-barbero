import { Component, Input } from '@angular/core';

// Definindo a estrutura de dados que o Card vai aceitar
export interface ProjetoData {
  titulo: string;
  imagem: string;
  subtitulo: string;
  recursos: string;
  porcentagem: number;
  corBarra: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // O @Input() avisa o Angular que esse dado virá de fora (do app-projetos)
  @Input({ required: true }) projeto!: ProjetoData; 
}