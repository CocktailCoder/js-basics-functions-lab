// Code your solution in this file!
//const location = 42;
function distanceFromHqInBlocks(distance){
    let location = 42;
    let answer = Math.abs(distance - location);
    return answer;
}

function distanceFromHqInFeet(feet){
    let location = 42;
    let answer = Math.abs(feet - location);
    return answer * 264;
}

function distanceTravelledInFeet(start, end){
    let blocks = Math.abs(start - end);
    return blocks * 264;
}

function calculatesFarePrice(start, destination){
    let feetTravelled = Math.abs(start - destination)*264;
    if (feetTravelled < 400){
        return 0;
    }
    else if (feetTravelled >= 400 && feetTravelled <= 2000){
        return ((feetTravelled - 400) * .02);
    }

    else if (feetTravelled > 2000 && feetTravelled <= 2500){
        return 25;
    }
    else (feetTravelled > 2500)
    return 'cannot travel that far'
}

