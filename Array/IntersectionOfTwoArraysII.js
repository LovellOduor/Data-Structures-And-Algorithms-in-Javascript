var intersect = function(nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();
    for(let x of nums1){
        if(!map1.has(x)){
            map1.set(x,1);
        }else{
            map1.set(x,map1.get(x)+1);
        }
    }

    for(let y of nums2){
        if(!map2.has(y)){
            map2.set(y,1);
        }else{
            map2.set(y,map2.get(y)+1);
        }
    }

    const result = [];
    var selectedMap = map2;
    if(map1.size<map2.size){
        selectedMap = map1;
    }
    const iter = selectedMap.keys();
    var o = iter.next().value;
    while(!isNaN(o)){
        if(map1.has(o) && map2.has(o)){
            let i = 0;
            let minVal = Math.min(map1.get(o),map2.get(o));
            while(i<minVal){
                result.push(o);
                i++;
            }
        }
        o = iter.next().value;
    }
    return result;
};

const res = intersect([5,0,0,6,1,6,2,4],[4,7,9,7,6,7]);
console.log(res);