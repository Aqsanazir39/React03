// list of product / thing/ menu etc
//we use loop to reterive products
//but in react we use Map methods
import React from 'react'
import Student from './Student'

function ListRendring() {
  // const arr = ['Ali', 'Hassan' , 'Waleed' , 'Junaid' , 'saad'];
const student = [
  {
    name: "Ali", age :21
  },
  {
    name: "Hassan", age :33
  },
  {
    name: "Saad", age :28
  },
  {
    name: "Sarmid", age :24
  },
]
  return (
    <div>
{student.map(std => <Student std = {std}/>)};

    </div>
  )
}

export default ListRendring  //Map doesnot change the array it is a transformation machine 


