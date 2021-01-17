import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

module.exports = function printLinkedList (node) {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
};
