const node = (value, next = null) =>
{
    return {
        value: value,
        next: next
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    insertHead = (val) => {
        const newNode = node(val, this.head);
        this.head = newNode;
        this.length++;

    };

}

module.exports = LinkedList;
























module.exports = linkedList;