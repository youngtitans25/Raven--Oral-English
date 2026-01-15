export const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Generate years from 1980 to 2015
export const YEARS = Array.from({ length: 36 }, (_, i) => (2015 - i).toString());
