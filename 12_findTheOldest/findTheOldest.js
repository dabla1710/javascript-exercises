const findTheOldest = function(people) {
    let oldestPerson = people[0];
    let oldestPersonAge = getAge(people[0]);
    console.log("First person age:", oldestPersonAge);

    people.map((person) => {
        if ( getAge(person) > oldestPersonAge ) {
            oldestPerson = person;
            oldestPersonAge = getAge(person);
        }
    });

    return oldestPerson;
};

function getAge(person) {
    if (person.yearOfDeath == undefined) {
        const currentDate = new Date();
        person.yearOfDeath = currentDate.getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
