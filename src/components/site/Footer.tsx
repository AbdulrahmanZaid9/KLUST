import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-lg font-bold tracking-tight">KLUST</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Kuala Lumpur University of Science and Technology — Faculty of Business,
            Information and Human Sciences.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Programme</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/programme-information" className="hover:text-accent">Programme Information</Link></li>
            <li><Link to="/career-opportunities" className="hover:text-accent">Career Opportunities</Link></li>
            <li><Link to="/student-experience" className="hover:text-accent">Student Experience</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/contact" className="hover:text-accent">FAQ / Contact</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Apply Now</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Get in Touch</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Kuala Lumpur, Malaysia</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-accent" /> <a href="https://instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">@myklust</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> <a href="https://wa.me/601124260734" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">+6011-24260734</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> <a href="mailto:s@klust.edu.my" className="underline underline-offset-2 hover:text-accent">@s.klust.edu.my</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} KLUST. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
