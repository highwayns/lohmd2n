Gulp 入門
====
* knowledgeid: -LdLtaiBADqiIat-6k_46
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 作業を自動化できるタスクランナーとは？
```
ウェブ制作におけるさまざまな処理を「タスク」という単位で扱い、このタスクを自動化するツールのことを「タスクランナー」と呼びます。一般的にウェブ制作の現場では、Sassサスを編集すればコンパイルを実行し、画像を編集すれば画像を圧縮するというように多くの手間がかかります。
タスクランナーを使うとこのようなウェブ制作での煩雑な処理がすべて自動で行われるため、開発の工数の短縮につながります。また、一度定義したタスクやインストールしたプラグインを開発者間で共有でき、チーム内で一定の品質を保った開発ができるようになります。
```

## 2.4 作業を自動化
* picturePath: https://ics.media/entry/3290/images/8303dd84c586b4cf4e91dd3bde01d14e.png

## 3.0 Gulpのメリットは簡易な記述と高速な処理
```
タスクランナーはGulpだけでなくGruntグラントというツールもあります。どちらもNode.jsノード・ジェイエスをベースに作られたタスクランナーです。どちらが優れているというわけではありませんが、GulpはGruntに比べていくつか使いやすい点があります。
たとえば、GruntではJSONジェイソン形式で独特の記述方法であるのに対し、GulpはJavaScriptで記述可能です。また、Gruntでは基本的に同期処理であるためタスクは1つずつ実行されますが、Gulpでは基本的に非同期処理なのでタスクが高速に処理できます
```

## 4.4 Gulp処理
* picturePath: https://ics.media/entry/3290/images/9d8e13bc40c43501c909619f924e2399.png

## 5.0 Gulpの導入
```
Node.jsとGulpをインストールしましょう。コマンドライン（Windowsでは「コマンドプロンプト」、macOSでは「ターミナル」)を使う場面がありますが、コピペだけで簡単にインストールできます。基本的にWindows、macOS共通の方法で導入可能です。ページの最後に導入手順の動画も掲載してありますので、あわせてご参照ください。
```

## 6.0 Node.jsをインストール
```
Gulpを使うためにはNode.jsが必要なので、公式サイトよりNode.jsのインストーラーをダウンロードします。ダウンロードページには「推奨版」と「最新版」の2つがありますが、いろいろと便利なので「最新版」をダウンロードください。ダウンロードしたら手順にしたがってインストールします。
```

## 7.0 コマンドラインを起動しよう
```
Windowsにはコマンドプロンプトがインストールされています。起動方法は、Windowsキーを押しながらRキーを押すと、「ファイル名を指定して実行」ウィンドウが表示されます。 名前欄にcmdを入力し、［OK］をクリックします。 すると、「コマンドプロンプト」ウィンドウが起動します。
macOSには「ターミナル。app」というソフトウェアがもともとインストールされています。[アプリケーション]フォルダー→[ユーティリティ]フォルダーに移動し、[ターミナル]を起動します。

コマンドラインを起動したらnode -vと実行し、Nodeのバージョンが表示されていることを確認します。これでNode.jsのインストールは成功です。
※ WindowsにてNodeのバージョンが表示されていない場合は、コマンドプロンプトを再起動ください。
```

## 8.0 package.jsonファイルの作成
```
Webサイトのファイル一式が保存されるフォルダー（以下、プロジェクトフォルダーと呼びます）を任意の場所に作成し、コマンドラインでその場所に移動します。今回は、myprojectというフォルダーを使う前提で解説します。あらかじめフォルダーを作成しておき、次のコマンドで移動します。
▼ Windowsでのフォルダーの移動のコマンド
cd C:¥Users¥★★★¥myproject
▼ macOSでのフォルダーの移動のコマンド
cd /Users/★★★/myproject
cdとはチェンジ・ディレクトリーの略で、フォルダーの階層を移動するコマンドです。cdの後ろに半角スペースを入力ください。また、★★★の部分はOSのユーザー名を入力ください。完了したら、Enterキーを押します。
```

