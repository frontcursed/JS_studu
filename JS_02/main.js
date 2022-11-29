let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
        isStudent: false
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
        isStudent: false
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
        isStudent: false
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false
    },
];


const getName = (obj) => obj.name
const getScores = (obj) => obj.scores
const getStudent = (obj) => ({...obj, isStudent:true})

/*
const getStudentsNames = (arr) => {
    const result = []
    const func = (obj) => obj.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}
console.log(getStudentsNames(students))

const getStudentsScores = (arr) => {
    const result = []
    const func = (obj) => obj.scores
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}

console.log(getStudentsScores(students))

const getStudents = (arr) => {
    const result = []
    const func = (obj) => ({...obj, isStudent:true})
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}
console.log(getStudents(students))*/

const getMappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}

console.log(getMappedArray(students, getName))
console.log(getMappedArray(students, (obj) => obj.name))
console.log(students.map((obj) => obj.name))


function selfMadeMap(func) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result[i] = func(this[i])
    }
    return result
}

Array.prototype.selfMadeMap = selfMadeMap

console.log(students.selfMadeMap(getName))

const getFilteredArray = (arr, func) => {    // func[i] true || false
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true){
            result.push(arr[i])
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age >= 21))

const addElToEndOfArray = (arr, el) => {
    addElToEndOfArray.push(4)
}

console.log()