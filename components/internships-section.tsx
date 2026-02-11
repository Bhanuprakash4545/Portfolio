'use client'

import { Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const internships = [
  {
    id: '1',
    company: 'Infosys Springboard',
    role: 'Backend Developer Intern',
    duration: 'September 2025 - November 2022',
    description: 'Developed StudyTrack, an AI-driven platform that analyzes student study patterns and provides personalized learning recommendations.',
    tech: ['Python', 'MySQL', 'OpenAI', 'HTML', 'CSS.'],
  },
  {
    id: '2',
    company: 'IBM(Edunet Foundation)',
    role: 'Machine Learning Intern',
    duration: 'June 2025 - July 2025',
    description: 'Developed an employee prediction application to analyze workforce data and generate insights using machine learning techniques.',
    tech: [' Python, Streamlit', 'Pandas', 'Scikit-learn', 'Joblib'],
  },
]

export function InternshipsSection() {
  return (
    <section id="internships" className="py-20 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Internships</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Professional experience and hands-on learning
        </p>

        <div className="grid gap-6">
          {internships.map((internship) => (
            <Card key={internship.id} className="bg-gradient-to-br from-card to-card/80 border-primary/20 hover:border-primary/40 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary group-hover:text-primary/90 transition-colors">{internship.role}</CardTitle>
                    <CardDescription className="text-base">{internship.company}</CardDescription>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground bg-accent/20 px-2 py-1 rounded whitespace-nowrap">
                    {internship.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{internship.description}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/15 text-primary text-xs rounded-full font-medium border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
