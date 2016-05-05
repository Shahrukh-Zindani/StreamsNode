var mongodb = require('mongodb');
var csvFormatter = require('csv-formatter');
const _ = require('highland');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/my_database_name';
MongoClient.connect(url,function(error,db){
	if(error) throw error;
	var documents = [{'name':'Usain', 'productid':5, 'school':false}, {'name':'Bolt', 'productid':10, 'school':false}, {'name':'Ricky', 'productid':25, 'school':true}, {'name':'Messi', 'productid':2, 'school':true}]
	console.log('Database is connected');
	var collection = db.collection('docs')
	var collection1 = db.collection('docs1')

		db.collection('docs')
		.aggregate([
				{ $match : {name : 'shahrukh'}},
		
		   { $project : {name:1,productid:1, _id:0}}
		], {allowDiskUse: true}, (error, result) => {
        if (error) throw error;

        console.log(result);
        db.close();
    });

		
		
		// .map(data => {
		// 	data.name = 'shahrukh'
		// 	return data
		// })
		// .tap(function(x) {
		// 	console.log(x)
		// 	db.close()
		// })
		//.done(() => db.close())
		//.batch(5)
		// .each(x => {
		// 	console.log(x)
		// })
		// .done(() => db.close())
		
		// .each(data => {
		// 	console.log(data)	
		// })
		// .done(() => db.close())
		
		//.done(() => db.close())
		// .each(x => {
		// 	console.log(x)
		// })
		// .done(() => db.close())
		
		

			
		
		
	//db.close()
		

		
});	

	
function changeNames(x){
	x.name = "shahrukh"
	return _(x);

}
// function _getNames(db,doc){
// 	const foobar = db.collection('docs1')
// 	.aggregate([
// 			{$match: {productid:doc.productid}},
// 			{$group:{_id:'$name'}},
// 			{$project:{'Name':'$_id',_id:0}}
// 	]);
// 		return _(foobar)
// }
// _(collection.find())
// 		.flatMap(() => {
// 			return _(
// 					db.collection('docs1')
// 					.aggregate([
// 								{$match: {productid:5}},
// 								{$group:{_id:'$name'}},
// 								{$project:{'Name':'$_id',_id:0}}
// 					])

// 			);


// 		})
// 		.each(data => {
// 			console.log(data);
// 		})
// 		.done(() => db.close());
// });
		// .map(doc => {
		// 	doc.name = doc._id
		// 	return doc
		// })
		//.through(csvFormatter())
		