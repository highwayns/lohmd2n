Angularシステム開発入門
===
* knowledgeid: -LbW07Cj8C37LDyZeKHF
* author: test1
* authorid: CIxg5db1wHWTu1eeymVp4EkLzfg1

## 1.0 Angularへようこそ
```
Angularへようこそ！ Angularは、Web、モバイル、またはデスクトップ用
の最新のアプリケーションを構築するのに役立ちます。
このガイドでは、簡単なAngularアプリを構築して実行する方法を説明します。
 Angular CLIツールを使用して開発を加速し、すべてのAngularプロジェクト
 に役立つスタイルガイドの推奨事項を遵守します。
このガイドは30分以内に完了します。このガイドの最後には、最終的なコード
レビューの一環として、最終的なアプリケーションコードのコピーをダウンロード
するリンクがあります。 （このガイドのコマンドを実行しない場合でも、
最終的なアプリケーションコードをダウンロードできます）。
```
## 2.0 Node.js
```
Angularには、Node.js バージョン8.xまたは10.xが必要です。
バージョンをチェックするためには、node -v をターミナルあるいは
コンソールで実行してください。
Node.jsを手に入れるには、 nodejs.orgへ行きましょう。
```
## 3.0 npm パッケージマネージャー
```
Angular、Angular CLI、Angularアプリケーションは、npmパッケージとして
利用可能なライブラリによって提供される機能に依存します。 npmパッケージ
をダウンロードしてインストールするには、npmパッケージマネージャが必要です。
このクイックスタートでは、デフォルトで Node.js とともにインストールされる
npmクライアントコマンドラインインターフェースを使用します。
npmクライアントがインストールされていることを確認するには、ターミナルや
コンソールでnpm -vを実行します。
```
## 4.0 Angular CLI
```
インストール
npm install -g @angular/cli
ワークスペースと初期アプリケーションの作成
ng new my-app
アプリケーションをサーブする
cd my-app
ng serve --open
ng serve コマンドはサーバーを起動します。
プロジェクトのファイル変更を監視して、変更があれば再度ビルドを行います。
--open （または -o ）オプションはhttp://localhost:4200/ を自動的
にブラウザで開きます。
```
## 5.0 Angularコンポーネントを編集する
```
コンポーネントは、Angularアプリケーションの基本的なビルディング
ブロックです。彼らは、画面上にデータを表示し、ユーザーの入力を聞いて、
その入力に基づいて行動を起こします。
最初のアプリの一環として、CLIが最初のAngularコンポーネントを作成
しました。これはルートコンポーネントであり、app-rootという名前です。
src/app/app.component.ts
@Component({
  selector: &#39;app-root&#39;,
  templateUrl: &#39;./app.component.html&#39;,
  styleUrls: [&#39;./app.component.css&#39;]
})
export class AppComponent {
  title = &#39;My First Angular App!&#39;;
}
```
## 6.0 チュートリアル: ツアー・オブ・ヒーローズ
```
ツアー・オブ・ヒーローズ チュートリアルはAngularの基礎をカバーしています。
 このチュートリアルでは人材派遣会社がヒーローの集合を管理するための
 アプリケーションを開発します。
この基本的なアプリケーションは、データ駆動型アプリケーションで期待される
多くの機能を持っています。 ヒーローのリストを取得して表示し、選択した
ヒーローの詳細を編集し、ヒーローデータのさまざまなビュー間を遷移します。
このチュートリアルが終わるときには、あなたは次のことができるように
なっています。
要素を表示・隠蔽する、そしてヒーローデータのリストを表示するための
組み込みAngularディレクティブを使う。
ヒーローの詳細やヒーローのリストを表示するためのAngularコンポーネント
を作成する。
読み取り専用データのための単方向データバインディングを使用する。
双方向データバインディングを用いて、モデルを更新するための編集可能な
フィールドを設置する。
キー入力やクリックといったユーザーのイベントに対しコンポーネントがもつ
メソッドをバインドする。
ユーザーがマスターリストからヒーローを選択し、詳細画面でそのヒーロー
を編集できるようにする。
パイプによりデータを整形する。
ヒーローを組み立てるための共有サービスを作成する。
さまざまなビューとそれらのコンポーネント間を遷移可能にするために
ルーティングを使用する。
Angularを始めるためにAngularのことを十分に学び、Angularは必要なことを
何でもできるということを確信するでしょう。
```
## 6.4 アプリケーションでユーザーがアクションを取っている様子です。
* picturePath: https://angular.jp/generated/images/guide/toh/toh-anim.gif
## 7.0 アプリケーションシェル
```
まず、Angular CLIを使用して初期アプリケーションを作成します。このチュートリアル
では、スターターアプリケーションを修正して拡張し、Tour of Heroesアプリを作成します。
チュートリアルのこの部分では、次のことを行います。
1 環境を設定します。
2 新しいワークスペースと初期アプリケーションプロジェクトを作成します。
3 アプリケーションをサーブします。
4 アプリケーションを変更します。
```
## 8.0 環境を設定します
```
開発環境を設定するには、入門の次の手順に従います。
ng new angular-tour-of-heroes
cd angular-tour-of-heroes
ng serve --open
```
## 9.0 アプリケーションを変更する
```

app.component.ts (class title property)
    import { Component } from &#39;@angular/core&#39;;</p>
@Component({
selector: &#39;app-root&#39;,
templateUrl: &#39;./app.component.html&#39;,
styleUrls: [&#39;./app.component.css&#39;]
})
export class AppComponent {
title = &#39;Tour of Heroes&#39;;
}
<p>app.component.html (template)<br>    <h1>{{title}}</h1>
src/styles.css
/<em> Application-wide Styles </em>/
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[type=&quot;text&quot;], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/<em> everywhere else </em>/
* {
  font-family: Arial, Helvetica, sans-serif;
}

```
## 10.0 heroes コンポーネントを作成する
```

ng generate component heroes</p>
<p>app/heroes/heroes.component.ts (初期バージョン)
    import { Component, OnInit } from &#39;@angular/core&#39;;</p>
    @Component({
    selector: &#39;app-heroes&#39;,
    templateUrl: &#39;./heroes.component.html&#39;,
    styleUrls: [&#39;./heroes.component.css&#39;]
    })
    export class HeroesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
<pcode>`
```
## 11.0 hero プロパティを追加する
```
heroes.component.ts (hero プロパティ)
    hero = &#39;Windstorm&#39;;
