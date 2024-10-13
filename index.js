

const calculateTotalTargt = (startDate,endDate,annual) =>{

    const perMonth = annual/12;

    const monthsDefference = endDate.getMonth() - startDate.getMonth();
    const yearsDifference =  endDate.getYear() - startDate.getYear();
    const totalMonths = Math.abs(yearsDifference*12 + monthsDefference);
    let totalAllTarget= {};
    
    let CountFriday = 0;
    const daysOfAnyMonth = [];

    //loop counting total day of any Month
    for(let i = 1; i <= totalMonths; i++){
        const daysInMonth = new Date(startDate.getYear(), startDate.getMonth()+i, 0).getDate();
    
        
        for(let day = 1; day <=daysInMonth; day++){
            const currentDate = new Date(startDate.getYear(), startDate.getMonth()+i,day);
            // console.log(currentDate);
          
            //loop counting fridays of each month
            if(currentDate.getDay() === 5){

               CountFriday ++;
            }     
            }
           
        //adding days to array with out friday
        daysOfAnyMonth.push(daysInMonth - CountFriday);
        CountFriday = 0;
    }

    const monthlyTarget =[]
    daysOfAnyMonth.forEach(month =>{
       const perDay = perMonth/month;
        monthlyTarget.push(perDay*month);
        // console.log(` ${perDay}$`);
        
    })

    totalAllTarget.dayasExcludingfridays = daysOfAnyMonth;
    totalAllTarget.dayasWorkedExcludingfridays = daysOfAnyMonth;
    totalAllTarget.monthlyTarget = monthlyTarget;
    console.log(totalAllTarget);
}


calculateTotalTargt(new Date("2024-1-1"),new Date("2024-3-31"),5220)


