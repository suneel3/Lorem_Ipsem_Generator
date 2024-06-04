
import React from 'react'

function Paragraph({text,count}) {
  return (
     <>
      <p><span>{count}) </span>{text}</p>
     </>
  )
}

export default Paragraph