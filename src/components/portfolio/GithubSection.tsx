import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { Github, ExternalLink, Code2 } from "lucide-react";

const repos = [
  { 
    name: "todos_assignment", 
    desc: "A feature-rich <span className='text-foreground'>React.js</span> task management application with complex state handling and persistent data storage.",
    lang: "React.js",
    url: "https://github.com/Saf-reen/todos_assignment"
  },
  { 
    name: "medibuddy", 
    desc: "A healthcare platform interface focused on <span className='text-foreground'>Responsive Web Application</span> design and intuitive user experience.",
    lang: "JavaScript",
    url: "https://github.com/Saf-reen/medibuddy"
  },
  { 
    name: "stores_roxiler", 
    desc: "An enterprise-level <span className='text-foreground'>Full Stack Project</span> dashboard with advanced filtering, sorting, and data visualization.",
    lang: "React.js",
    url: "https://github.com/Saf-reen/stores_roxiler"
  }
];

const GithubSection = () => (
  <CinematicSection id="github" className="py-8 md:py-10 px-6 bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-4 font-body">
            Open Source
          </p>
          <h2 className="cinema-heading text-3xl md:text-4xl mb-4">
            Coding Activity & Repositories
          </h2>
          <p className="text-primary-foreground/60 text-sm font-body max-w-lg">
             Explore my latest projects and contributions on GitHub.
          </p>
        </div>
        <a 
          href="https://github.com/Saf-reen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold text-sm flex items-center gap-2 hover:scale-110 transition-transform duration-300"
        >
          <Github size={18} />
          View GitHub Profile
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group p-8 bg-primary-foreground/10 rounded-2xl border border-primary-foreground/10 hover:border-peach/50 hover:shadow-2xl hover:shadow-peach/5 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-6">
               <div className="p-3 bg-primary-foreground/10 rounded-xl">
                  <Code2 size={22} className="text-peach" />
               </div>
               <ExternalLink size={16} className="text-primary-foreground/30 group-hover:text-peach transition-colors duration-500" />
            </div>
            <h3 className="font-display text-xl mb-3 group-hover:text-peach transition-colors duration-500">
               {repo.name}
            </h3>
            <p 
               className="text-primary-foreground/60 font-body text-xs mb-6 line-clamp-2"
               dangerouslySetInnerHTML={{ __html: repo.desc }}
            />
            <div className="flex items-center gap-2 text-peach text-[10px] tracking-widest uppercase font-bold">
               <span className="w-2 h-2 rounded-full bg-peach" />
               {repo.lang}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default GithubSection;
