/**
 * You are given 2 arrays of tasks and results.

 eg.
 t = ['task1', 'task2a', 'task2b', 'task3']
 r = ['OK', 'Wrong Answer', 'OK', 'OK']

 Each task is labeled with a task name, followed by the number of that task, and optionally a letter to designate subtasks within that numbered task. Each element in t has a corresponding element in r. A task is considered complete as long as its results all yield 'OK'. So for the above example, task1 would be complete, task2 would not because 2a failed and task3 passed. Therefore there were 2 tasks that completed successfully. In order to compute the final result, take the passing tasks, times by 100 and then divide by the total number of tasks (3) to get the result, and then take the whole number of that result.

 Example, for the above example:
 2 * 100 / 3 = 66.6 = 66

 Write a function that takes t and r as input and returns the final result.
 */


const taskAndResult = (t, r) => {
    let taskMap = {};
    let taskName;
    let count = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i].length > 5) {
            taskName = t[i].slice(0, 5)
            if (taskName in taskMap) {
                let ar = taskMap[taskName];
                ar.push(r[i]);
                taskMap[taskName] = ar;
            } else {
                taskMap[taskName] = [r[i]];
            }
        } else {
            taskMap[t[i]] = [r[i]]
        }
    }
    // console.log(taskMap);
    for (let task in taskMap) {
        let flag = 1;
        for (let subtask of taskMap[task]) {
            if (subtask === 'Wrong Answer') {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            count++;
        }
    }
    return count;
};
console.log(taskAndResult(['task1', 'task2a', 'task2b', 'task3'], ['OK', 'Wrong Answer', 'OK', 'OK']));