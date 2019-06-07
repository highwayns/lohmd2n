var gulp = require('gulp');
var gMarkdownToJson = require('gulp-markdown-to-json');
var gMarkdownToHtml = require('gulp-markdown');
var gMarkdownPDF = require('gulp-markdown-pdf'); 
var merge = require('gulp-merge-json');
const auth = require('./firebaseConfig').auth
const database = require('./firebaseConfig').database
const chat = require('./firebaseConfig').chat
var exit = require('gulp-exit');

// Markdown to HTML
var nMarked = require('marked');
nMarked.setOptions({
	renderer: new nMarked.Renderer(),
	pedantic: false,
	gfm: false,
	tables: true,
	breaks: true,
	sanitize: false,
	smartLists: false,
	smartypants: false,
	xhtml: false
  });

// Markdown to HTML
	
gulp.task('MD2HTML',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownToHtml())
		.pipe(gulp.dest('./HTMLs'))
		pipe(exit());
});

// Markdown to PDF

gulp.task('MD2PDF',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownPDF())
		.pipe(gulp.dest('./PDFs')
		.pipe(exit()));
});

// Markdown to JSON

gulp.task('MD2JSON',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownToJson(nMarked, 'data.json', (data, file) => {
			console.log(data.body);
			let matches = /<li[^>]*>knowledgeid: ([^<]*)<\/li>/.exec(data.body);
			if (!matches) return data;
			const knowledgeid = matches[1]
			
			matches = /<li[^>]*>author: ([^<]*)<\/li>/.exec(data.body);
			if (!matches) return data;
			const author = matches[1]
			
			matches = /<li[^>]*>authorid: ([^<]*)<\/li>/.exec(data.body);
			const authorid = matches[1]

			const contents = {};
			data.body = data.body.replace(/<p><code>/g,'<pcode>')
			data.body = data.body.replace(/<\/code><\/p>/g,'</pcode>')
			var myRe = /<h2[^>]*>([^<]*)<\/h2>/g;
			var myRe_data = /(?<=<pcode>)[\s\S]*?(?<=<\/pcode>)/g;
			var myRe_answer = /<li[^>]*>answer: ([^<]*)<\/li>/g;
			var myRe_a = /<li[^>]*>a: ([^<]*)<\/li>/g;
			var myRe_b = /<li[^>]*>b: ([^<]*)<\/li>/g;
			var myRe_c = /<li[^>]*>c: ([^<]*)<\/li>/g;
			var myRe_d = /<li[^>]*>d: ([^<]*)<\/li>/g;
			var myRe_title = /<li[^>]*>title: ([^<]*)<\/li>/g;
			var myRe_inputcontent = /<li[^>]*>inputcontent: ([^<]*)<\/li>/g;
			var myRe_inputanswer = /<li[^>]*>inputanswer: ([^<]*)<\/li>/g;
			var myRe_certificatePath = /<li[^>]*>certificatePath: ([^<]*)<\/li>/g;
			var myRe_picturePath = /<li[^>]*>picturePath: ([^<]*)<\/li>/g;
			var myRe_youtubePath = /<li[^>]*>youtubePath: ([^<]*)<\/li>/g;
			var myRe_audioPath = /<li[^>]*>audioPath: ([^<]*)<\/li>/g;
			var myRe_flashPath = /<li[^>]*>flashPath: ([^<]*)<\/li>/g;
			var myRe_advertismentPath = /<li[^>]*>advertismentPath: ([^<]*)<\/li>/g;
			var myRe_advertismentLink = /<li[^>]*>link: ([^<]*)<\/li>/g;
			let i = 1;
			while ((matches = myRe.exec(data.body)) !== null) {
			  const title = matches[1]
			  let ord = i.toString()
			  if (i < 10) {
				ord = '0' + ord;
			  }
			  const key = 'x' + ord;
			  i++;
			  const datatype = title.split(' ')[0].split('.')[1]
			  switch(datatype) {
				case '0':
					let data_ = myRe_data.exec(data.body)[0]
					data_ = data_.replace(/`<\/code>/g, '')
					data_ = data_.replace(/<code>`<\/pcode>/g, '')
					data_ = data_.replace(/<\/pcode>/g, '')
					data_ = '<pre><code>' + data_ + '</code></pre>'
				  contents[key] = {
					"avatar" : authorid,
					"comment_count" : 0,
					"content" : {
					"data" : data_,
					"type" : "Html"
					},
					"id" : key,
					"knowledgeid" : knowledgeid,
					"name" : author,
					"ord" : ord,
					"time" : 1555228371611,
					"title" :title,
					"update_at" : 1556488166377
				  };
				  break
				case '1':
				  const optiontitle = myRe_title.exec(data.body)[1]
				  const a = myRe_a.exec(data.body)[1]
				  const b = myRe_b.exec(data.body)[1]
				  const c = myRe_c.exec(data.body)[1]
				  const d = myRe_d.exec(data.body)[1]
				  const answer = myRe_answer.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"answer" : answer,
							"options": {
								"a" : a,
								"b" : b,
								"c" : c,
								"d" : d
							},
							"title" : optiontitle,
							"type" : "Select"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '2':
				  const inputcontent = myRe_inputcontent.exec(data.body)[1]
				  const inputtitle = myRe_title.exec(data.body)[1]
				  const inputanswer = myRe_inputanswer.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"inputcontent" : inputcontent,
							"inputanswer" : inputanswer,
							"title" : inputtitle,
							"type" : "Input"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '3':
				  const youtubePath = myRe_youtubePath.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"youtubePath" : youtubePath,
							"type" : "Youtube"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '4':
				  const picturePath = myRe_picturePath.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"picturePath" : picturePath,
							"type" : "Picture"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '5':
				  const audioPath = myRe_audioPath.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"audioPath" : audioPath,
							"type" : "Audio"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '6':
				  const moptiontitle = myRe_title.exec(data.body)[1]
				  const ma = myRe_a.exec(data.body)[1]
				  const mb = myRe_b.exec(data.body)[1]
				  const mc = myRe_c.exec(data.body)[1]
				  const md = myRe_d.exec(data.body)[1]
				  const manswer = myRe_answer.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"answer" : manswer,
							"options": {
								"a" : ma,
								"b" : mb,
								"c" : mc,
								"d" : md
							},
							"title" : moptiontitle,
							"type" : "MultiSelect"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '7':
				  const advertismentPath = myRe_advertismentPath.exec(data.body)[1]
				  const advertismentLink = myRe_advertismentLink.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"advertismentPath" : advertismentPath,
							"link" : advertismentLink,
							"type" : "Advertisment"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '8':
				  const flashPath = myRe_flashPath.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"flashPath" : flashPath,
							"type" : "Flash"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				case '9':
				  const certificatePath = myRe_certificatePath.exec(data.body)[1]
				  contents[key] = {
					  "avatar" : authorid,
					  "comment_count" : 0,
					  "content" : {
							"certificatePath" : certificatePath,
							"type" : "Certificate"
					  },
					  "id" : key,
					  "knowledgeid" : knowledgeid,
					  "name" : author,
					  "ord" : ord,
					  "time" : 1555228371611,
					  "title" :title,
					  "update_at" : 1556488166377
				  };
				  break
				} 
			}
			const result = {
			  "data" : {}
			};
			result.data[knowledgeid] = {
				"contents" : contents
			};

			delete data.body;
			delete data.title;
			delete data.updatedAt;
			data.knowledgecontents = result;
			return data;
		}))
		.pipe(gulp.dest('./JSONs')
		.pipe(exit()));
});

