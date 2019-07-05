function solution(N, users) {
    const answer = [];
    
    /* Tentuin failure rate */
    for (let i = 1; i <= N; i++) {
      const a = users.filter(user => user > i);
      const b = users.filter(user => user === i);
      if ( a.length + b.length === 0) answer.push({ stage: i, rate: 0 })
        const failure = a.length + b.length;
        const rate = b.length;
        const failRate = rate / failure;
        answer.push({
          stage: i,
          rate: failRate
        });
    }
    
    /* Sorting Descending */
    function compare( a, b ) {
        if ( a.rate < b.rate ){
          return 1;
        }
        if ( a.rate > b.rate ){
          return -1;
        }
        return a.stage < b.stage ? -1 : 1;
    }
    answer.sort(compare);
    return answer.map(item => item.stage);
  }

console.log(solution(5,[2,1,2,6,2,4,3,3]))