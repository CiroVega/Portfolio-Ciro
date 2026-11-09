export type Lang = "es" | "en";

export interface Dict {
  nav: { about: string; skills: string; projects: string; contact: string };
  hero: {
    title: string;
    text: string;
    contact: string;
    github: string;
    role: string;
  };
  about: { title: string; items: { title: string; text: string }[] };
  skills: { title: string; soft: string; softList: string[] };
  projects: { title: string };
  footer: { title: string; text: string };
}

export const translations: Record<Lang, Dict> = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Desarrollador web en proceso",
      text: "Me gusta convertir ideas en soluciones digitales funcionales, ordenadas y fáciles de usar. Y puedo crear lo que imagines.",
      contact: "Correo",
      github: "GitHub",
      role: "Desarrollador web en proceso",
    },
    about: {
      title: "Sobre mí",
      items: [
        {
          title: "Desarrollador Frontend",
          text: "Desarrollo interfaces adaptables y fáciles de usar con HTML5, CSS, JavaScript y TypeScript, y componentes reutilizables con React, Next.js y Angular.",
        },
        {
          title: "Desarrollador Backend",
          text: "Trabajo con APIs y lógica de servidor en Node.js y ASP.NET, y con bases de datos SQL Server y MongoDB.",
        },
        {
          title: "¿Quién soy?",
          text: "Soy una persona creativa, con ganas de aprender y de crear cosas nuevas.",
        },
      ],
    },
    skills: {
      title: "Mis habilidades",
      soft: "Habilidades interpersonales",
      softList: [
        "Trabajo en equipo",
        "Proactividad",
        "Comunicación efectiva",
        "Atención al detalle",
        "Responsabilidad",
        "Creatividad",
        "Aprendizaje continuo",
        "Resolución de problemas",
        "Adaptabilidad",
      ],
    },
    projects: { title: "Mis proyectos" },
    footer: {
      title: "Contacto",
      text: "Si quieres saber más sobre mi trabajo, no dudes en contactarme.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Web developer in progress",
      text: "I like turning ideas into functional, tidy and easy-to-use digital solutions. And I can create whatever you imagine.",
      contact: "Email",
      github: "GitHub",
      role: "Web developer in progress",
    },
    about: {
      title: "About Me",
      items: [
        {
          title: "Frontend Developer",
          text: "I build responsive, easy-to-use interfaces with HTML5, CSS, JavaScript and TypeScript, and reusable components with React, Next.js and Angular.",
        },
        {
          title: "Backend Developer",
          text: "I work with APIs and server logic in Node.js and ASP.NET, and with SQL Server and MongoDB databases.",
        },
        {
          title: "Who am I?",
          text: "I am a creative person, eager to learn and to build new things.",
        },
      ],
    },
    skills: {
      title: "My Skills",
      soft: "Soft skills",
      softList: [
        "Teamwork",
        "Proactivity",
        "Effective communication",
        "Attention to detail",
        "Responsibility",
        "Creativity",
        "Continuous learning",
        "Problem solving",
        "Adaptability",
      ],
    },
    projects: { title: "My Projects" },
    footer: {
      title: "Contact",
      text: "If you would like to know more about my work, don't hesitate to contact me.",
    },
  },
};
