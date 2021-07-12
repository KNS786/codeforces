'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
// /*the is albaphets string values*/
//     let alpha={
//         a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,
//         i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,
//         q:17,r:18,s:19,t:20,u:21,v:22,w:23,
//         x:24,y:25,z:26
//     };
//     // s.split('').sort((a,b)=>a-b).join('');
//     // // /*this is Read the string values*/
//     //  let count=0;
//     // for(let i=1;i<=s.length;i++){
//     //     if(Object.keys(alpha)[i-1]==s[i-1])
//     //    {
//     //       count+=Object.values(alpha)[i-1];
//     //   }
      
//     //   if(count==queries[i]){
//     //       console.log("yes")
//     //   }else{
//     //       console.log('No');

//     //   }


//     /*this is For filter a strin values*/
//    s.split('').sort((a,b)=>a-b);
//    console.log(s);
//   console.log(queries);

//        /*this is for check the codition values*/
//        let newobj=new Array();
//     let sum=0;
//     for(let i=0;i<alpha.length;i++)
//     {
//         if(Object.keys(alpha)[i]==s[i]){
//            sum+=Object.values(alpha)[i];
//            newobj[s[i]]=sum;
//         }
//         else{
//             sum=0;
//             sum=Object.values(alpha)[i];
//             newobj[s[i]]=sum;
//         }
//     }

//     /*finally the matching the newobj and queries*/
//       for(let i=0;i<newobj.length;i++){
//           if(Object.values(newobj)[i]==queries[i]){
//               console.log("Yes");
//           }
//           else{
//               console.log("No");
//           }
//       }

let unis = [];
    let alph = `abcdefghijklmnopqrstuvwxyz`;
    let count = 0;

    for(let i = 0; i < s.length; i++){
        let value = alph.indexOf(s.charAt(i)) + 1;
        count = (s.charAt(i) === s.charAt(i-1)) ? count + value : value;
        unis.push(count);
    }
    for(let i = 0; i < queries.length; i++){
        queries[i] = (unis.indexOf(queries[i]) !== -1) ? `Yes`:`No`;
    }
    return queries;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join('\n')+'\n');

    ws.end();
}
