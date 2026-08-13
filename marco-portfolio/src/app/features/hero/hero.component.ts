import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

interface TerminalLine {
  prefix: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile;

  /** Líneas que se muestran, ya terminadas de escribir. */
  readonly printedLines = signal<TerminalLine[]>([]);
  /** Texto de la línea que se está escribiendo actualmente. */
  readonly typingText = signal('');
  /** Cursor parpadeante visible mientras la terminal "trabaja". */
  readonly showCursor = signal(true);

  private readonly script: TerminalLine[] = [];
  private timeouts: ReturnType<typeof setTimeout>[] = [];

  constructor(portfolio: PortfolioService) {
    this.profile = portfolio.profile;
    this.script = [
      { prefix: '$', text: 'whoami' },
      { prefix: '>', text: this.profile.name },
      { prefix: '>', text: this.profile.role },
      { prefix: '>', text: `focus: ${this.profile.focus}` },
      { prefix: '>', text: `location: ${this.profile.location}` }
    ];
  }

  ngOnInit(): void {
    this.runScript(0, 0);
  }

  ngOnDestroy(): void {
    this.timeouts.forEach((t) => clearTimeout(t));
  }

  private runScript(lineIndex: number, charIndex: number): void {
    if (lineIndex >= this.script.length) return;

    const line = this.script[lineIndex];
    if (charIndex <= line.text.length) {
      this.typingText.set(line.text.slice(0, charIndex));
      const delay = line.prefix === '$' ? 70 : 18;
      this.timeouts.push(setTimeout(() => this.runScript(lineIndex, charIndex + 1), delay));
    } else {
      this.printedLines.update((lines) => [...lines, line]);
      this.typingText.set('');
      const pause = line.prefix === '$' ? 260 : 120;
      this.timeouts.push(setTimeout(() => this.runScript(lineIndex + 1, 0), pause));
    }
  }

  get currentPrefix(): string {
    const nextIndex = this.printedLines().length;
    return this.script[nextIndex]?.prefix ?? '>';
  }
}
