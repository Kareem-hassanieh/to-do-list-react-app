
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoItems from './components/ToDoItems'
import Form from './components/Form'
import DoneItems from './components/DoneItems'

function App() {

  const [showForm, setShowForm] = useState(false)

  return (


    <>
      {showForm ? (
        <div className='h-[100vh] flex justify-center items-center'>
          <Form onClose={() => setShowForm(false)} />

        </div>
        
      ) : (
        <>

          <div>
            <Header onAddClick={() => setShowForm(true)}/>

            <div className='flex flex-col md:flex-row '>
              <ToDoItems />
              <DoneItems/>
            </div>

           

          </div>


        </>

      )}




    </>

  )
}

export default App
