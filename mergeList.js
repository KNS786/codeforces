function mergeLists(headA, headB) {
    if (headA == null || headB == null) {    
    return (headA == null) ? headB: headA;        
}    
if (headA.data < headB.data) {    
    headA.next =  mergeLists(headA.next, headB);            
    return headA;    
}    
headB.next =  mergeLists(headB.next, headA);        
return headB;
}
