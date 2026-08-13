import { Injectable, computed, signal } from '@angular/core';
import { EXPERIENCES, METRICS, PROFILE, PROJECTS, SKILLS } from '../data/portfolio-data';
import { SkillCategory, SkillCategoryMeta } from '../core/models/skill.model';

export type ContactStatus = 'idle' | 'sending' | 'sent' | 'error';

const CATEGORY_META: SkillCategoryMeta[] = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases-devops', label: 'DB & DevOps' }
];

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // ---- Datos estáticos del CV (fuente de verdad) ----
  readonly profile = PROFILE;
  readonly metrics = METRICS;
  readonly experiences = EXPERIENCES;
  readonly projects = PROJECTS;
  readonly categories = CATEGORY_META;

  // ---- Estado reactivo con Signals ----

  /** Categoría de habilidades seleccionada en el filtro interactivo. */
  readonly selectedCategory = signal<SkillCategory | 'all'>('all');

  /** Habilidades filtradas: se recalcula automáticamente al cambiar el filtro. */
  readonly filteredSkills = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return SKILLS;
    return SKILLS.filter((skill) => skill.category === category);
  });

  /** Estado del formulario de contacto (idle → sending → sent/error). */
  readonly contactStatus = signal<ContactStatus>('idle');

  setCategory(category: SkillCategory | 'all'): void {
    this.selectedCategory.set(category);
  }

  submitContact(): void {
    this.contactStatus.set('sending');
    // Simulación de envío: no hay backend en este proyecto, así que el
    // formulario resuelve el estado y ofrece el enlace mailto/LinkedIn
    // como canal real de contacto (ver ContactComponent).
    setTimeout(() => this.contactStatus.set('sent'), 700);
  }

  resetContact(): void {
    this.contactStatus.set('idle');
  }
}
