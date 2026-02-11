'use client'

import { Trophy, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const achievements = [
  {
    id: '1',
    type: 'achievement',
    title: 'Naukri Campus Young Turks',
    organization: 'Naukri',
    year: '2025',
    description: 'Awarded for securing a top merit position among nationwide participants.',
  },
  {
    id: '2',
    type: 'hackthon',
    title: 'Loreal Sustainability Challenge 2025',
    organization: 'Loreal',
    year: '2025',
    description: 'Participant.',

  },
  {
    id: '3',
    type: 'hackathon',
    title: 'Hackground India 2k25',
    organization: 'Techverse Nexus Community',
    year: '2025',
    description: 'Participant',
  },
  {
    id: '4',
    type: 'hackthon',
    title: 'HP Power Lab 2.0',
    organization: 'HP',
    year: '2025',
    description: 'Participant',
  },
   {
    id: '5',
    type: 'hackthon',
    title: 'Code-A-Haunt',
    organization: 'Coding Blocks (LPU)',
    year: '2024',
    description: 'Participant',
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Achievements & Hackathons</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Recognitions, awards, and hackathon victories
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <Card key={item.id} className="ml-24 bg-gradient-to-br from-card to-card/80 border-primary/20 hover:border-primary/40 transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="absolute -left-8 top-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-background rounded-full flex items-center justify-center">
                      {item.type === 'hackathon' ? (
                        <Zap className="w-8 h-8 text-primary" />
                      ) : (
                        <Trophy className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-primary group-hover:text-primary/90 transition-colors">
                          {item.title}
                        </CardTitle>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          item.type === 'hackathon'
                            ? 'bg-accent/30 text-accent'
                            : 'bg-primary/30 text-primary'
                        }`}>
                          {item.type === 'hackathon' ? 'Hackathon' : 'Achievement'}
                        </span>
                      </div>
                      <CardDescription className="text-base">{item.organization}</CardDescription>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground bg-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{item.description}</p>
              
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
