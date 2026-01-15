export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto text-sm text-white/60">
        © {new Date().getFullYear()} Arun Kumar Upadhyay. Built with Next.js and Tailwind.
      </div>
    </footer>
  )
}
