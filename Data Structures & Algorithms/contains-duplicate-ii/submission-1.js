class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Map();

        for(let i = 0; i < nums.length; i++){
            if(window.has(nums[i]) && (i - window.get(nums[i]) <= k)){
                return true;
            }
            window.set(nums[i], i);
        }

        return false;
    }

}
