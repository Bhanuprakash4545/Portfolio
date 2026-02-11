'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Get to know more about my background and expertise
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-card to-card/80 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Bhanu Prakash! I'm a passionate full-stack developer. 
                My journey started with a curiosity about creating interactive web experiences, and it has evolved into a career 
                dedicated to crafting scalable, performant applications that users love.
              </p>
              <p>
                I'm obsessed with clean code, thoughtful design, and delivering exceptional user experiences. 
                Every project I work on reflects my commitment to excellence and continuous improvement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">What I Do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground text-primary">Frontend Development:</span> Building 
                responsive, accessible interfaces with React, Next.js, TypeScript, and Tailwind CSS
              </p>
              <p>
                <span className="font-semibold text-foreground text-primary">Backend Development:</span> Creating scalable 
                APIs, databases, and real-time systems with Node.js, PostgreSQL, and MongoDB
              </p>
              <p>
                <span className="font-semibold text-foreground text-primary">Full Stack Solutions:</span> End-to-end development 
                with modern frameworks and deployment on Vercel, Firebase, or custom servers
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clean Code',
                  description: 'I believe in writing maintainable, readable code that others can understand and build upon.',
                },
                {
                  title: 'User Focused',
                  description: 'Every design decision is made with the end user in mind, ensuring the best experience possible.',
                },
                {
                  title: 'Continuous Learning',
                  description: 'Technology evolves constantly, and I stay updated with the latest tools and best practices.',
                },
              ].map((value) => (
                <div key={value.title}>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
