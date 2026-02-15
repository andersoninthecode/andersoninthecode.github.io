export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          &copy; {new Date().getFullYear()} Anderson Santana. Engenheiro de Software.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/andersoninthecode" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/andersoninthecode/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/andersoninthecode/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors">Instagram</a>
          <a href="https://www.facebook.com/oandersonsant/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
