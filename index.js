// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  if (street < 42) {
    return 42 - street;
  } else {
    return street - 42;
  }
}


function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}


function distanceTravelledInFeet() {

}


function calculatesFarePrice(start, destination) {

}
