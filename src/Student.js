import React from 'react'

function Student({std}) {
  return (
    <div>
      <h1>I am {std.name} and i am {std.age} years old</h1>
    </div>
  )
}

export default Student