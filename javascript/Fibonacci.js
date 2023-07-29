function FibSeries(Num) {
    let fibArray = [0,1]

    for (let i = 2; i < Num; i++) {
        let nextNumber = fibArray[i - 1] + fibArray[i - 2];
        fibArray.push(nextNumber);
      }
    
      return fibArray;
}

Num = 10
FibSeries = FibSeries(Num)
console.log(FibSeries)