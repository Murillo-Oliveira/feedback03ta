
import { CardFinal } from "./components/CardFinal"
import { CardInicial } from "./components/CardInicial"
import { useState } from "react"

export function App() {
  const [nota, setNota]
= useState(0)
const [submited, setSubmited] = useState(false)  





return (
  submited === false ? (
   <CardInicial setNota={setNota} setSubmited={setSubmited} nota={nota}/>
  ) : (
    <CardFinal nota={nota}/>
  )
  )
}