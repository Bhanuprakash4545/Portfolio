'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Attendance Management System',
    description: 'Secure role-based attendance management system for students, faculty, and administrators.',
    longDescription: 'A comprehensive attendance management solution featuring role-based access for students, faculty, and admins, faculty-driven attendance marking and updates, real-time record viewing, and a centralized MySQL database for secure storage, organization, and retrieval of attendance data.',

    tech: ['Java', 'Java Swing', 'MySQL'],
    image: '/p1.png',
    githubUrl: 'https://github.com/Bhanuprakash4545/Smart-Attendance-Management-System',
  },
  {
    id: '2',
    title: 'Recommending Study Habits Based on Student Behaviour ',
    description: 'AI-driven platform for monitoring student study patterns and learning behaviors.',
longDescription: 'An intelligent learning analytics platform that tracks student study patterns, analyzes learning behavior trends, delivers personalized recommendations, smart reminders, and progress tracking, and integrates the OpenAI API to identify strengths, weaknesses, and support consistent study habit formation.',

    tech: [' Django (Python)', 'MySQL', 'HTML', 'CSS', 'OpenAI API'],
    image: '/p2.png',
    githubUrl: 'https://github.com/Bhanuprakash4545/Student_studytracker',
  },
   
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Here are some of my recent projects showcasing my skills and experience
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-96 rounded-lg overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Title and Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-foreground/80 text-sm transition-all duration-300 line-clamp-2 ${
                    hoveredId === project.id ? 'opacity-0 h-0' : 'opacity-100'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Tech badges with animation */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/30 text-primary-foreground text-xs rounded-full font-medium border border-primary/50 transition-all duration-300"
                      style={{
                        animation: hoveredId === project.id ? `slideIn 0.3s ease-out ${idx * 50}ms forwards` : 'none',
                        opacity: hoveredId === project.id ? 1 : 0.9,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover overlay content */}
                <div className={`transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <p className="text-foreground/90 text-sm leading-relaxed mb-4">{project.longDescription}</p>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-background/20 border-foreground/30 text-foreground hover:bg-foreground/20"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>

              {/* Animated border glow on hover */}
              <div className={`absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 ${
                hoveredId === project.id
                  ? 'opacity-100 shadow-[inset_0_0_20px_rgba(147,51,234,0.3)]'
                  : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

<style>{`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
