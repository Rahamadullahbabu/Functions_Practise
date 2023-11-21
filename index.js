function calculateArea(length, width) {
  return length * width;
}

function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

function isSquare(length, width) {
  return length === width;
}

function displayRectangleInfo(length, width) {
  console.log("Rectangle Information:");
  console.log("Length: " + length);
  console.log("Width: " + width);
  console.log("Area: " + calculateArea(length, width));
  console.log("Perimeter: " + calculatePerimeter(length, width));

  if (isSquare(length, width)) {
    console.log("This rectangle is a square!");
  } else {
    console.log("This rectangle is not a square.");
  }
}

const rectangle1Length = 5;
const rectangle1Width = 5;

const rectangle2Length = 4;
const rectangle2Width = 6;

displayRectangleInfo(rectangle1Length, rectangle1Width);
console.log("\n");
displayRectangleInfo(rectangle2Length, rectangle2Width);
