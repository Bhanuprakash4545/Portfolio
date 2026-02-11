'use client'

import {
  Code2,
  Database,
  Layers,
  GitBranch,
  Zap,
  Cloud,
  Settings,
  Terminal,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js','Django', 'PostgreSQL', 'My SQL'],
  },
  {
    name: 'Programming Languages',
    icon: Layers,
    skills: ['Java','Python'],
  },
  {
    name: 'DevOps & Tools',
    icon: Cloud,
    skills: ['Git/GitHub','AWS', 'Vscode'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          A comprehensive overview of my technical expertise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.name} className="hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-2 rounded-full bg-accent text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional tools */}
        <Card className="mt-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Time Management', 'Leadership', 'Effective Communication', 'Adaptability'].map(
                (tool) => (
                  <div
                    key={tool}
                    className="px-3 py-2 rounded-lg bg-accent text-sm text-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tool}
                  </div>
                ),
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
