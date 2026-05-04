class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let result = 0;
        let sum = 0;

        for(let i = 0; i < k - 1; i++){
            sum += arr[i];
        }

        for(let L = 0; L <= arr.length - k; L++){
            sum += arr[L + k - 1];
            if((sum / k) >= threshold) {
                result++;
            }
            sum -= arr[L];
        }

        return result;
    }
}
