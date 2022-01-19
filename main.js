// // 1. .length
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]

// for (let i = 0; i < cars.length; i++){
//     console.log("- " + cars[i])
// }

// 2. .concat()
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]
// let moreCars = ["Benz", "Rari", "Lambo", "Honda"]
// let totalCars = cars.concat(moreCars)

// for (let i = 0; i < totalCars.length; i++){
//     console.log("- " + totalCars[i])
// }

// 3. .indexOf()
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]
// let moreCars = ["Benz", "Rari", "Lambo", "Honda"]
// let totalCars = cars.concat(moreCars)
// function carOrder(){
// for (let i = 0; i < totalCars.length; i++){
//     console.log("- " + totalCars[i])
//     }
// }
// // console.log(totalCars.indexOf("Honda"))
// // console.log(totalCars.lastIndexOf("Ford"))

// carOrder()

// // 4. .join()
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]
// let moreCars = ["Benz", "Rari", "Lambo", "Honda"]
// let totalCars = cars.concat(moreCars)
// let stringOfCars = totalCars.join(", ")
// function carOrder(){
// for (let i = 0; i < totalCars.length; i++){
//     console.log("- " + totalCars[i])
//     }
// }
// console.log(stringOfCars)
// carOrder()

// // .5 split()
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]
// let moreCars = ["Benz", "Rari", "Lambo", "Honda"]
// let totalCars = cars.concat(moreCars)
// let stringOfCars = totalCars.join(", ")
// let carsFromString = stringOfCars.split("[]")
// function carOrder(){
// for (let i = 0; i < totalCars.length; i++){
//     console.log("- " + totalCars[i])
//     }
// }
// console.log(carsFromString)
// carOrder()

// // 6. .reverse()
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]
// let moreCars = ["Benz", "Rari", "Lambo", "Honda"]
// let totalCars = cars.concat(moreCars)
// let stringOfCars = totalCars.join(", ")
// let carsFromString = stringOfCars.split("[]")
// let carsInReverse = totalCars.reverse()
// function carOrder(){
// for (let i = 0; i < totalCars.length; i++){
//     console.log("- " + totalCars[i])
//     }
// }
// console.log(carsInReverse)
// carOrder()

// // 7. .sort()
// let cars = ["Ford", "Toyota", "Fiat", "Chrysler"]
// let moreCars = ["Benz", "Rari", "Lambo", "Honda"]
// let totalCars = cars.concat(moreCars)
// let stringOfCars = totalCars.join(", ")
// let carsFromString = stringOfCars.split("[]")
// let carsInReverse = totalCars.reverse()
// carsInReverse.sort()
// function carOrder(){
// for (let i = 0; i < totalCars.length; i++){
//     console.log("- " + totalCars[i])
//     }
// }
// console.log(carsInReverse.indexOf('Benz'));
// carOrder()

// // 8. .slice()
// const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, 6)

// console.log(reptiles)
// console.log(pets)
// // the .slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

// // 9. .splice() *incomplete need questions answers (can't move hamster to i[3])
// const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, 6)
// let removedReptiles = pets.splice(4,2, "hamsters" )

// function petOrder(){
// for (let i = 0; i < pets.length; i++){
//     console.log("* " + pets[i])
//     }
// }
// console.log(pets)
// console.log(reptiles)
// console.log(removedReptiles)
// petOrder()

// //  10. .pop()

// const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, 6)
// let removedReptiles = pets.splice(4,2, "hamsters" )
// let removedPet = pets.pop()

// function petOrder(){
// for (let i = 0; i < pets.length; i++){
//     console.log("* " + pets[i])
//     }
// }
// console.log(pets)
// console.log(reptiles)
// console.log(removedReptiles)
// console.log(removedPet)
// petOrder()

// // 11. .push()
// const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, 6)
// let removedReptiles = pets.splice(4,2, "hamsters" )
// let removedPet = pets.pop()
// pets.push(removedPet)

// function petOrder(){
// for (let i = 0; i < pets.length; i++){
//     console.log("* " + pets[i])
//     }
// }
// console.log(reptiles)
// console.log(removedReptiles)
// console.log( removedPet)
// console.log(pets)
// petOrder()

// 12. .shift()
// const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, 6)
// let removedReptiles = pets.splice(4,2, "hamsters" )
// let removedPet = pets.pop()
// pets.push(removedPet)
// pets.shift()
// function petOrder(){
// for (let i = 0; i < pets.length; i++){
//     console.log("* " + pets[i])
//     }
// }
// console.log(reptiles)
// console.log(removedReptiles)
// console.log( removedPet)
// console.log(pets[0])
// petOrder()

// 13. .unshift()
// const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, 6)
// let removedReptiles = pets.splice(4,2, "hamsters" )
// let removedPet = pets.pop()
// pets.push(removedPet)
// pets.shift()
// pets.unshift('turtle')
// function petOrder(){
// for (let i = 0; i < pets.length; i++){
//     console.log("* " + pets[i])
//     }
// }
// console.log(reptiles)
// console.log(removedReptiles)
// console.log( removedPet)
// console.log(pets)
// petOrder()

// // 14. .foreach() * could not figure this one out either
// const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
// // numbers.forEach((element, index, array) => console.log( +2)

// // let addedNum = 2
// // let sum = numbers + addedNum
// function addTwo(){
//     for (let i = 0; i < numbers.length; i++){
//         numbers.forEach((num) => console.log( numbers[i]))
//     }
// }
// addTwo()