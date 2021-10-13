// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers(){
    const a = [drivers[0],drivers[1]]
    return a
}
function returnLastTwoDrivers(){
    const b = [drivers[2],drivers[3]]
    return b
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(){
        return integer*integer
    }
}
const fareDoubler = fare => fare*2
const fareTripler = fare => fare*3

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}