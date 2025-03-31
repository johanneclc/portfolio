"use client"

import "./studies.css"
import Banner from "../components/Banner/banner"
import Menu from "../components/Menu/menu"

export default function Studies() {
  return (
    <div>
      <Menu />
      <Banner title="Etudes" />
      <ul className="">
        <li className="flex items-center">
          <div className="matrix-bubble">
            <span className="text-xl">2022</span>
          </div>
          <article className="">
            <h2 className="study-name">Diplôme D'Ingénieur Généraliste</h2>
            <div className="text-m" style={{ color: "#4fc96f" }}>
              IMT Nord Europe, Douai - Lille
            </div>
          </article>
        </li>
        <li className="flex items-center">
          <div className="matrix-bubble">
            <span className="text-xl">2022</span>
          </div>
          <article className="">
            <h2 className="study-name"> TOEIC</h2>
            <div className="text-m" style={{ color: "#4fc96f" }}>
              845 points
            </div>
          </article>
        </li>
        <li className="flex items-center">
          <div className="matrix-bubble">
            <span className="text-xl">2019</span>
          </div>
          <article className="">
            <h2 className="study-name">
              Classes Préparatoires Aux grandes Ecoles, Mathématiques Physique
            </h2>
            <div className="text-m" style={{ color: "#4fc96f" }}>
              Lycée Henry Wallon, Valenciennes
            </div>
          </article>
        </li>
        <li className="flex items-center">
          <div className="matrix-bubble">
            <span className="text-xl">2017</span>
          </div>
          <article className="">
            <h2 className="study-name">
              Bac Scientifique Science de l'Ingénieur Mention Très Bien
            </h2>
            <div className="text-m" style={{ color: "#4fc96f" }}>
              La Malassise, Saint Omer
            </div>
          </article>
        </li>
      </ul>
    </div>
  )
}
