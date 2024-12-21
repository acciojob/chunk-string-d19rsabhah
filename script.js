function stringChop(str, chunkLength) {
    if (!str || typeof str !== "string" || chunkLength <= 0) return []; // Handle null or invalid inputs

    const result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength)); // Take chunks of the specified length
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
