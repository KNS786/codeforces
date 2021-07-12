process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	main(inputString);
});
function main(str)
{
	var length=Number(str[0]);
	var arr =str[1].split(' ').map(el=>Number(el));
     let count = 0;

    for(let i = 1; i < arr.length; i++){
        let temp = arr.splice(i, 1)[0];
        let pos = i;

        for(let j = i-1; j >= 0; j--){
            if(temp < arr[j]){
                pos = j;
            }
        }
        arr.splice(pos, 0, temp);

        if(pos !== i){
            count += i - pos;
        }
    }
   console.log(count);
}
