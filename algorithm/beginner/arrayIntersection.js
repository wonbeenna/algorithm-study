function arrayIntersection(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

function arrayIntersection2(s1, s2) {
    let count = 0;
    for(let i = 0; i < s1.length; i++) {
        for(let j = 0; j < s2.length; j++) {
            if(s1[i] === s2[j]) {
                count += 1
            }
        }
    }

    return count;
}

function arrayIntersection3(s1, s2) {
    let count = 0;
    let map = new Map();

    for(let i = 0; i < s1.length; i++) {
        map.set(s1[i], true);
    }

    for(let i = 0; i < s2.length; i++) {
        if(map.has(s2[i])) {
            count += 1;
        }
    }

    return count;
}

module.exports =  arrayIntersection;

console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // 3
console.log(arrayIntersection2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // 3
console.log(arrayIntersection3([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // 3
