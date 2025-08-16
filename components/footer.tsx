import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Portfolio</p>
            <p className="text-background/70 text-sm">Crafting digital experiences with passion</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> by a passionate developer
          </p>
          <p className="text-background/50 text-xs mt-2">© 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
