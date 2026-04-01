export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Next.js + Vercel Starter</p>
        <h1>Your basic app is ready.</h1>
        <p className="description">
          This project uses the Next.js App Router and is ready for local
          development and Vercel deployment as soon as Node.js and dependencies
          are installed.
        </p>

        <div className="actions">
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js Docs
          </a>
          <a href="https://vercel.com/new" target="_blank" rel="noreferrer">
            Deploy to Vercel
          </a>
        </div>
      </section>
    </main>
  );
}
