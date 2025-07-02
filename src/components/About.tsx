
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills, experience, education, certifications } from '@/data/portfolio';
import { Briefcase, GraduationCap, User, Zap, Award, Rocket, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background/95 to-background/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <User size={16} />
              About Me
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get to <span className="text-primary">Know Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative solutions and bringing ideas to life through code
            </p>
          </div>
          
          {/* Bio Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-blue-500 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Zap className="text-primary" size={24} />
                  </div>
                  Who I Am
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                  I recently completed my master's degree in Cyber Security at Coventry University, where I gained deep insights into digital threats, secure coding practices, compliance frameworks, and the secure development lifecycle. This education has given me a strong foundation in both software engineering and cybersecurity, allowing me to bridge the gap between development and security. I bring a unique blend of engineering expertise and security-first thinking to every project—whether it's building robust features or mitigating risks in today's fast-paced tech landscape.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Rocket size={16} />
                      Innovation Focused
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Target size={16} />
                      Problem Solver
                    </span>
                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Eye size={16} />
                      Detail Oriented
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3 justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Zap className="text-primary" size={24} />
                </div>
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <skill.icon className="text-primary" size={32} />
                    </div>
                    <h4 className="text-foreground font-semibold text-lg mb-2">{skill.name}</h4>
                    {/* <div className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full inline-block">
                      Expert
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience and Education Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-primary" size={24} />
                </div>
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="pl-2">
                      <h4 className="text-xl font-bold text-foreground mb-2">{exp.title}</h4>
                      <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-3 font-medium">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-primary font-semibold text-lg mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3 font-medium">{edu.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}

                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-6 text-foreground flex items-center gap-3">
                    <Award className="text-primary" size={20} />
                    Certifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certifications.map((cert, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-medium text-center hover:bg-primary/20 transition-colors"
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
