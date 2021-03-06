Cordova
===
* knowledgeid: -LdLtaiBADqiIat-6k_41
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2
* language: jp
* knowledgetype: 3
* content_count: 32
* introduce: Cordovaマニュアル

## 1.0 Android プラットフォーム ガイド
```
このガイドは、Android デバイスのための Cordova アプリを展開する SDK 環境を設定する方法と必要に応じて開発ワークフローでアンドロイドを中心のコマンド ライン ツールを使用する方法を示します。 開発のためこれらのプラットフォームを中心としたシェル ツールまたはクロス プラットフォーム コルドバ CLI を使用するかどうかに関係なく Android SDK をインストールする必要があります。 2 つの開発パスの比較の概要を参照してください。 CLI の詳細は、コマンド ライン インターフェイスを参照してください。
```
## 2.0 要件、およびサポート 
```
人造人間のためのコルドバ OS X、Linux または Windows のオペレーション システムにインストールされている可能性がありますが人造人間 SDK が必要です。 Android の SDK のシステム要件を参照してください。.
コルドバ (Android の API レベル 14 で始まる) アンドロイド 4.0.x をサポートしているより高い。 一般的な規則として Google の分布のダッシュ ボード上の 5% を下回ると Android のバージョンになるコルドバでサポートされていません。 アンドロイド バージョン API より早くレベル 10、および 3.x バージョン (ハニカム、API レベル 11-13) はその 5 ％ のしきい値を大きく下回ったことができます。
```
## 3.0 コルドバ シェル ツールをインストールします。 
```
SDK と一緒にコルドバのアンドロイドを中心のシェル ・ ツールを使用する場合はcordova.apache.orgからコルドバをダウンロードします。 コマンド ライン インターフェイスで記述されているクロス プラットフォーム CLI ツールを使用する予定がある場合それ以外の場合このセクションを無視します。
コルドバ ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 適切なアーカイブを展開してください android この場合、空のディレクトリ内。 関連性の高い実行ユーティリティは、トップレベルで利用可能な bin ディレクトリ。 (より詳細な指示が必要な場合は、 READMEファイルを参照して)。
これらのシェルのツールを作成、構築、および Android アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。
```
## 4.0 Java 開発キット (JDK) のインストールします。 
```
Java 開発キット (JDK) 7をインストールまたはそれ以降。
Windows をインストールするときも JDK インストール パス (たとえば、C:\Program Files\Java\jdk1.7.075) によると`JAVAHOME`環境変数を設定する必要があります。

Android の SDK をインストールします。 
Android のスタンドアロン SDK ツールやAndroid のスタジオをインストールします。 Procceed 対応アンドロイド Studioプラグインのアンドロイド新しいコルドバの開発またはネイティブ ツールを使用して実行および Android プラットフォームをデバッグする場合。 それ以外の場合は、 Android のスタンドアロン SDK ツールは Android アプリケーション ビルドおよび配置するのに十分です。
詳細なインストール手順は利用可能な上記のリンクをインストールの一部として。
コルドバするために、コマンド ライン ツールまたはに基づいては、CLI は、SDK のツールやプラットフォーム固有のツールディレクトリパスに含める必要があります。 Mac または Linux は、作成または変更するテキスト エディターを使用することができます、 ~/.bash_profile ファイルは、SDK がインストールに応じて、次のような行を追加します。
    export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools
~/.Bash_profile内のこの行は、新しくオープンしたターミナル ウィンドウでこれらのツールを公開します。 ターミナル ・ ウィンドウをまだ開いて場合は osx 版、またはログアウト/ログイン Linux 上を避けるために、現在の端末ウィンドウで使用できるようにするこれを実行します。
    $ source ~/.bash_profile
Windows のPATH環境を変更: する
デスクトップの左下隅の [スタート] メニューをクリックして、コンピューターを右クリックして ［プロパティ］.
左側の列では、システムの詳細設定を選択します。
表示されたダイアログ ボックスで環境変数キーを押します。.
パス変数を選択し、キーを押して編集.
追加するのには、次の PATH 例えば、SDK をインストールしたに基づきます。
;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools
値を保存して両方のダイアログ ボックスを閉じます。
```
## 5.0 SDK パッケージをインストールします。 
```
アンドロイド SDK マネージャーを開く (たとえば、端末を介して:アンドロイド) インストールと。
アンドロイド 5.1.1 (API 22) プラットフォーム SDK
Android の SDK ビルド ツール バージョン 19.1.0 またはそれ以降
Android 対応リポジトリ (エクストラ)
詳細については、 SDK パッケージのインストールを参照してください。
```
## 6.0 エミュレーターを構成します。 
```
人造人間 sdk は既定で任意の既定のエミュレーターのインスタンスを提供しません。 コマンド ・ ラインでandroidを実行して新しいものを作成できます。 プレスツール → 管理 Avd (Android 仮想デバイス)、デバイスの定義されたダイアログ ボックスから任意の項目を選択します。

プレスAVD の作成、必要に応じて、名前の変更、変更を受け入れて[ok]を押します。

これで、AVD Android 仮想デバイスリストに表示されます。

エミュレーターを開くには、個別のアプリケーションとして、AVD を選択し、開始を押します。ハードウェア ボタンで使用できるコントロールを追加して、デバイスのように多くを起動します。

高速な経験のため、実行速度を向上させる仮想マシン加速を使用できます。 多くの近代的な Cpu をより効率的に仮想マシンを実行する拡張機能を提供します。 加速度のこのタイプを使用する前にかどうか、現在の開発システムの CPU をサポートしています 1 つ次の仮想化テクノロジを決定する必要があります。
インテル バーチャライゼーション ・ テクノロジー(VT-x、vmx) → Intel VT-x 対応のプロセッサ一覧
AMD の仮想化AMD-V （SVM）、Linux のサポートだけ (2006 年 5 月以来すべての Cpu AMD を含める AMD-V Sempron を除く)。
かどうか、インテル ・ プロセッサーの VT-x テクノロジをサポートする、インテル プロセッサー識別ユーティリ ティーを実行している、インテル・ ダウンロード ・ センターからダウンロードできますwindowsやOS に依存しないであるbooteable ユーティリティを使用することができますを調べる別の方法.
インストールし、インテルのプロセッサー識別ユーティリ ティーを実行後、Windows 上あなたの CPU 仮想化テクノロジをサポートしているかどうかを確認するために次のウィンドウを得るでしょう：

エミュレーターをスピードアップするためにダウンロードし、1 つ以上のIntel x86 原子システム イメージとしてインテル ハードウェア加速実行マネージャー (HAXM)をインストールする必要があります。.
あなたアンドロイド SDK マネージャーを開き、テストするどちらかのバージョンのIntel x86 原子システム イメージを選択します。 エクストラに行くとIntel x86 エミュレーター アクセラレータ (HAXM)を選択し、それらのパッケージをインストールします。

ダウンロード後エクストラ/インテル/Hardware_Accelerated_Execution_Managerでアンドロイド SDK で提供されているインテル インストーラーを実行します。 注:より多くの情報とステップ バイ ステップ ガイダンスこのチェックを見つけることができる場合は、パッケージのインストールに問題がある Intel の記事.
1 つ以上のIntel x86 原子システム イメージとして、インテル ハードウェア加速実行マネージャー、余分な物の下で利用可能なインストールします。.
エクストラ/インテル/Hardware_Accelerated_Execution_Managerでアンドロイド SDK で提供されているインテルのインストーラーを実行します。.
インテル画像に設定されているターゲットで新しい AVD を作成します。
エミュレーターを起動するときはハックス モジュールのロードに失敗を示すエラー メッセージがない確認します。
```
## 7.0 新しいプロジェクトを作成します。 
```
この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは人造人間固有のシェルのツールのセットで説明するクロス プラットフォーム CLI ツールの間に選択できます。 ソース コード ディレクトリ内からの場合、CLI アプローチここです：
    $ cordova create hello com.example.hello HelloWorld
    $ cd hello
    $ cordova platform add android
    $ cordova prepare              # or "cordova build"
ここでは Unix および Windows の対応する低レベル シェル ツール アプローチ：
    $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
    C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
```
## 8.0 プロジェクトをビルドします。 
```
開発で CLI を使用している場合、プロジェクトの最上位レベルのwwwディレクトリにはソース ファイルが含まれます。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。
    $ cordova build                   # build all platforms that were added
    $ cordova build android           # build debug for only Android
    $ cordova build android --debug   # build debug for only Android
    $ cordova build android --release # build release for only Android
開発で人造人間に固有のシェルのツールを使用している場合、別のアプローチがあります。 プロジェクトを生成した後、既定のアプリのソースは資産/wwwサブディレクトリで利用可能です。 以降のコマンドはそのコルドバサブディレクトリで利用できます。
ビルドコマンドをプロジェクト ファイルを消去して、アプリを再構築します。ここでは、Mac と Windows の両方の構文です。 例の最初のペアを生成するデバッグ情報と 2 番目のリリースのアプリを構築します。
    $ /path/to/project/cordova/build --debug
    C:\path\to\project\cordova\build.bat --debug

    $ /path/to/project/cordova/build --release
    C:\path\to\project\cordova\build.bat --release
```
## 9.0 アプリを展開します。 
```
コルドバCLI ユーティリティを使用して、コマンド ・ ラインから、エミュレーターまたはデバイスにアプリケーションを配置することができます。
    $ cordova emulate android       #to deploy the app on a default android emulator
    $ cordova run android --device  #to deploy the app on a connected device
それ以外の場合は、代替シェル インターフェイスを使用します。
    $ /path/to/project/cordova/run --emulator
    $ /path/to/project/cordova/run --device
使用することができますcordova run android --listを見るすべての利用可能なターゲットとcordova run android --target=target_name 、特定のデバイスまたはエミュレーターでアプリケーションを実行する (たとえば、cordova run android --target="Nexus4_emulator").
コルドバの実行 - ヘルプを使用して、追加のビルドを参照してください、オプションを実行することもできます。
これは、ホーム画面にアプリをプッシュし、それを起動します。

ときにアプリを実行を構築することもそれ。 追加を追加することができます--デバッグ、 -リリース、および構築方法や、再構築が必要かどうかも制御する--nobuildフラグ。
    $ /path/to/project/cordova/run --emulator --nobuild
```
## 10.0 その他のコマンド 
```
実行時のアプリケーションの詳細なログを生成します。
    $ /path/to/project/cordova/log
    C:\path\to\project\cordova\log.bat
次のプロジェクト ファイルが消去されます。
    $ /path/to/project/cordova/clean
    C:\path\to\project\cordova\clean.bat
```
## 11.0 SDK で新しいプロジェクトを開く 
```
Android プラットフォームは、プロジェクトに追加されます、一度Android Studio内からそれを開くことができます。
アンドロイド Studioアプリケーションを起動します。
インポート プロジェクト (Eclipse ADT、Gradle など)を選択します.

Android プラットフォームは、ストアドあなた/プロジェクト/プラットフォーム/androidの場所を選択します。).
```
## 12.0 Gradle 同期質問の単に答えがはい.
```
あなたを構築し、 Android のスタジオから直接アプリケーションを実行することができますすべての現在設定されて.

Android のスタジオの概要を参照してください、そして建物と Android Studio から実行する詳細については。
```
## 13.0 iOS プラットフォーム ガイド
```
このガイドは、iPhone や iPad などの iOS デバイスのための Cordova アプリを展開する SDK の開発環境を設定する方法を示します。詳細なプラットフォーム固有の情報は、次を参照してください。
iOS 構成
IOS のアップグレード
iOS の web 表示
iOS のプラグイン
iOS シェル ツール ガイド
上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。
```
## 14.0 要件、およびサポート 
```
Apple ® ツール インテル ベースの Mac OS X オペレーティング システム上でのみ実行 iOS アプリケーションを構築するために必要です。 OS X バージョン 10.9 (異端者) でのみ実行されます Xcode ® 6.0 (最低限必要なバージョン) 以上に設定すると、iOS 8 が含まれています SDK （ソフトウェア開発キット）。 アップルのアプリ Store℠ にアプリを提出するには、アップル ツールの最新バージョンが必要です。
多くの iOS SDK と Xcode のインストール iOS エミュレーターを使用してコルドバ機能をテストできますが、実際のデバイスを完全に App Store に提出する前にすべてのアプリのデバイス機能をテストする必要があります。 デバイスを少なくともいる必要があります iOS 6.x がインストールされて、コルドバ 3.0 現在サポートされている最小の iOS のバージョン。サポート デバイスなどがすべて計算された ® モデル、iPhone ® 3 gs と、上記と iPod ® タッチ第 3 世代またはそれ以降。 アプリをインストールするデバイス上に、アップルのiOS デベロッパー プログラム, そのコスト $99 1 年ごとのメンバーが必要です。 このガイド開発者プログラムに登録する必要はありません iOS エミュレーターにアプリケーションを展開する方法を示しています。
Ios の simとios-deployツール - iOS のシミュレータに iOS アプリと iOS デバイスをコマンドラインから起動することができます。
```
## 15.0 SDK をインストールします。 
```
Xcode をダウンロードする 2 つの方法があります。
からApp Store、 App Storeのアプリケーションで「Xcode」を捜すことによって利用できます。
Apple の開発者のダウンロードアップルの開発者として登録する必要があります。
Xcode をインストールすると、いくつかのコマンド ライン ツールはコルドバを実行するを有効にする必要があります。 Xcodeメニューから環境設定の [ダウンロード] タブを選択します。 [コンポーネント] パネルからコマンド ライン ツールの一覧の横にある [インストール] ボタンを押します。
```
## 16.0 インストール展開ツール 
```
Comman ライン ・ ターミナルから実行します。
    $ npm install -g ios-sim
    $ npm install -g ios-deploy

新しいプロジェクトを作成します。 
コルドバのコマンド ライン インターフェイスで説明されているように、新しいプロジェクトをセットアップするコルドバユーティリティを使用します。たとえば、ソース コード ディレクトリ: で
    $ コルドバ作成こんにちは com.example.hello"HelloWorld"$ cd こんにちは $ コルドバ プラットフォームは、ios を追加 $ コルドバ準備 # または"構築コルドバ"
```
## 17.0 アプリを展開します。 
```
接続されている iOS デバイス上のアプリを展開。
    $ cordova run ios --device
デフォルト iOS エミュレーター上でアプリケーションを展開するには
    $ cordova emulate ios
使用することができますcordova run ios --listを見るすべての利用可能なターゲットとcordova run ios --target=target_name 、特定のデバイスまたはエミュレーターでアプリケーションを実行する (たとえば、cordova run ios --target="iPhone-6").
コルドバ実行 - ヘルプは、追加のビルドを表示し、オプションを実行するもできます。
```
## 18.0 SDK でプロジェクトを開く 
```
Ios プラットフォームをプロジェクトに追加すると、Xcode の内でからそれを開くことができます。Hello/platforms/ios/hello.xcodeprojファイルを開くをダブルクリックします。このような画面になります。

```
## 19.0 エミュレーターに展開します。 
```
: IOS のエミュレーターでアプリケーションをプレビューするには
.Xcodeprojファイルが左側のパネルで選択されていることを確認してください。
右側のパネルでこんにちはアプリを選択します。
ツールバーの配色メニューから目的のデバイスを選択します、iPhone などとして 6.0 シミュレータはここに強調：

スキームの左側に同じツールバーに表示される実行ボタンを押します。 ビルド、配置、エミュレーターでアプリケーションを実行します。 独立したエミュレータ アプリケーションは、アプリを表示するが開きます。

1 つだけのエミュレーターでは一度に実行可能性がありますので、別のエミュレーターでアプリケーションをテストする場合は、エミュレーターのアプリケーションを終了し、Xcode の内で別のターゲットを実行する必要があります。
Xcode は、iPhone および iPad の最新バージョン用のエミュレーターが付属しています。 古いバージョンはから入手できます、 Xcode → 設定 → ダウンロード → コンポーネントパネル。
```
## 20.0 デバイスへの配置します。 
```
デバイスに展開する様々 な要件の詳細については、Apple のアプリ配布のワークフローについてのあなたのアプリをデバイスの起動セクションを参照してください。 簡単に言えば、展開する前に以下を行う必要があります。
アップルの iOS 開発者プログラムに参加します。
プロビジョニング プロファイル iOS プロビジョニング ポータル内を作成します。 その開発のプロビジョニングのアシスタントを使用して作成し、プロファイルをインストールすることができ、Xcode の証明書が必要です。
プロジェクトの設定内の [コード署名] セクションのコード署名 Idプロビジョニング プロファイル名に設定されていることを確認します。
デバイスに展開します。
Mac にデバイスを接続するのに USB ケーブルを使用します。
Xcode ウィンドウ方式のドロップ ダウン リストで、プロジェクトの名前を選択します。
デバイスのドロップ ダウン リストからお使いのデバイスを選択します。それが USB 経由で接続されているがまだ表示されない場合、すべてのエラーを解決するために主催者ボタンを押します。
ビルド、配置、およびお使いのデバイスでアプリケーションを実行する実行ボタンを押します。
```
## 21.0 一般的な問題 
```
警告: アプリケーション プログラミング インターフェイス (API) を変更または別の API に置き換え、それとしてマークされますが使用されなくなりました。 API は、短期的に動作しますが、最終的に削除されます。 これらの非推奨インターフェイスは Apache コルドバに反映され、Xcode 問題それらについての警告をビルドしてアプリケーションを配置するとき。
Xcode の警告invokeString方法についてカスタム URL からアプリケーションを起動する機能にかかわる。 カスタム URL から読み込むためのメカニズムが変更されており、このコードはまだ存在している後方コルドバの古いバージョンで作成されたアプリの機能を提供します。 これらの警告を無視することができますので、サンプル アプリはこの機能を使用しません。 これらの警告が表示されないように、非推奨となった invokeString API を参照するコードを削除します。
Classes/MainViewController.mファイルを編集して、コードの次のブロックを囲む /* および */ 下図のように、そのタイプのコメントコマンドのファイルを保存します。
(void)webViewDidFinishLoad:(UIWebView*)theWebView
{
// only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
/*
if (self.invokeString) {
  // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
  NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
  NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
  [theWebView stringByEvaluatingJavaScriptFromString:jsString];
}
*/
// Black base color for background matches the native apps
theWebView.backgroundColor = [UIColor blackColor];

return [super webViewDidFinishLoad:theWebView];
}
下図のように、2 つのスラッシュを挿入して次の行をコメント アウト、 Classes/AppViewDelegate.mファイルを編集し、コマンドのファイルを保存する入力します。
//self.viewController.invokeString = invokeString;
コマンド + bボタンを押して、プロジェクトをリビルドし、警告を除去します。
不足しているヘッダー: 不足しているヘッダーに関するコンパイル エラー ビルドの場所との問題に起因して Xcode 設定を介して固定することができます。
Xcode → 設定 → 場所を選択します.
派生データ] セクションで、詳細設定ボタンを押しますをここに示すようにビルド場所としてユニークなを選択します。

これは新しい Xcode のインストールの既定の設定が異なる Xcode の旧バージョンからのアップグレード、次を設定可能性があります。
詳細は、Apple のドキュメントを参照してください。
開発開始 iOS アプリ今日iOS アプリを開発するための手順の概要を提供します。
メンバー センターのホーム ページはテクニカル リソース テクニカル リソース、プロビジョニング ポータル、配布ガイドおよびコミュニティ フォーラムを含むいくつかの iOS へのリンクを提供します。
```
## 22.0 IOS 用ツール ワークフロー ガイド
```
Xcode ユーザー ガイド
アップル世界広い開発者会議 2012 (WWDC2012) からのセッションのビデオ
Xcode 選択コマンドが複数ある場合、Xcode の正しいバージョンを指定することができますがインストールされています。
(Mac ® OS X ® アップル ®、Xcode ® アプリ Store℠、iPad ®、iPhone ®、iPod ® ファインダー ® はアップル社の商標です）
```
## 23.0 Windows プラットフォームのガイド
```
このガイドでは、構築および Windows 10 普遍的なアプリケーション プラットフォーム、Windows Phone 8.1 Windows 8.1 Windows 8 の Cordova アプリを展開する SDK の開発環境を設定する方法を示しています。 シェル ツールを使用して生成し、アプリケーションを構築する方法を示します。 またはクロスプラット フォーム コルドバ CLI コマンド ライン インターフェイスでの議論。 (これら開発オプションの比較の概要」を参照してください)。このセクションでは、Visual Studio 内でコルドバのアプリを変更する方法も示します。 、採用するアプローチに関係なくあなたは、次のよう Visual Studio SDK をインストールする必要があります。
既存の Windows 8 コルドバ プロジェクトをアップグレードする方法の詳細については、Windows 8 のアップグレードを参照してください。
別のプラットフォームとしてのウィンドウ携帯電話 8 (wp8） 滞在詳細については Windows Phone 8 プラットフォーム ガイド参照してください。
コルドバ web 表示の Windows で実行されているインターネット エクスプ ローラー 10 (Windows 8.0) と依存インターネット エクスプ ローラー 11 (Windows 8.1 および Windows Phone 8.1) そのレンダリング エンジンとして、実際の問題としてコルドバ Api の呼び出しは、web コンテンツをテストする IE の強力なデバッガーを使用できるようにします。 Windows Phone 開発者ブログ サポート IE と同等の WebKit ブラウザーと一緒にする方法の有益なガイダンスを提供します。
```
## 24.0 要件、およびサポート 
```
Windows プラットフォーム用のアプリを開発するには、必要があります。
最低 4 GB の RAM と Windows 8.1 では、32 ビットまたは 64 ビット マシン (ホーム、 Pro、またはエンタープライズエディション)。
Windows 8.0、8.1 または 10、32 または 64 ビットホーム、 Pro、またはVisual Studio 2012 Expressまたは Visual Studio 2013 と共に、エンタープライズ版。 Visual Studio 2015 は Windows 8.0 アプリケーションを構築できません。
アプリの開発 Windows 8.0 および 8.1 (Windows Phone 8.1 を含む)。
Windows 8.1 または Windows 10、32 または 64 ビットホーム、 Pro、またはVisual Studio 2013 Expressと共に以上のエンタープライズエディション。 Windows 8.1 エンタープライズの評価版はマイクロソフト開発者ネットワークから利用可能です.
Windows Phone エミュレーターは、Windows 8.1 (64) プロフェッショナル ・ エディションのクライアント HYPER-V とセカンド レベル アドレス変換 (SLAT)をサポートするプロセッサとより高い、または。 Windows 8.1 エンタープライズの評価版はマイクロソフト開発者ネットワークから利用可能です.
Windows 用の visual Studio 2013(急行またはより高い)。
10 Windows 用アプリの開発。
Windows 8.1 または Windows 10 テクニカル プレビュー 2、32 ビットまたは 64 ビット、 Visual Studio 2015 RCと一緒に以上。
アプリの互換性は、アプリケーションが対象とする OS によって決定されます。 アプリは、前方互換がない下位互換、8.0 で Windows 8.1 をターゲット アプリケーションは実行できませんが、8.1 8.0 用に構築されたアプリケーションを実行できます。
Windows ストアにアプリを提出するwindowsstore.comで指示に従います。
Windows の Cordova アプリの開発には、Windows を実行する PC を使用しますが、仮想マシン環境を実行することによって、またはデュアル ブート Windows 8.1 のパーティションにブート キャンプを使用しては、また mac で開発することがあります。 Mac で必要な Windows 開発環境を設定するこれらのリソースを参照してください。
VMWare Fusion
Parallels Desktop
Boot Camp
```
## 25.0 コルドバのシェル ・ ツールを使用してください。 
```
SDK と一緒にコルドバの Windows 中心のシェル ・ ツールを使用する場合は、2 つの基本的なオプションがあります。
CLI で生成されたプロジェクト コードからローカルでアクセスします。利用できる、platforms/windows/ディレクトリ以下の説明に従って、 windowsプラットフォームを追加した後。
cordova.apache.orgで別のディストリビューションからそれらをダウンロードします。 コルドバの配布には、プラットフォームごとに別々 のアーカイブが含まれています。 必ず空のディレクトリ内でこのような場合は、適切なアーカイブ、コルドバ windowsを展開してください。 package/binディレクトリに関連するバッチ ユーティリティがあります。 (必要に応じてより詳細な指示についてREADMEファイルを参照して)。
これらのシェルのツールを作成、構築、および Windows アプリケーションを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。
```
## 26.0 SDK をインストールします。 
```
Visual Studioの要件が上記のバージョンと一致するの任意のエディションをインストールします。

Windows 10、Visual Studio インストーラーには普遍的な Windows アプリケーションを構築するためのツールをインストールするオプションがあります。 このオプションが必要な SDK をインストールするのをインストールするときに選択されているを確認する必要があります。

新しいプロジェクトを作成します。 
この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは一連の Windows 固有のシェル ツールで説明されているクロスプラット フォームの CLI ツール間できます。 以下の CLI 接近は、 HelloWorldをという名前の新しいハロープロジェクト ディレクトリ内にあるアプリを生成します。
    > cordova create hello com.example.hello HelloWorld
    > cd hello
    > cordova platform add windows
ここでは、対応する下位シェル ツール アプローチです。
    C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
このプロジェクトは、既定のターゲット OS として Windows 8.1 を対象します。 8.0 や 10.0 は、すべてのビルドの (以下「構成ターゲット Windows 版」を参照してください) をターゲットすることができます。 または、ビルドごとに特定特定バージョン対象とします。
```
## 27.0 プロジェクトをビルドします 
```
プロジェクト ディレクトリの最上位レベルで開発に CLI を使用する場合は www ディレクトリには、ソース ファイルが含まれています。アプリケーションを再構築するプロジェクト ディレクトリ内のこれらのいずれかを実行します。
    > cordova build
    > cordova build windows              # do not rebuild other platforms
    > cordova build windows   --debug    # generates debugging information
    > cordova build windows   --release  # signs the apps for release
ここでは、対応する下位シェル ツール アプローチです。
    C:\path\to\project\cordova\build.bat --debug        
    C:\path\to\project\cordova\build.bat --release
cleanコマンドは、次の準備のためにディレクトリを洗い流すのに役立ちます build :
    C:\path\to\project\cordova\clean.bat 
```
## 28.0 対象の Windows のバージョンを構成します。 
```
既定のbuildによってコマンドは、2 つのパッケージを生成されます: Windows 8.0 と Windows Phone 8.1。 バージョン 8.1 コンフィグレーション ファイル (config.xmlに次の構成設定を追加する必要がありますに Windows パッケージをアップグレードするには).
    <preference name="windows-target-version" value="8.1" />
追加するこの設定buildコマンド Windows 8.1 および Windows Phone 8.1 のパッケージを生産開始されます。

--appx パラメーター
特定の OS をターゲット アプリケーションの特定のバージョンをビルドすることもできます (たとえば、設定した Windows 10 を対象とするが、Windows Phone 8.1 用に構築する場合)。 これを行うには、するには、 --appxパラメーターを使用します。
    > cordova build windows -- --appx=8.1-phone
ビルド システムでは、設定は、ターゲットの Windows バージョン用の config.xml の設定を無視し、厳密に Windows Phone 8.1 のパッケージを構築します。
8.1-win、 8.1-phone、 uap (Windows 10 ユニバーサルアプリ) のため、 --appxフラグの有効な値。 これらのオプションは、cordova runコマンドにも適用されます。
```
## 29.0 ターゲットの Windows バージョンの考慮事項
```
Windows 10 コルドバ アプリ (と一般的に HTML アプリケーション) の新しい「リモート」モードをサポートしています。 このモードにより、アプリの DOM 操作とインライン スクリプトの使用などの一般的な web のパターンを使用する点ではるかに自由が公共の Windows ストアに提出するとき一連の機能を減らすことによってアプリを使用可能性があります。 Windows 10 とリモート モードの詳細については、 Windows 10 コルドバのドキュメントを見てください。
リモート モードを使用している場合、開発者がスクリプト注入攻撃を防ぐために、アプリケーションにコンテンツ セキュリティ ポリシー (CSP) を適用することをお勧めします。
```
## 30.0 アプリを展開します。 
```
Windows パッケージを展開。
    > cordova run windows -- --win  # explicitly specify Windows as deployment target
    > cordova run windows # `run` uses Windows package by default
Windows Phone のパッケージを展開するには。
    > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
    > cordova run windows --device -- --phone  # deploy app to connected device
cordova run windows --listを使用して、すべての使用可能なターゲットすることができますとcordova run windows --target=target_name -- -|-phone特定のデバイスまたはエミュレーターでアプリケーションを実行する (たとえば、cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone).
コルドバ実行 - ヘルプは、追加のビルドを表示し、オプションを実行するもできます。
```
## 31.0 SDK でプロジェクトを開き、アプリを展開します。 
```
前述のように Cordova アプリをビルドすると、Visual Studio で開くことが。 様々 な構築コマンドは、Visual Studio のソリューション (.sln) ファイルを生成します。 Visual Studio 内のプロジェクトを変更するのにはファイル エクスプ ローラーでファイルを開きます。

CordovaAppコンポーネントは、ソリューション内で表示し、 wwwディレクトリにindex.htmlホーム ページを含む web ベースのソース コードが含まれています。

Visual Studio のメイン メニューの下にあるコントロールでは、テストまたはアプリケーションを配置することができます。

ローカル コンピューターを選択、Visual Studio を実行している同じマシン上でアプリケーションをインストールするのには緑の矢印を押します。そうと、アプリが Windows 8 のアプリ一覧に表示されます。

アプリを再構築するたびに、インターフェイスのバージョンが更新されます。
アプリ一覧に表示する、メイン画面にピン留めするCTRLキーを押しながらアプリケーションを選択できます。

メモ仮想マシン環境内でアプリケーションを開いた場合は、コーナーでまたはアプリの切り替えや追加機能にアクセスする windows の側面に沿ってをクリックする必要があります。

また、タブレット デバイス上で実行されているかのようにアプリを表示するのにはシミュレータ導入オプションを選択します。

デスクトップの展開とは異なり、このオプションでは、タブレットの向き、場所をシミュレートし、そのネットワーク設定を変更することができます。
注: あなたのワークフローでコルドバのコマンド ライン ツールまたは SDK を使用する方法についてのアドバイスの概要を参照してください。 コルドバの CLI は、日常的に SDK で使用されるプラットフォーム固有のファイルを上書きするクロスプラット フォームのソース コードに依存します。 SDK を使用して、プロジェクトを変更する場合は、CLI の代わりに低レベルのシェル ・ ツールを使用します。
```
## 32.9 御修了ありがとうございました。
* certificatePath: https://github.com/highwayns/lohmd2n/blob/master/Certificates/cordova.png?raw=true
