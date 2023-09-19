// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    //HQ defination
    const headquaters = 42;
    // calculates number of blocks
    const blocksAway = Math.abs(headquaters - pickup);

    return blocksAway;
}

function distanceFromHqInFeet(pickup){

    const blocks =distanceFromHqInBlocks(pickup);
    const feetPerBlock = 264;

    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(sBlock, eBlock){

    const blocks = Math.abs(eBlock - sBlock);
    const feetPerBlock = 264;

    return blocks * feetPerBlock;

}

function calculatesFarePrice(start, destination){

    const distance = distanceTravelledInFeet(start, destination)

    if (distance > 2500){
        return 'cannot travel that far';
    }
    else if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02;
    }
    else{
        return 25;
    }

}