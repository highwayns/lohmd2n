Angular Document
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
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
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
    title = 'Tour of Heroes';
    }
app.component.html (template)      
    <h1>{{title}}</h1>
src/styles.css
/* Application-wide Styles */
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
body, input[type="text"], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```

## 10.0 heroes コンポーネントを作成する
```
ng generate component heroes

app/heroes/heroes.component.ts (初期バージョン)
    import { Component, OnInit } from '@angular/core';

        @Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
        })
        export class HeroesComponent implements OnInit {

        constructor() { }

        ngOnInit() {
        }
    }
```

## 11.0 hero プロパティを追加する
```
heroes.component.ts (hero プロパティ)
    hero = 'Windstorm';
heroes.component.html    
    {{hero}}
```

## 12.0 HeroesComponent ビューを表示する
```
src/app/app.component.html   
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
```

## 13.0 Hero クラスを作成する
```
src/app/hero.ts
    export class Hero {
    id: number;
    name: string;
    }
src/app/heroes/heroes.component.ts
    import { Component, OnInit } from '@angular/core';
    import { Hero } from '../hero';

    @Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
    })
    export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() { }

    ngOnInit() {
    }

    }
```

## 14.0 ヒーローオブジェクトを表示する
```
heroes.component.html (HeroesComponent のテンプレート)
    <h2>{{hero.name}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div><span>name: </span>{{hero.name}}</div>
```

## 15.0 UppercasePipe で書式設定する
```
<h2>{{hero.name | uppercase}} Details</h2>
```

## 16.0 ヒーローを編集する
```
src/app/heroes/heroes.component.html (HeroesComponent のテンプレート)
<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>
```

## 17.0 AppModule
```
Angularでは、アプリケーションの部品がどのように合わさるかや、 アプリケーション
が必要としている他のファイルやライブラリを知る必要があります。 この情報を 
メタデータ といいます。
一部のメタデータは、コンポーネントクラスに追加した@Componentデコレーター
内にあります。 その他の重要なメタデータは@NgModuleデコレーター内にあります。
もっとも重要な@NgModuleデコレーターは、トップレベルの AppModule クラスに
注釈を付けます。
Angular CLI は、プロジェクトを作成するときにsrc/app/app.module.tsにAppModule
クラスを作成しました。 ここでFormsModuleをオプトインします。
```

## 18.0 FormsModule をインポートする
```
app.module.ts ( @NgModule imports)
    imports: [
    BrowserModule,
    FormsModule
    ],
```

## 19.0 HeroesComponent を宣言する
```
src/app/app.module.ts 
    import { HeroesComponent } from './heroes/heroes.component';

    declarations: [
    AppComponent,
    HeroesComponent
    ],
```

## 20.0 ヒーローのリストを表示する
```
このページでは「Tour of Heroes」アプリを拡張してヒーローのリストを表示し、
ユーザーがヒーローを選択してヒーローの詳細を表示できるようにします。
```

## 21.0 ヒーローのモックを作成する
```
src/app/mock-heroes.ts
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```

## 22.0 ヒーローを表示する
```
src/app/heroes/heroes.component.ts (import HEROES)
    import { HEROES } from '../mock-heroes';
    export class HeroesComponent implements OnInit {
    heroes = HEROES;
    }

heroes.component.html (heroes template)
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
```

## 23.0 Master/Detail
```
src/app/heroes/heroes.component.html (*ngIf)
    <div *ngIf="selectedHero">

    <h2>{{selectedHero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{selectedHero.id}}</div>
    <div>
        <label>name:
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </label>
    </div>

    </div>
```

## 24.0 HeroDetailComponent を作成する
```
ng generate component hero-detail

src/app/hero-detail/hero-detail.component.html
    <div *ngIf="hero">

    <h2>{{hero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
        <label>name:
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </label>
    </div>

    </div>     
```

## 25.0 @Input() heroプロパティを追加する
```
src/app/hero-detail/hero-detail.component.ts (import Hero)
    import { Hero } from '../hero';    
src/app/hero-detail/hero.component.html
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    
src/app/hero-detail/hero.component.ts      
    import { Component, OnInit, Input } from '@angular/core';
    @Input() hero: Hero;
heroes.component.html
    <h2>My Heroes</h2>

    <ul class="heroes">
    <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
    </ul>

    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

## 26.0 サービス
```
Tour of Heroes の中で扱っている HeroesComponent は、今のところ仮
のデータを取得して表示している状態です。
このチュートリアルのリファクタリング後には、HeroesComponent は小さく
なりビューをサポートすることに専念します。 これはモックサービスを使用
して、ユニットテストをより簡潔にすることにもつながります。
```

## 27.0 HeroService の作成
```
ng generate service hero

src/app/hero.service.ts (new service)
    import { Injectable } from '@angular/core';

    @Injectable({
    providedIn: 'root',
    })
    export class HeroService {

    constructor() { }

    }
```

## 28.0 ヒーローデータの取得
```
src/app/hero.service.ts (Observable imports)
    import { Observable, of } from 'rxjs';
    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }
src/app/heroes/heroes.component.ts (import HeroService)
    heroes: Hero[];
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    }
```

## 29.0 MessagesComponent 
```
ng generate component messages

/src/app/app.component.html
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
    <app-messages></app-messages>
/src/app/message.service.ts
    import { Injectable } from '@angular/core';
    
    @Injectable({
    providedIn: 'root',
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
```

## 30.0 HeroService への注入
```
/src/app/hero.service.ts (import MessageService)
    import { MessageService } from './message.service';
    constructor(private messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    }
```

## 31.0 HeroService からのメッセージを表示する
```
/src/app/messages/messages.component.ts (import MessageService)
    import { MessageService } from '../message.service';
    constructor(public messageService: MessageService) {}
src/app/messages/messages.component.html
    <div *ngIf="messageService.messages.length">

    <h2>Messages</h2>
    <button class="clear"
            (click)="messageService.clear()">clear</button>
    <div *ngFor='let message of messageService.messages'> {{message}} </div>

    </div>
```

## 32.0 ルーティング
```
Tour of Heroes アプリケーションには新しい要求があります：
ダッシュボードビューを追加する。
ヒーローズビューとダッシュボードビューの間で行き来できる機能を追加する。
ユーザーが各ビューでヒーロー名をクリックしたとき、選択されたヒーローの詳細ビューを表示する。
ユーザーがEメール上でディープリンクをクリックしたとき、特定のヒーローの詳細ビューを開く。
```

## 32.4 ルーティング
* picturePath: https://angular.jp/generated/images/guide/toh/nav-diagram.png

## 33.0 AppRoutingModuleを追加する
```
ng generate module app-routing --flat --module=app

src/app/app-routing.module.ts (generated)
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    @NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
    })
    export class AppRoutingModule { }
```

## 34.0 ルートを追加する
```
src/app/app-routing.module.ts (v1)
    import { HeroesComponent }      from './heroes/heroes.component';

    const routes: Routes = [
    { path: 'heroes', component: HeroesComponent }
    ];
src/app/app.component.html (router-outlet)
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages>
```

## 35.0 ダッシュボードビューを追加する
``` 
ng generate component dashboard

src/app/dashboard/dashboard.component.html
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
    <a *ngFor="let hero of heroes" class="col-1-4">
        <div class="module hero">
        <h4>{{hero.name}}</h4>
        </div>
    </a>
    </div>
src/app/dashboard/dashboard.component.ts
    import { Component, OnInit } from '@angular/core';
    import { Hero } from '../hero';
    import { HeroService } from '../hero.service';
    
    @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
    })
    export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    
    constructor(private heroService: HeroService) { }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    getHeroes(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
    }
```

## 36.0 ダッシュボードのルートを追加する
```
src/app/app-routing.module.ts (import DashboardComponent)
    import { DashboardComponent }   from './dashboard/dashboard.component';
    { path: 'dashboard', component: DashboardComponent },
src/app/app.component.html
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages>
```

## 37.0 HTTPサービス
```
このチュートリアルではAngularのHttpClientを使用して、次のデータ永続の
機能を追加します。
HeroServiceはHTTPリクエストを介してヒーローデータを取得します。
ユーザーはヒーロー情報を追加、編集、削除ができ、その変更をHTTPを通
して保存することができます。
ユーザーは名前でヒーロー情報を検索できます。
```

## 38.0 サービス有効化
```
src/app/app.module.ts (Http Client import)
    import { HttpClientModule }    from '@angular/common/http';
データサーバーをシミュレートする
    npm install angular-in-memory-web-api --save
src/app/app.module.ts (インメモリ Web API をインポート)
    import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
    import { InMemoryDataService }  from './in-memory-data.service';
```

## 39.0 HTTPサービス
```
ng generate service InMemoryData

src/app/in-memory-data.service.ts
    import { InMemoryDbService } from 'angular-in-memory-web-api';
    import { Hero } from './hero';
    import { Injectable } from '@angular/core';

    @Injectable({
    providedIn: 'root',
    })
    export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
        ];
        return {heroes};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
    }

```

## 40.0 ヒーローとHTTP
```
src/app/hero.service.ts (HTTPシンボルをインポート)
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
src/app/hero.service.ts (RxJSの'of()'を使ったgetHeroes)
    private heroesUrl = 'api/heroes';  // Web APIのURL
    /** サーバーからヒーローを取得する */
    getHeroes (): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
    }
```

## 41.0 Observableに侵入link
```
src/app/hero.service.ts (RxJSの'of()'を使ったgetHeroes)
    /** サーバーからヒーローを取得する */
    getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }
```

## 42.0 IDでヒーローを取得する
```
src/app/hero.service.ts
    /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
    getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
    }
```

## 43.0 Angularアニメーション・イントロダクション
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

## 44.0 アニメーションモジュールを有効にする
```
src/app/app.module.ts
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    @NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [ ],
    bootstrap: [ ]
    })
    export class AppModule { }
```

## 45.0 コンポーネントファイル内にアニメーション関数をインポートする
```
src/app/app.component.ts
    import { Component, HostBinding } from '@angular/core';
    import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
    } from '@angular/animations';
```

## 46.0 アニメーションメタデータプロパティを追加する
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

## 46.4 シンプルな遷移アニメーション
* picturePath: https://angular.jp/generated/images/guide/animations/open-closed.png

## 47.0 アニメーションの状態とスタイル
```
src/app/open-close.component.ts
    // ...
    state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
    })),
src/app/open-close.component.ts
    state('closed', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
    })),
```

## 48.0 アニメーションの状態とスタイル
```
src/app/open-close.component.ts
    transition('open => closed', [
        animate('1s')
    ]),
src/app/open-close.component.ts
    transition('closed => open', [
        animate('0.5s')
    ]),
```

## 49.0 Httpクライアントモジュール
```
新しいHttpクライアントモジュールは@angular/common/httpとして、
これまでの@angular/httpとは別のモジュールとして提供されています。
既存のHttpモジュールと新しいHttpクライアントモジュールでは基本的
な使い方は似ていますが、一部互換性のない構文が含まれています。
そのためいきなり@angular/httpを置き換えるのではなく別モジュール
とすることで、徐々に移行できるようにしようという意図があるようです。
```

## 50.0 Httpクライアントモジュールインストール
```
app.module.ts
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    // HttpClientModuleをインポート
    import { HttpClientModule } from '@angular/common/http';

    @NgModule({
        imports: [
            BrowserModule,
            // HttpClientModuleを追加
            HttpClientModule,
        ],
    })
    export class AppModule {}
sample.service.ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Injectable()
    export class SampleService {

        // コンストラクタの引数に指定してDI
        constructor(private http: HttpClient) {}
    }
```

## 51.0 JSON形式のパースがデフォルトに
```
this.http.get(url).map(response => response.json()).subscribe(json => ...);
http.get(url, { responseType: 'text' })
    // レスポンスはテキストとしてsubscribeに渡される
    .subscribe(text => console.log(text));
```

## 52.0 レスポンスの型指定
```
JavaScriptとTypeScriptで全く同じコードなのにresponse.fooの呼び出しがエラー
になってしまいました。これを回避するためには、interfaceを用いて内部のプロパティ
を定義する必要があります。
import 'rxjs/add/operator/map';

// プロパティ: fooを持つinterfaceを定義
interface FooResponse {
    foo: string;
}

// パターン1：mapでキャスト
this.http.get(url)
    // FooResponseにキャスト
    .map(response => response as FooResponse)
    .subscribe(response => {
        console.log(response.foo);     // OK 
        console.log(response['foo']);  // OK
    });

// パターン2：subscribe内でキャスト
this.http.get(url)
    .subscribe(response => {
        const fooResponse = response as FooResponse;
        console.log(fooResponse.foo);     // OK
        console.log(fooResponse['foo']);  // OK
    });
```

## 53.0 完全なレスポンスの取得
```
// プロパティ: fooを持つinterfaceを定義
interface FooResponse {
    foo: string;
}

// getメソッドにobserveオプションを指定
this.http.get<FooResponse>(url, { observe: 'response' })
    .subscribe(response => {
        // ヘッダ情報はresponse.headersに格納。getメソッドで取得。
        console.log(response.headers.get('X-My-Header'));

        // レスポンスボディはresponse.bodyに格納。型指定も有効。
        console.log(response.body.foo);
    });
```

## 54.0 Interceptor
```
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleInterceptor implements HttpInterceptor {

    // リクエストの変換処理。ここに共通処理を記述。
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request);
    }
}

import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleInterceptor } from './simple-interceptor.service';

@NgModule({
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

## 55.0 リクエストの処理
```
// そのまま複製するサンプル
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone();

    return next.handle(req);
}

// fooの値を書き換える場合
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({ foo: 'Foo' });

    return next.handle(req);
}

// 複数の値も可
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({ foo: 'Foo', bar: 'Bar' });

    return next.handle(req);
}
```

## 56.0 レスポンスの処理
```
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storage = window.sessionStorage;

    return next.handle(request)
        .do(event => {
            if (event instanceof HttpResponse) {
                storage.setItem('cache', event.body);
            }
        });
}
```

## 57.0 Progress Events
```
import { HttpEventType, HttpResponse, HttpEventType } from '@angular/common/http';

