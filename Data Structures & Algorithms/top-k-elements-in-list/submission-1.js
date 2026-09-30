class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash={};

        for(let i=0;i<nums.length;i++){
            hash[nums[i]] = (hash[nums[i]]||0)+1;
        }

    //     const res = Object.entries(hash).filter(([key,val]) => val>=k)
    //    res.sort((a,b)=>b[1]-a[1])
    //    console.log(Object.fromEntries(res))
    //     return Object.keys(Object.fromEntries(res));
    const arr = Object.entries(hash).map(([key,value])=>[value,parseInt(key)])
    arr.sort((a,b)=> b[0]-a[0])
    return arr.slice(0,k).map(e=>e[1]);
}
}
