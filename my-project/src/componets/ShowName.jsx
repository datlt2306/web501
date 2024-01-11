function ShowName(props) {
    console.log(props); // {name: "John", age: 20 ...}
    return (
        <h1>
            Hello, {props.name} - {props.age}
        </h1>
    );
}

export default ShowName;