this.http.request(request).subscribe(event => {

    if (event.type === HttpEventType.UploadProgress) {
        // 進捗状況の出力
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File is ${percentDone}% uploaded.`);
    } else if (event instanceof HttpResponse) {
        // HttpResponseを取得した場合は処理完了
        console.log('File is completely uploaded!');
    }
});
```

## 58.0 XSRF対策
```
上で紹介した Interceptor を利用した機能として、XSRF 対策がサポートされています。
クッキーに XSRF-TOKEN が設定されている場合、その値をリクエストヘッダ X-XSRF-TOKEN 
に設定して通信します。
この Intercepter は、HttpClient を使用した通信のうち、
リクエストメソッドが GET, HEAD 以外
リクエスト先 URL が相対パス
であるリクエストに適用されます。
```

## 59.0 Observable
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

## 60.0 ジオロケーションのアップデートを監視する
```
// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) => {
  // Get the next and error callbacks. These will be passed in when
  // the consumer subscribes.
  const {next, error} = observer;
  let watchId;
 
  // Simple geolocation API check provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(next, error);
  } else {
    error('Geolocation not available');
  }
 
  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
});
 
// Call subscribe() to start listening for updates.
const locationsSubscription = locations.subscribe({
  next(position) { console.log('Current Position: ', position); },
  error(msg) { console.log('Error Getting Location: ', msg); }
});
 
// Stop listening for location after 10 seconds
setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);

next
必須です。個々の値が提供されたときのハンドラーです。実行が開始されてから0回以上呼び出されます。
error
オプションです。エラー通知のハンドラーです。エラーはObservableインスタンスの実行を停止します。
complete
オプションです。実行完了通知のハンドラーです。遅延した値は、実行完了後もnextハンドラーに引き続き渡されます。
```

## 61.0 サブスクライブ
```
Subscribe using observer
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);
    
    // Create observer object
    const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
    };
    
    // Execute with the observer object
    myObservable.subscribe(myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
Subscribe with positional arguments
    myObservable.subscribe(
    x => console.log('Observer got a next value: ' + x),
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
    );
```

## 62.0 Observableを作成する
```
Create observable with constructor
    // This function runs when subscribe() is called
    function sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    
    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
    }
    
    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);
    
    // execute the Observable and print the result of each notification
    sequence.subscribe({
    next(num) { console.log(num); },
    complete() { console.log('Finished sequence'); }
    });
    
    // Logs:
    // 1
    // 2
    // 3
    // Finished sequence
Create with custom fromEvent function
    function fromEvent(target, eventName) {
    return new Observable((observer) => {
        const handler = (e) => observer.next(e);
    
        // Add the event handler to the target
        target.addEventListener(eventName, handler);
    
        return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
        };
    });
    }
Use custom fromEvent function
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;

    const subscription = fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
        }
    });
```

## 63.0 マルチキャスト
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

## 64.0 Create a delayed sequence
```
function sequenceSubscriber(observer) {
  const seq = [1, 2, 3];
  let timeoutId;
 
  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doSequence(arr, idx) {
    timeoutId = setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        doSequence(arr, ++idx);
      }
    }, 1000);
  }
 
  doSequence(seq, 0);
 
  // Unsubscribe should clear the timeout to stop execution
  return {unsubscribe() {
    clearTimeout(timeoutId);
  }};
}
 
// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);
 
sequence.subscribe({
  next(num) { console.log(num); },
  complete() { console.log('Finished sequence'); }
});
 
// Logs:
// (at 1 second): 1
// (at 2 seconds): 2
// (at 3 seconds): 3
// (at 3 seconds): Finished sequence
```

## 65.0 Two subscriptions
```
// Subscribe starts the clock, and will emit after 1 second
sequence.subscribe({
  next(num) { console.log('1st subscribe: ' + num); },
  complete() { console.log('1st sequence finished.'); }
});
 
// After 1/2 second, subscribe again.
setTimeout(() => {
  sequence.subscribe({
    next(num) { console.log('2nd subscribe: ' + num); },
    complete() { console.log('2nd sequence finished.'); }
  });
}, 500);
 
// Logs:
// (at 1 second): 1st subscribe: 1
// (at 1.5 seconds): 2nd subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2.5 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3.5 seconds): 2nd subscribe: 3
// (at 3.5 seconds): 2nd sequence finished
```

## 66.0 Create a multicast subscriber
```
function multicastSequenceSubscriber() {
  const seq = [1, 2, 3];
  // Keep track of each observer (one for every active subscription)
  const observers = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId;
 
  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return (observer) => {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    if (observers.length === 1) {
      timeoutId = doSequence({
        next(val) {
          // Iterate through observers and notify all subscriptions
          observers.forEach(obs => obs.next(val));
        },
        complete() {
          // Notify all complete callbacks
          observers.slice(0).forEach(obs => obs.complete());
        }
      }, seq, 0);
    }
 
    return {
      unsubscribe() {
        // Remove from the observers array so it's no longer notified
        observers.splice(observers.indexOf(observer), 1);
        // If there's no more listeners, do cleanup
        if (observers.length === 0) {
          clearTimeout(timeoutId);
        }
      }
    };
  };
}
 
// Run through an array of numbers, emitting one value
// per second until it gets to the end of the array.
function doSequence(observer, arr, idx) {
  return setTimeout(() => {
    observer.next(arr[idx]);
    if (idx === arr.length - 1) {
      observer.complete();
    } else {
      doSequence(observer, arr, ++idx);
    }
  }, 1000);
}
 
// Create a new Observable that will deliver the above sequence
const multicastSequence = new Observable(multicastSequenceSubscriber());
 
// Subscribe starts the clock, and begins to emit after 1 second
multicastSequence.subscribe({
  next(num) { console.log('1st subscribe: ' + num); },
  complete() { console.log('1st sequence finished.'); }
});
 
// After 1 1/2 seconds, subscribe again (should "miss" the first value).
setTimeout(() => {
  multicastSequence.subscribe({
    next(num) { console.log('2nd subscribe: ' + num); },
    complete() { console.log('2nd sequence finished.'); }
  });
}, 1500);
 
// Logs:
// (at 1 second): 1st subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3 seconds): 2nd subscribe: 3
// (at 3 seconds): 2nd sequence finished
```

## 67.0 RxJS ライブラリ
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

## 68.0 Observable 作成関数
```
promise から observable を作成する
    import { from } from 'rxjs';

    // Create an Observable out of a promise
    const data = from(fetch('/api/endpoint'));
    // Subscribe to begin listening for async result
    data.subscribe({
    next(response) { console.log(response); },
    error(err) { console.error('Error: ' + err); },
    complete() { console.log('Completed'); }
    });
カウンターから observable を作成する
    import { interval } from 'rxjs';

    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
    console.log(`It's been ${n} seconds since subscribing!`));
イベントから observable を作成する
    import { fromEvent } from 'rxjs';
    
    const el = document.getElementById('my-element');
    
    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(el, 'mousemove');
    
    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    // Log coords of mouse movements
    console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    
    // When the mouse is over the upper-left of the screen,
    // unsubscribe to stop listening for mouse movements
    if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
    }
    });
