'use client'

import { GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const education = [
  {
    id: '1',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    duration: '2023 - Present',
     Percentage: '72%',
  },
  {
    id: '2',
    degree: 'Intermediate',
    institution: 'Aditya Junior College',
    duration: '2021 - 2023',
    Percentage: '75.6%',
  },
  {
    id: '3',
    degree: 'Matriculation',
    institution: 'Sunshine School',
    duration: '2020 - 2021',
    Percentage: '99%',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          My academic journey
        </p>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

          {education.map((edu, index) => (
            <Card key={edu.id} className="ml-24 bg-gradient-to-br from-card to-card/80 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="absolute -left-8 top-8 w-16 h-16 bg-primary/10 border-4 border-background rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">{edu.institution}</CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground bg-accent/20 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                
                <p className="text-sm text-primary font-medium">Percentage: {edu.Percentage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
