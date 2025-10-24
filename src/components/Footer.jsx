export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Akerholt AS – All rights reserved</div>
        <div style={{display:'flex',gap:12}}>
          <a href="#top" style={{textDecoration:'none', color:'#6b7280'}}>Til toppen ↑</a>
        </div>
      </div>
    </footer>
  )
}
