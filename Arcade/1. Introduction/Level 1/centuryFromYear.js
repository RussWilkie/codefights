/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
*/
function centuryFromYear(year) {
	//Design Constraints
    if(year < 1 || year > 2005){
        return;
    }  
    let century = Math.floor(year) % 100 === 0 ? Math.floor(year/100) : Math.floor(year/100)+ 1;
    
    return century;
}
