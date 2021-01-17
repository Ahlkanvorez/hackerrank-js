import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

export default function insertNodeAtHead (head, data) {
    let node = new SinglyLinkedListNode(data);
    node.next = head;
    return node;
};
