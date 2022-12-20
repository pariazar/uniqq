
module.exports = removeDuplicates = (arr, key, nestedRemover = true) => {
    if (!(arr instanceof Array) || key && typeof key !== 'string') {
        return false;
    }
    if (nestedRemover) {
        for (const item of arr) {
            for (const objItem of Object.keys(item)) {
                if (Array.isArray(item[objItem])) {
                    item[objItem] = removeDuplicates(item[objItem], key);
                };
            }
        }
    }
    if (key && typeof key === 'string') {
        return arr.filter((obj, index, arr) => {
            return arr.map((mapObj) => {
                return mapObj[key];
            }).indexOf(obj[key]) === index;
        });
    } else {
        return arr.filter((item, index, arr) => {
            return arr.indexOf(item) == index;
        });
    }
}
