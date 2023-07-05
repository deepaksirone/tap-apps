const today = Meta.currentUserTime;

// How many days are there this year?
const days_in_year = today.isLeapYear() ? 366 : 365

const day_of_year = today.format('DDD');

// Figure out how many days are left in the year
const days_left_in_the_year = days_in_year-parseInt(day_of_year); 

// Move to pot the number of days left in the year + 1 (so that 1st of Jan is £3.65 and 31st December is 1p)
// Divide by 100 for pence
const amount = (days_left_in_the_year+1) / 100;

Monzo.potDeposit.setAmount(amount.toFixed(2));
