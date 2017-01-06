import React from 'react'
import { connect } from 'react-redux'
import { response, goToPerson } from './actions'
import Link from './Link'
import people from './people.json'

const People = ({ dispatch, type }) => {
  const p = type
    ? Object.entries(people).filter(([key, person]) =>
      person.title.includes(type))
    : Object.entries(people)
  return <div>
    Disse menneskene jobber {type ? `som ${type.toLowerCase()} ` : ''}i Iterate
    <ul>
      {p.map(([key, person]) =>
        <li key={key}><Link onClick={() => {
          dispatch(response(`Hvem er ${person.name}?`))
          dispatch(goToPerson(key))
        } }>{person.name}</Link></li>
      )}
    </ul>
  </div>
}

export default connect()(People)
