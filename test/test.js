const expect = require('chai').expect;
const removeDuplicates = require("..");
const { faker } = require('@faker-js/faker');
const util = require('util');


generateDuplicateArrObj = () => {
    const sizeOfArr = Math.floor(Math.random() * 10) + 1;
    const duplicateItem = faker.name.firstName();
    const finalArr = [];
    for (let i = 0; i < sizeOfArr; i++) {
        if (i % 2 == 0) {
            finalArr.push({
                name: duplicateItem
            })
        }
        else {
            finalArr.push({
                name: faker.name.firstName()
            })
        }

    }
    return { finalArr, sizeOfArr };
}

describe('check removing duplicate items from list" ', () => {
    it('simple array of string and number', () => {
        const strArr = ['alex', 'william', 'martin', 'sara', 'sara', 'max'];
        const numberArr = [111, 22, 33, 44, 55, 66, 77, 88, 88, 99, 10, 10, 10, 10];
        const strArrUniq = removeDuplicates(strArr);
        const numberArrUniq = removeDuplicates(numberArr);

        expect(strArrUniq.length).to.equal(strArr.length - 1);
        expect(strArrUniq).to.eql(['alex', 'william', 'martin', 'sara', 'max']);
        expect(numberArrUniq.length).to.equal(numberArr.length - 4);
        expect(numberArrUniq).to.eql([
            111, 22, 33, 44, 55,
            66, 77, 88, 99, 10
        ]);

    });

    it('test nested array object', () => {

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
        var uniqueArray = removeDuplicates(arr, 'title', true);

        expect(uniqueArray).to.eql([
            { id: 1, title: 'technology lovers' },
            { id: 2, title: 'geeks' },
            { id: 1, title: 'musics' },
            {
                id: 4,
                jobs: [
                    { id: 1, title: 'chef' },
                    { id: 2, title: 'accountant' },
                    { id: 2, title: 'teacher' }
                ],
                educations: [
                    { id: 1, title: 'software engineer' },
                    { id: 2, title: 'data science' },
                    {
                        fields: [
                            {
                                main: [
                                    { id: 1, title: 'software engineer' },
                                    { id: 2, title: 'data science' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ])
    });
    it('dynamic array object', () => {
        const { finalArr, sizeOfArr } = generateDuplicateArrObj();
        expect(finalArr.length).to.equal(sizeOfArr);
        const afterRemove = removeDuplicates(finalArr, key = 'name');
        expect(afterRemove.length).to.equal(finalArr.length - Math.round(sizeOfArr / 2) + 1)
    });

});