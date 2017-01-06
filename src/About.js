import React from 'react'
import { connect } from 'react-redux'
import Link from './Link'
import { response, goToPeople, goToDevelopers, goToDesigners, goToBiz } from './actions'
import people from './people.json'

function numberOfPeople() {
  return Object.keys(people).length
}

const About = ({ dispatch }) =>
  <div>
    <div>'Vi er Iterate - et digitalt produktutviklingsfirma i Oslo sentrum📍️</div>
    <div>
      <div>Vi tar gode idéer 💡️ frem til ekte produkter 💰️</div>
      <div>- For små firmaer 🐠️ som ønsker å bli store 🐋️ ,</div>
      <div>og for store firmaer 🐘️ som ønsker å tenke som små 🐿️.</div>
    </div>
    <div>
      <div>Vi er et selveid firma med <Link onClick={() => {
        dispatch(response(`${numberOfPeople()} fagfolk?`))
        dispatch(goToPeople())
      } }>{numberOfPeople()} fagfolk</Link>;</div>
      <div><Link onClick={() => {
        dispatch(response(`utviklere?`))
        dispatch(goToDevelopers())
      } }>utviklere</Link>, <Link onClick={() => {
        dispatch(response(`designere?`))
        dispatch(goToDesigners())
      } }>designere</Link>, <Link onClick={() => {
        dispatch(response(`forretningsrådgivere?`))
        dispatch(goToBiz())
      } }>forretningsrådgivere</Link> og gode blandinger av dette.</div>
      <div>Iterate har også en liten ledelse og bittelitt administrasjon.</div>
      <div>hvem er du?</div>
    </div>
  </div>

export default connect()(About)
