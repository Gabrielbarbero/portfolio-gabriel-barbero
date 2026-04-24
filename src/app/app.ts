import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'; 
import { Biografia } from './components/biografia/biografia';
import { Redes } from './components/redes/redes';
import { Contato } from './components/contato/contato';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Biografia, Redes, Contato, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudando-angular');
}
