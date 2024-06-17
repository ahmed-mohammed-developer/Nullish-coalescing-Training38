const getName = name => {
  return name ?? "Ahmed"
};


console.log(getName("moo"));
console.log(getName());

const getfull = user => {
  return user.info?.name ?? "N/N"
}

console.log(getfull({info: {name: "Sam"}})); // "Sam"
console.log(getfull({})); // "Sam"

function filp_even_odd(numbers) {
  // write your code here
  return numbers.map(function(number){
    if (number % 2 === 0){
      return number += 1
    };
    return number -= 1
  });
}

console.log(filp_even_odd([73, 221, 52, 214]))


const getCom = courses => {
  return courses.filter(course => {
    return course.isCompleted === true;
  })
}
const sampleCourses = [{
  id: 1,
  name: "Learn Programming",
  isCompleted: true
}, {
  id: 2,
  name: "Learn JavaScript",
  isCompleted: false
}];
console.log(getCom(sampleCourses));


