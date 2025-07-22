import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
          "
            >
              <h3 className="text-xl font-bold mb-2">Todo App</h3>
              <p className="text-gray-400 mb-3">
                A responsive ToDo app (React) that saves tasks in localStorage
                so they persist even after a page refresh.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://nilanka-todo-app.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
          "
            >
              <h3 className="text-xl font-bold mb-2">
                Random Password Genertor
              </h3>
              <p className="text-gray-400 mb-3">
                A responsive random password generator (React) that helps to
                create strong password of given length.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://nilanka-random-password-generator.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
