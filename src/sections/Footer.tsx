import Link from "next/link"
import { Github, Linkedin, Twitter } from 'lucide-react'
import Logo from '@/assets/logo.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 bg-background border-t-[1px] mt-5 border-strip">
      <div className="container px-4 mx-auto">
        {/* Logo and Copyright */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center justify-start  gap-x-2">
              {/* <div className="h-6 w-6 bg-primary rounded" /> */}

            <Logo width={20}/>
              <span className="text-xl font-semibold">Hookdeck</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Hookdeck Technologies Inc. © {currentYear}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-1">★★★★★</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Event Gateway</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Changelog</Link></li>
            </ul>
          </div>

          {/* Tools & References */}
          <div className="space-y-4">
            <h3 className="font-semibold">Tools & references</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Hookdeck CLI</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Hookdeck Console</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">API Reference</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">CLI Reference</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terraform Provider</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Golang SDK</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div className="space-y-4">
            <h3 className="font-semibold">Learn</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Receive webhooks</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Send webhooks</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Third-party routing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Async API Gateway</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Hookdeck Guides</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Platform Guides</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Webhook Guides</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Company</Link></li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center">
                  Careers
                  <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">Hiring</span>
                </Link>
              </li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Slack Community</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal & Compliance</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Use</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">DPA</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Sub-processors</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Trust Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-muted-foreground">All services are online</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

