/*
One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

Example

For n = 240, the output should be
lateRide(n) = 4.

Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

For n = 808, the output should be
lateRide(n) = 14.

808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.
*/
function lateRide(n) {
    /*=========================
     * Second submission:
     * Similar approach to: Add Two Digits
     * =========================
     */
    let hour = Math.floor(n/60);
    let minute = (n % 60)
    
    let sum = Math.floor(hour/10) + hour%10 
    + Math.floor(minute/10)+ minute%10;
    
    return sum;
    
    
    /*=========================
     * First submission: 
     * Convert to string -> Array, then add
     *==========================
     
        //Convert minutes to (String) hours and (String) minutes
        let hour = Math.floor(n/60);//.toString();
        let minute = (n % 60);//.toString();

        //Combine strings into one, then convert to array
        let time = hour + minute;

        const arr = time.split('');

        //Add
        const sum = (num1, num2) => {
            return Number(num1)+Number(num2);
        } 

        return arr.reduce(sum);
     */
}



