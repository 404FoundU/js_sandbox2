//https://www.youtube.com/watch?v=2l22FRtU45M&t=1212s
//https://leetcode.com/problems/course-schedule/
//kahns algorithm
const courseSchedule = (numCourses, prerequisites) => {
    // keep track of courses that have no prerequisites
    //find courses that require prerequisites
    const indegree = Array(numCourses).fill(0);
    const adjacencyList = {};
    for (let val of prerequisites) {
        if (!adjacencyList[val[1]]) {
            adjacencyList[val[1]] = []
        }
        adjacencyList[val[1]].push(val[0]);
        ++indegree[val[0]];
    }
    // console.log(indegree);
    // console.log(adjacencyList);
    // start set to include courses that do not need pre
    //all courses with no indegree are sources
    const queue = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    let count = 0;
    while (queue.length) {
        const course = queue.shift();
        count++;
        let courses = adjacencyList[course.toString()];
        if (courses !== undefined) {
            for (let c of courses) {
                indegree[c]--;
                if (indegree[c] === 0) {
                    queue.push(c);
                }
            }
        }

    }
    return count===numCourses;
}
let r;
r = courseSchedule(3, [[1, 0], [2,1]]);
// r = courseSchedule(2, [[1, 0]]);
// r = courseSchedule(2, [[1, 0], [0, 1]]);
console.log(r);