AJAX リクエストから observable を作成する
    import { ajax } from 'rxjs/ajax';

    // Create an Observable that will create an AJAX request
    const apiData = ajax('/api/data');
    // Subscribe to create the request
    apiData.subscribe(res => console.log(res.status, res.response));
```

## 69.0 オペレーター
```
Map operator
    import { map } from 'rxjs/operators';
    
    const nums = of(1, 2, 3);
    
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    
    squaredNums.subscribe(x => console.log(x));
    
    // Logs
    // 1
    // 4
    // 9
Standalone pipe function
    import { filter, map } from 'rxjs/operators';
    
    const nums = of(1, 2, 3, 4, 5);
    
    // Create a function that accepts an Observable.
    const squareOddVals = pipe(
    filter((n: number) => n % 2 !== 0),
    map(n => n * n)
    );
    
    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);
    
    // Suscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
Observable.pipe function
    import { filter, map } from 'rxjs/operators';

    const squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
    );

    // Subscribe to get values
    squareOdd.subscribe(x => console.log(x));
```

## 70.0 catchError オペレーター
```
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
// Return "response" from the API. If an error happens,
// return an empty array.
const apiData = ajax('/api/data').pipe(
  map(res => {
    if (!res.response) {
      throw new Error('Value expected!');
    }
    return res.response;
  }),
  catchError(err => of([]))
);
 
