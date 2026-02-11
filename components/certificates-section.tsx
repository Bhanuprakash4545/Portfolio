'use client'

import { Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const certificates = [
  {
    title: 'AI for Beginners',
    organization: 'HP Life',
    date: 'June 2025',
    credentialUrl: 'https://drive.google.com/file/d/1Pxst8huZAonGh7DvD_ZpTpI5fq1nZo6a/view?usp=sharing',
  },
  {
    title: 'Object Oriented Programming using Python',
    organization: 'Infosys Springboard',
    date: 'June 2025',
    credentialUrl: 'https://drive.google.com/file/d/1EGWnJZL3pxMtY2x6Iw3c9YEbWM4pfhj0/view?usp=sharing',
  },
  {
    title: 'Database Management System',
    organization: 'Infosys Springboard',
    date: 'June 2025',
    credentialUrl: 'https://drive.google.com/drive/folders/1QbMMPloFfXoEw370_26MkMWqKpE92nCy?usp=drive_link',
  },
  {
    title: 'Cloud Foundations',
    organization: 'AWS Academy',
    date: 'June 2025',
    credentialUrl: 'https://drive.google.com/file/d/1UCqzd_lWAUzBoaOeXqNC5NZiIZSIB_IE/view?usp=sharing',
  },
  {
    title: 'Programming using Java',
    organization: 'Infosys Springboard',
    date: 'December 2024',
    credentialUrl: 'https://drive.google.com/file/d/1sqEIpxa7sGwBXi-1gvgqgtMKE5KHFuKX/view?usp=sharing',
  },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Professional certifications and training achievements
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.title} className="bg-gradient-to-br from-card to-card/80 border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                    <CardDescription>{cert.organization}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                  <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
