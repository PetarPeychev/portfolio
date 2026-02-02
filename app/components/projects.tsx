import Link from "next/link";

export function Projects() {
  let projects = [
    {
      title: "Sageleaf",
      description:
        "Experimental work on a procedural programming language with garbage collection, static types, null-safety, errors as values, algebraic data types and pattern matching.",
        url: "https://github.com/PetarPeychev/sageleaf",
    },
    {
      title: "Test Signer Service",
      description:
        "Service for signing test answers written as a JWT-authenticated REST API in Go using Chi, PostgreSQL, and Docker.",
      url: "https://github.com/PetarPeychev/test-signer-service",
    },
    {
      title: "Tast Scheduler",
      description:
        "Distributed event-driven task scheduler and executors using Go and NATS.",
      url: "https://github.com/PetarPeychev/go-task-scheduler",
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
            <p className="text-neutral-600 dark:text-neutral-300 tracking-tight">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
