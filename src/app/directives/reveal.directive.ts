import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({ selector: '[appReveal]' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.renderer.addClass(this.element.nativeElement, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.element.nativeElement, 'is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.14 }
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
