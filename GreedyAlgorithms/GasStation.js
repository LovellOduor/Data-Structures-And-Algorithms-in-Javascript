/*
Given a circular lis tof gas stations where we can go from a station 
i to the station i + 1, and the last one goes back to the first one,
find the index of the station from where we start to be able to traverse all the 
stations and go back to the initial one without
running out of gas.
*/

const gas = [1,5,3,3,5,3,1,3,4,5];
const cost = [5,2,2,8,2,4,2,5,1,2];

function gas_station(gas,cost){
    
    let candidate = 0;
    let remaining = 0;
    let prev_remaining = 0;

    for(let i = 0; i < gas.length; i++){
        remaining += gas[i] - cost[i];
        if(remaining < 0){
            prev_remaining += remaining;
            remaining = 0;
            candidate = i+1;
        }
    }

    if(remaining+prev_remaining < 0 || candidate == gas.length) return -1;

    return candidate;

}

console.log(gas_station(gas,cost))