uniqq
====
Removes all duplicates from multiple nested array recursively.

Usage
=====
First install using npm:

    npm install uniqq
    
#### Array Object

input parameters:</br>Then use it as follows:

* `array` is the array to remove items from
* `key` is the key of object with duplicate value 

```javascript

const removeDuplicates = require('uniqq');
const arrObj = [
  { name: 'Leonor' },
  { name: 'Esperanza' },
  { name: 'Leonor' },
  { name: 'Horacio' },
  { name: 'Leonor' },
  { name: 'Nicholas' },
  { name: 'Leonor' }
];

console.log(removeDuplicates(arrObj));

//Prints:
//
//  [
//   { name: 'Leonor' },
//   { name: 'Esperanza' },
//   { name: 'Horacio' },
//   { name: 'Nicholas' }
// ]
//
```


#### Nested Array Object

This method remove all duplicate objects recursively base on object key </br> Then use it as follows:

```javascript
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

console.log(removeDuplicates(arr, 'title', true));

//Prints:
//
//  [
//     { id: 1, title: 'technology lovers' },
//     { id: 2, title: 'geeks' },
//     { id: 1, title: 'musics' },
//     {
//         id: 4,
//         jobs: [
//             { id: 1, title: 'chef' },
//             { id: 2, title: 'accountant' },
//             { id: 2, title: 'teacher' }
//         ],
//         educations: [
//             { id: 1, title: 'software engineer' },
//             { id: 2, title: 'data science' },
//             {
//                 fields: [
//                     {
//                         main: [
//                             { id: 1, title: 'software engineer' },
//                             { id: 2, title: 'data science' }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]
//
```

Note: if you don't want to remove duplicate objects recursively you can set nestedRemover parameter false as follow:

```javascript
removeDuplicates(arr, 'title', false);
```
#### Array String

Then use it as follows:

```javascript

const removeDuplicates = require('uniqq');
const strArr = ['alex', 'william', 'martin', 'sara', 'sara', 'max'];

console.log(removeDuplicates(strArr));

//Prints:
//
//  'alex', 'william', 'martin', 'sara', 'max'
//
```

#### Array Numbers

Then use it as follows:

```javascript

const removeDuplicates = require('uniqq');
const numberArr = [111, 22, 33, 44, 55, 66, 77, 88, 88, 99, 10, 10, 10, 10];

console.log(removeDuplicates(numberArr));

//Prints:
//
//  111, 22, 33, 44, 55, 66, 77, 88, 99, 10
//
```


## Support
  - [Bug Reports](https://github.com/hamedpa/uniqq/issues/)

## Contributors
<p>
Pull requests are always welcome! Please base pull requests against the main branch and follow the contributing guide.

if your pull requests makes documentation changes, please update readme file.
</p>

## License

This project is licensed under the terms of the
MIT license