apiData.subscribe({
  next(x) { console.log('data: ', x); },
  error(err) { console.log('errors already caught... will not run'); }
});
```

## 71.0 失敗した observable の再実行
```
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';
 
const apiData = ajax('/api/data').pipe(
  retry(3), // Retry up to 3 times before failing
  map(res => {
    if (!res.response) {
      throw new Error('Value expected!');
    }
    return res.response;
  }),
  catchError(err => of([]))
);
 
apiData.subscribe({
  next(x) { console.log('data: ', x); },
  error(err) { console.log('errors already caught... will not run'); }
});
```

## 72.0 Naming observables
```
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html'
})
export class StopwatchComponent {
 
  stopwatchValue: number;
  stopwatchValue$: Observable<number>;
 
  start() {
    this.stopwatchValue$.subscribe(num =>
      this.stopwatchValue = num
    );
  }
}
```

## 73.0 Angular での Observable
```
Angular はさまざまな一般的な非同期操作を処理するためのインターフェースとして 
Observable を使用します。たとえば：
EventEmitter クラスは Observable を拡張しています。
HTTP モジュールは Observable を使用して AJAX リクエストとレスポンスを処理
します。
Router と Form モジュールは、ユーザー入力イベントを待ち受けてレスポンスする
ために Observable を使用します。
```

## 74.0 EventEmitter
```
@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
  </div>`})
 
export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
 
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}
```

