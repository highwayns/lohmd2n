HTTP Live Streaming 入門
====
* knowledgeid: -LdLtaiBADqiIat-6k_48
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2
* language: jp
* knowledgetype: 10
* content_count: 10
* introduce: HTTP Live Streaming 入門

## 1.0 はじめに
```
HTTP Live Streamingとは、米アップルによって開発された動画配信技術です。
特徴として以下のものが挙げられます。
通常のHTTPサーバを利用
ライブ/オンデマンドいずれにも対応
ビットレートの異なる複数の代替ストリームをサポート
クライアントはネットワーク帯域の変更に応じて、インテリジェントにストリーム切り替えが可能
HTTPSを使用したメディアの暗号化とユーザ認証に対応
ネットワーク帯域の変化に対応して、クライアントが動的にストリー ムを選択できるということは、デバイスが、4G・WiFi間などを移動した場合でも、常に最適なストリームを供給することが可能ということであり、これはプログレッシブなダウンロードに比べても、相当に有利な条件と言えます。
再生は、クライアント側が、Safari（UIWebView）の場合は、videoタグのソースとして配信し、アップル関連のクライアントであれば、QTKit/AVFoundationフレームワーク（OS X）、MediaPlayer/AVFoundationフレームワーク（iOS）を利用してアプリ実装が可能です。
```

## 2.0 動画配信テクノロジー
```
ここで、各種の動画配信テクノロジーの中で、HTTP Live Streamingが、どのような位置付けになるか、改めて整理しておきたいと思います。
(1) 代表的な３つのテクノロジー
動画配信の代表的なテクノロジーは、次の３つです。
ストリーミング
専用プロトコル
コンテンツがクライアントに残らず、セキュアな再生が可能
専用プレーヤーが必要
NW/サーバ共に多くの資源を必要とする
HTTPダウンロード
クライアントに依存しない
Webサーバだけで配信可能
コンテンツがクライアントに残るため保護が難しい
再生制御に制約が多い
ライブ配信未対応
HTTPストリーミング
標準プレーヤー、プラグイン等で再生可能
NW/サーバに多くの資源を要しない
デバイス毎に配信フォーマットが異なる
```

## 3.0 各プラットフォームに対応する配信方式
```
<table border="1">
<tbody><tr>
<td></td>
<td>ストリーミング</td>
<td>HTTPダウンロード</td>
<td>HTTPストリーミング</td>
</tr>
<tr>
<td>
<img width="60" height="35" class="alignnone size-full wp-image-199654" alt="001" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/001.png">
</td>
<td>
</td>
<td>
<img width="50" height="53" class="alignnone size-full wp-image-199646" alt="009" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/009.png">
HTML5
</td>
<td>
<img width="50" height="49" class="alignnone size-full wp-image-199648" alt="007" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/007.png">
HLS
</td>
</tr>
<tr>
<td>
<img width="60" height="68" class="alignnone size-full wp-image-199653" alt="002" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/0021.png">
</td>
<td>
<img width="50" height="47" class="alignnone size-full wp-image-199650" alt="005" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/005.png">
RTMP
</td>
<td>
<img width="50" height="53" class="alignnone size-full wp-image-199646" alt="009" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/009.png">
HTML5
</td>
<td>
<img width="50" height="48" class="alignnone size-full wp-image-199645" alt="010" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/010.png">
HDS
<img width="50" height="49" class="alignnone size-full wp-image-199648" alt="007" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/007.png">
HLS
<img width="50" height="48" class="alignnone size-full wp-image-199647" alt="008" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/008.png">
Silverlight
</td>
</tr>
<tr>
<td>
<img width="60" height="59" class="alignnone size-full wp-image-199652" alt="003" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/003.png">
</td>
<td>
<img width="50" height="47" class="alignnone size-full wp-image-199650" alt="005" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/005.png">
RTMP
<img width="50" height="52" class="alignnone size-full wp-image-199649" alt="006" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/006.png">
MMS/RTSP
</td>
<td>
<img width="50" height="53" class="alignnone size-full wp-image-199646" alt="009" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/009.png">
HTML5
</td>
<td>
<img width="50" height="48" class="alignnone size-full wp-image-199645" alt="010" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/010.png">
HDS
<img width="50" height="49" class="alignnone size-full wp-image-199648" alt="007" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/007.png">
HLS<span style="color:red">(注1)</span>
<img width="50" height="48" class="alignnone size-full wp-image-199647" alt="008" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/008.png">
Silverlight
</td>
</tr>
<tr>
<td>
<img width="60" height="55" class="alignnone size-full wp-image-199651" alt="004" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/004.png">
</td>
<td>
<img width="50" height="47" class="alignnone size-full wp-image-199650" alt="005" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/005.png">
RTMP
</td>
<td>
<img width="50" height="53" class="alignnone size-full wp-image-199646" alt="009" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/009.png">
HTML5
</td>
<td>
<img width="50" height="48" class="alignnone size-full wp-image-199645" alt="010" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/010.png">
HDS
<img width="50" height="49" class="alignnone size-full wp-image-199648" alt="007" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/007.png">
HLS
<img width="50" height="48" class="alignnone size-full wp-image-199647" alt="008" src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/008.png">
Silverlight
</td>
</tr>
</tbody></table>
```

