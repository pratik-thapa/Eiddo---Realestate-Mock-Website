import React from 'react'
import { Link } from 'react-router-dom'

export default function Pages() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Pages</li>
        </ol>
      </nav>
    
    </>
  )
}
