var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};


// 1. Name of the course ('JavaScript Applications')
var nameOfCOurse = course.name;

// 2. Name of the second teacher ('Shane')
var nameOfSecondTeacher = course.teachers[1];


// 3. Name of the first student ('Steve')
var firstStudent = course.students[0].name;


// 4. Katy's computer type ('macbook')
var katysComputer = course.students[1].computer.type;


// 5. The preReq equipment object
var preReq = course.preReqs;

// 6. The second OSOption from equipment prereqs ('osx')
var OSOptions = course.preReqs.equipment.OSOptions[1];


// 7. string listing the OSOptions separated by 'or' ('linux or osx')
var OSOptionsArray = course.preReqs.equipment.OSOptions
// console.log(OSOptionsArray.join(' or '));

// 8. string listing the OSOptions separated by 'or' ('linux or osx')
var typeArray = [];
 for (var prop in course.students) {
    var computerType = course.students[prop].computer.type;
    if (computerType === 'macbook'){
        typeArray.push(course.students[prop].name);
    }
 }
console.log(typearray);

