import { Card } from "@/components/ui/card"
import { Brain, PenTool, Database, BookOpen, Cog, Rocket } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI and Robotics", // Updated from "AI & Machine Learning"
      description: "PyTorch, OpenCV, Computer Vision, MLOps",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Technical Writing",
      description: "SEO-optimized content, Developer guides, Whitepapers",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science",
      description: "Python, AWS, Model Evaluation, Annotation Workflows",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Content Strategy",
      description: "Editorial planning, Newsletter curation, Community building",
    },
  ]

  const expertise = [
    "Machine Learning",
    "Computer Vision",
    "Robotics",
    "Technical Writing",
    "MLOps",
    "PyTorch",
    "OpenCV",
    "Content Strategy",
    "Newsletter Curation",
  ]

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Akruti Acharya, an AI/ML specialist with a Master's degree from the University of Birmingham, UK,
                where I was a Commonwealth Scholar. My expertise spans computer vision, robotics, and technical content
                creation.
              </p>
              <p>
                Currently serving as Editor in Chief at Alphasignal, where I curate daily AI newsletters for 240,000
                subscribers with an average click rate of ~41%. As a Technical Content Writer at Encord, I've authored
                80+ SEO-optimized ML blogs, including top-ranking guides on YOLOv8, YOLOv9, and Segment Anything.
              </p>
              <p>
                My journey combines hands-on ML development with the ability to make complex AI concepts accessible to
                diverse audiences. When I'm not writing about AI breakthroughs, you'll find me hiking, collecting rocks
                and wildflowers, or watching Formula 1.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/akruti-photo.jpeg"
                alt="Akruti Acharya - AI/ML Specialist"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Brain className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-card">
                <div className="flex justify-center mb-4 text-accent">{skill.icon}</div>
                <h4 className="font-semibold mb-2 text-card-foreground">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Currently Leveling Up In</h3>
          <Card className="p-8 bg-card text-center">
            <Cog className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-card-foreground mb-4">Agentic AI Development</h4>
            <p className="text-muted-foreground leading-relaxed">
              Exploring advanced AI agent architectures, multi-agent systems, and autonomous decision-making frameworks
              to build more intelligent and adaptive AI solutions.
            </p>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Building Right Now</h3>
          <Card className="p-8 bg-card">
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-card-foreground mb-4">
                  Claude Code: Agentic Coding Assistant
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm taking Claude Code: A Highly Agentic Coding Assistant by DeepLearning.AI, learning how to plan,
                  test, refactor, and debug projects with Claude. It's helping me refine my skills for creating RAG
                  chatbots, dashboards, and Figma-to-web-app interfaces using agentic AI.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Education</h3>
            <Card className="p-6 bg-card">
              <h4 className="font-semibold text-card-foreground mb-2">
                MSc in Artificial Intelligence and Machine Learning
              </h4>
              <p className="text-muted-foreground mb-2">University of Birmingham, UK</p>
              <p className="text-sm text-muted-foreground">Commonwealth Scholar</p>
              <p className="text-sm text-muted-foreground mt-2">
                Thesis: Implemented pose estimation on apes using OpenPose for behavioral study
              </p>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Current Roles</h3>
            <div className="space-y-4">
              <Card className="p-6 bg-card">
                <h4 className="font-semibold text-card-foreground mb-1">Editor in Chief</h4>
                <p className="text-muted-foreground text-sm mb-2">Alphasignal • Nov 2024 - Present</p>
                <p className="text-sm text-muted-foreground">240,000 subscribers with 41% average click rate</p>
              </Card>

              <Card className="p-6 bg-card">
                <h4 className="font-semibold text-card-foreground mb-1">Technical Content Writer</h4>
                <p className="text-muted-foreground text-sm mb-2">Encord • Mar 2023 - Present</p>
                <p className="text-sm text-muted-foreground">
                  Authored 80+ SEO-optimized ML blogs and developer guides
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