## 4.0 HTTP Live Streamingの構成
```
iPhoneなどのクライアントは、Webサーバに配置された動画ファイルにHTTP(HTTPS)でアクセスします（①）。
Webサーバ上の動画ファイルは、メディアセグメントファイル（.ts MPEG-2トランスポートストリームファイル)と、インデックスファイル（.M3U8 プレイリスト）からなります（②）。 クライアントがアクセス先として使用するURLは、インデックスファイル(.M3U8)であり、この中に各.tsをたどるための情報が格納されています。
上記のメディアセグメントファイル及び、インデックスファイルは、セグメンターによって作成されますが、これには 、ライブ配信用の「ストリームセグメンター（③）」と「ファイルセグメンター（④）」があります。
そして、ライブ配信の場合は、「メディアエンコーダー（⑤）」によって、オーディオビデオデバイスから取り込んだリアルタイムの信号を、エンコード・トランスポート用カプセル化し、ストリームセグメンターの入力とします。
Webサーバとして必要なのは、.M3U8ファイルと.tsファイルのMIMEタイプの関連付けだけで、通常、既存の設定で問題ありません。
```

## 5.4 HTTP Live Streamingの構成図
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2016/06/019-640x337.png

## 6.0 配信用ファイルの作成
```
Webサーバ上に配置するファイルは、セグメンターによって生成しますが、今回は、ファイルセグメンターを利用したオンデマンド配信の要領を試してみました。
```

## 7.0 HTTP Live Streaming Tools
```
ストリームセグメンター及び、ファイルセグメンターは、共にAppleデベロッパウェブサイトからダウンロートできるソフトウエアです。（iOSデベロッパプログラムの会員である必要があります）
https://developer.apple.com/streaming/
```

## 8.0 mediafilesegmenter
```
変換しようとするソースが有効かどうかは、mediafilesegmenterで確認できます。
$ mediafilesegmenter -V source.mp4
"source.mp4" can be segmented
フォルダ（hls)を作成して、その中に、ts及びインデックスを作成するには、次のようになります。
$ mkdir hls
$ mediafilesegmenter -f hls -i index.m3u8 -B media- source.mp4
$ ls -la hls
total 80184
drwxr-xr-x  17 sin  staff      578  6  4 08:33 .
drwxr-xr-x   4 sin  staff      136  6  4 08:33 ..
-rw-rw-r--   1 sin  staff     3070  6  4 08:33 iframe_index.m3u8
-rw-r--r--   1 sin  staff      506  6  4 08:33 index.m3u8
-rw-r--r--   1 sin  staff  3287368  6  4 08:33 media-0.ts
-rw-r--r--   1 sin  staff  2796876  6  4 08:33 media-1.ts
-rw-r--r--   1 sin  staff  3602644  6  4 08:33 media-10.ts
-rw-r--r--   1 sin  staff  2177980  6  4 08:33 media-11.ts
-rw-r--r--   1 sin  staff    70312  6  4 08:33 media-12.ts
-rw-r--r--   1 sin  staff  3657540  6  4 08:33 media-2.ts
-rw-r--r--   1 sin  staff  4128856  6  4 08:33 media-3.ts
-rw-r--r--   1 sin  staff  2971528  6  4 08:33 media-4.ts
-rw-r--r--   1 sin  staff  2985816  6  4 08:33 media-5.ts
-rw-r--r--   1 sin  staff  3830876  6  4 08:33 media-6.ts
-rw-r--r--   1 sin  staff  3802112  6  4 08:33 media-7.ts
-rw-r--r--   1 sin  staff  3884456  6  4 08:33 media-8.ts
-rw-r--r--   1 sin  staff  3823168  6  4 08:33 media-9.ts
オプションで-B media-とすることで、media-連番のファイルが生成されています。
```

## 9.0 配信用ファイルの配置
```
AWSのS3にファイルを配置して、テストしてみました。
(1) index.html
ビデオ配信のページとなるindex.htmlを次のように作成します。
index.html
<!DOCTYPE html>  
<div>  
  <h 2>HTTP Live Streaming</h 2>
  <video src="index.m3u8" width=640 height=360 controls></video>
</div>  

(2) S3へのアップロード
S3でhls-sampleという名前でバケットを作成し、セグメンターで生成したファイルとindex.htmlをアップロードしました。

続いて、静的なWebサイトのホスティングを有効にし、閲覧可能なようにポリシーを追加しました。

(3) Safaliでの表示
Static Website Hostingのエンドポイントに、Safariでアクセスすると、動画が再生できることを確認できます。
```
## 10.9 御修了ありがとうございました。
* certificatePath: https://github.com/highwayns/lohmd2n/blob/master/Certificates/http-live-streaming.png?raw=true
