var gulp = require('gulp');
var gMarkdownToJson = require('gulp-markdown-to-json');
var gMarkdownToHtml = require('gulp-markdown');
var gMarkdownPDF = require('gulp-markdown-pdf'); 
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
		.pipe(gulp.dest('./HTMLs'));
});

// Markdown to PDF

gulp.task('MD2PDF',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownPDF())
		.pipe(gulp.dest('./PDFs'));
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
			var myRe_advertismentLink = /<li[^>]*>advertismentLink: ([^<]*)<\/li>/g;
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
				  const a = myRe_a.exec(data.body)[1]
				  const b = myRe_b.exec(data.body)[1]
				  const c = myRe_c.exec(data.body)[1]
				  const d = myRe_d.exec(data.body)[1]
				  const answer = myRe_answer.exec(data.body)[1]
				  const optiontitle = myRe_title.exec(data.body)[1]
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
				  const ma = myRe_a.exec(data.body)[1]
				  const mb = myRe_b.exec(data.body)[1]
				  const mc = myRe_c.exec(data.body)[1]
				  const md = myRe_d.exec(data.body)[1]
				  const manswer = myRe_answer.exec(data.body)[1]
				  const moptiontitle = myRe_title.exec(data.body)[1]
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
	//		.pipe(gMarkdownToJson(nMarked))
		.pipe(gulp.dest('./JSONs'));
});

// Watching

gulp.task('watching',function(){
	gulp.watch('./Markdowns/**/*.md',['MD2HTML','MD2JSON','MD2PDF']);
});

// Default

gulp.task('default',['MD2HTML','MD2JSON','MD2PDF']);