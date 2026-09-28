class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numset = new Set([]);

        for(let i=0;i<nums.length;i++){
            if(numset.has(nums[i])) return true;
            else numset.add(nums[i]);
        }

        return false
    }
}
