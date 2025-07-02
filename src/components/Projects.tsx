import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter, Code, Star, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'freelance') {
      // Assuming you want to show only freelance projects when 'freelance' is selected
      return project.category === 'freelance';
    } else {
      // Filter by technology
      return project.tech.includes(filter);
    }
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-background/90 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      <div className="absolute top-32 left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Code size={16} />
              My Work
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {filter === 'all' ? 'All' : filter === 'freelance' ? 'Freelance' : `${filter} `}
              <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>
          
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className="flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300"
              >
                <Filter size={16} />
                All Projects
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === 'freelance' ? 'default' : 'outline'}
                onClick={() => setFilter('freelance')}
                className="flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300"
              >
                Freelance
              </Button>
            </motion.div>
            
            {allTech.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === tech ? 'default' : 'outline'}
                  onClick={() => setFilter(tech)}
                  className="rounded-full px-6 py-3 font-medium transition-all duration-300"
                >
                  {tech}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                <div className="bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-blue-500/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 left-4"
                      >
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Star size={12} fill="currentColor" />
                          Featured
                        </span>
                      </motion.div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                        Live Website
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        asChild 
                        size="sm"
                        className="flex-1 rounded-full group/btn bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                          Live Site
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild 
                        className="flex-1 rounded-full border-primary/20 hover:bg-primary/10"
                      >
                        <a href="https://github.com/Anirudh-98" target="_blank" rel="noopener noreferrer">
                          <Github size={14} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
