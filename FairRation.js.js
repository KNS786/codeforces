'use strict';
 /*this is For Loaves*/
 function FairRation(B)
 {
	let lastID = -1;
    let count = 0;

    for(let i = 0; i < B.length; i++){
        if(B[i]%2 !== 0){
            if(lastID === -1) { lastID = i; }
            else{
                count += Math.abs(i - lastID)*2;
                lastID = -1;
            }
        }
    }
    return (lastID === -1) ? count : `NO`;
 }
 