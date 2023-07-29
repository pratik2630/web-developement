function starPattern(n) {
    var star ="*"
    for(let i=0;i<n;i++){
        // star = star*i
        console.log(star.repeat(i))
    }
    
}

starPattern(5)