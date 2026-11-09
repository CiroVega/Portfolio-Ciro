import { TechGroup } from "../types";

import csharp from "../assets/technologies/cshapt.png";
import cpp from "../assets/technologies/cpp.png";
import java from "../assets/technologies/java.png";
import kotlin from "../assets/technologies/Kotlin.png";
import python from "../assets/technologies/python.png";
import js from "../assets/technologies/js.png";
import ts from "../assets/technologies/ts.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import react from "../assets/technologies/React.png";
import nextjs from "../assets/technologies/nextjs.png";
import reactNative from "../assets/technologies/react-native.png";
import angular from "../assets/technologies/Angular.png";
import asp from "../assets/technologies/asp.png";
import bootstrap from "../assets/technologies/bootstrap.png";
import sql from "../assets/technologies/sql.png";
import mongodb from "../assets/technologies/mongodb.png";
import node from "../assets/technologies/node.png";
import drupal from "../assets/technologies/drupal.png";
import vscode from "../assets/technologies/vscode.png";
import vs from "../assets/technologies/vs.png";
import android from "../assets/technologies/android.png";
import cursor from "../assets/technologies/cursor.png";
import git from "../assets/technologies/git.png";
import github from "../assets/technologies/github.svg";

export const techGroups: TechGroup[] = [
  {
    title: "Lenguajes",
    items: [
      { name: "C#", icon: csharp },
      { name: "C++", icon: cpp },
      { name: "Java", icon: java },
      { name: "Kotlin", icon: kotlin },
      { name: "Python", icon: python },
      { name: "JavaScript", icon: js },
      { name: "TypeScript", icon: ts },
    ],
  },
  {
    title: "Marcado y estilos",
    items: [
      { name: "HTML5", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    title: "Frameworks y librerías",
    items: [
      { name: "React", icon: react },
      { name: "Next.js", icon: nextjs },
      { name: "React Native", icon: reactNative },
      { name: "Angular", icon: angular },
      { name: "ASP.NET", icon: asp },
      { name: "Bootstrap", icon: bootstrap },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "SQL Server", icon: sql },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    title: "Entorno de ejecución",
    items: [{ name: "Node.js", icon: node }],
  },
  {
    title: "CMS",
    items: [{ name: "Drupal", icon: drupal }],
  },
  {
    title: "Editores e IDEs",
    items: [
      { name: "VS Code", icon: vscode },
      { name: "Visual Studio", icon: vs },
      { name: "Android Studio", icon: android },
      { name: "Cursor", icon: cursor },
    ],
  },
  {
    title: "Control de versiones",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
    ],
  },
];