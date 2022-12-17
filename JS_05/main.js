const string = ['Alex', 'Donald', 'Bob']
console.log(string.sort())

const string1 = ['Alex', 'Donald', 'Bob', 100]
console.log(string1.sort())

const string2 = ['alex', 'Donald', 'Bob', 100]

console.log(string2.sort())

const numbers = [1000, 250, 99, 801]
console.log(numbers.sort())

/*const compareFunc = (a, b) => {
  if (a > b){
      return 10 // >0 если надо переставить
  } else {
      return -100 // <0   если не надо переставить
  }
}*/


const compareFunc = (a, b) => a - b
console.log(numbers.sort(compareFunc))
console.log(numbers.sort((a, b) => a - b))

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95,
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Helga',
        age: 24,
        isMarried: true,
        scores: 90,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121,
    },
    {
        name: 'alex',
        age: 22,
        isMarried: true,
        scores: 121,
    },
];

console.log(students.sort((a, b) => a.age - b.age))
console.log(students.sort((a,b)=> { // регистрозависимая
     if (a.name > b.name){
         return 1
     } else {
         return -1
}
}))
console.log(students.sort((a,b)=> a.name.localeCompare(b.name))) // регистро не зависимая
// вложенная сортировка (по возрасту и по успеваемости)
console.log(students.sort((a,b)=>{
    if (a.age <  b.age){
        return -1
    } else if (a.age > b.age){
        return 1
    } else {
        if (a.scores > b.scores){
            return -1
        } else {
            return 1
        }
    }
}))

// bubble sort

const nums = [23, 56, 34, 1, 67, 12, 3] // по возрастанию
for (let j = 0; j < nums.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i +1]){ //элементы стоят в неверном порядке
            isSorted = false;
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
/*            const temp = nums[i]
            nums[i] = nums[i +1]
            nums[i +1] = temp*/
        }
    }
    if(isSorted)break
}

console.log(nums)


  
