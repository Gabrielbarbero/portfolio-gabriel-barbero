import { Component, AfterViewInit, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-biografia',
  standalone: true,
  imports: [],
  templateUrl: './biografia.html',
  styleUrl: './biografia.css',
})
export class Biografia implements AfterViewInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        }, { threshold: 0.1 });

        this.el.nativeElement.querySelectorAll('.hidden').forEach((t: HTMLElement) => {
          observer.observe(t);
        });
      }, 50);
    }
  }
}