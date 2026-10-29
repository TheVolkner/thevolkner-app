import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('vinylRecord') vinylRecord?: ElementRef<HTMLElement>;

  isDraggingVinyl = false;

  private vinylRotation = 0;
  private previousPointerAngle = 0;
  private previousFrameTime = 0;
  private animationFrameId = 0;
  private prefersReducedMotion = false;
  private readonly vinylSpeed = 15;

  constructor(public i18n: LanguageService, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.previousFrameTime = performance.now();

    this.ngZone.runOutsideAngular(() => {
      const animateVinyl = (time: number) => {
        const elapsedSeconds = Math.min((time - this.previousFrameTime) / 1000, 0.05);
        this.previousFrameTime = time;

        if (!this.isDraggingVinyl && !this.prefersReducedMotion) {
          this.vinylRotation = (this.vinylRotation + this.vinylSpeed * elapsedSeconds) % 360;
          this.renderVinylRotation();
        }

        this.animationFrameId = requestAnimationFrame(animateVinyl);
      };

      this.animationFrameId = requestAnimationFrame(animateVinyl);
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }

  startVinylDrag(event: PointerEvent): void {
    const record = this.vinylRecord?.nativeElement;
    if (!record) return;

    event.preventDefault();
    record.setPointerCapture(event.pointerId);
    this.isDraggingVinyl = true;
    this.previousPointerAngle = this.getPointerAngle(event);
    this.previousFrameTime = performance.now();
  }

  rotateVinyl(event: PointerEvent): void {
    if (!this.isDraggingVinyl) return;

    const currentAngle = this.getPointerAngle(event);
    let angleDelta = currentAngle - this.previousPointerAngle;

    if (angleDelta > 180) angleDelta -= 360;
    if (angleDelta < -180) angleDelta += 360;

    this.vinylRotation += angleDelta;
    this.previousPointerAngle = currentAngle;
    this.renderVinylRotation();
  }

  stopVinylDrag(event: PointerEvent): void {
    const record = this.vinylRecord?.nativeElement;
    if (!record || !this.isDraggingVinyl) return;

    if (record.hasPointerCapture(event.pointerId)) {
      record.releasePointerCapture(event.pointerId);
    }

    this.isDraggingVinyl = false;
    this.previousFrameTime = performance.now();
  }

  rotateVinylWithKeyboard(event: KeyboardEvent): void {
    const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!direction) return;

    event.preventDefault();
    this.vinylRotation += direction * 12;
    this.renderVinylRotation();
  }

  private getPointerAngle(event: PointerEvent): number {
    const bounds = this.vinylRecord!.nativeElement.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    return Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
  }

  private renderVinylRotation(): void {
    if (this.vinylRecord) {
      this.vinylRecord.nativeElement.style.transform = `rotate(${this.vinylRotation}deg)`;
    }
  }

  get experienceYears(): number {
    const today = new Date();
    const startYear = 2018;
    const anniversaryMonth = 11; // December (zero-based)
    const anniversaryDay = 1;
    let years = today.getFullYear() - startYear;

    const anniversaryReached =
      today.getMonth() > anniversaryMonth ||
      (today.getMonth() === anniversaryMonth && today.getDate() >= anniversaryDay);

    if (!anniversaryReached) {
      years -= 1;
    }

    return years;
  }

  get heroDescription(): string {
    return this.i18n.lang === 'es'
      ? `Soy Omar Arvelo, desarrollador Java Full-Stack con ${this.experienceYears} años de experiencia. Transformo problemas complejos en experiencias web claras, rápidas y confiables.`
      : `I'm Omar Arvelo, a Java Full-Stack developer with ${this.experienceYears} years of experience. I turn complex problems into clear, fast and reliable web experiences.`;
  }
}
