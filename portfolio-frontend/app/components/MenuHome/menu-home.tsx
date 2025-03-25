import './menu-home.css';

export default function MenuHome() {
    return (
        <ul className="menu">
          <li><a href="/about">A propos</a></li>
          <li><a href="/projects">Projets</a></li>
          <li><a href="/recommandations">Recommandations</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    );
}