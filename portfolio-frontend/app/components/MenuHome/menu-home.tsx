import { AppBar } from "@mui/material"
import "./menu-home.css"

export default function MenuHome() {
  return (
    <div>
      <AppBar></AppBar>
      <ul className="menu">
        <li>
          <a href="/about">A propos</a>
        </li>
        <li>
          <a href="/experience">Expériences</a>
        </li>
        <li>
          <a href="/studies">Etudes</a>
        </li>
        <li>
          <a href="/refferals">Recommandations</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
