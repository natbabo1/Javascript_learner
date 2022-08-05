const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];

const calAvg = (arr) => arr.reduce((sum, cur) => sum+cur.score*cur.weight, 0) / arr.reduce((weight, cur) => weight+cur.weight, 0);
let avg = calAvg(scores);
console.log(avg);