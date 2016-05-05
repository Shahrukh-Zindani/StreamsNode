var fs = require('fs');
const _ = require('highland');

const readStream1 = fs.createReadStream('yo.json',{encoding:'utf8'})
const readStream2 = fs.createReadStream('yo1.json',{encoding:'utf8'})
const readStream = fs.createReadStream('4yrFLzAKx-2.json',{encoding:'utf8'});
const readStreams = fs.createReadStream('hello1.txt');
const readFile = _.wrapCallback(fs.readFile);
var writeStream= fs.createWriteStream('hello.txt');




const names = _(['shahrukh','otto','sai','daniel']);

// names
// .filter(x => {
// 	return x ==='shahrukh'
// })
// .pipe(process.stdout);

_(readStreams)
// .reduce('', (memo, val) => memo += val)
// .split()
// .tap(console.log)
//.collect()
.map(JSON.parse)
.flatten()
.filter(x => {
	return x ==='OTTO'
})
.pipe(process.stdout);

// var nums = _(
//     _([1, 2, 3]),
//     _([4, _([5, 6]) ])
// );


// .map(x => {
// 	return x
//  })

// .map(x => {
// 	return x
//  })




//const writeStream= fs.createWriteStream('hello.txt');
//  _(readStreams)
// // .filter(x => {
// // 	return x == 'SHAHRUK'
// // })
// .map(x => {
// 	return x
//  })
// //.map(JSON.stringify)
// .pipe(process.stdout);


// .map(JSON.parse)

// .map(x => {
// 	x.batters.batter = {'id':'12'},{'name':'shahrukh'}
// 	return x;
// })
// .map(JSON.stringify)
// .pipe(process.stdout);



//const writeStream = fs.createWriteStr
//process.stdin.setEncoding("utf8");
//process.stdin.pipe(process.stdout);
//process.stdin.pipe(process.stdout)
// _(readStream)
// .map(JSON.parse)
// //.flatten()
// //.map(function(doc){
// 	//doc.company=doc.company.toLowerCase();
// 	//return doc;
// //})
// .map(JSON.stringify)
// .pipe(process.stdout)
//.tap(_.log)
//.done(() => console.log('asdad'));
//.invoke('toString')
