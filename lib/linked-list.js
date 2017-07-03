'use strict';

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    addNext(value) {
        this.next = new ListNode(value);
        return this.next;
    }
    deleteNode(value, last=undefined) {
        if (this.value === value) {
            this.carryDelete(value, this);
        } else {
            return this.next.deleteNode(value, this);
        }
    }
    carryDelete(value, last) {
        if (this.next) {
            this.value = this.next.value;
            this.next.carryDelete(value, this);
        } else {
            last.next = null;
        }
    }
}

const mergeSortedLinkedLists = (l1, l2) => {
    let head;
    let current;
    while(l1 && l2) {
        if (l1.value < l2.value) {
            if (!head) {
                head = new ListNode(l1.value);
                current = head;
                l1 = l1.next;
            } else {
                current.next = new ListNode(l1.value);
                current = current.next;
                l1 = l1.next;
            }
        } else {
            if (!head) {
                head = new ListNode(l2.value);
                current = head;
                l2 = l2.next;
            } else {
                current.next = new ListNode(l2.value);
                current = current.next;
                l2 = l2.next;
            }
        }
    }
    if (l1) {
        current.next = l1;
    }
    if (l2) {
        current.next = l2;
    }
    return head;
}