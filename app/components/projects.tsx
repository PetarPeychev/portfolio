import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function Projects() {
  let projects = [
    {
      title: "Chiron",
      description:
        "Personalised chess coach which collects game data, highlights common mistakes and offers better alternatives. Built with Python, Django, Flask, Materialize CSS and deployed on GCP.",
      url: "https://github.com/PetarPeychev/chiron",
    },
    {
      title: "Test Signer Service",
      description:
        "Service for signing test answers written as a JWT-authenticated REST API in Go using Chi, PostgreSQL, and Docker.",
      url: "https://github.com/PetarPeychev/test-signer-service",
    },
    {
      title: "Lion",
      description:
        "Stack-based concatenative programming language with an interpreter written in Python.",
      url: "https://github.com/PetarPeychev/lion",
    },
    {
      title: "CHIP-8 Emulator",
      description: "CHIP-8 emulator written in Go.",
      url: "https://github.com/PetarPeychev/chip-8-emulator",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <Link
          key={project.title}
          className="flex flex-col space-y-1 mb-4"
          href={project.url}
        >
          <div className="">
            <h3 className="text-neutral-900 dark:text-neutral-100 text-lg tracking-tight">
              {project.title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-200 tracking-tight">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