## 9.4 package.jsonファイルの中身
* picturePath: https://ics.media/entry/3290/images/141031_gulp_packagejson_capture.png

## 10.0 Gulpのインストール
```
Gulpを実行する為に、Gulp本体をローカル環境に（プロジェクトフォルダー以下で使えるように）インストールします。
npm install -D gulp
※ package.jsonファイルを開くと、devDependenciesというキーに、インストールしたプラグイン名とバージョンが記載されているのを見ることができます。 ※ ––save-dev、もしくは省略形の–Dという指定をするのが一般的です。
以上の手順でGulpが使える状態になりました。
記事によってはnpm install -g gulp-cliとグローバルにGulpを導入する手順を解説しているところもあります。現在ではそれは少数派です。この記事で説明しているように、グローバルにはGulpをインストールせずローカルだけにインストールするのがフロントエンド界隈では一般的です。
```

## 11.3 Gulp導入手順のビデオ
* youtubePath: Bs3Mg7Xtb0Q

## 12.0 Sassコンパイルを通して学ぶタスク処理の基本
```
ここからは、Sassファイルをコンパイルする手順を解説します。SassとGulpの連携を通して、Gulpの理解を深めていきましょう。
次の動画はSassのコンパイル手順をまとめたものです。もしわからないことがあれば動画を見直してください。
```

## 13.3 動画
* youtubePath: nxhJ-8uJJ0M

## 14.0  タスクの作成
```
必要なモジュールをnpm install -Dコマンドを使って、ローカルにインストールしましょう。 SassをGulpでコンパイルするためには次の2つのモジュールをインストールします。
Gulp本体のgulp
Sassファイルをコンパイルする為のプラグインgulp-sass
```

## 15.0 gulpfile.jsファイル
```
// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssをタスクを作成する
gulp.task("default", function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("css/style.scss")
      // Sassのコンパイルを実行
      .pipe(sass())
      // cssフォルダー以下に保存
      .pipe(gulp.dest("css"))
  );
});
```

## 16.0 ファイル説明
```
この記述の中で使われているGulpの処理を解説します。
require('プラグイン名') 使用するプラグインを読み込みます
gulp.task('タスク名', 実行される処理) タスク名と、実際に行われる処理を記述します。タスク名をdefaultにすると、タスク実行時のタスク名を省略できます。実行処理内にreturnを書くのを忘れないようにしましょう。
gulp.src('取得するファイル') タスクの対象となるファイルを取得します。複数のファイルも指定できます
pipe() 1つ一つの処理をつなげます。たとえば前述のコードでは、src()で取得したSassファイルをコンパイルし、それをgulp.dest()で書き出しています。pipe()メソッドはいくらでもつなげることができるので、連続した複数の処理を実装できます
gulp.dest('保存先フォルダー') 処理を行ったファイルを指定の場所に保存します
```

## 17.0 タスクの実行
```
npx gulp
```

## 18.0 変換前のSCSSファイル（css/style.scss）
```
// ネストのテスト
div {
  p {
    font-weight: bold;
  }
}

// 変数のテスト
$fontColor: #525252;

h1 {
  color: $fontColor;
}
```
## 19.0 変換されたCSSファイル（css/style.css）
```
div p {
  font-weight: bold; }

h1 {
  color: #525252; }
```

## 20.0 オプションの指定
```
// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssをタスクを作成する
gulp.task("default", function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("css/style.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      // cssフォルダー以下に保存
      .pipe(gulp.dest("css"))
  );
});
```

## 21.0 Watch
```
// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function() {
  // ★ style.scssファイルを監視
  return gulp.watch("css/style.scss", function() {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return (
      gulp
        .src("css/style.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("css"))
    );
  });
});
```
## 22.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FCIxg5db1wHWTu1eeymVp4EkLzfg1%2F-LbW07Cj8C37LDyZeKHF-LcPuq3uP8_kKl9Si9yX?alt=media&token=22d159ac-ead7-4465-9279-35ce0d322b20
