const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Enter a number: ", answer => {
            answer = parseInt(answer);
            sum += answer;
            console.log(sum);
            addNumbers(sum, --numsLeft, completionCallback)
        })
    }
    if (numsLeft === 0) {
        completionCallback(sum);
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
