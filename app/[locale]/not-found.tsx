import Link from "next/link";

export default function NotFound() {
  // Floating icons data
  const icons = [
    { id: 1, top: '15%', left: '10%', delay: '0s' },
    { id: 2, top: '25%', left: '85%', delay: '2s' },
    { id: 3, top: '65%', left: '20%', delay: '5s' },
    { id: 4, top: '80%', left: '75%', delay: '1s' },
    { id: 5, top: '45%', left: '15%', delay: '8s' },
    { id: 6, top: '20%', left: '50%', delay: '3s' },
    { id: 7, top: '75%', left: '45%', delay: '6s' },
  ];

  return (
    <>
      <main className="not-found-page">
        <div className="not-found-bg"></div>
        
        {/* Floating Icons */}
        {icons.map((icon) => (
          <span 
            key={icon.id} 
            className="thinking-icon" 
            style={{ 
              top: icon.top, 
              left: icon.left, 
              animationDelay: icon.delay 
            }}
          >
            🤔
          </span>
        ))}

        <div className="not-found-content">
          <h1 className="not-found-title fade-up">
            Looks like we&apos;ve<br />lost that page...
          </h1>
          <p className="not-found-desc fade-up delay-1">
            The climate is changing, and so is our website. The page you are looking for might have moved or doesn&apos;t exist anymore.
          </p>
          <div className="fade-up delay-2">
            <Link href="/" className="btn-404">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
