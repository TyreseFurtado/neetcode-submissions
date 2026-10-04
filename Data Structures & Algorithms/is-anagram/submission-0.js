class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const counts = {};

        for (const char of s){
            counts[char] = (counts[char] || 0) + 1;

        }

        for (const char of t){
            if(!counts[char]){
                return false;
            }
            counts[char]--;
        }

        return true;


    }
}
