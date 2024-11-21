import React, { useState } from 'react'

function UseState() {
  const [num , setNum] = useState(0);

  var handleNum = ()=>{
setNum(num + 1)
  }
  return (
    <div>
<h1>Click increases: {num}</h1>
<button onClick={handleNum}>Click Me</button>
    </div>
  )
}

export default UseState