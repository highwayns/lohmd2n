## 1.0 ML Kit For Firebaseとは
```
ML Kitはモバイル端末上で機械学習を扱いやすくするためのパッケージです。
今はパブリックベータ公開ではありますが、Firebaseで使うことができます。
```

## 2.0 BaseAPI
```
次のような機能がBase APIとして用意されています。学習済みのモデルを
使った機能なので、自分でモデルを用意する必要がなく、お手軽に使うことが
出来ます。クラウドAPIと端末内APIがあり、端末内APIはオフライン状態でも
使うことが出来ます。クラウドAPIは内部的にCLOUD Vision APIを使ってい
るのでCLOUD Vision APIと同じ料金が掛かります。端末内APIは無料で利用
できます。
```

## 3.0 画像分類
```
画像に表示されている物や場所、動き、動物などを分類するものです。端末内
APIとクラウドAPIの両方に対応。
```

## 4.0 文字認識
```
画像に表示されている文字を検出し、認識します。端末内APIとクラウドAPIの
両方に対応。
```

## 5.0 顔検出
```
画像内の顔を検出します。顔の各パーツの位置なども検出できます。端末内API
のみ対応。
```

## 6.0 バーコードスキャン
```
画像内のバーコードを検出し、その内容を表示します。端末内APIのみ対応。
```

## 7.0 ランドマーク認識
```
画像内のランドマーク（有名な建築物など）を検出します。クラウドAPIのみ
対応。
```

## 8.0 カスタムモデル
```
BaseAPIの機能以外にも自らで用意したモデルもTensorFlow Liteで読み込め
る形式であれば使うことが出来ます。
特徴としては次のようなものがあります。
Firebase上にモデルを置いておくことができます。アプリ内にバンドルするこ
ともできます。
Firebase上のモデルを更新すると、アプリ側で自動でダウンロードさせて端末
内のモデルを更新させることができます。
Firebase上のモデルと端末内のモデルを使用することができ、Firebase上のモ
デルが使用できなければ端末内のものを使うということも出来ます。 
今回はあまりカスタムモデルの実装の仕方については触れません。Codelabsに
例があるので、そちらを確認して頂ければと思います。
```

## 9.0 TensorFlow Liteとは
```
TensorFlow LiteはTensorFlowのモバイル向けのライブラリ群です。専用のモ
デルのフォーマットを使うなどして、TensorFlowをモバイル用に最適化したも
のです。
今の所はTensorFlow Liteはデベロッパープレビューとして公開されています。
なので、事前に検証された機械学習もまだまだ少なく、機能としても少ない状態
です。しかし、同様のモバイル向けのTensorFlowとして公開されている
TensorFlow Mobileに比べてより軽量でパフォーマンスの良いアプリケーション
を開発できると謳われています。なので今の所は、サービスに使うのであれば
TensorFlow Mobileを使用し、今後の正式リリースに備えてTensorFlow Liteを
検証して追いかけておく、というのが良さそうです。
```

## 10.0 クイックスタートをやってみた
```
ML Kitのクイックスタートを使って、試してみました。 内容としてはAndroidで
カメラに表示しているものに対してリアルタイムでBaseAPIの端末内APIを利用し
た検出を行うLivePreviewActivityと、静止画に対してクラウドAPIを利用した
検出を行うStillImageActivityがあります。
```

## 11.0 前提と準備
```
Android Studioを事前にインストールしておく必要があります。
git clone https://github.com/firebase/quickstart-android.git
クローンで落としてきたディレクトリの中のmlkitをAndroid Studioで開きます。
```

## 11.4 Firebase consoleでプロジェクトを作成
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/d9f2249278d042f6b2e6ff6192af078c.png

## 12.0 Androidアプリの追加
```
プロジェクトの作成が出来たら、Androidアプリの追加を行います。
app/build.gradleに記載されているapplicationIdをAndroidパッケージ名とし
て入力して登録します。
```

## 12.4 Androidアプリの追加操作
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/a8444f0f1e08edb548ea1e669e61c559-640x733.png

## 13.4 google-services.jsonダウンロード
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/e065fe3b6ff4136775a23cb818415585-640x664.png

## 14.4 google-services.json移動
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/be268fd4a53299021f09e9fcce715491-640x940.png

## 15.4 従量課金選択
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/firebase_plan-640x493.png

## 16.4 CloudVisionAPIを有効化
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/f5c0555ee16525eb9aae426cee8db58f-640x410.png

## 17.4 実際に動かしてみる
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/3b3ca3e306e7b59a3d9e05d93e60d84d-640x280.png
