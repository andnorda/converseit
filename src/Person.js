import React from 'react'
import people from './people.json'

const Person = ({ person }) => {
  const p = people[person]
  return <div>{p.name} jobber som {p.title.toLowerCase()}. Skriv en melding til {p.name.split(' ')[0]}?</div>
}

export default Person
