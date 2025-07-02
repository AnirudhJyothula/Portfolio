
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { experience, education, personalInfo } from '@/data/portfolio';

const Resume = () => {
  const handleDownload = () => {
    // Create a simple resume content as a downloadable HTML file
    const resumeContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${personalInfo.name} - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 40px; }
        .section { margin-bottom: 30px; }
        .section h3 { color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
        .experience-item, .education-item { margin-bottom: 20px; }
        .experience-item h4, .education-item h4 { margin: 0; color: #1f2937; }
        .company, .institution { color: #3b82f6; font-weight: bold; }
        .period { color: #6b7280; font-size: 14px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #e5e7eb; padding: 5px 15px; border-radius: 20px; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>${personalInfo.name}</h1>
        <h2>${personalInfo.role}</h2>
        <p>${personalInfo.email} | ${personalInfo.location}</p>
    </div>
    
    <div class="section">
        <h3>Professional Summary</h3>
        <p>${personalInfo.bio} Experienced in building scalable web applications, implementing best practices, and collaborating with cross-functional teams to deliver high-quality software solutions.</p>
    </div>
    
    <div class="section">
        <h3>Professional Experience</h3>
        ${experience.map(exp => `
            <div class="experience-item">
                <h4>${exp.title}</h4>
                <div class="company">${exp.company}</div>
                <div class="period">${exp.period}</div>
                <p>${exp.description}</p>
            </div>
        `).join('')}
    </div>
    
    <div class="section">
        <h3>Education</h3>
        ${education.map(edu => `
            <div class="education-item">
                <h4>${edu.degree}</h4>
                <div class="institution">${edu.institution}</div>
                <div class="period">${edu.period}</div>
                <p>${edu.description}</p>
            </div>
        `).join('')}
    </div>
    
    <div class="section">
        <h3>Core Technologies</h3>
        <div class="skills">
            <span class="skill">React</span>
            <span class="skill">TypeScript</span>
            <span class="skill">Node.js</span>
            <span class="skill">PostgreSQL</span>
            <span class="skill">AWS</span>
           
        </div>
    </div>
</body>
</html>`;
    
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name}_Resume.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Resume</h2>
            <Button onClick={handleDownload} className="flex items-center gap-2 mx-auto">
              <Download size={16} />
              Download Resume
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8 shadow-lg">
            {/* Header */}
            <div className="text-center mb-8 pb-8 border-b border-border">
              <h1 className="text-3xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-primary mb-4">{personalInfo.role}</p>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {personalInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio} Experienced in building scalable web applications, 
                implementing best practices, and collaborating with cross-functional teams 
                to deliver high-quality software solutions.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Professional Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-6 border-l-2 border-primary"
                  >
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-primary"
                  >
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <p className="text-muted-foreground mt-1">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Java","Springboot","React", "TypeScript", "Python", "PostgreSQL", "AWS",].map(skill => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
