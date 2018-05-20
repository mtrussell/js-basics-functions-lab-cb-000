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
  const flip = (end - start) * 264;
  const flop = (start - end) * 264;
  const upOrDown = start < end ? flip : flop;
  /*return upOrDown
  if (start < end) {
    return (end - start) * 264;
  } else {
    return (start - end) * 264;
  }*/
}


function calculatesFarePrice(start, end) {
  let fare;
  const feet = distanceTravelledInFeet(start, end);
  // switch () {
  //   case one:
  //     break;
  //   case two:
  //     break;
  //   default:
  //     break;
  // }
}
