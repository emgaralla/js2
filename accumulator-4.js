const arr = ['saad', 'adam', 'ali', 'ruslan', 'mansur', 'rasul']

const accumulator = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'a') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)