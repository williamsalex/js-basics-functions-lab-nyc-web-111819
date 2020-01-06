function distanceFromHqInBlocks (someValue) {
    return Math.abs(someValue-42)
  }
  
  function distanceFromHqInFeet (someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks*264
  }

  function distanceTravelledInFeet(value1, value2) {
    return Math.abs((value2-value1) * 264)
  }

  function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    if(feet < 400){
        return 0
    }
    if(feet > 400 && feet < 2000){
        return (feet-400)*.02
    }
    if(feet > 2000 && feet < 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
  }