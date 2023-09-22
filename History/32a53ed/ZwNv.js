// const isPalindrone = function(x) {
//     return x.toString() === x.toString().split("").reverse().join("")
// }


// console.log(isPalindrone("pop"))

// const findAnagram = (stringOne, stringTwo) => {
//     stringOne = stringOne.split("").sort().join("")

//     stringTwo = stringTwo.split("").sort().join("")

//     console.log(stringOne , stringTwo);
//     console.log(stringOne === stringTwo);


// };

// findAnagram("sahith", "asihth")

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if ((nums[i] + nums.includes(target - nums[i])) == target) {
//             return [i , nums[target - nums[i]] ]
//         }
//     }

// }


// console.log(twoSum([3, 3, 10, 9], 5));

const profitMax = (arr) =>{
    minValue = Math.min(...arr)

    console.log(arr.slice(minValue + 1));
};

// console.log(profitMax([7, 1, 5, 3, 6, 4]))
profitMax([7, 1, 5, 3, 6, 4])

