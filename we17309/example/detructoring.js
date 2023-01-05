// object = { key : value }

const person = {
    name: "Dat",
    age: 18,
    address: {
        city: "HCM",
    },
};
const {
    name,
    age,
    address: { city },
} = person;
// const name = person.name;
// const age = person.age;
// const address = person.address;

const showInfo = ({ name, age }) => {
    console.log(name, age);
};
showInfo(person);

function useState(initialState) {
    let state = initialState;
    function setState(newState) {
        state = newState;
    }
    return [state, setState];
}

const [myName, setMyName] = useState("Dat");
console.log(myName);
setMyName("Dat Nguyen");
console.log(myName);
