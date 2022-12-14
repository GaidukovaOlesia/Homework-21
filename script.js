let amount = 100;
let monday = [
    ['Write a tutorial',180],
    ['Some web development',120]
];
let tuesday = [
    ['Keep writing that tutorial',240],
    ['Some more web development',360],
    ['A whole lot of nothing',240]
];
let days = monday.concat(tuesday)
    .map(function(day){
        // debugger;
    day[1] /= 60;
    return day;
})
    .filter(function(day){
        // debugger;
        return day[1] > 2
    })
    .map(function(day){
        // debugger;
        const amountDay = day[1] * amount
        day.push(amountDay)
        return day;
    })
    .map(function(day){
        // debugger;
        return `
     <tr>
         <td>Task name: ${day[0]}</td>
         <td>Task duration: ${day[1]} hours</td>
         <td>Task amount: ${day[2]}</td>
     </tr>`
    })
    .join("");
document.write(`<table>${days}</table>`
);