## 75.0 HTTP
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

## 76.0 非同期パイプの使用
```
@Component({
  selector: 'async-observable-pipe',
  template: `<div><code>observable|async</code>:
       Time: {{ time | async }}</div>`
})
export class AsyncObservablePipeComponent {
  time = new Observable(observer =>
    setInterval(() => observer.next(new Date().toString()), 1000)
  );
}
```

## 77.0 ルーターイベント
```
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
 
@Component({
  selector: 'app-routable',
  templateUrl: './routable.component.html',
  styleUrls: ['./routable.component.css']
})
export class Routable1Component implements OnInit {
 
  navStart: Observable<NavigationStart>;
 
  constructor(private router: Router) {
    // Create a new Observable that publishes only the NavigationStart event
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }
 
  ngOnInit() {
    this.navStart.subscribe(evt => console.log('Navigation Started!'));
  }
}
```

## 78.0 ActivatedRoute
```
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-routable',
  templateUrl: './routable.component.html',
  styleUrls: ['./routable.component.css']
})
export class Routable2Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
 
  ngOnInit() {
    this.activatedRoute.url
      .subscribe(url => console.log('The URL changed to: ' + url));
  }
}
```

## 79.0 リアクティブフォーム
```
import { FormGroup } from '@angular/forms';
 
@Component({
  selector: 'my-component',
  template: 'MyComponent Template'
})
export class MyComponent implements OnInit {
  nameChangeLog: string[] = [];
  heroForm: FormGroup;
 
  ngOnInit() {
    this.logNameChange();
  }
  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
}
```

