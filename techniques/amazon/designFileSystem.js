//https://leetcode.com/problems/design-file-system/

const designFileSystem = (method, value) => {
    const result = [];
    for (let i = 0; i < method.length; i++) {
        let temp = value[i]
        if (method[i] === "FileSystem" && JSON.stringify(value[i]) === JSON.stringify([])) {
            result.push(null);
        }
        if (method[i] === "createPath") {
            result.push(createPath(value[i][0], value[i][1]));
        }
        if (method[i] === "get") {
            result.push(getPath(value[i][0]))
        }


    }
    return result;
}

const pathMap = {};
const createPath = (path, value) => {

    if (path.length === 0 || path === '/' || value===undefined) {
        return false;
    }

    const paths = path.slice(1).split('/');
    if (paths.length === 1) {
        if (pathMap[paths[0]] === undefined) {
            pathMap[paths[0]] = value;
            return true
        }
        return false;

    } else {
        for (let j = 1; j < paths.length; j++) {
            let key = paths.slice(0, j + 1).join(',');
            let parentKey = paths.slice(0, j).join(',')
            if (pathMap[key] === undefined) {
                if (pathMap[parentKey] === undefined) {
                    pathMap[parentKey] = -1;
                }
                if (pathMap[parentKey] === -1) {
                    pathMap[key] = -1;
                    return false
                } else {

                        pathMap[key] = value;
                        return true


                }
            }
        }
    }
    return false;
}
const getPath = (path) => {
    const paths = path.slice(1).split('/');

    if (pathMap[paths] === undefined) {
        return -1;
    }
    return  pathMap[paths];

}
// let a = [["FileSystem","createPath","get"],    [[],["/a",1],["/a"]]];
// console.log(designFileSystem(["FileSystem","createPath","get"],    [[],["/a",1],["/a"]]));
// console.log(designFileSystem(["FileSystem", "createPath", "createPath", "get", "createPath", "get"],    [[], ["/leet", 1], ["/leet/code", 2], ["/leet/code"], ["/c/d", 1], ["/c"]]));
console.log(designFileSystem(["FileSystem","createPath","createPath","get","createPath","get"],    [[],["/leet",1],["/leet/code",2],["/leet/code"],["/leet/code",3],["/leet/code"]]));


["FileSystem","createPath","createPath","get","createPath","get"]
    [[],["/leet",1],["/leet/code",2],["/leet/code"],["/leet/code",3],["/leet/code"]]