module.exports = function(...rest){
    var sum = 0;

    for(let m of rest){
        sum+=m
    }
    return sum 
}