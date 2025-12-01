// src/components/TechStack.jsx

const tech = [
  { src: '/images/tech/HTML5-logo.png',      label: 'HTML5' },
  { src: '/images/tech/CSS3.png',            label: 'CSS3' },
  { src: '/images/tech/JavaScript-logo.png', label: 'JavaScript' },
  { src: '/images/tech/React-logo.png',      label: 'React' },
  { src: '/images/tech/nextjs-original.png', label: 'Next.js' },
  { src: '/images/tech/tailwind.png',        label: 'Tailwind' },
  { src: '/images/tech/C++-Logo.png',        label: 'C++' },
  { src: '/images/tech/Vite-logo.png',       label: 'Vite' },
  { src: '/images/tech/Figma.png',           label: 'Figma' },
  { src: '/images/tech/Node-logo.png',       label: 'Node.js' },
  { src: '/images/tech/WordPress.png',       label: 'WordPress' },
  { src: '/images/tech/PostCSS.png',         label: 'Post CSS' },
  { src: '/images/tech/TypeScript.png',      label: 'TypeScript' },
  { src: '/images/tech/GitHub.png',          label: 'GitHub' },
  { src: '/images/tech/Autocad.png',         label: 'AutoCAD' },
  { src: '/images/tech/Qt-logo.png',         label: 'Qt' },
  { src: '/images/tech/VS-code.png',         label: 'VS Code' },
  { src: '/images/tech/nPm.png',             label: 'NPM' },
  { src: '/images/tech/AutoDesk.png',        label: 'AutoDesk' },
  { src: '/images/tech/cmake.png',           label: 'Cmake' },
  { src: '/images/tech/Git-bash.png',        label: 'Git Bash' },
  { src: '/images/tech/Mongo-DB.png',        label: 'MongoDB' },
  { src: '/images/tech/AnyDesk.png',         label: 'AnyDesk' },
];

export default function TechStack() {
  return (
    <section className="section tech-section" id="tech">
      {/* Video-bakgrunn */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="tech-bg"
      >
        <source src="/videos/Box-lines.mp4" type="video/mp4" />
        Din nettleser støtter ikke video-taggen.
      </video>

      {/* Innhold */}
      <div
        className="container"
        style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
      >
        <h3 style={{ margin: '0 0 10px', color: '#ffffff' }}>
          Teknologier og rammeverk
        </h3>
        <p style={{ color: '#dbeafe', margin: '0 0 8px' }}>
          Verktøyene jeg bruker for å bygge moderne nettopplevelser.
        </p>

        <div className="techlist">
          {tech.map(({ src, label }, i) => (
            <div className="techitem" key={i}>
              <img src={src} alt={label} loading="lazy" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
