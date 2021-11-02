import React, { useState } from "react"

const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
}

export default function TodoForm(props){

  const [ inputs, setInputs ] = useState(initInputs)
  const { addTodo } = props 


function handleChange(e){
  const { name, value } = e.target
  setInputs(prevInputs => ({
    ...prevInputs,
    [name] : value
  }))
}

function handleSubmit(e){
  e.preventDefault()
  addTodo(inputs)
  setInputs(initInputs)
}
    return(
      <form>
        <input 
          type=""
          vaule={}
          name=""
          onChange={}
          placeholder=""
        />
        <input 
          type=""
          vaule={}
          name=""
          onChange={}
          placeholder=""
        />
        <input 
          type=""
          vaule={}
          name=""
          onChange={}
          placeholder=""
        />
        <button>Add Todo</button>
      </form>
    )
}