heroes.component.html    
    {{hero}}
```
## 12.0 HeroesComponent ビューを表示する
```
src/app/app.component.html   
    &lt;h1&gt;{{title}}&lt;/h1&gt;
    &lt;app-heroes&gt;&lt;/app-heroes&gt;
```
## 13.0 Hero クラスを作成する
```

src/app/hero.ts
    export class Hero {
    id: number;
    name: string;
    }
src/app/heroes/heroes.component.ts
    import { Component, OnInit } from &#39;@angular/core&#39;;
    import { Hero } from &#39;../hero&#39;;</p>
@Component({
selector: &#39;app-heroes&#39;,
templateUrl: &#39;./heroes.component.html&#39;,
styleUrls: [&#39;./heroes.component.css&#39;]
})
export class HeroesComponent implements OnInit {
hero: Hero = {
    id: 1,
    name: &#39;Windstorm&#39;
};

constructor() { }

ngOnInit() {
}

}
<pcode>`
```
## 14.0 ヒーローオブジェクトを表示する
```
heroes.component.html (HeroesComponent のテンプレート)
    &lt;h2&gt;{{hero.name}} Details&lt;/h2&gt;
    &lt;div&gt;&lt;span&gt;id: &lt;/span&gt;{{hero.id}}&lt;/div&gt;
    &lt;div&gt;&lt;span&gt;name: &lt;/span&gt;{{hero.name}}&lt;/div&gt;
```
## 15.0 UppercasePipe で書式設定する
```
`
```
## 26.0 サービス
```
`
```
## 27.0 HeroService の作成
```
Tour of Heroes の中で扱っている HeroesComponent は、今のところ仮
のデータを取得して表示している状態です。
このチュートリアルのリファクタリング後には、HeroesComponent は小さく
なりビューをサポートすることに専念します。 これはモックサービスを使用
して、ユニットテストをより簡潔にすることにもつながります。
```
## 28.0 ヒーローデータの取得
```

ng generate service hero</p>
<p>src/app/hero.service.ts (new service)
    import { Injectable } from &#39;@angular/core&#39;;</p>
@Injectable({
providedIn: &#39;root&#39;,
})
export class HeroService {

constructor() { }

}
<pcode>`
```
## 29.0 MessagesComponent
```
src/app/hero.service.ts (Observable imports)
    import { Observable, of } from &#39;rxjs&#39;;
    getHeroes(): Observable&lt;Hero[]&gt; {
        return of(HEROES);
    }
src/app/heroes/heroes.component.ts (import HeroService)
    heroes: Hero[];
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes =&gt; this.heroes = heroes);
    }
```
## 30.0 HeroService への注入
```

ng generate component messages</p>
<p>/src/app/app.component.html
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
    <app-messages></app-messages>
/src/app/message.service.ts
    import { Injectable } from &#39;@angular/core&#39;;</p>
@Injectable({
providedIn: &#39;root&#39;,
})
export class MessageService {
messages: string[] = [];

add(message: string) {
    this.messages.push(message);
}

clear() {
    this.messages = [];
}
}
<pcode>`
```
## 31.0 HeroService からのメッセージを表示する
```
/src/app/hero.service.ts (import MessageService)
    import { MessageService } from &#39;./message.service&#39;;
    constructor(private messageService: MessageService) { }
    getHeroes(): Observable&lt;Hero[]&gt; {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(&#39;HeroService: fetched heroes&#39;);
    return of(HEROES);
    }
```
## 32.0 ルーティング
```

/src/app/messages/messages.component.ts (import MessageService)
    import { MessageService } from &#39;../message.service&#39;;
    constructor(public messageService: MessageService) {}
src/app/messages/messages.component.html
    <div *ngIf="messageService.messages.length"></p>
&lt;h2&gt;Messages&lt;/h2&gt;
&lt;button class=&quot;clear&quot;
        (click)=&quot;messageService.clear()&quot;&gt;clear&lt;/button&gt;
&lt;div *ngFor=&#39;let message of messageService.messages&#39;&gt; {{message}} &lt;/div&gt;

&lt;/div&gt;
<pcode>`
```
## 32.4 ルーティング
* picturePath: https://angular.jp/generated/images/guide/toh/nav-diagram.png
## 33.0 AppRoutingModuleを追加する
```
Tour of Heroes アプリケーションには新しい要求があります：
ダッシュボードビューを追加する。
ヒーローズビューとダッシュボードビューの間で行き来できる機能を追加する。
ユーザーが各ビューでヒーロー名をクリックしたとき、選択されたヒーローの詳細ビューを表示する。
ユーザーがEメール上でディープリンクをクリックしたとき、特定のヒーローの詳細ビューを開く。
```
## 34.0 ルートを追加する
```

ng generate module app-routing --flat --module=app</p>
<p>src/app/app-routing.module.ts (generated)
    import { NgModule } from &#39;@angular/core&#39;;
    import { CommonModule } from &#39;@angular/common&#39;;</p>
