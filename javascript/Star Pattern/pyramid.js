function starPattern(n) {
    var star ="*"
    var space=" "
    for(let i=1;i<=n;i++){
        spaces = space.repeat(n-i);
        stars = star.repeat(2*i-1);
        stars = spaces+stars;
        console.log(stars)
    }
    
}

starPattern(5)