## 80.0 事前サジェスト
```
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
 
const searchBox = document.getElementById('search-box');
 
const typeahead = fromEvent(searchBox, 'input').pipe(
  map((e: KeyboardEvent) => e.target.value),
  filter(text => text.length > 2),
  debounceTime(10),
  distinctUntilChanged(),
  switchMap(() => ajax('/api/endpoint'))
);
 
typeahead.subscribe(data => {
 // Handle the data from the API
});
```

## 81.0 指数関数的バックオフ
```
import { pipe, range, timer, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { retryWhen, map, mergeMap } from 'rxjs/operators';
 
function backoff(maxTries, ms) {
 return pipe(
   retryWhen(attempts => zip(range(1, maxTries), attempts)
     .pipe(
       map(([i]) => i * i),
       mergeMap(i =>  timer(i * ms))
     )
   )
 );
}
 
ajax('/api/endpoint')
  .pipe(backoff(3, 250))
  .subscribe(data => handleData(data));
 
function handleData(data) {
  // ...
}
```
## 82.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FCIxg5db1wHWTu1eeymVp4EkLzfg1%2F-LbW07Cj8C37LDyZeKHF-LcPuq3uP8_kKl9Si9yX?alt=media&token=22d159ac-ead7-4465-9279-35ce0d322b20
