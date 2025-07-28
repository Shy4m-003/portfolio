import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import Typewriter from 'typewriter-effect/dist/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeInSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
 @ViewChild('typedText') typedText!: ElementRef;

  ngAfterViewInit(): void {
    const typewriter = new Typewriter(this.typedText.nativeElement, {
      loop: true,
      delay: 60,
      deleteSpeed: 40,
    });

    typewriter
      .typeString('Pagasi, the Cosmic Voyager')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Developer. Dreamer. Designer.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Building a universe of code.')
      .pauseFor(1500)
      .deleteAll()
      .start();
  }
}
