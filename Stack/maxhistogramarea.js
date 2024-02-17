function maxHistogramArea(heights){
    const stack = [];  // {index:0,height:0}
    maxArea = 0;

    for(let i in heights){
        let start = i;
        // While the current height has a smaller height than the previous elements,
        // added to the stack we calculate the area occupied by those heights
        // while trying to find the maxArea
        while(stack.length > 0 && stack[stack.length-1].height > heights[i]){
            let {index,height} = stack.pop();
            maxArea = Math.max(maxArea,(i-index)*height);
            // after calculating the area of the heights in the stack,
            // we decrement the start index one step back each time we pop from
            // the stack because the height at the current index is smaller and therefore
            // it's index should be adjusted to accomodate previous larger heights that
            // were removed from the stack because it can form a rectangle with them.
            start = index;
        }
        stack.push({index:start,height:heights[i]});
    }

    // After reaching the end, some elements were left in the stack, meaning that
    // their rectangles extend all through until the end, so we loop,
    // through each of them calculating their areas with respect to the last histogram.

    for(let o of stack){
        maxArea = Math.max(maxArea,(o.height*(heights.length-o.index)));
    }
    return maxArea;

}

const heights = [2,1,5,6,2,3];
let ans = maxHistogramArea(heights);
// 10
console.log(ans);