const util = require('util');
const removeDuplicates = require('./');

const arr = [{ id: 1, title: 'technology lovers' }, { id: 2, title: 'geeks' }, { id: 2, title: 'geeks' }, { id: 1, title: 'musics' }, {
    id: 4, jobs: [
        { id: 1, title: 'chef' },
        { id: 2, title: 'accountant' },
        { id: 2, title: 'teacher' },
        { id: 2, title: 'teacher' },
        { id: 2, title: 'teacher' },
    ], educations: [
        { id: 1, title: 'software engineer' },
        { id: 1, title: 'software engineer' },
        { id: 2, title: 'data science' },
        { id: 2, title: 'data science' },
        { id: 2, title: 'data science' },
        { id: 2, title: 'data science' },
        { id: 54, title: 'data science' },
        { id: 2, title: 'data science' },
        {
            fields: [
                {
                    main: [
                        { id: 1, title: 'software engineer' },
                        { id: 2, title: 'data science' },
                        { id: 2, title: 'data science' },
                        { id: 2, title: 'data science' },
                        { id: 2, title: 'data science' }
                    ]
                }
            ]
        }
    ]
}];

const arr2 = ['alex', 'william', 'martin', 'sara', 'sara', 'max'];
const arr3 = [111, 22, 33, 44, 55, 66, 77, 88, 88, 99, 10, 10, 10, 10];

var uniqueArray = removeDuplicates(arr, 'title', true);

console.log(util.inspect(uniqueArray, false, null, true /* enable colors */));

console.log(removeDuplicates(arr2));
console.log(removeDuplicates(arr3));
