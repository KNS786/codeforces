const puppeteer=require('puppeteer');
const url='https://www.instgram.com/';
(async ()=>{

       const browser=await puppeteer.launch();
	   const page=await browser.newPage();
	   
       
	   /*get the username*/
         const obj ={};
		 const username =page.$('h1._7UhW9');
		 const total_postes=page.$('span[class="g47SY "]');
		


     await browser.close();
})();