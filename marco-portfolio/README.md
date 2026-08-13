# Portafolio — Marco Antonio Ríos Ramos

Portafolio profesional construido con **Angular 17** usando **Standalone
Components** y **Signals**, sin NgModules.

## 1. Instalación

Este proyecto se entrega sin `node_modules` (no hay conexión a internet en el
entorno donde se generó). Para correrlo:

```bash
npm install
npm start        # ng serve → http://localhost:4200
npm run build    # build de producción en dist/
```

Requiere Node.js 18.13+ y Angular CLI (`npm i -g @angular/cli`, opcional si
usas `npx ng`).

## 2. Arquitectura de carpetas

```
src/app/
├── app.component.ts/html/css      → shell: topbar sticky + footer
├── app.config.ts / app.routes.ts  → configuración standalone (providers, router)
├── core/models/                   → interfaces (Experience, Project, Skill)
├── data/portfolio-data.ts         → contenido real del CV (fuente única de datos)
├── services/portfolio.service.ts  → estado con Signals (filtro de skills, form de contacto)
└── features/
    ├── hero/         → terminal animada "whoami"
    ├── about/         → resumen + métricas clave
    ├── experience/    → timeline estilo "git log"
    ├── projects/      → tarjetas estilo "PR mergeado"
    ├── skills/        → filtro interactivo por categoría (Signals + computed)
    └── contact/       → formulario reactivo + enlaces directos
```

Cada sección es un **componente standalone independiente**: se importa
directamente en `app.component.ts` sin pasar por un NgModule.

## 3. Signals: dónde y por qué

- `PortfolioService.selectedCategory` (signal) + `filteredSkills` (computed):
  el filtro de habilidades no dispara ningún ciclo de detección de cambios
  manual — el template reacciona solo porque lee un signal.
- `PortfolioService.contactStatus` (signal): controla `idle → sending → sent`
  en el formulario de contacto sin necesidad de un `BehaviorSubject`.
- `HeroComponent` usa signals (`printedLines`, `typingText`) para animar el
  efecto de "escritura" de la terminal sin RxJS.

## 4. Lazy loading

Como es un sitio de una sola página (no hay rutas que dividir), el lazy
loading se aplica con **`@defer (on viewport)`** de Angular 17 en las
secciones que están por debajo del pliegue (`Proyectos`, `Habilidades`,
`Contacto` — ver `app.component.html`). Angular las compila en un chunk
separado y las descarga solo cuando el usuario se acerca a esa parte de la
página.

## 5. Identidad visual — concepto "Ledger & Diff"

El CV de Marco está narrado en métricas de mejora (`-50%` tiempo de
atención, `+40%` eficiencia). El diseño toma ese vocabulario y lo convierte
en el lenguaje visual de todo el sitio:

- **Terminal + git log**: el hero "escribe" un `whoami` en vivo, y la
  experiencia laboral se presenta como un `git log` con un commit por
  empresa.
- **Colores diff**: verde menta (`--diff-add`) para logros que suman, coral
  (`--diff-remove`) para reducciones — igual que un diff de código.
- **Tipografía**: `JetBrains Mono` para titulares/datos (identidad de
  desarrollador), `Inter` para texto de lectura.

Los tokens de color y tipografía viven en `src/styles.css` como variables
CSS (`:root`), así que cambiar la paleta o las fuentes es editar un solo
archivo.

## 6. Accesibilidad

- Foco visible (`:focus-visible`) en todos los elementos interactivos.
- `prefers-reduced-motion` respetado (desactiva animaciones si el usuario lo
  pide en su sistema).
- Botones de filtro con `aria-pressed`; formulario con `aria-live` en
  resultados y mensajes de error asociados a cada campo.

## 7. Próximos pasos sugeridos

- Reemplazar el envío simulado del formulario de contacto por un endpoint
  real (Formspree, un microservicio propio en Spring Boot, etc.) — hoy
  ofrece un `mailto:` prellenado como canal real.
- Añadir `@angular/material` si prefieres componentes prearmados en vez de
  las clases CSS custom incluidas.
- Añadir tests unitarios (`ng generate` ya deja `.spec.ts` listos si los
  necesitas).
