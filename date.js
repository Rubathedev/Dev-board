// Create a new Date object
const today = new Date();

// Define the format options
const optionsWeekday = { weekday: 'short' };
const optionsDate = { month: 'short', day: 'numeric', year: 'numeric' };

// Get parts of the date separately
const weekday = today.toLocaleDateString('en-US', optionsWeekday);
const datePart = today.toLocaleDateString('en-US', optionsDate).replace(',', '');

// Show weekday, then a line break, then the rest
document.getElementById('dateDisplay').innerHTML = `${weekday}<br>${datePart}`;
