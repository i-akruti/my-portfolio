"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Mail } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Alphasignal Newsletter",
      description:
        "Daily AI news hub with curated research, product updates, and launches. Currently serving 240,000 subscribers with an average click rate of ~41%.",
      image: "/ai-newsletter-dashboard.png",
      tags: ["Content Strategy", "Newsletter", "AI Research", "Analytics"],
      liveUrl: "https://alphasignal.ai/last-email",
      githubUrl: null,
    },
    {
      title: "Vision Model Implementation Guides",
      description:
        "Comprehensive implementation tutorials for cutting-edge computer vision models including Segment Anything, YOLOv9, and CLIP at Encord.",
      image: "/computer-vision-tutorial.png",
      tags: ["Computer Vision", "PyTorch", "YOLO", "Segment Anything"],
      liveUrl: "https://encord.com/author/akruti-acharya/",
      githubUrl: null,
    },
    {
      title: "MLOps CV Pipeline Guide",
      description:
        "Comprehensive guide on MLOps tools for computer vision pipelines, covering best practices for model deployment, monitoring, and maintenance in production.",
      image: "/mlops-computer-vision-pipeline.png",
      tags: ["MLOps", "Computer Vision", "Pipeline", "Production ML"],
      liveUrl: "https://neptune.ai/blog/best-mlops-tools-for-computer-vision-project",
      githubUrl: null,
    },
    {
      title: "AI Paper & Product Explainers",
      description:
        "Technical breakdowns of cutting-edge AI research and products, making complex concepts accessible. Featured deep-dive on GPT-5 technical architecture and capabilities.",
      image: "/ai-paper-explainer.png",
      tags: ["Technical Writing", "AI Research", "Product Analysis", "Content Strategy"],
      liveUrl: "https://encord.com/blog/gpt-5-a-technical-breakdown/",
      githubUrl: null,
    },
    {
      title: "Personal Tech Blog",
      description:
        "My personal space where I explore what fascinates me in tech. Currently diving deep into robotics, sharing insights, tutorials, and thoughts on the future of automation.",
      image: "/personal-blog-robotics.png",
      tags: ["Robotics", "Personal Blog", "Technical Insights", "Future Tech"],
      liveUrl: "https://medium.com/@officialakrutiacharya",
      githubUrl: null,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects & Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects and content that showcase my expertise in AI/ML, technical writing, and innovative
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Work
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "https://github.com/i-akruti")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {(!project.liveUrl || project.liveUrl === "#") &&
                    (!project.githubUrl || project.githubUrl === "#") && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => window.open("mailto:officialakrutiacharya@gmail.com", "_blank")}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Inquire
                      </Button>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
