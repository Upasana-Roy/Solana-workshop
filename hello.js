console.log("Hello World");

const a = 15;
const b = 12;

if (a > b) console.log(a + " is greater than " + b);
else console.log(b + " is greater than " + a);

try {
  const x = 0 / 0;
  console.log(x);
} catch (e) {
  console.log(e);
}
try {
  throw new Error("why?");
} catch (e) {
  console.log(e);
}
