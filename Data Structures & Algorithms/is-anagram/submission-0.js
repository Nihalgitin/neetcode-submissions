class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const str1map = new Map();
        const str2map = new Map();

        for(let i = 0;i<s.length;i++){
            if(str1map.has(s[i])){
              let c = str1map.get(s[i])
              c++;
              str1map.set(s[i],c);
            }
            else str1map.set(s[i],1);
        }

        for(let i = 0;i<t.length;i++){
            if(str2map.has(t[i])){
              let c = str2map.get(t[i])
              c++;
              str2map.set(t[i],c);
            }
            else str2map.set(t[i],1);
        }

        if(str1map.size != str2map.size) return false;

        for(const [key,value] of str1map){
            if(!str2map.has(key) || str2map.get(key)!== value)
             return false
        }

        return true;
    }
}
