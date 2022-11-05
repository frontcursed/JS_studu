/// number, boolean, any, string, null, undefined, infinity, NaN, -infinity, BigInt
/// object, array, function

const user1 = { /// литерал с ссылкой на ячейку памяти
    name: 'Bob',
    age: '25',
    isStudent: true
}

const address = {
    country: 'Sudan',
    city: 'Hartum'
}

const user2 = user1
user2.name = 'Anna'

const userCopy = {}
userCopy.age = user1.age
userCopy.isStudent = user1.isStudent
userCopy.name = 'bob'
console.log(user1)
console.log(userCopy)

const county = 'Benin'

const userCopy2 = {...user1, isMarried: undefined} /// spred => добавление нового свойства
const userCopy3 = {...userCopy2, isMarried: false} /// spred => изменение существующего св-а
const userCopy4 = {...userCopy3, ...address} /// spred => изменение существующего св-а
const userCopy5 = {...userCopy3, county} /// имя свойства совпадает с именем объекта

// deep copy
const user = {
    id: 1,
    name: 'Bob',
    age: '25',
    isStudent: true,
    address: {
        country: 'Sudan',
        city: 'Hartum' /// переехал в 'minsk'
    }
}

const userAddresses = [
    {
        userId: 1,
        country: 'Sudan',
        city: 'Hartum'
    },
    {
        userId: 2,
        country: 'Benin',
        city: 'Porto-Nova'
    },
]

const deepCopyUser = {...user, address: {...user.address, city: 'Minsk'}}
console.log(user.address === deepCopyUser.address)

console.log(userAddresses.find(a => a.userId === user.id).city)
console.log(address.city)

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum',
        }
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
]
const newUser = {
        id: 5,
        name: 'Donald',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
}

const users2 = [...users, newUser]
const users3 = users2.map(u => u.id === 5 ? {...u, name: 'Joe', address: {...u.address, city: 'Minsk'}} : u)
console.log(users3)
