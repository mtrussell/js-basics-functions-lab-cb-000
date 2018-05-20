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


function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return end - start;
  } else {
    return start - end;
  }
}


function calculatesFarePrice(start, destination) {

}
