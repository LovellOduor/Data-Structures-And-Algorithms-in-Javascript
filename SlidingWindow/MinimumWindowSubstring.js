/*
Given two strings s and t, find the shortest substring of s that contains all
characters of t
*/

// aaat 
function minimumWindow(searchString,subString){
    
    let left = 0;
    let strMap = new Map();
    let currMap = new Map();
    let satisfy = 0;
    
    let minArr = [-1,-1];
    let minWindow = Number.MAX_SAFE_INTEGER;

    // populate 2 hash maps for keeping track of substring frequencies
    for(let o of subString){
        if(!strMap.has(o)){
            strMap.set(o,1);
        }else{
            strMap.set(o,strMap.get(o)+1);
        }
        currMap.set(o,0);
    }


    // loop through the search string with the right pointer
    for(let right=0;right<searchString.length;right++){

        let curr = searchString[right];

        // Increment frequency of the current letter if it exists in the 
        // frequency map

        if(currMap.has(curr)){
            currMap.set(curr,currMap.get(curr)+1);
            if(currMap.get(curr)<=strMap.get(curr)){
                satisfy+=1;
            }
        }

        // While the current window contains a valid substring 
        // we do some operations to decrease the window size until it 
        // fails to contain a valid substring

        while(satisfy==subString.length){

            let currWindow = right-left + 1;

            // update the minimum window if it exists and is smaller than the
            // previous minimum window length
            if(minWindow>currWindow){
                minWindow = currWindow;
                minArr = [left,right];
            }

            let currLeft = searchString[left];

            // Reduce the satisfy value if the current window no-longer 
            // contains a preivously included valid substring character.
            
            if(currMap.has(currLeft)){
                currMap.set(currLeft,currMap.get(currLeft)-1);
                if(currMap.get(currLeft)<strMap.get(currLeft)){
                    satisfy--;
                }

            }

            left+=1;


        }

    }
    
    return minWindow;
}

let minwin = minimumWindow("accbaton","bo");
console.log(minwin);