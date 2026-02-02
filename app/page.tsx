import { BlogPosts } from "app/components/posts";
import { Projects } from "app/components/projects";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="items-center">
        <h1 className="flex mb-8 text-2xl font-semibold tracking-tighter align-middle">
          <Image
            src={`/logo.png`}
            alt="penrose triangle logo"
            width="48"
            height="48"
            className="mr-3"
          />
          Petar Peychev
        </h1>
      </div>

      <p className="mb-4">
        computer programmer, data wrangler, language design enthusiast
        <br />
        <br />
        former software engineer at{" "}
        <a
          href="https://lovesparkle.life/"
          className="text-sky-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sparkle Wellness
        </a>
        <br />
        former data engineer at{" "}
        <a
          href="https://www.theverygroup.com/"
          className="text-sky-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Very Group
        </a>
        <br />
        former software engineer at{" "}
        <a
          href="https://www.jaguarlandrover.com/"
          className="text-sky-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jaguar Land Rover
        </a>
        <br />
      </p>

      <hr />
      <h2 className="mt-4 mb-4 text-xl">Blog Posts</h2>
      <BlogPosts />

      <hr />
      <h2 className="mt-4 mb-4 text-xl">Projects</h2>
      <Projects />
    </section>
  );
}
