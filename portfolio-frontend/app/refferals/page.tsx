"use client"

import "./refferals.css"
import axios from "axios"
import Banner from "../components/Banner/banner"
import Menu from "../components/Menu/menu"
import Refferal from "./../models/refferal"
import { useEffect, useState } from "react"

const apiUrl = process.env.API_URL ? process.env.API_URL : "http://localhost:3000"

export default function Refferals() {
  const [refferals, setRefferals] = useState<Refferal[]>([])

  const getRefferals = async function () {
    const mockRefferals = [
      {
        id: 1,
        user: "Ihda",
        description:
          "C’était un vrai plaisir d’accompagner Johanne dans sa belle montée en compétence au sein d’OBS. Il vous sera difficile de trouver une personne aussi impliquée dans son travail et avec un tel goût des tâches bien réalisées. Johanne est toujours disposée à répondre aux diverses questions et de réfléchir à des solutions aux problèmes les plus complexes. Sa capacité de réflexion , son dynamisme et son relationnel font d’elle une collaboratrice sur qui vous pouvez compter !Sur le plan personnel, je suis particulièrement fière de voir Johanne faire partie des femmes qui font évoluer l'image masculine qu'ont les métiers de la Tech.",
        date: "12/12/2020",
        company: "Orange Business",
        job: "Architect",
      },
      {
        id: 2,
        user: "Abdel",
        description:
          "Je suis ravi de recommander Johanne, avec qui j'ai eu le plaisir de travailler pendant plus de deux ans. En tant que jeune ingénieure brillante, elle se distingue non seulement par ses compétences techniques exceptionnelles, mais aussi par sa bienveillance et son sourire contagieux.Johanne a une incroyable capacité à trouver des solutions innovantes face aux défis techniques. Sa rigueur et son esprit d’équipe font d'elle un atout précieux pour vos équipes. Elle n’hésite jamais à partager ses connaissances et à soutenir ses collègues, créant ainsi un environnement de travail positif et collaboratif.Je suis convaincu qu'elle continuera à exceller et à inspirer tous ceux qui auront la chance de travailler avec elle. Je recommande chaudement Johanne pour toute opportunité future !",
        date: "12/12/2020",
        company: "Orange Business",
        job: "Architect",
      },
    ]
    setRefferals(mockRefferals)
    await axios.get(`${apiUrl}/api/refferals`).then((response) => {
      setRefferals(mockRefferals)
    })
  }

  useEffect(() => {
    getRefferals()
  }, [])

  return (
    <div>
      <Menu />
      <Banner title="Références" />
      <div className={`grid grid-col-${refferals.length} grid-flow-row gap-8`}>
        {refferals.map((refferal) => (
          <div className="refferal flex justify-center" key={refferal.id}>
            <article className="mr-50 ml-50">
              <h2 className="font-bold text-2xl justify-self-center refferal-name">
                {refferal.user}
              </h2>
              <div className="text-sm text-gray-500 justify-self-center text-center">
                {refferal.date}, {refferal.company}
              </div>
              <p className="text-lg justify-self-center text-center">
                {refferal.description}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
