import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "Bootstrap", "JavaScript"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20
    "
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div
            className="rounded-xl p-8 border-white/10 border hover:translate-y-1 
        transition-all"
          >
            <p className="text-gray-300 mb-6">
              Passionate about building practical solutions and solving
              real-world problems through clean and thoughtful web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(50,130,224.6,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid place-items-center gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Data Science</strong> - Swami Vivekananda
                  University (2022-2026)
                </li>
                <li>
                  Relevant Coursework :{" "}
                  <strong>
                    Data Structure, Web Development, Data Base Management System
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
