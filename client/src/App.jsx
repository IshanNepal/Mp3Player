import { Route, Routes } from 'react-router'
import Layout from './Layout'
import HomePage from './page/HomePage'
import { Toaster } from 'react-hot-toast'
function App() {
  

  return (
    <>
     <Toaster 
     position='top-center'
     reverseOrder={false}
     />
     {/* Defining Rotues */}
     <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
