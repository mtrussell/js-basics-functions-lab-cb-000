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
  return start < end ? (end - start) * 264 : (start - end) * 264;
  // if (start < end) {
  //   return (end - start) * 264;
  // } else {
  //   return (start - end) * 264;
  // }
}


function calculatesFarePrice(start, end) {
  let fare;
  const feet = distanceTravelledInFeet(start, end);
  switch
}
