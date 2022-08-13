import { join } from "path";
import { readFile } from "fs/promises";
import { setTimeout } from "timers/promises";

console.log("Reading numbers from file..");

const filename = join(process.cwd(), "src", "numbers.txt");
const numbers = (await readFile(filename, { encoding: "utf-8" })).toString().split("\n");

console.log("Processing numbers..");

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += Number(numbers.at(i));
    await setTimeout(10);
}

console.log("Total of all numbers: ", total);
