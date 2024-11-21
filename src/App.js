import React from 'react'
import UseState from './UseState'
import LoginForm from './LoginForm'
import ShowHideDetails from './ShowHideDetails'
import TodoList from './TodoList'
// import ListRendring from './ListRendring'
import ListKey from './ListKey'
// import FormHandlingUseState from './FormHandlingUseState'
// import FormHandlingUseState from './FormHandlingUseState'
// import FetchApiFromBc from './FetchApiFromBc'
// import FetchApi from './FetchApi'

function App() {
  return (
    <div>
      {/* <FetchApiFromBc/> */}
      {/* <FetchApi/> */}
      <UseState/>
   {/* <FormHandlingUseState/> */}
   <LoginForm/>
   <ShowHideDetails/>
<TodoList/>

{/* <ListRendring/> */}
<ListKey/>
    </div>
  )
}

export default App