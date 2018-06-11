// Section 1

// What is the difference between interpolation and concatenation ? Give an example of each.
// Concatenation - Act of joining strings
// Example:
// console.log('Strings1 ' + 'String2');
// Interpolation - Act of adding string values into another string
// Example:
// let cool = 'very cool'
// console.log(`This is ${cool}.`)


// What does the acronym DRY stand for? Why should we pay attention to it ? What programming tools have we learned to write DRY code ?
//  Don't Repeat Yourself 
// Very important for code readability and maintenance. 

// Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log((a === a) < d);
console.log(e === 'Kevin');
console.log(48 == '48');


// Section 3
// while (true) {
//     console.log('Do not run this loop');
// }
//   It is an infinite loop.  There's not a condition that resets the 'true' to 'false'

// const runProgram = true;
// while (runProgram) {
//     console.log('Do not run this loop');
//     runProgram = false;
// }
// Not infinite loop - Condition is set to false within the loop

// let letters = "A";
// let i = 0;
// while (i < 20) {
//     letters += "A";
//     i++;
// }
// console.log(letters);
// I thought it'd give 20 'A's instead of 21

// Section 4
// While - Runs until a condition is met
// For - Similar, but allows for iterate through items, such as arrays.

for (let i = 0; i < 1000; i += 1) {
    console.log(i);
}

// The first part of the control statement is: The integer used as the initial value
// The second part of the control statement is: The condition
// The third part of the control statement is: The way we increment or decrement the integer 

for (let i = 999; i >= 0; i -= 1) {
    console.log(i);
}

let i = 1
while (i <= 10 ) {
    console.log(`The value of i is: ${i} of 10`)
    i += 1
}

// //  Section 5
//  750  mkdir homework_part_2
//   751  ls
//   752  cd homework_part_2/
//   753  ls
//   754  mkdir death_star
//   755  touch death_star/darth_vader.txt
//   756  touch death_star/princess_leia.txt
//   757  touch death_star/storm_trooper.txt
//   758  ls
//   759  mkdir galaxy_far_far_away
//   760  mkdir galaxy_far_far_away/tatooine
//   761  cd galaxy_far_far_away/tatooine/
//   762  touch luke.txt ben_kenobi.txt
//   763  ls
//   764  mv * ../
//   765  ls
//   766  cd ..
//   767  ls
//   768  mv ben_kenobi.txt luke.txt tatooine/
//   769  cd tatooine/
//   770  ls
//   771  ls
//   772  pwd
//   773  mkdir millenium_falcon
//   774  cd millenium_falcon/
//   775  touch han_solo.txt chewbaca.txt
//   776  cd ..
//   777  cd ..
//   778  tree
//   779  mv tatooine/ben_kenobi.txt tatooine/obi_wan.txt
//   780  cd ..
//   781  tree
//   782  cp death_star/storm_trooper.txt galaxy_far_far_away/tatooine/
//   783  mv galaxy_far_far_away/tatooine/luke.txt galaxy_far_far_away/tatooine/millenium_falcon/
//   784  mv galaxy_far_far_away/tatooine/obi_wan.txt galaxy_far_far_away/tatooine/millenium_falcon/
//   785  mv galaxy_far_far_away/tatooine/millenium_falcon/ galaxy_far_far_away/
//   786  mv galaxy_far_far_away/millenium_falcon/ death_star/
//   787  mv death_star/princess_leia.txt death_star/millenium_falcon/
//   788  tree
//   789  rm death_star/millenium_falcon/obi_wan.txt 
//   790  mkdir galaxy_far_far_away/yavin_4
//   791  mv death_star/millenium_falcon/ galaxy_far_far_away/yavin_4/
//   792  mkdir galaxy_far_far_away/yavin_4/x_wing
//   793  tree
//   794  mv galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt galaxy_far_far_away/yavin_4/
//   795  mv galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt galaxy_far_far_away/yavin_4/x_wing/
//   796  mv galaxy_far_far_away/yavin_4/* galaxy_far_far_away/
//   797  cd death_star/
//   798  mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
//   799  cd ../..
//   800  ls
//   801  cd homework_part_2/
//   802  ls
//   803  tree
//   804  mv death_star/darth_vader.txt death_star/tie_fighter_1
//   805  cp death_star/storm_trooper.txt death_star/tie_fighter_2
//   806  cp death_star/storm_trooper.txt death_star/tie_fighter_3
//   807  mv death_star/tie_fighter_* galaxy_far_far_away/
//   808  rm -rf galaxy_far_far_away/tie_fighter_2 galaxy_far_far_away/tie_fighter_3
//   809  touch galaxy_far_far_away/x_wing/the_force.txt
//   810  rm -rf death_star/
//   811  mv galaxy_far_far_away/x_wing/ galaxy_far_far_away/yavin_4/
//   812  mv galaxy_far_far_away/millenium_falcon/ galaxy_far_far_away/yavin_4/
//   813  history