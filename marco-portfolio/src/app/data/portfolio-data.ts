import { Experience } from '../core/models/experience.model';
import { Project } from '../core/models/project.model';
import { Skill } from '../core/models/skill.model';

export const PROFILE = {
  name: 'Marco Antonio Ríos Ramos',
  role: 'Software Engineer · Java & Angular Developer',
  focus: 'Enterprise & Fullstack Banking Software',
  location: 'La Paz, Bolivia',
  email: 'riosmar026@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marco-antonio-rios-ramos-a8724515b',
  summary:
    'Ingeniero de Software con más de 3 años de experiencia en aplicaciones empresariales. Especializado en Java, Spring Boot, Angular y microservicios, con enfoque en arquitectura limpia y entornos bancarios de alto rendimiento.'
};

export const METRICS = [
  { value: '+3', label: 'años de experiencia', kind: 'add' as const },
  { value: '-50%', label: 'tiempo de atención (Carpeta Digital / DPF)', kind: 'remove' as const },
  { value: '+40%', label: 'eficiencia en gestión de casos de prueba', kind: 'add' as const },
  { value: 'SOLID', label: 'arquitectura limpia como estándar', kind: 'add' as const }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Banco Fie',
    slug: 'banco-fie',
    role: 'Analista y Desarrollador de Software',
    period: 'May 2023 — Feb 2026',
    summary:
      'Desarrollo e integración de servicios Java (Spring Boot) y Angular para procesos bancarios críticos, liderando la modernización de canales digitales.',
    highlights: [
      'Liderazgo técnico del proyecto Carpeta Digital y los módulos de DPF (Depósitos a Plazo Fijo).',
      'Optimización de bases de datos SQL y stored procedures para reducir tiempos de respuesta.',
      'Adopción de Clean Code y principios SOLID como estándar de equipo.'
    ],
    metrics: [
      { label: 'tiempo de atención en Carpeta Digital / DPF', value: '-50%', kind: 'remove' }
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'T-SQL', 'Clean Code', 'SOLID', 'Docker']
  },
  {
    company: 'Jalasoft',
    slug: 'jalasoft',
    role: 'Ingeniero de Software',
    period: 'Jun 2022 — Feb 2023',
    summary:
      'Construcción de un sistema de gestión de casos de prueba con arquitectura de microservicios y comunicación en tiempo real.',
    highlights: [
      'CRUD completo para gestión de casos de prueba, con foco en Domain-Driven Design (DDD).',
      'Estado en frontend con Redux y actualizaciones en vivo mediante WebSockets.',
      'Entornos reproducibles y despliegue con Docker.'
    ],
    metrics: [
      { label: 'eficiencia en gestión de casos de prueba', value: '+40%', kind: 'add' }
    ],
    stack: ['Microservicios', 'DDD', 'Redux', 'WebSockets', 'Docker', 'React', 'Java', 'Spring Boot']
  },
  {
    company: 'Fundación Jala',
    slug: 'fundacion-jala',
    role: 'Ingeniero de Software',
    period: 'Ene 2022 — Jun 2022',
    summary:
      'Desarrollo de microservicios documentados y UI reutilizable dentro de un equipo multidisciplinario.',
    highlights: [
      'Construcción de microservicios con documentación Swagger para consumo por otros equipos.',
      'Interfaces con Angular y React, priorizando componentes reutilizables.',
      'Colaboración directa en definición de contratos de API.'
    ],
    metrics: [],
    stack: ['Microservicios', 'React', 'Swagger', 'Java', 'Spring Boot']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'carpeta-digital',
    name: 'Carpeta Digital',
    status: 'merged',
    description:
      'Plataforma de gestión documental digital para clientes bancarios, integrada con servicios Java/Spring Boot y una interfaz Angular pensada para operadores de atención.',
    impact: '-50% en tiempo de atención al cliente',
    repositoryUrl: 'https://github.com/marcorios26/NCWings',
    tags: ['Angular', 'Spring Boot', 'SQL Server']
  },
  {
    id: 'Gestionador de Blogs y Autores',
    name: 'Gestionador de Blogs y Autores',
    imageUrl: 'assets/images/projects/blog.png',  
    status: 'merged',
    description:
      'Backend REST API para un blog, permitiendo gestionar autores, blogs y comentarios',
    impact: 'Procesos más rápidos y trazables para el equipo de negocio',
    repositoryUrl: 'https://github.com/marcorios26/Administrador-de-autores-blogs-y-comentarios.',
    tags: ['Java', 'Spring Boot', 'SQL', 'Clean Architecture']
  },
  {
    id: 'La Paz Parking ',
    name: 'La Paz Parking ',
    imageUrl: 'assets/images/projects/LaPazParking.jpg',  
    status: 'merged',
    description:
      'Aplicacion movil para la gestion de parqueos en la ciudad de La Paz, Bolivia, permitiendo a los usuarios encontrar y reservar espacios de estacionamiento de manera eficiente.',
    impact: 'reduce el tiempo de búsqueda de estacionamiento en un 30%',
    repositoryUrl: 'https://gitlab.com/marcorios26/lp/-/tree/develop',
    tags: ['React Native', 'MaterialUI', 'TypeScript', 'PostgreSQL','Java','Spring Boot']
  },
   {
    id: 'wings',
    name: 'NCWings',
    imageUrl: 'assets/images/projects/NCWings.jpg',
    status: 'merged',
    description:
      'NCWings fue desarrollado como un proyecto enfocado en simular el funcionamiento de una aerolínea. Permite a los usuarios explorar destinos, seleccionar vuelos y realizar reservas de manera intuitiva.',
    impact: '+40% de eficiencia operativa',
    repositoryUrl: 'https://github.com/marcorios26/NCWings',
    tags: ['React', 'Java ', 'Spring Boot', 'TypeScript', 'HTML', 'CSS', 'MySQL', 'Git']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Angular', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5 / CSS3', category: 'frontend' },
  { name: 'Angular Material', category: 'frontend' },
  { name: 'RxJS', category: 'frontend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Microservicios', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PostgreSQL', category: 'databases-devops' },
  { name: 'SQL Server', category: 'databases-devops' },
  { name: 'MySQL', category: 'databases-devops' },
  { name: 'Sybase', category: 'databases-devops' },
  { name: 'Docker', category: 'databases-devops' },
  { name: 'Git', category: 'databases-devops' },
  { name: 'CI/CD', category: 'databases-devops' },
  { name: 'Linux', category: 'databases-devops' }
];
