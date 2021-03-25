const Car = ({ name, age }) => {
    const styles = {
        carName: {
            backgroundColor: "blue",
            color: "white",
            padding: "20px"
        }
    }
    
    const sayHello = carName => {
        alert("Hello, " + carName)
    }

    return (
        <div>
            <h1 style={styles.carName}>{ name }</h1>
            <h3>{ age }</h3>
            <button onClick={() => sayHello(name)}>Say Hello!</button>
            <hr/>
        </div>
    )
}

export default Car