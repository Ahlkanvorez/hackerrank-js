import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

export default function printLinkedList (node) {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
};
