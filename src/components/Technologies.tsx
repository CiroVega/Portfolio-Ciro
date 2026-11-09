"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { techGroups } from "../data/technologies";
import { softSkills } from "../data/softSkills";
import { useLang } from "../context/LanguageContext";

export default function Technologies() {
  const { t } = useLang();

  return (
    <section id="skills" className="skills">
      <h2>{t.skills.title}</h2>

      <div className="skills-caja">
        <div className="grupo grupo-izq">
          <div className="grupo-items">
            {techGroups.flatMap((grupo) =>
              grupo.items.map((tech) => (
                <div key={tech.name} className="tech">
                  <Image src={tech.icon} alt={tech.name} width={64} height={64} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="grupo grupo-der">
          <h3>{t.skills.soft}</h3>
          <ul className="habilidades">
            {softSkills.map((skill, i) => (
              <li key={skill.name}>
                <i className={`bi bi-${skill.icon}`}></i> {t.skills.softList[i]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
