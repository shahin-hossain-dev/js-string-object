const college = {
    name: 'VNC',
    class: ['11', '12'],
    events: ['science fair', 'victory day', 'independent day'],
    unique: {
        color: 'Blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// set value
college.unique.result.merit = 'Top Top Most';
// get value
// const merit = college.unique.result.merit;
const merit = college['unique'].result.merit;
console.log(merit)

// set value 
college.events[1] = '16 December'
console.log(college.events[1])

// delete property
delete college.class;

console.log(college)