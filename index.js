
module.exports = removeDuplicates = (array, key, nestedRemover = true) => {
    if (!(array instanceof Array) || key && typeof key !== 'string') {
        return false;
    }
    if (nestedRemover) {
        for (const item of array) {
            for (const objItem of Object.keys(item)) {
                if (Array.isArray(item[objItem])) {
                    item[objItem] = removeDuplicates(item[objItem], key);
                };
            }
        }
    }
    if (key && typeof key === 'string') {
        return array.filter((obj, index, array) => {
            return array.map((mapObj) => {
                return mapObj[key];
            }).indexOf(obj[key]) === index;
        });
    } else {
        return array.filter((item, index, array) => {
            return array.indexOf(item) == index;
        });
    }
}