@NgModule({
imports: [
    CommonModule
],
declarations: []
})
export class AppRoutingModule { }
<pcode>`
```
## 35.0 ダッシュボードビューを追加する
```

src/app/app-routing.module.ts (v1)
    import { HeroesComponent }      from &#39;./heroes/heroes.component&#39;;</p>
const routes: Routes = [
{ path: &#39;heroes&#39;, component: HeroesComponent }
];
<p>src/app/app.component.html (router-outlet)
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages>

```
## 36.0 ダッシュボードのルートを追加する
```
 
ng generate component dashboard</p>
<p>src/app/dashboard/dashboard.component.html
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
    <a *ngFor="let hero of heroes" class="col-1-4">
        <div class="module hero">
        <h4>{{hero.name}}</h4>
        </div>
    </a>
    </div>
src/app/dashboard/dashboard.component.ts
    import { Component, OnInit } from &#39;@angular/core&#39;;
    import { Hero } from &#39;../hero&#39;;
    import { HeroService } from &#39;../hero.service&#39;;</p>
@Component({
selector: &#39;app-dashboard&#39;,
templateUrl: &#39;./dashboard.component.html&#39;,
styleUrls: [ &#39;./dashboard.component.css&#39; ]
})
export class DashboardComponent implements OnInit {
heroes: Hero[] = [];

constructor(private heroService: HeroService) { }

ngOnInit() {
    this.getHeroes();
}

getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes =&gt; this.heroes = heroes.slice(1, 5));
}
}
<pcode>`
```
## 37.0 HTTPサービス
```
src/app/app-routing.module.ts (import DashboardComponent)
    import { DashboardComponent }   from &#39;./dashboard/dashboard.component&#39;;
    { path: &#39;dashboard&#39;, component: DashboardComponent },
src/app/app.component.html
    &lt;h1&gt;{{title}}&lt;/h1&gt;
    &lt;nav&gt;
    &lt;a routerLink=&quot;/dashboard&quot;&gt;Dashboard&lt;/a&gt;
    &lt;a routerLink=&quot;/heroes&quot;&gt;Heroes&lt;/a&gt;
    &lt;/nav&gt;
    &lt;router-outlet&gt;&lt;/router-outlet&gt;
    &lt;app-messages&gt;&lt;/app-messages&gt;
```
## 38.0 サービス有効化
```
このチュートリアルではAngularのHttpClientを使用して、次のデータ永続の
機能を追加します。
HeroServiceはHTTPリクエストを介してヒーローデータを取得します。
ユーザーはヒーロー情報を追加、編集、削除ができ、その変更をHTTPを通
して保存することができます。
ユーザーは名前でヒーロー情報を検索できます。
```
## 39.0 HTTPサービス
```
src/app/app.module.ts (Http Client import)
    import { HttpClientModule }    from &#39;@angular/common/http&#39;;
データサーバーをシミュレートする
    npm install angular-in-memory-web-api --save
src/app/app.module.ts (インメモリ Web API をインポート)
    import { HttpClientInMemoryWebApiModule } from &#39;angular-in-memory-web-api&#39;;
    import { InMemoryDataService }  from &#39;./in-memory-data.service&#39;;
```
## 40.0 ヒーローとHTTP
```

ng generate service InMemoryData</p>
<p>src/app/in-memory-data.service.ts
    import { InMemoryDbService } from &#39;angular-in-memory-web-api&#39;;
    import { Hero } from &#39;./hero&#39;;
    import { Injectable } from &#39;@angular/core&#39;;</p>
@Injectable({
providedIn: &#39;root&#39;,
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const heroes = [
    { id: 11, name: &#39;Mr. Nice&#39; },
    { id: 12, name: &#39;Narco&#39; },
    { id: 13, name: &#39;Bombasto&#39; },
    { id: 14, name: &#39;Celeritas&#39; },
    { id: 15, name: &#39;Magneta&#39; },
    { id: 16, name: &#39;RubberMan&#39; },
    { id: 17, name: &#39;Dynama&#39; },
    { id: 18, name: &#39;Dr IQ&#39; },
    { id: 19, name: &#39;Magma&#39; },
    { id: 20, name: &#39;Tornado&#39; }
    ];
    return {heroes};
}

// Overrides the genId method to ensure that a hero always has an id.
// If the heroes array is empty,
// the method below returns the initial number (11).
// if the heroes array is not empty, the method below returns the highest
// hero id + 1.
genId(heroes: Hero[]): number {
    return heroes.length &gt; 0 ? Math.max(...heroes.map(hero =&gt; hero.id)) + 1 : 11;
}
}
<pcode>`
```
## 41.0 Observableに侵入link
```
src/app/hero.service.ts (HTTPシンボルをインポート)
    import { HttpClient, HttpHeaders } from &#39;@angular/common/http&#39;;
    constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
src/app/hero.service.ts (RxJSの&#39;of()&#39;を使ったgetHeroes)
    private heroesUrl = &#39;api/heroes&#39;;  // Web APIのURL
    /** サーバーからヒーローを取得する */
    getHeroes (): Observable&lt;Hero[]&gt; {
        return this.http.get&lt;Hero[]&gt;(this.heroesUrl)
    }
```
## 42.0 IDでヒーローを取得する
```
src/app/hero.service.ts (RxJSの&#39;of()&#39;を使ったgetHeroes)
    /** サーバーからヒーローを取得する */
    getHeroes (): Observable&lt;Hero[]&gt; {
    return this.http.get&lt;Hero[]&gt;(this.heroesUrl)
        .pipe(
        tap(heroes =&gt; this.log(&#39;fetched heroes&#39;)),
        catchError(this.handleError&lt;Hero[]&gt;(&#39;getHeroes&#39;, []))
        );
    }
```
## 43.0 Angularアニメーション・イントロダクション
```
src/app/hero.service.ts
    /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
    getHero(id: number): Observable&lt;Hero&gt; {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get&lt;Hero&gt;(url).pipe(
        tap(_ =&gt; this.log(`fetched hero id=${id}`)),
        catchError(this.handleError&lt;Hero&gt;(`getHero id=${id}`))
    );
    }
```
## 44.0 アニメーションモジュールを有効にする
```
アニメーションは動きの錯覚を提供します(時間の経過と共にHTML要素の
スタイルが変化します)。うまく設計されたアニメーションは
アプリケーションをより楽しく使いやすくすることができます。しかし、
ただの飾りではありません。アニメーションは、さまざまな方法でアプリ
・ユーザー体験を向上させることができます:
アニメーションがなければ、Webページの遷移は突然で不快感を与えるか
もしれません。
モーションはユーザー体験を大幅に向上させます。アニメーションは
ユーザーの操作に対するアプリケーションの応答を検出する機会を与えます。
よいアニメーションは直感的にユーザーの注意を必要な場所に呼びよせます。
```
## 45.0 コンポーネントファイル内にアニメーション関数をインポートする
```

src/app/app.module.ts
    import { NgModule } from &#39;@angular/core&#39;;
    import { BrowserModule } from &#39;@angular/platform-browser&#39;;
    import { BrowserAnimationsModule } from &#39;@angular/platform-browser/animations&#39;;</p>
@NgModule({
imports: [
    BrowserModule,
    BrowserAnimationsModule
],
declarations: [ ],
bootstrap: [ ]
})
export class AppModule { }
<pcode>`
```
## 46.0 アニメーションメタデータプロパティを追加する
```
src/app/app.component.ts
    import { Component, HostBinding } from &#39;@angular/core&#39;;
    import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
    } from &#39;@angular/animations&#39;;
```
## 46.4 シンプルな遷移アニメーション
* picturePath: https://angular.jp/generated/images/guide/animations/open-closed.png
## 47.0 アニメーションの状態とスタイル
```
単一のHTML要素をある状態から別の状態に変更するシンプルな遷移
をアニメーション化しましょう。たとえば、ユーザーの最後の操作
から、ボタンがOpenまたはClosedのいずれかを表示するように指定
できます。ボタンがopen状態では表示され黄色になり、closed状態
になると透明で緑色になります。
HTMLでは、これらの属性は色や不透明度などの通常のCSSスタイル
を使用して設定されます。Angularでは、style()関数を使用して
、アニメーションで使用する一連のCSSスタイルを指定します。
アニメーションの状態に対して一連のスタイルをまとめて、その状
態に対してopenやclosedなどの名前を付けることができます。
```
## 48.0 アニメーションの状態とスタイル
```
src/app/open-close.component.ts
    // ...
    state(&#39;open&#39;, style({
    height: &#39;200px&#39;,
    opacity: 1,
    backgroundColor: &#39;yellow&#39;
    })),
src/app/open-close.component.ts
    state(&#39;closed&#39;, style({
    height: &#39;100px&#39;,
    opacity: 0.5,
    backgroundColor: &#39;green&#39;
    })),
```
## 49.0 Httpクライアントモジュール
```
src/app/open-close.component.ts
    transition(&#39;open =&gt; closed&#39;, [
        animate(&#39;1s&#39;)
    ]),
src/app/open-close.component.ts
    transition(&#39;closed =&gt; open&#39;, [
        animate(&#39;0.5s&#39;)
    ]),
```
## 50.0 Httpクライアントモジュールインストール
```
新しいHttpクライアントモジュールは@angular/common/httpとして、
これまでの@angular/httpとは別のモジュールとして提供されています。
既存のHttpモジュールと新しいHttpクライアントモジュールでは基本的
な使い方は似ていますが、一部互換性のない構文が含まれています。
そのためいきなり@angular/httpを置き換えるのではなく別モジュール
とすることで、徐々に移行できるようにしようという意図があるようです。
```
## 51.0 JSON形式のパースがデフォルトに
```

app.module.ts
    import { NgModule } from &#39;@angular/core&#39;;
    import { BrowserModule } from &#39;@angular/platform-browser&#39;;</p>
// HttpClientModuleをインポート
import { HttpClientModule } from &#39;@angular/common/http&#39;;

@NgModule({
    imports: [
        BrowserModule,
        // HttpClientModuleを追加
        HttpClientModule,
    ],
})
export class AppModule {}
<p>sample.service.ts
    import { Injectable } from &#39;@angular/core&#39;;
    import { HttpClient } from &#39;@angular/common/http&#39;;</p>
@Injectable()
export class SampleService {

    // コンストラクタの引数に指定してDI
    constructor(private http: HttpClient) {}
}
<pcode>`
```
## 52.0 レスポンスの型指定
```
this.http.get(url).map(response =&gt; response.json()).subscribe(json =&gt; ...);
http.get(url, { responseType: &#39;text&#39; })
    // レスポンスはテキストとしてsubscribeに渡される
    .subscribe(text =&gt; console.log(text));
```
## 53.0 完全なレスポンスの取得
```

JavaScriptとTypeScriptで全く同じコードなのにresponse.fooの呼び出しがエラー
になってしまいました。これを回避するためには、interfaceを用いて内部のプロパティ
を定義する必要があります。
import &#39;rxjs/add/operator/map&#39;;</p>
<p>// プロパティ: fooを持つinterfaceを定義
interface FooResponse {
    foo: string;
}</p>
<p>// パターン1：mapでキャスト
this.http.get(url)
    // FooResponseにキャスト
    .map(response =&gt; response as FooResponse)
    .subscribe(response =&gt; {
        console.log(response.foo);     // OK 
        console.log(response[&#39;foo&#39;]);  // OK
    });</p>
<p>// パターン2：subscribe内でキャスト
this.http.get(url)
    .subscribe(response =&gt; {
        const fooResponse = response as FooResponse;
        console.log(fooResponse.foo);     // OK
        console.log(fooResponse[&#39;foo&#39;]);  // OK
    });

```
## 54.0 Interceptor
```

// プロパティ: fooを持つinterfaceを定義
interface FooResponse {
    foo: string;
}</p>
<p>// getメソッドにobserveオプションを指定
this.http.get<FooResponse>(url, { observe: &#39;response&#39; })
    .subscribe(response =&gt; {
        // ヘッダ情報はresponse.headersに格納。getメソッドで取得。
        console.log(response.headers.get(&#39;X-My-Header&#39;));</p>
    // レスポンスボディはresponse.bodyに格納。型指定も有効。
    console.log(response.body.foo);
});
<pcode>`
```
## 55.0 リクエストの処理
```

import { Injectable } from &#39;@angular/core&#39;;
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from &#39;@angular/common/http&#39;;
import { Observable } from &#39;rxjs/Observable&#39;;</p>
<p>@Injectable()
export class SimpleInterceptor implements HttpInterceptor {</p>
// リクエストの変換処理。ここに共通処理を記述。
intercept(request: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {
    return next.handle(request);
}
<p>}</p>
<p>import { NgModule } from &#39;@angular/core&#39;;
import { HTTP_INTERCEPTORS } from &#39;@angular/common/http&#39;;
import { SimpleInterceptor } from &#39;./simple-interceptor.service&#39;;</p>
<p>@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SimpleInterceptor,
            // 必須：HTTP_INTERCEPTORSが配列であることを示す
            multi: true
        }
    ]
})
export class AppModule {}

```
## 56.0 レスポンスの処理
```

// そのまま複製するサンプル
intercept(request: HttpRequest<any>, next: HttpHandler): Observable&lt;HttpEvent<any>&gt; {
    const req = request.clone();</p>
return next.handle(req);
<p>}</p>
<p>// fooの値を書き換える場合
intercept(request: HttpRequest<any>, next: HttpHandler): Observable&lt;HttpEvent<any>&gt; {
    const req = request.clone({ foo: &#39;Foo&#39; });</p>
return next.handle(req);
<p>}</p>
<p>// 複数の値も可
intercept(request: HttpRequest<any>, next: HttpHandler): Observable&lt;HttpEvent<any>&gt; {
    const req = request.clone({ foo: &#39;Foo&#39;, bar: &#39;Bar&#39; });</p>
return next.handle(req);
<p>}

```
## 57.0 Progress Events
```

intercept(request: HttpRequest<any>, next: HttpHandler): Observable&lt;HttpEvent<any>&gt; {
    const storage = window.sessionStorage;</p>
return next.handle(request)
    .do(event =&gt; {
        if (event instanceof HttpResponse) {
            storage.setItem(&#39;cache&#39;, event.body);
        }
    });
<p>}

```
## 58.0 XSRF対策
```

import { HttpEventType, HttpResponse, HttpEventType } from &#39;@angular/common/http&#39;;</p>
<p>this.http.request(request).subscribe(event =&gt; {</p>
if (event.type === HttpEventType.UploadProgress) {
    // 進捗状況の出力
    const percentDone = Math.round(100 * event.loaded / event.total);
    console.log(`File is ${percentDone}% uploaded.`);
} else if (event instanceof HttpResponse) {
    // HttpResponseを取得した場合は処理完了
    console.log(&#39;File is completely uploaded!&#39;);
}
<p>});

```
## 59.0 Observable
```
上で紹介した Interceptor を利用した機能として、XSRF 対策がサポートされています。
クッキーに XSRF-TOKEN が設定されている場合、その値をリクエストヘッダ X-XSRF-TOKEN 
に設定して通信します。
この Intercepter は、HttpClient を使用した通信のうち、
リクエストメソッドが GET, HEAD 以外
リクエスト先 URL が相対パス
であるリクエストに適用されます。
```
## 60.0 ジオロケーションのアップデートを監視する
```
Observableは、アプリケーションの中でパブリッシャーとサブスクライバー間でメッセージ
を渡すためのサポートを提供します。Observableは、イベント処理、非同期プログラミング、
および複数の値の処理のための他のテクニックよりも大きな利点を提供します。
Observableは宣言的です—つまり、値を公開するための関数を定義しますが、コンシューマー
がそれを購読するまでは実行されません。購読するコンシューマーは、機能が完了するまで、
または購読を中止するまで通知を受け取ります。
Observableは、文脈に応じて、任意の型—リテラル、メッセージ、またはイベントの複数の値
を提供できます。受け取るためのAPIは値が同期的・非同期的に提供される場合も同じです。
基本的なセットアップとティアダウンはObservableによって処理されるので、あなたの
アプリケーションコードは値を消費するためにサブスクライブを行うことと、それが済んだら
購読を中止することだけを心配する必要があります。ストリームがキー入力、HTTPレスポンス、
インターバルタイマーのどれでも、値をリスニングしたり、リスニングを止めるためのインター
フェースは同じです。
これらの利点のために、ObservableはAngular内で広く使用されており、アプリの開発にも推
奨されています。
```
## 61.0 サブスクライブ
```

// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) =&gt; {
  // Get the next and error callbacks. These will be passed in when
  // the consumer subscribes.
  const {next, error} = observer;
  let watchId;</p>
<p>  // Simple geolocation API check provides values to publish
  if (&#39;geolocation&#39; in navigator) {
    watchId = navigator.geolocation.watchPosition(next, error);
  } else {
    error(&#39;Geolocation not available&#39;);
  }</p>
<p>  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
});</p>
<p>// Call subscribe() to start listening for updates.
const locationsSubscription = locations.subscribe({
  next(position) { console.log(&#39;Current Position: &#39;, position); },
  error(msg) { console.log(&#39;Error Getting Location: &#39;, msg); }
});</p>
<p>// Stop listening for location after 10 seconds
setTimeout(() =&gt; { locationsSubscription.unsubscribe(); }, 10000);</p>
<p>next
必須です。個々の値が提供されたときのハンドラーです。実行が開始されてから0回以上呼び出されます。
error
オプションです。エラー通知のハンドラーです。エラーはObservableインスタンスの実行を停止します。
complete
オプションです。実行完了通知のハンドラーです。遅延した値は、実行完了後もnextハンドラーに引き続き渡されます。

```
## 62.0 Observableを作成する
```

Subscribe using observer
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);</p>
// Create observer object
const myObserver = {
next: x =&gt; console.log(&#39;Observer got a next value: &#39; + x),
error: err =&gt; console.error(&#39;Observer got an error: &#39; + err),
complete: () =&gt; console.log(&#39;Observer got a complete notification&#39;),
};

// Execute with the observer object
myObservable.subscribe(myObserver);
// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification
<p>Subscribe with positional arguments
    myObservable.subscribe(
    x =&gt; console.log(&#39;Observer got a next value: &#39; + x),
    err =&gt; console.error(&#39;Observer got an error: &#39; + err),
    () =&gt; console.log(&#39;Observer got a complete notification&#39;)
    );

```
## 63.0 マルチキャスト
```

Create observable with constructor
    // This function runs when subscribe() is called
    function sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();</p>
// unsubscribe function doesn&#39;t need to do anything in this
// because values are delivered synchronously
return {unsubscribe() {}};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

// execute the Observable and print the result of each notification
sequence.subscribe({
next(num) { console.log(num); },
complete() { console.log(&#39;Finished sequence&#39;); }
});

// Logs:
// 1
// 2
// 3
// Finished sequence
<p>Create with custom fromEvent function
    function fromEvent(target, eventName) {
    return new Observable((observer) =&gt; {
        const handler = (e) =&gt; observer.next(e);</p>
    // Add the event handler to the target
    target.addEventListener(eventName, handler);

    return () =&gt; {
    // Detach the event handler from the target
    target.removeEventListener(eventName, handler);
    };
});
}
<p>Use custom fromEvent function
    const ESC_KEY = 27;
    const nameInput = document.getElementById(&#39;name&#39;) as HTMLInputElement;</p>
const subscription = fromEvent(nameInput, &#39;keydown&#39;)
.subscribe((e: KeyboardEvent) =&gt; {
    if (e.keyCode === ESC_KEY) {
    nameInput.value = &#39;&#39;;
    }
});
<pcode>`
```
## 64.0 Create a delayed sequence
```
典型的なObservableは、サブスクライブしたオブザーバーごとに独立した新しい実行を作成します。
オブザーバーが購読すると、Observableはイベントハンドラーをつなぎ、そのオブザーバーに値を
渡します。2つ目のオブザーバーが加入すると、Observableは新しいイベントハンドラーをつなぎ、
別の実行でその2つ目のオブザーバーに値を渡します。
場合によっては、各サブスクライバーに対して独立した実行を開始するのではなく各サブスクリプ
ションが同じ値を取得するようにしたいことがあるでしょう—値の発行がすでに始まっていたとして
も。これは、ドキュメントオブジェクトのクリックを監視するような場合に当てはまります。
マルチキャスト は、1回の実行で複数のサブスクライバーにブロードキャストする方法です。マルチ
キャストをするObservableの場合、ドキュメントに複数のリスナーを登録するのではなく、最初
のリスナーを再利用して値を各サブスクライバーに送信します。
Observableを作成するときは、そのObservableをどのように使用するか、およびその値をマルチキ
ャストするかどうかを決定する必要があります。
個々の数値が発信されてから1秒遅れて、1から3までカウントする例を見てみましょう。
```
## 65.0 Two subscriptions
```

function sequenceSubscriber(observer) {
  const seq = [1, 2, 3];
  let timeoutId;</p>
<p>  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doSequence(arr, idx) {
    timeoutId = setTimeout(() =&gt; {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        doSequence(arr, ++idx);
      }
    }, 1000);
  }</p>
<p>  doSequence(seq, 0);</p>
<p>  // Unsubscribe should clear the timeout to stop execution
  return {unsubscribe() {
    clearTimeout(timeoutId);
  }};
}</p>
<p>// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);</p>
<p>sequence.subscribe({
  next(num) { console.log(num); },
  complete() { console.log(&#39;Finished sequence&#39;); }
});</p>
<p>// Logs:
// (at 1 second): 1
// (at 2 seconds): 2
// (at 3 seconds): 3
// (at 3 seconds): Finished sequence

```
## 66.0 Create a multicast subscriber
```

// Subscribe starts the clock, and will emit after 1 second
sequence.subscribe({
  next(num) { console.log(&#39;1st subscribe: &#39; + num); },
  complete() { console.log(&#39;1st sequence finished.&#39;); }
});</p>
<p>// After 1/2 second, subscribe again.
setTimeout(() =&gt; {
  sequence.subscribe({
    next(num) { console.log(&#39;2nd subscribe: &#39; + num); },
    complete() { console.log(&#39;2nd sequence finished.&#39;); }
  });
}, 500);</p>
<p>// Logs:
// (at 1 second): 1st subscribe: 1
// (at 1.5 seconds): 2nd subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2.5 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3.5 seconds): 2nd subscribe: 3
// (at 3.5 seconds): 2nd sequence finished

```
## 67.0 RxJS ライブラリ
```

function multicastSequenceSubscriber() {
  const seq = [1, 2, 3];
  // Keep track of each observer (one for every active subscription)
  const observers = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId;</p>
<p>  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return (observer) =&gt; {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    if (observers.length === 1) {
      timeoutId = doSequence({
        next(val) {
          // Iterate through observers and notify all subscriptions
          observers.forEach(obs =&gt; obs.next(val));
        },
        complete() {
          // Notify all complete callbacks
          observers.slice(0).forEach(obs =&gt; obs.complete());
        }
      }, seq, 0);
    }</p>
return {
  unsubscribe() {
    // Remove from the observers array so it&#39;s no longer notified
    observers.splice(observers.indexOf(observer), 1);
    // If there&#39;s no more listeners, do cleanup
    if (observers.length === 0) {
      clearTimeout(timeoutId);
    }
  }
};
<p>  };
}</p>
<p>// Run through an array of numbers, emitting one value
// per second until it gets to the end of the array.
function doSequence(observer, arr, idx) {
  return setTimeout(() =&gt; {
    observer.next(arr[idx]);
    if (idx === arr.length - 1) {
      observer.complete();
    } else {
      doSequence(observer, arr, ++idx);
    }
  }, 1000);
}</p>
<p>// Create a new Observable that will deliver the above sequence
const multicastSequence = new Observable(multicastSequenceSubscriber());</p>
<p>// Subscribe starts the clock, and begins to emit after 1 second
multicastSequence.subscribe({
  next(num) { console.log(&#39;1st subscribe: &#39; + num); },
  complete() { console.log(&#39;1st sequence finished.&#39;); }
});</p>
<p>// After 1 1/2 seconds, subscribe again (should &quot;miss&quot; the first value).
setTimeout(() =&gt; {
  multicastSequence.subscribe({
    next(num) { console.log(&#39;2nd subscribe: &#39; + num); },
    complete() { console.log(&#39;2nd sequence finished.&#39;); }
  });
}, 1500);</p>
<p>// Logs:
// (at 1 second): 1st subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3 seconds): 2nd subscribe: 3
// (at 3 seconds): 2nd sequence finished

```
## 68.0 Observable 作成関数
```
RxJS は Observable 型の実装を提供します。Observable 型は、型が言語の
一部となるまで、そしてブラウザがそれをサポートするまで必要です。ライブラリ
はまたobservablesを作成して作業するためのユーティリティ関数を提供します。
これらのユーティリティ関数は、次の用途に使用できます。
 非同期処理の既存のコードを observables に変換する
 ストリーム内の値を反復処理する
 異なる型への値のマッピング
 ストリームのフィルタリング
 複数のストリームの作成
```
## 69.0 オペレーター
```

promise から observable を作成する
    import { from } from &#39;rxjs&#39;;</p>
// Create an Observable out of a promise
const data = from(fetch(&#39;/api/endpoint&#39;));
// Subscribe to begin listening for async result
data.subscribe({
next(response) { console.log(response); },
error(err) { console.error(&#39;Error: &#39; + err); },
complete() { console.log(&#39;Completed&#39;); }
});
<p>カウンターから observable を作成する
    import { interval } from &#39;rxjs&#39;;</p>
// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values
secondsCounter.subscribe(n =&gt;
console.log(`It&#39;s been ${n} seconds since subscribing!`));
<p>イベントから observable を作成する
    import { fromEvent } from &#39;rxjs&#39;;</p>
const el = document.getElementById(&#39;my-element&#39;);

// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent(el, &#39;mousemove&#39;);

// Subscribe to start listening for mouse-move events
const subscription = mouseMoves.subscribe((evt: MouseEvent) =&gt; {
// Log coords of mouse movements
console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

// When the mouse is over the upper-left of the screen,
// unsubscribe to stop listening for mouse movements
if (evt.clientX &lt; 40 &amp;&amp; evt.clientY &lt; 40) {
    subscription.unsubscribe();
}
});
<p>AJAX リクエストから observable を作成する
    import { ajax } from &#39;rxjs/ajax&#39;;</p>
// Create an Observable that will create an AJAX request
const apiData = ajax(&#39;/api/data&#39;);
// Subscribe to create the request
apiData.subscribe(res =&gt; console.log(res.status, res.response));
<pcode>`
```
## 70.0 catchError オペレーター
```

Map operator
    import { map } from &#39;rxjs/operators&#39;;</p>
const nums = of(1, 2, 3);

const squareValues = map((val: number) =&gt; val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x =&gt; console.log(x));

// Logs
// 1
// 4
// 9
<p>Standalone pipe function
    import { filter, map } from &#39;rxjs/operators&#39;;</p>
const nums = of(1, 2, 3, 4, 5);

// Create a function that accepts an Observable.
const squareOddVals = pipe(
filter((n: number) =&gt; n % 2 !== 0),
map(n =&gt; n * n)
);

// Create an Observable that will run the filter and map functions
const squareOdd = squareOddVals(nums);

// Suscribe to run the combined functions
squareOdd.subscribe(x =&gt; console.log(x));
<p>Observable.pipe function
    import { filter, map } from &#39;rxjs/operators&#39;;</p>
const squareOdd = of(1, 2, 3, 4, 5)
.pipe(
    filter(n =&gt; n % 2 !== 0),
    map(n =&gt; n * n)
);

// Subscribe to get values
squareOdd.subscribe(x =&gt; console.log(x));
<pcode>`
```
## 71.0 失敗した observable の再実行
```

import { ajax } from &#39;rxjs/ajax&#39;;
import { map, catchError } from &#39;rxjs/operators&#39;;
// Return &quot;response&quot; from the API. If an error happens,
// return an empty array.
const apiData = ajax(&#39;/api/data&#39;).pipe(
  map(res =&gt; {
    if (!res.response) {
      throw new Error(&#39;Value expected!&#39;);
    }
    return res.response;
  }),
  catchError(err =&gt; of([]))
);</p>
<p>apiData.subscribe({
  next(x) { console.log(&#39;data: &#39;, x); },
  error(err) { console.log(&#39;errors already caught... will not run&#39;); }
});

```
## 72.0 Naming observables
```

import { ajax } from &#39;rxjs/ajax&#39;;
import { map, retry, catchError } from &#39;rxjs/operators&#39;;</p>
<p>const apiData = ajax(&#39;/api/data&#39;).pipe(
  retry(3), // Retry up to 3 times before failing
  map(res =&gt; {
    if (!res.response) {
      throw new Error(&#39;Value expected!&#39;);
    }
    return res.response;
  }),
  catchError(err =&gt; of([]))
);</p>
<p>apiData.subscribe({
  next(x) { console.log(&#39;data: &#39;, x); },
  error(err) { console.log(&#39;errors already caught... will not run&#39;); }
});

```
## 73.0 Angular での Observable
```

import { Component } from &#39;@angular/core&#39;;
import { Observable } from &#39;rxjs&#39;;</p>
<p>@Component({
  selector: &#39;app-stopwatch&#39;,
  templateUrl: &#39;./stopwatch.component.html&#39;
})
export class StopwatchComponent {</p>
<p>  stopwatchValue: number;
  stopwatchValue$: Observable<number>;</p>
<p>  start() {
    this.stopwatchValue$.subscribe(num =&gt;
      this.stopwatchValue = num
    );
  }
}

```
## 74.0 EventEmitter
```
Angular はさまざまな一般的な非同期操作を処理するためのインターフェースとして 
Observable を使用します。たとえば：
EventEmitter クラスは Observable を拡張しています。
HTTP モジュールは Observable を使用して AJAX リクエストとレスポンスを処理
します。
Router と Form モジュールは、ユーザー入力イベントを待ち受けてレスポンスする
ために Observable を使用します。
```
## 75.0 HTTP
```

@Component({
  selector: &#39;zippy&#39;,
  template: <code>&lt;div class=&quot;zippy&quot;&gt;
    &lt;div (click)=&quot;toggle()&quot;&gt;Toggle&lt;/div&gt;
    &lt;div [hidden]=&quot;!visible&quot;&gt;
      &lt;ng-content&gt;&lt;/ng-content&gt;
    &lt;/div&gt;
  &lt;/div&gt;</code>})</p>
<p>export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();</p>
<p>  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}

```
## 76.0 非同期パイプの使用
```
ngularの HttpClient は、HTTPメソッド呼び出しからの Observable を返します。
たとえば、http.get(‘/api’) は Observable オブジェクトを返します。これは、
Promise ベースの HTTP API に勝るいくつかの利点を提供します。
Observables はサーバーのレスポンスを変更しません(Promise で .then() の呼び
出しによって発生する可能性があります)。代わりに、必要に応じて一連のオペレータ
ーを使用して値を変換することができます。
HTTP リクエストは unsubscribe() メソッドで取り消すことができます。
イベントの更新の進行状況を取得するようにリクエストを構成できます。
失敗したリクエストは簡単に再試行できます。
```
## 77.0 ルーターイベント
```
@Component({
  selector: &#39;async-observable-pipe&#39;,
  template: `&lt;div&gt;&lt;code&gt;observable|async&lt;/code&gt;:
       Time: {{ time | async }}&lt;/div&gt;`
})
export class AsyncObservablePipeComponent {
  time = new Observable(observer =&gt;
    setInterval(() =&gt; observer.next(new Date().toString()), 1000)
  );
}
```
## 78.0 ActivatedRoute
```

import { Router, NavigationStart } from &#39;@angular/router&#39;;
import { filter } from &#39;rxjs/operators&#39;;</p>
<p>@Component({
  selector: &#39;app-routable&#39;,
  templateUrl: &#39;./routable.component.html&#39;,
  styleUrls: [&#39;./routable.component.css&#39;]
})
export class Routable1Component implements OnInit {</p>
<p>  navStart: Observable<NavigationStart>;</p>
<p>  constructor(private router: Router) {
    // Create a new Observable that publishes only the NavigationStart event
    this.navStart = router.events.pipe(
      filter(evt =&gt; evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }</p>
<p>  ngOnInit() {
    this.navStart.subscribe(evt =&gt; console.log(&#39;Navigation Started!&#39;));
  }
}

```
## 79.0 リアクティブフォーム
```

import { ActivatedRoute } from &#39;@angular/router&#39;;</p>
<p>@Component({
  selector: &#39;app-routable&#39;,
  templateUrl: &#39;./routable.component.html&#39;,
  styleUrls: [&#39;./routable.component.css&#39;]
})
export class Routable2Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}</p>
<p>  ngOnInit() {
    this.activatedRoute.url
      .subscribe(url =&gt; console.log(&#39;The URL changed to: &#39; + url));
  }
}

```
## 80.0 事前サジェスト
```

import { FormGroup } from &#39;@angular/forms&#39;;</p>
<p>@Component({
  selector: &#39;my-component&#39;,
  template: &#39;MyComponent Template&#39;
})
export class MyComponent implements OnInit {
  nameChangeLog: string[] = [];
  heroForm: FormGroup;</p>
<p>  ngOnInit() {
    this.logNameChange();
  }
  logNameChange() {
    const nameControl = this.heroForm.get(&#39;name&#39;);
    nameControl.valueChanges.forEach(
      (value: string) =&gt; this.nameChangeLog.push(value)
    );
  }
}

```
## 81.0 指数関数的バックオフ
```

import { fromEvent } from &#39;rxjs&#39;;
import { ajax } from &#39;rxjs/ajax&#39;;
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from &#39;rxjs/operators&#39;;</p>
<p>const searchBox = document.getElementById(&#39;search-box&#39;);</p>
<p>const typeahead = fromEvent(searchBox, &#39;input&#39;).pipe(
  map((e: KeyboardEvent) =&gt; e.target.value),
  filter(text =&gt; text.length &gt; 2),
  debounceTime(10),
  distinctUntilChanged(),
  switchMap(() =&gt; ajax(&#39;/api/endpoint&#39;))
);</p>
<p>typeahead.subscribe(data =&gt; {
 // Handle the data from the API
});

```
## 82.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FCIxg5db1wHWTu1eeymVp4EkLzfg1%2F-LbW07Cj8C37LDyZeKHFx80?alt=media&token=3a021dd2-2a44-4b4c-a3da-342fd9cda144
