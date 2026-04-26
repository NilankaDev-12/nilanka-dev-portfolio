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
              <h3 className="text-xl font-bold mb-2">Luminary</h3>
              <p className="text-gray-400 mb-3">
                A modern social media application featuring nested comments for
                structured discussions, an interactive like system for
                engagement, and real-time chat for instant communication. The
                platform focuses on creating a seamless and dynamic user
                experience by combining content sharing with live interaction.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://luminary-nilanka.vercel.app/"
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
              <h3 className="text-xl font-bold mb-2">Multi-Tasking App</h3>
              <p className="text-gray-400 mb-3">
                A responsive ToDo and Expense Manager app built with React and
                Express that manages data from a backend server (Render),
                ensuring persistence and consistency. Authentication may take a
                few seconds to load.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://nilanka-multi-tasking.netlify.app//"
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
