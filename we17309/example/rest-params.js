function total(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        // result = result + numbers[i]
        // result = 0 + 1
        // result = 1 + 2
        // result = 3 + 3
        // result = 6 + 4
        result += numbers[i];
    }
    console.log("result", result);
}
total(1, 2, 3, 4, 5, 6, 7);
