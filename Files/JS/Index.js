import { add } from "./add.js";

alert("Hello World!");
alert.length; // 12
console.log("Hello World!");

export default function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function Multiply(a, b) {
    return a * b;
}

export function Divide(a, b) {
    return a / b;
}

export function Modulo(a, b) {
    return a % b;
}

export function Power(a, b) {
    return a ** b;
}

export function SquareRoot(a) {
    return Math.sqrt(a);
}

export function CubeRoot(a) {
    return Math.cbrt(a);
}

export function Square(a) {
    return a * a;
}

export function SquareOfSquareRoot(a, b) {
    return Square(SquareRoot(a)) * SquareRoot(b);
}

export function Percentage(a) {
    return a / 100;
}

export function Probability(a) {
    return a / 100;
}

export function Factorial(a) {
    return a;
}

export function WholeNumbers(a) {  
    return a;
}