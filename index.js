const calculateTotalTarget = (startDate, endDate, annual) => {
    const perMonth = annual / 12;
  
    // Calculate the total number of months (inclusive)
    const monthsDifference = 
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) + 1; // +1 to include last month
  
    let totalAllTarget = {};
    let daysOfAnyMonth = [];
    let monthlyTarget = [];
  
    // Loop through each month from startDate to endDate (inclusive)
    for (let i = 0; i < monthsDifference; i++) {
      // Calculate the current month we're processing
      const currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + i,
        1
      );
      const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate(); // Get the last day of the current month
  
      // Count the number of Fridays in the current month
      let countFridays = 0;
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        );
        if (date.getDay() === 5) countFridays++;
      }
  
      // Store the days excluding Fridays
      const workingDays = daysInMonth - countFridays;
      daysOfAnyMonth.push(workingDays);
  
      // Calculate the monthly target excluding Fridays
      const perDayTarget = perMonth / workingDays;
      monthlyTarget.push(perDayTarget * workingDays);
    }
  
    // Store results in totalAllTarget object
    totalAllTarget.daysExcludingFridays = daysOfAnyMonth;
    totalAllTarget.daysWorkedExcludingFridays = daysOfAnyMonth;
    totalAllTarget.monthlyTarget = monthlyTarget;
  
    console.log(totalAllTarget);
  };
  
  // Example usage
  calculateTotalTarget(new Date("2024-01-01"), new Date("2024-03-31"), 5220);
  