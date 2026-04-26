import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css',
})
export class Introduction implements OnInit, OnDestroy {
  
  displayedCode: string = '';
  private index: number = 0;
  private typingInterval: any; // Variável para segurar a referência do timer
  
private fullText: string = `from fastapi import FastAPI
import asyncio

app = FastAPI(title="Hub_API")

@app.on_event("startup")
async def boot_sequence():
    print("[INFO] Resolving host...")
    await asyncio.sleep(0.1)
    print("[SECURE] SSL/TLS handshake successful.")
    print("[OK] Backend services operational on port 443.")

@app.get("/api/status")
def get_status():
    return {
        "developer": "Gabriel",
        "focus": "Backend Architecture",
        "status": "Online and listening..."
    }
`;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.iniciarDigitacao();
    }
  }

  // Isso garante que o processo morra quando o Angular der reload
  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  iniciarDigitacao() {
    // Limpa qualquer timer perdido antes de começar um novo
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    this.displayedCode = '';
    this.index = 0;

    // Atribui o timer à variável global da classe
    this.typingInterval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedCode += this.fullText.charAt(this.index);
        this.index++;
        
        this.cdr.detectChanges(); 
      } else {
        clearInterval(this.typingInterval);
        console.log("Digitação concluída!");
      }
    }, 10);
  }
}
