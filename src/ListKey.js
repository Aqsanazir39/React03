import React from 'react'
import Student from './Student'
// each Item in an array have unique key Prop
function ListKey() {
  // const arr = ["Ali", "Hassan" , "Saad" , "Bilal"];
  const arr = [{
    id: 1,
    name: "Ali",
    age: 23
  },
  {
    id: 2,
    name: "Aqsa",
    age: 24
  },
  {
    id: 3,
    name: "Hassan",
    age: 24
  },
  {
    id: 4,
    name: "Saad",
    age: 21
  }
]


  return (
    <div>
    <h1 className='App'>Name of Students</h1>
<h3>{arr.map(std => <Student key={std.id} std ={std} />)}</h3>
    </div>
  )
}

export default ListKey //list help to ease the process of refreshing lists Key is not the Prop. we prefer to use id with keys last option is index.


