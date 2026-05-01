import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  imports: [],
  templateUrl: './curriculo.html',
  styleUrl: './curriculo.css',
})
export class Curriculo {
  baixarArquivo() {
  const link = document.createElement('a');
  link.href = 'curriculo.pdf';
  link.download = 'Curriculo.pdf';
  link.click();
}
}
