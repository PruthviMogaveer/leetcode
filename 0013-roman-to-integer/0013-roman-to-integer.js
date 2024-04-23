/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const m = []
        m['I'] = 1;
        m['V'] = 5;
        m['X'] = 10;
        m['L'] = 50;
        m['C'] = 100;
        m['D'] = 500;
        m['M'] = 1000;
        
        let ans = 0;
        
        for(let i = 0; i < s.length; i++){
            if(m[s[i]] < m[s[i+1]]){
                ans -= m[s[i]];
            }
            else{
                ans += m[s[i]];
            }
        }
        return ans;  
};