test('two plus two is four',function(){
	expect(2+2).toBe(4);
});
test('object assignment',function(){
	var data={one:1};
	data['two']=2;
	expect(data).toEqual({one:1,two:2});
});

test('adding positive numbers is not zero',function(){
	for(let a=1;a<10;a++){
		for(let b=1;b<10;b++){
			expect(a+b).not.toBe(0);
		}
	}
});
test('null',()=>{
	const n=null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('two plus two ',()=>{
	const value=2+2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);
	
	//equalvalnt for numbers
	expect(value).toBe(4);
	expect(value).toEqual(4);
});

test('adding flaoting point numbers',()=>{
	const value=0.1+0.2;
	expect(value).toBeCloseTo(0.3);
});

test('there is no I in team',()=>{
	expect('team').not.toMatch(/I/);
});

test('but thre is a "stop" in  christoph',function(){
	expect('christoph').toMatch(/stop/)
});

var shopplist=[
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
  ];
  
  test('the shopping  list has beer on it',()=>{
	  expect(shopplist).toContain('beer');
	  expect(new Set(shopplist)).toContain('paper towels');
  });
  
function complieAndroidJdk(){
	throw new Error("you are using wrong Jdk ");
}

/* async function it is wait for jest and test fails because done cannot compleytesr


test('the data is peanut butter',()=>{
	function callback(data){
		try{
			expect(data).toBe('peanut butter');
			done();
		}catch(err){
			done(err);
		}
	}
	fetchdata(callback);
});

test('the data is peanut butter',function(){
	return fetchdata().then(data=>{
		    expect(data).toBe('peanut butter');
	});
});*/

let fetchdata=require('./sum').callbacks;
let {pointes}=require('./sum');

test('The test in promise in return hello',function(){
	 return fetchdata().catch(data=>expect(data).toBe('hello'));
});

test('the test in pointes values',function(){
	  return pointes().then(data=>expect(data).toBe('super'));
});

test('async function for pointes',async ()=>{
	await expect(pointes()).resolves.toBe('super')
});

test('aync function for pointes in reject check',async()=>{
	await expect(pointes()).resolves.not.toBe(new TypeError)
});


let {intailizedataBase,clearDataBase}=require('./sum');
beforeEach(()=>{
	intailizedataBase();
});
afterEach(()=>{
	clearDataBase();
});

var {divides}=require('./takess');
test('testing for the Last in order of valus',function(){
	expect(divides).not.toBe([6,15]);
});

	


