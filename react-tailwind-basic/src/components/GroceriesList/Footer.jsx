import React from 'react'

export default function Footer({length}) {
  return (
    <div>
        <p>{length} List {length === 1 ? "item":"items"}</p>
    </div>
  )
}