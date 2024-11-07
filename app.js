var climbStairs = function(n) {
    return climbStairsRec(n, {0: 1, 1: 1})
};

var climbStairsRec = function(n, memo){
    if(memo[n]) return memo[n]
    memo[n-1] = climbStairsRec(n-1, memo)
    memo[n-2] = climbStairsRec(n-2, memo)
    return memo[n-1] + memo[n-2]
}

//option2
var climbStairsRec = function(n, memo){
    if(memo[n]) return memo[n]
    memo[n] = climbStairsRec(n-1, memo) + climbStairsRec(n-2, memo)
    return memo[n]
}