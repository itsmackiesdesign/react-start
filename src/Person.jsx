import { useState } from 'react'

const Person = () => { 
    const [person, setPerson] = useState({
        name: "Ma'ruf", age: 22
    })
    const [cats, setCats] = useState([

        {name: "Lada", color: "Grey"},
        {name: "Черныш", color: "Black"}
    ])

    const changeName = () => {
        setPerson({
            name: "Jamshid",
            age: person.age
        })
    }

    const addAge = () => {
        setPerson({
            name: person.name, 
            age: person.age + 1
        })
    }

    return (
        <div>
            <h1>My name is {person.name}</h1>
            <h2>I am {person.age} y.o</h2>

            <h3>Pets:</h3>
            { cats.map(cat => (
                <h2>Name: {cat.name}, Color: {cat.color}</h2>
            )) }

            <button onClick={() => addAge()}>Add Age</button>
            <button onClick={() => changeName()}>Change name</button>
        </div>
    )
}

export default Person