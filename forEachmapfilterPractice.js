//forEach Exercises
function doubleValues(arr) {
    let doubledArr = [];
    arr.forEach(function (val){
        doubledArr.push(val*2);
    });
    return doubledArr;
}
const forEachAns1 = doubleValues([1,2,3]);
const forEachAns2 = doubleValues([5,1,2,3,10]);

function onlyEvenValues(arr) {
    let onlyEvenArr = [];
    arr.forEach(function (val){
        if (val % 2 === 0) {
            onlyEvenArr.push(val);
        }
    });
    return onlyEvenArr;
}
const forEachAns3 = onlyEvenValues([1,2,3]);
const forEachAns4 = onlyEvenValues([5,1,2,3,10]);

function firstAndLastValues(arr) {
    let firstAndLastArr = [];
    arr.forEach(function (val){
        firstAndLastArr.push(val[0] + val[val.length - 1]);
    });
    return firstAndLastArr;
    }
const forEachAns5 = firstAndLastValues(['colt', 'matt','tim', 'test']);
const forEachAns6 = firstAndLastValues(['hi', 'goodbye', 'smile']);
   
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
    val[key] = value;
    });
    return arr;
}
const forEachAns7 = addKeyAndValue([
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
],
'title',
'instructor'
);

function vowelCount(string) {
    let stringSplitArr = string.split('');
    let arrObj = {};
    let vowels = 'aeiou';
    stringSplitArr.forEach(function(char) {
        let lowerCaseChar = char.toLowerCase();
        if (vowels.indexOf(lowerCaseChar) !== -1) {
            if(arrObj[lowerCaseChar]) {
                arrObj[lowerCaseChar]++;
            } else { arrObj[lowerCaseChar] = 1; 
            }
        };
   });
    return arrObj;  
}
const forEachAns8 = vowelCount('Elie');
const forEachAns9 = vowelCount('Tim');
const forEachAns10 = vowelCount('Matt');
const forEachAns11 = vowelCount('hmmm');
const forEachAns12 = vowelCount('I Am awesome and so are you');

// map Exercises
function doubleValuesWithMap(arr) {
    return arr.map(function (val) {
    return (val*2);
    });
    return newArr;
}
const mapAns1 = doubleValuesWithMap([1,2,3]);
const mapAns2 = doubleValuesWithMap([1,-2, -3]);

function valTimesIndex(arr) {
   return arr.map(function (val, index) {
    return(val*index);
    });
    
}
const mapAns3 = valTimesIndex([1,2,3]);
const mapAns4 = valTimesIndex([1,-2, -3]);

function extractKey(arr, key) {
    return arr.map(function (val) {
    return (val[key]);
    });
    
}
const mapAns5 = extractKey([
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
],
    'name'
)
function extractFullName(arr) {
    return arr.map(function (val) {
    return val.first + ' ' + val.last
    });

}
const mapAns6 = extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

//filter Exercises

function filterByValue (arr, key) {
    return arr.filter(function (val) {
        return val[key] !== undefined;
    });
}
const filterAns1 = filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )
  
function find(arr, LookUpVal) {
    return arr.filter(function (val) {
        return  val === LookUpVal;
}) [0];
}
const filterAns2 = find([1,2,3,4,5], 3) 
const filterAns3 = find([1,2,3,4,5], 10)

function findInObj (arr, key, searchVal) {
    return arr.filter(function (val) {
    return val[key] === searchVal;
    }) [0];
}
const filterAns4 = findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  )

function removeVowels(string) {
    const vowels = 'aeiou';  
    return string
    .toLowerCase()
    .split('')
    .filter(function (val) {
    return vowels.indexOf(val) === -1;
    })
    .join('');
}  
const filterAns5 = removeVowels('Elie') 
const filterAns6 = removeVowels('TIM') 
const filterAns7 = removeVowels('ZZZZZZ')

function doubleOddNumbers(array) {
    return array.filter(function (val) {
        return val % 2!== 0;
    }).map(function (val) {
        return val * 2;
    });
}
const filterAns8 = doubleOddNumbers([1,2,3,4,5]);
const filterAns9 = doubleOddNumbers([4,4,4,4,4]);