// // Get your shorts on - this is an array workout!
// // ## Array Cardio Day 1

// // Some data we can work with

// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// const people = [
//     'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
//     'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
//     'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
//     'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
//     'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
// ];

// // Array.prototype.filter()
// // 1. Filter the list of inventors for those who were born in the 1500's and return the filtered array
// export function myfilter(inventors) {

// 	return inventors.filter((i)=>{
// 		return i.year>=1500 && i.year<=1600
// 	})
// }

// // Array.prototype.map()
// // 2. Give us an array of the inventor first and last names (i.e. full name)
// // Ex: For the first inventor the full name will be 'Albert Einstein'
// export function map(inventors) {
// return inventors.map((i)=>{
// 	return i.first +" "+ i.last
// })
// }


// // Array.prototype.sort()
// // 3. Sort the inventors by birthdate, oldest to youngest and return the sorted array
// export function sort(inventors) {
// return inventors.sort((a,b)=>{return a.year-b.year})
// }


// // Array.prototype.reduce()
// // 4. How many years did all the inventors live?
// // Return the total number of years all the inventors lived
// export function reduce(inventors) {
// return inventors.reduce((acc, cure)=>{
// 	let lived= cure.passed -cure.year
// 	return acc+lived
// },0)
// }

// // 5. Sort the inventors by years lived and return the sorted array
// export function sortbylived(inventors) {
//     let lived=inventors.map((ele)=>{
// 		return  ele.passed- ele.year
// 	})

// 	return lived.sort((a,b)=>{a-b})
// }

// // 6. sort Exercise
// // Sort the people alphabetically by last name and return the sorted array
// export function sortByLastName(inventors) {
// 	return inventors.sort((a,b)=>{a.last-b.last})
// }

// // 7. Reduce Exercise
// // Sum up the instances of each of these
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// export function reducedSum(data) {
//     // Return an object containing transports as key and its number of occurances as the key's value
// return data.reduce((acc, transport) => {
//         acc[transport] = (acc[transport] || 0) + 1;
//         return acc;
//     }, {});
// }

// // 1. Filter the list of inventors for those who were born in the 1500s
// export function myfilter(inventors) {
//     return inventors.filter(i => i.year >= 1500 && i.year < 1600);
// }

// // 2. Give us an array of the inventor first and last names
// export function map(inventors) {
//     return inventors.map(i => `${i.first} ${i.last}`);
// }

// // 3. Sort the inventors by birthdate, oldest to youngest
// export function sort(inventors) {
//     return inventors.sort((a, b) => a.year - b.year);
// }

// // 4. Return the total number of years all the inventors lived
// export function reduce(inventors) {
//     return inventors.reduce((acc, cur) => acc + (cur.passed - cur.year), 0);
// }

// // 5. Sort the inventors by years lived
// export function sortbylived(inventors) {
//     return inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
// }

// // 6. Sort the people alphabetically by last name
// export function sortByLastName(people) {
//     return people.sort((a, b) => {
//         const [aLast] = a.split(', ');
//         const [bLast] = b.split(', ');
//         return aLast.localeCompare(bLast);
//     });
// }

// // 7. Reduce Exercise: Sum up the instances of each transport type
// export function reducedSum() {
//     return data.reduce((acc, transport) => {
//         acc[transport] = (acc[transport] || 0) + 1;
//         return acc;
//     }, {});
// }

const solution = {
  myfilter: function (inventors) {
    return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  },
  map: function (inventors) {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  },
  sort: function (inventors) {
    return [...inventors].sort((a, b) => a.year - b.year);
  },
  reduce: function (inventors) {
    return inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
  },
  sortbylived: function (inventors) {
    return [...inventors].sort((a, b) => {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return nextInventor - lastInventor;
    });
  },
  sortByLastName: function (people) {
    return [...people].sort((lastOne, nextOne) => {
      const [aLast] = lastOne.split(', ');
      const [bLast] = nextOne.split(', ');
      return aLast.localeCompare(bLast);
    });
  },
  reducedSum: function (data) {
    return data.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
  }
};
