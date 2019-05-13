Angular Document
===
* knowledgeid: -LbW07Cj8C37LDyZeKHF
* author: test1
* authorid: CIxg5db1wHWTu1eeymVp4EkLzfg1

## 1.0 Angularへようこそ
```
Angularへようこそ！ Angularは、Web、モバイル、またはデスクトップ用の最新のアプリケーションを構築するのに役立ちます。
このガイドでは、簡単なAngularアプリを構築して実行する方法を説明します。 Angular CLIツールを使用して開発を加速し、すべてのAngularプロジェクトに役立つスタイルガイドの推奨事項を遵守します。
このガイドは30分以内に完了します。このガイドの最後には、最終的なコードレビューの一環として、最終的なアプリケーションコードのコピーをダウンロードするリンクがあります。 （このガイドのコマンドを実行しない場合でも、最終的なアプリケーションコードをダウンロードできます）。
```

## 2.0 Node.js
```
Angularには、Node.js バージョン8.xまたは10.xが必要です。
バージョンをチェックするためには、node -v をターミナルあるいはコンソールで実行してください。
Node.jsを手に入れるには、 nodejs.orgへ行きましょう。
```

## 3.0 npm パッケージマネージャー
```
Angular、Angular CLI、Angularアプリケーションは、npmパッケージとして利用可能なライブラリによって提供される機能に依存します。 npmパッケージをダウンロードしてインストールするには、npmパッケージマネージャが必要です。
このクイックスタートでは、デフォルトで Node.js とともにインストールされるnpmクライアントコマンドラインインターフェースを使用します。
npmクライアントがインストールされていることを確認するには、ターミナルやコンソールでnpm -vを実行します。
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
--open （または -o ）オプションはhttp://localhost:4200/ を自動的にブラウザで開きます。
```

## 5.0 Angularコンポーネントを編集する
```
コンポーネントは、Angularアプリケーションの基本的なビルディングブロックです。彼らは、画面上にデータを表示し、ユーザーの入力を聞いて、その入力に基づいて行動を起こします。
最初のアプリの一環として、CLIが最初のAngularコンポーネントを作成しました。これはルートコンポーネントであり、app-rootという名前です。
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
ツアー・オブ・ヒーローズ チュートリアルはAngularの基礎をカバーしています。 このチュートリアルでは人材派遣会社がヒーローの集合を管理するためのアプリケーションを開発します。
この基本的なアプリケーションは、データ駆動型アプリケーションで期待される多くの機能を持っています。 ヒーローのリストを取得して表示し、選択したヒーローの詳細を編集し、ヒーローデータのさまざまなビュー間を遷移します。
このチュートリアルが終わるときには、あなたは次のことができるようになっています。
要素を表示・隠蔽する、そしてヒーローデータのリストを表示するための組み込みAngularディレクティブを使う。
ヒーローの詳細やヒーローのリストを表示するためのAngularコンポーネントを作成する。
読み取り専用データのための単方向データバインディングを使用する。
双方向データバインディングを用いて、モデルを更新するための編集可能なフィールドを設置する。
キー入力やクリックといったユーザーのイベントに対しコンポーネントがもつメソッドをバインドする。
ユーザーがマスターリストからヒーローを選択し、詳細画面でそのヒーローを編集できるようにする。
パイプによりデータを整形する。
ヒーローを組み立てるための共有サービスを作成する。
さまざまなビューとそれらのコンポーネント間を遷移可能にするためにルーティングを使用する。
Angularを始めるためにAngularのことを十分に学び、Angularは必要なことを何でもできるということを確信するでしょう。
```

## 6.4 アプリケーションでユーザーがアクションを取っている様子です。
* picturePath: https://angular.jp/generated/images/guide/toh/toh-anim.gif

## 7.0 アプリケーションシェル
```
まず、Angular CLIを使用して初期アプリケーションを作成します。このチュートリアルでは、スターターアプリケーションを修正して拡張し、Tour of Heroesアプリを作成します。
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
Angularでは、アプリケーションの部品がどのように合わさるかや、 アプリケーションが必要としている他のファイルやライブラリを知る必要があります。 この情報を メタデータ といいます。
一部のメタデータは、コンポーネントクラスに追加した@Componentデコレーター内にあります。 その他の重要なメタデータは@NgModuleデコレーター内にあります。
もっとも重要な@NgModuleデコレーターは、トップレベルの AppModule クラスに注釈を付けます。
Angular CLI は、プロジェクトを作成するときにsrc/app/app.module.tsにAppModuleクラスを作成しました。 ここでFormsModuleをオプトインします。
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
このページでは「Tour of Heroes」アプリを拡張してヒーローのリストを表示し、ユーザーがヒーローを選択してヒーローの詳細を表示できるようにします。
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
Tour of Heroes の中で扱っている HeroesComponent は、今のところ仮のデータを取得して表示している状態です。
このチュートリアルのリファクタリング後には、HeroesComponent は小さくなりビューをサポートすることに専念します。 これはモックサービスを使用して、ユニットテストをより簡潔にすることにもつながります。
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
このチュートリアルではAngularのHttpClientを使用して、次のデータ永続の機能を追加します。
HeroServiceはHTTPリクエストを介してヒーローデータを取得します。
ユーザーはヒーロー情報を追加、編集、削除ができ、その変更をHTTPを通して保存することができます。
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
アニメーションは動きの錯覚を提供します(時間の経過と共にHTML要素のスタイルが変化します)。うまく設計されたアニメーションはアプリケーションをより楽しく使いやすくすることができます。しかし、ただの飾りではありません。アニメーションは、さまざまな方法でアプリ・ユーザー体験を向上させることができます:
アニメーションがなければ、Webページの遷移は突然で不快感を与えるかもしれません。
モーションはユーザー体験を大幅に向上させます。アニメーションはユーザーの操作に対するアプリケーションの応答を検出する機会を与えます。
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
単一のHTML要素をある状態から別の状態に変更するシンプルな遷移をアニメーション化しましょう。たとえば、ユーザーの最後の操作から、ボタンがOpenまたはClosedのいずれかを表示するように指定できます。ボタンがopen状態では表示され黄色になり、closed状態になると透明で緑色になります。
HTMLでは、これらの属性は色や不透明度などの通常のCSSスタイルを使用して設定されます。Angularでは、style()関数を使用して、アニメーションで使用する一連のCSSスタイルを指定します。アニメーションの状態に対して一連のスタイルをまとめて、その状態に対してopenやclosedなどの名前を付けることができます。
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

## 47.0 
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
