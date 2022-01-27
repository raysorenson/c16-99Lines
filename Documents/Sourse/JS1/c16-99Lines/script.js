let friends = ['Jimmy', 'Jane', 'Joel', 'Joan', 'Jared'];   //array

for (i = 0; i < friends.length; i++) {      //for loop 4 countup
    for (x = 99; x > 0; x--) {              //nested for loop 99 countdown
        if (x > 2) {                        
            
            console.log(x + ' lines of code in the file,' + x + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (x - 1) + ' lines of code in the file');
            //^^index number of inner for loop iteration concatenated with a string and so on. The current index of the outer loop selects the friend to add.
        
        } else if (x === 2) {               //exception for the inner loop count of 2 for to better grammar.
            console.log('2 lines of code in the file, 2 lines of code; ' + friends[i] + ' strikes one out, clears it all out, 1 more line of code in the file');
        } else {                            //exception for the inner loop count of 1 for to better grammar.
            console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes it out, clears it all out, no more lines of code in the file');
        }
    }
}

