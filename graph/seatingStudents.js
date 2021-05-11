//https://coderbyte.com/information/Seating%20Students
const seatingStudents = (arr) => {
    let k = arr[0];
    if (k <= 2 || k > 24) {
        return 1;
    }
    let occupied = arr.splice(1);

    if (occupied.length === 0) {
        return k;
    }

    let adjacencyList = new Map();
    const addNode = (desk) => {
        adjacencyList.set(desk, []);
    }
    const addEdge = (start, end) => {
        adjacencyList.get(start).push(end);
        adjacencyList.get(end).push(start);
    }
    // let desks = Array[k].fill()
    let desks = [];
    for (let i = 1; i < k+1; i++) {
        desks[i-1] = i;
        addNode(i)
    }
    let count = 0;

    // create graph
    // create connection for node pairs
    for (let i = 0; i < k-1; i = i+2) {

        if (  occupied.includes(desks[i]) ||  occupied.includes(desks[i + 1])) {
            continue;
        }
        addEdge(desks[i], desks[i + 1]);
        count++;

    }
    for (let i = 0; i < k-2; i = i+2) {
        if (!( occupied.includes(desks[i]) ||  occupied.includes(desks[i+2]))) {
            addEdge(desks[i], desks[i + 2]);
            count++;
        }
    }
    for (let i = 1; i < k-2; i = i+2) {
        if (!( occupied.includes(desks[i]) ||  occupied.includes(desks[i+2]))) {
            addEdge(desks[i], desks[i + 2]);
            count++
        }
    }
    return count;
};
seatingStudents([12, 2, 6, 7, 11]);
seatingStudents([6,4]);
seatingStudents([8,1,8])
console.log(seatingStudents([2]));