// MergeJSON

gulp.task('MergeJSON',function(){
	gulp.src('./JSONs/**/*.json')
	.pipe(merge())
	.pipe(gulp.dest('./dist'))
	.pipe(exit());
});

// Watching

gulp.task('watching',function(){
	gulp.watch('./Markdowns/**/*.md',['MD2HTML','MD2JSON','MD2PDF']);
});

// Default

gulp.task('default',['MD2HTML','MD2JSON','MD2PDF']);

// include file system module
var fs = require('fs'); 
// Download from firebase
gulp.task('DownloadData', function(){
	auth.onAuthStateChanged(function(user) {
		if (user) {
		  const ref = database.ref('users/' + user.uid)
		  ref.once('value', function(snapshot) {
			chat.setUser(user.uid, snapshot.child('name').val(), function() {
				chat.getKnowledgeList(function(knowledges) {
					for (const knowledge in knowledges) {
						let fileName = './Markdowns/' + knowledges[knowledge].name + '.md'
						fs.writeFileSync(fileName, knowledges[knowledge].name + '\r\n', 'utf8') 
						fs.appendFileSync(fileName, '===' + '\r\n', 'utf8') 
						fs.appendFileSync(fileName, '* knowledgeid: ' + knowledges[knowledge].id + '\r\n', 'utf8') 
						fs.appendFileSync(fileName, '* author: ' + knowledges[knowledge].nickname + '\r\n', 'utf8') 
						fs.appendFileSync(fileName, '* authorid: ' + knowledges[knowledge].avatar + '\r\n', 'utf8') 
						fs.appendFileSync(fileName, '' + '\r\n', 'utf8') 
											
						chat.getKnowledgeContents(knowledge, function(knowledgecontents) {
							for (const knowledgecontent in knowledgecontents) {
								fs.appendFileSync(fileName, '## ' + knowledgecontents[knowledgecontent].title + '\r\n', 'utf8') 
								switch(knowledgecontents[knowledgecontent].content.type) {
									case 'Html':
										fs.appendFileSync(fileName, '```' + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, knowledgecontents[knowledgecontent].content.data.replace(/<pre><code>/g,'').replace(/<\/code><\/pre>/g,'') + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '```' + '\r\n', 'utf8') 
										break;
									case 'Select':
										fs.appendFileSync(fileName, '* title: ' + knowledgecontents[knowledgecontent].content.title + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* a: ' + knowledgecontents[knowledgecontent].content.options.a + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* b: ' + knowledgecontents[knowledgecontent].content.options.b + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* c: ' + knowledgecontents[knowledgecontent].content.options.c + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* d: ' + knowledgecontents[knowledgecontent].content.options.d + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* answer: ' + knowledgecontents[knowledgecontent].content.answer + '\r\n', 'utf8') 
										break;
									case 'Input':
										fs.appendFileSync(fileName, '* inputcontent: ' + knowledgecontents[knowledgecontent].content.inputcontent + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* inputanswer: ' + knowledgecontents[knowledgecontent].content.inputanswer + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* title: ' + knowledgecontents[knowledgecontent].content.title + '\r\n', 'utf8')
										break; 
									case 'Youtube':
										fs.appendFileSync(fileName, '* youtubePath: ' + knowledgecontents[knowledgecontent].content.youtubePath + '\r\n', 'utf8')
										break;
									case 'Picture':
										fs.appendFileSync(fileName, '* picturePath: ' + knowledgecontents[knowledgecontent].content.picturePath + '\r\n', 'utf8')
										break;
									case 'Audio':
										fs.appendFileSync(fileName, '* audioPath: ' + knowledgecontents[knowledgecontent].content.audioPath + '\r\n', 'utf8')
										break;
									case 'MultiSelect':
										fs.appendFileSync(fileName, '* title: ' + knowledgecontents[knowledgecontent].content.title + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* a: ' + knowledgecontents[knowledgecontent].content.options.a + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* b: ' + knowledgecontents[knowledgecontent].content.options.b + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* c: ' + knowledgecontents[knowledgecontent].content.options.c + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* d: ' + knowledgecontents[knowledgecontent].content.options.d + '\r\n', 'utf8') 
										fs.appendFileSync(fileName, '* answer: ' + knowledgecontents[knowledgecontent].content.answer + '\r\n', 'utf8') 
										break;
									case 'Advertisment':
										fs.appendFileSync(fileName, '* advertismentPath: ' + knowledgecontents[knowledgecontent].content.advertismentPath + '\r\n', 'utf8')
										fs.appendFileSync(fileName, '* link: ' + knowledgecontents[knowledgecontent].content.link + '\r\n', 'utf8')
										break;
									case 'Flash':
										fs.appendFileSync(fileName, '* flashPath: ' + knowledgecontents[knowledgecontent].content.flashPath + '\r\n', 'utf8')
										break;
									case 'Certificate':
										fs.appendFileSync(fileName, '* certificatePath: ' + knowledgecontents[knowledgecontent].content.certificatePath + '\r\n', 'utf8')
										break;
									}
								}
							})
						}
					})
				})
		  })
		}
		exit();
	})
	auth.signInWithEmailAndPassword('zhengjun@jp.highwayns.com', 'zjhuen1915')	
})
// Upload to firebase
gulp.task('UploadData', function(){
	auth.onAuthStateChanged(function(user) {
		if (user) {
		  const ref = database.ref('users/' + user.uid)
		  ref.once('value', function(snapshot) {
			chat.setUser(user.uid, snapshot.child('name').val(), function() {
			  chat.getKnowledgeList(function(knowledges) {
				for (const knowledge in knowledges) {
					let fileName = './JSONs/' + knowledge.name + '.json'
					fs.readFile(fileName, 
					// callback function that is called when reading file is done
					function(err, data) {  
						// json data
						var jsonData = data; 			
						// parse json
						var knowledgecontents = JSON.parse(jsonData); 
						var contentCount = 0;
						for (const knowledgecontent in knowledgecontents.data.value.contents) {
							contentCount++;
						}
						knowledges[knowledge].content_count = contentCount;
						chat.updateKnowledge(knowledge, knowledges[knowledge]);
						chat.updateKnowledgeContents(knowledge, knowledgecontents.data.value);
					})
				}
			  })
			})
		  })
		}
		exit();
	  })
	  auth.signInWithEmailAndPassword('zhengjun@jp.highwayns.com', 'zjhuen1915')	
})

const pdf2png = require("pdf2png-mp2/lib/pdf2png.js");
gulp.task('PDF2Png', function(){
	// Most simple example
	pdf2png.convert("./PDFs/angular.pdf", function(resp){
		if(!resp.success)
		{
			console.log("Something went wrong: " + resp.error);
			return;
		}
		console.log("Yayy the pdf got converted, now I'm gonna save it!");
		fs.writeFile("./PNGs/example_simple.png", resp.data, function(err) {
			if(err) {
				console.log(err);
			}
			else {
				console.log("The file was saved!");
			}
		});
		exit();	
	});
})

const ppt2png = require('ppt2png');
gulp.task('PPT2Png', function(){
	ppt2png('./PPTs/foo.ppt', './PNGs', function( err ){
		if(err) {
			console.log(err);
		} else {
			console.log('convert successful.');
		}
		exit();
	});
})
