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
  link.href = 'Gabriel_Barbero_Desenvolvedor.docx';
  link.download = 'Gabriel_Barbero_Desenvolvedor.docx';
  link.click();
}
}
