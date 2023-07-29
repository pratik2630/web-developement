let ans=0
function SumOfNumbers(TotalNum) {
    for(let i=0;i<=TotalNum;i++){
        ans=ans+i
    }
    return(ans)
}
TotalNum = 100
answer = SumOfNumbers(TotalNum)
console.log("Sum of "+TotalNum+" number is "+answer)