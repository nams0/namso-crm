import Link from "next/link"
import { Toaster } from "react-hot-toast"

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0b100d",
            color: "#e6f4e9",
            border: "1px solid #1b3022",
            borderRadius: "6px",
            padding: "14px 16px",
            fontSize: "14px",
          },
          success: {
            iconTheme: {
              primary: "#00ff41",
              secondary: "#050706",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#050706",
            },
          },
        }}
      />

      {/* Header */}
      <header className="fixed top-0 z-50 border-b border-border bg-surface">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            Namso <span className="text-primary">CRM</span>
          </Link>

          <Link
            href="/add-customer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary-hover active:scale-[0.98]"
          >
            <span className="text-lg leading-none">+</span>
            Add Customer
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Namso CRM. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/nams0/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Namso
            </a>
            <span className="text-border">·</span>
            <span>Built with Next.js</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
