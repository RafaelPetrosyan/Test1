let arr = [1, 2, 3, 4, -1, -2, 3];


// a.                                                 Implement sort function

function sort() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
            }
        }
    }
    return arr
}

sort()

console.log('sort', arr)


// b.                                 Implement function which will remove odd numbers from the given array and will return a new array

let newArr = []

function removeOdd() {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

removeOdd()
console.log('odd', newArr)

// c.                                          Implement function which will return maximum value from the array

let max = arr[0]


function maximum() {
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

maximum()
console.log('max', max)

// d.                                           Implement function which will find minimum and maximum values from the array and will return the summary

let minimumValue = 0
let maximumValue = 0

function SumOfMaxAndMinArr() {
    for (let i = 0, j = 0; i < arr.length, j < arr.length; i++, j++) {
        if (arr[i] < minimumValue) {
            minimumValue = arr[i]
        } else if (arr[j] > maximumValue) {
            maximumValue = arr[j]
        }

    }
    return maximumValue + minimumValue;

}

SumOfMaxAndMinArr()

console.log('max+min', maximumValue + minimumValue)

// e.                                  Create function which will filter the array using `filter` function and will return array consisting of negative numbers

function negative(arr) {
    return (arr) < 0;
}

let filtered = arr.filter(negative);
console.log('negative', filtered)

//                                   2.           Create validate function which will check if the given string is in email format

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

console.log('email', validateEmail('asd@asd.com'))

//                                      3. Create object according to this structure

// {
//     min: <which will be minimum value of the array in the issue 1>,
// max:<which will be maximum value of the array in the issue 1>,
// }
// use `reduce` function

function minMax() {
    let obj = {
        min: 0,
        max: 0
    }
    return arr.reduce((acc, cur) => {
            if (cur < obj.min) {
                obj.min = cur
            }
            if (cur > obj.max) {
                obj.max = cur
            }
            return obj
        },
    );
}

console.log('reduce', minMax(arr))


