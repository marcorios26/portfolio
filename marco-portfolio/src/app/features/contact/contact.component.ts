import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly portfolio = inject(PortfolioService);

  readonly profile = this.portfolio.profile;
  readonly status = this.portfolio.contactStatus;

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get mailtoHref(): string {
    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name ?? ''}`);
    const body = encodeURIComponent(`${message ?? ''}\n\n— ${name ?? ''} (${email ?? ''})`);
    return `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // No hay backend en este proyecto: se marca el envío como confirmado
    // y se ofrece el enlace mailto ya compuesto como canal real de contacto.
    this.portfolio.submitContact();
  }

  fieldInvalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }
}
