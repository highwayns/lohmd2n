Spring Framework マニュアル
===
* knowledgeid: -LdLv2K4G35jI5thkNgR
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2
* language: jp
* knowledgetype: 1
* content_count: 55
* introduce: Spring Framework マニュアル

## 1.0 Springプロジェクトの作成
```
Spring Frameworkの開発元（米Pivotal）では、Spring 
Frameworkを利用した開発のための専用ツールを用意しています。
「Spring Tool Suite（STS）」と呼ばれるもので、Eclipseを
ベースに専用のプラグインを組み合わせて作られています。
http://spring.io/tools/sts
```

## 2.0 Mavenによるプロジェクトの作成
```
Spring利用プロジェクトの作成について説明しましょう。まずは、
Mavenを利用している場合の作成方法です。コマンドプロンプトある
いはターミナルを起動し、プロジェクトを作成する場所にcdコマンド
で移動してから、以下のように実行して下さい。
mvn archetype:generate

実行すると、利用可能なリポジトリがずらっと表示されます。
Choose a number or apply filter (format: [groupId:]artifactId, 
case sensitive contains): 618:

これはそのままEnterしてOKです。
Choose org.apache.maven.archetypes:maven-archetype-quickstart version:

最新バージョンがデフォルトで指定されていますので、そのまま
EnterすればOKです。
Define value for property 'groupId': :

グループIDを指定します。ここでは、「com.tuyano.libro」として
おきました。
Define value for property 'artifactId': :

アーティファクトIDの指定です。ここでは、「MySpringApp」として
おきました。
Define value for property 'version':  1.0-SNAPSHOT: :

versionプロパティの設定です。defaultのままでいいので、そのま
まEnterします。
Define value for property 'package':  com.tuyano.libro: :

プログラムのパッケージを指定します。これはグループIDが指定され
ていますのでそのままEnterすればいいでしょう。


ここまで設定した内容がずらっとまとめて表示されるので、間違いが
なければそのままEnterします。間違いがあったら、「N」とタイプし
てEnterし、再度入力をします。これでプロジェクトが生成されます
```
## 3.0 プロジェクトとpom.xmlについて
```
作成されたプロジェクトのフォルダ（ここでは「MySpringApp」フォ
ルダ）の中には、「src」フォルダと「pom.xml」というファイルが
作成されています。

「src」フォルダは、プロジェクトのファイル類がまとめられている
ところです。この中には以下のフォルダがあります。

「main」フォルダ――プログラムで使用するファイル類がまとめられま
す。
「test」フォルダ――プログラムで使うユニットテストのソースコード
がまとめられます。

「main」フォルダ内には「java」フォルダがあり、その中にパッケ
ージのフォルダ構成が用意され、そこに「App.java」というソース
コードファイルが作成されます。これは、サンプルとして作成された
ソースコードファイルで、中身はSpring Frameworkとは全然関係の
ない、ただのシンプルなJavaアプリケーションです。

もう１つの「pom.xml」ファイルが、Mavenプロジェクトのキモとな
るものです。これは、プロジェクトに必要なライブラリなどの情報を
記述したものです。Mavenでは、このファイルの情報を元に必要なフ
ァイル類をダウンロードしプロジェクトを生成していきます。つま
り、このpom.xmlをきっちりと書いておかないと、プロジェクトはう
まく作成できないのです。

下に、デフォルトで記述されているpom.xmlの内容をあげておきま
す。pom.xmlは、<project>というタグの中に、ざっと以下のような
タグを記述して構成されています。

<groupId>　――グループIDです。
<artifactId>　――アーティファクトIDです。
<version>　――バージョンを示すテキストです。
<packaging>　――パッケージの種類です。
<name>　――プロジェクト名です。
<url>　――URLです。

<properties>　――各種のプロパティが記述されます。ここでは、<project.build.sourceEncoding>というものが用意されています。これはプロジェクトのデフォルトエンコーディングを指定するも
のです。

<dependencies>　――この中に<dependency>というタグを使って、
必要なライブラリの情報を記述します。デフォルトでは、JUnitのラ
イブラリに関する情報が記述されています。

――これらのタグを記述して必要なライブライを構成していくのが、
Mavenによるプロジェクト作成の基本なのです。
```

## 4.0 pom.xml
```
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
 
    <groupId>com.tuyano.libro</groupId>
    <artifactId>MySpringApp</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
 
    <name>MySpringApp</name>
    <url>http://maven.apache.org</url>
 
    <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
 
    <dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
        <scope>test</scope>
    </dependency>
    </dependencies>
</project>
```

## 5.0 pom.xmlにSpringのコアライブラリを追記する
```
下に掲載したのが、修正したpom.xmlです。ここでは、<dependencies>タグの中に、以下のようなタグが追加されています
ね。
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-context</artifactId>
  <version>4.1.7.RELEASE</version>
</dependency>

記述したら、「cd MySpringApp」でプロジェクトのフォルダ内に移
動し、以下のように実行して下さい。
mvn install
```

## 6.0 プログラム実行
```
これで、必要なライブラリなどをダウンロードし、プロジェクトをビ
ルドしてJarファイルを作成します。「target」フォルダというもの
が作成されるので、この中を見てみましょう。すると、「MySpringApp-0.0.1-SNAPSHOT.jar」というファイルが作成され
ているはずです。これがビルドされたJarファイルです。

では、これを実行してみましょう。コマンドラインから「cd 
target」を実行して「target」フォルダ内に移動し、以下のように
実行をします。
java -classpath .;MySpringApp-0.0.1-SNAPSHOT.jar com.tuyano.libro.App

クラスパスにMySpringApp-0.0.1-SNAPSHOT.jarを指定して、
com.tuyano.libro.Appを実行します。これで、Appクラスのmainメ
ソッドが実行され、「Hello World!」とテキストが表示されます。
```

## 7.0 STSでSpringプロジェクトを作成する
```
STSを起動し、＜File＞メニューの＜New＞メニュー内から、
＜Spring Project＞メニューを選びます。

現れたダイアログで、以下のように設定を行います。

Project name――プロジェクト名です。先ほどMavenで作成したのと
同じものを作るならば、「MySpringApp」と入力しておけばいいでし
ょう。

Template――「Simple Project」内にある「Simple Spring 
Maven」を選択します。

Working sets――ここでは特に使わないのでチェックはOFFにしてお
きます。

これで「Finish」ボタンを押せば、プロジェクトが作成されます。た
だし、この段階では、特にJavaのソースコードファイルは用意されて
いませんので、後で必要に応じてクラスを作成していくことになるで
しょう。
```

## 8.0 DIは「依存性」を切り離すこと
```
Spring Frameworkは、「DIコンテナ」と呼ばれるフレームワークと
してスタートしました。DIとは、「依存性注入」と呼ばれる機能で
す。

プログラムでは、さまざまな機能をコンポーネント化して利用するこ
とが多いものです。コンポーネントに各種のプロパティなどを設定し
て利用するわけですね。このとき、細々とした設定をすべてコードと
して記述しておくと、後々変更やテストなどが非常に面倒になりま
す。

このコンポーネントの設定などのように、特定の状況などで設定され
るものを「依存性」と呼びます。この依存性があるために、コードが
特定の状況でしか使えない形になってしまっているのですね。

そこで、コンポーネントの設定情報などの依存性をコードから切り離
し、外部から注入するようにしよう、というのが「依存性注入」の基
本的な考え方です。これは、いくつかのやり方があるのですが、基本
は「Beanと設定ファイル」でプログラムを作ること、と考えておくと
わかりやすいでしょう。

Beanは、さまざまな値などをプロパティとして持っているシンプルな
クラスですね。通常は、Beanはインスタンスを作成して、各種のプロ
パティなどを設定して利用します。が、この設定処理（依存性の部
分）をコードから切り離してしまうことができれば、コードもシンプ
ルになるしテストもしやすくなりますね。

Spring Frameworkでは、依存性の部分をXMLファイルとして用意
し、これを読み込むことで自動的にBeanインスタンスを生成すること
ができます。他にもアノテーションを利用する方法などもあるのです
が、Beanの設定ファイルを利用する方法が一番基本として覚えておく
とよいでしょう。

```

## 9.0 インターフェイスとBeanクラスの作成
```
SampleBeanInterfaceインターフェイス
package com.tuyano.libro;
 
public interface SampleBeanInterface {
    public String getMessage();
    public void setMessage(String message);
}

SampleBeanクラス
 
package com.tuyano.libro;
 
public class SampleBean implements SampleBeanInterface {
    private String message;
     
    public SampleBean() {
        message = "(no message)";
    }
     
    public SampleBean(String message) {
        this.message = message;
    }
 
    public String getMessage() {
        return message;
    }
 
    public void setMessage(String message) {
        this.message = message;
    }
 
    @Override
    public String toString() {
        return "SampleBean [message=" + message + "]";
    }
}
```

## 10.0 Bean設定ファイルの作成
```
このBeanを利用するための設定ファイルを作成しましょう。プロジェ
クトの「src」フォルダ内にある「main」フォルダの中に、
「resources」というフォルダを用意して下さい。この中に、Bean設
定ファイルを作成します。

下のリスト欄に掲載したのが、そのサンプルです。これを記述し、
「bean.xml」というファイル名で「resources」フォルダ内に保存
しましょう。

このBean設定ファイルは、<beans>というタグの中に、<bean>タグ
を使ってBeanの情報を記述していきます。これは以下のように記述し
ます。
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
    http://www.springframework.org/schema/beans/spring-beans.xsd">
 
 
    <bean id="bean1" class="com.tuyano.libro.SampleBean">
        <property name="message" value="Hello, this is Bean Sample!!" />
    </bean>
 
</beans>
```

## 11.0 アプリケーションからBeanを利用する
```
package com.tuyano.libro;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("bean.xml");
        SampleBeanInterface bean1 = (SampleBeanInterface)app.getBean("bean1");
        System.out.println(bean1);
    }
 
}
```

## 12.0 別のBeanを追加する
```
クラスの用意ができたら、bean.xmlを開き、先に記述した<bean>タ
グの部分を下のように書き換えてみてください。
<bean id="bean1" class="com.tuyano.libro.SomeBean">
    <property name="message" value="2015/7/24" />
</bean>


package com.tuyano.libro;
 
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
 
public class SomeBean 
     implements SampleBeanInterface {
    private Date date;
    private SimpleDateFormat format;
 
    public SomeBean() {
        date = Calendar.getInstance().getTime();
        format = new SimpleDateFormat("yyyy/MM/dd");
    }
     
    public String getMessage() {
        return format.format(date);
    }
 
    public void setMessage(String message) {
        try {
            date = format.parse(message);
        } catch (ParseException e) {
            e.printStackTrace();
            date = null;
        }
    }
 
    @Override
    public String toString() {
        return "SomeBean [date=" + format.format(date) + "]";
    }
}
```

## 13.0 アノテーションによるBean操作とは？
```
アノテーションとは、クラスやメソッド、フィールドなどの宣言文の
上に書かれる、「＠記号で始まるテキスト」のことです。例えば、あ
るクラスのサブクラスを作ったとき、メソッドのオーバーライドを明
示的にするために、「@Override」といったアノテーションを書いた
ことぐらいはあるでしょう。

アノテーションは、クラス内には影響を与えません。また、修正すれ
ば再ビルドなどは必要になりますが、メソッドやクラスにシンプルな
単語を書くだけで必要な操作を行えるためわかりやすく、多くのフレ
ームワークが設定ファイルに別れを告げてアノテーション方式に切り
替えています。

Spring Frameworkでも、設定ファイル方式とアノテーション方式の
いずれのやり方もサポートしています。前回、Bean設定ファイルを使
った基本について説明しましたから、今回はアノテーション方式につ
いて説明しましょう。

```

## 14.0 Bean設定クラスを作成する
```
アノテーション方式は、Bean設定ファイルを使わず、Javaのクラス
で全てを作成するというやり方です。ということは、Bean設定ファイ
ルに相当するクラスを用意する必要があります。

では、Bean設定クラスを作成してみましょう。前回、利用した
MySpringAppプロジェクトをそのまま利用します。今回は、
com.tuyano.libroパッケージ内に「SampleBeanConfig」というク
ラスを作成しましょう。下にソースコードを掲載しておきましたの
で、それを参考に記述下さい。

Bean設定クラスも、見ればわかるようにシンプルなPOJOクラスとし
て定義されます。ただし、２つのアノテーションが記述されています
ね。

@Configuration
これは、クラス宣言の前に記述します。このアノテーションは、この
クラスがBeanの設定を行うものであることを示します。Bean設定ク
ラスには常にこれをつけます。

@Bean
Beanを作成するメソッドの前に記述します。これを記述すると、その
メソッドをBeanインスタンス作成のためのものと認識します。これを
つけるメソッドは、必ずBeanインスタンスを返値として指定しておき
ます。

今回は、SampleBeanInterfaceインスタンスをBeanとして生成する
ための設定クラスを定義していた、というわけですね。
package com.tuyano.libro;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
 
@Configuration
public class SampleBeanConfig {
     
    @Bean
    public SampleBeanInterface sampleBean() {
        return new SampleBean("設定クラスで作ったインスタンスです。");
    }
 
}
```

## 15.0 Appクラスを修正する
```
今回は、bean.xmlを利用した場合とはちょっと違ったやり方をして
います。簡単にまとめましょう。

ApplicationContextを取得する
ApplicationContext app = new 
    AnnotationConfigApplicationContext(SampleBeanConfig.class);
まず、ApplicationContextインスタンスを作成します。これは同じ
ですが、よく見ると使っているクラスが違っていますね。今回は
「AnnotationConfigApplicationContext」というクラスのインス
タンスを作成しています。

これは、Bean設定クラスを利用してApplicationConfigを作成する
ためのものです。引数には、設定クラスのClass値を指定します。こ
れで、その設定クラスからBeanを管理するApplicationContextが作
成されます。

Beanを取得する
SampleBeanInterface bean1 = 
    (SampleBeanInterface)app.getBean(SampleBeanInterface.class);


Beanの取得は、これまでとまったく同じです。「getBean」メソッド
を使い、引数に取り出すBeanのClassを指定するだけです。これでそ
のBeanのインスタンスが得られます。

引数には、取得するBeanクラスのClass値を指定します。これで、指
定クラスのBeanが得られます。
package com.tuyano.libro;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new
            AnnotationConfigApplicationContext(SampleBeanConfig.class);
        SampleBeanInterface bean1 = 
            (SampleBeanInterface)app.getBean(SampleBeanInterface.class);
        System.out.println(bean1);
    }
}
```

## 16.0 コンポーネントを作成しよう
```
アノテーションによるBean利用は、いろいろと応用ができます。基本
がわかったら、続いてBeanを利用する「コンポーネント」を使ってみ
ましょう。

Spring Frameworkでは、高度な機能を持ったクラスをコンポーネン
トとして定義し、Beanと同じような感覚で利用できます。簡単なサン
プルとして、「BeanHolder」というコンポーネントクラスを作って
みましょう。

com.tuyano.libroパッケージに、BeanHolderクラスを作成し、下の
掲載するようにソースコードを記述して下さい。

このBeanHolderは、ごくシンプルなコンポーネントです。このコン
ポーネント内では、先ほどのBean設定クラスで用意したBeanをフィ
ールドに保管しており、それを利用したメソッドが用意されていま
す。ポイントを整理していきましょう。

「@Component」アノテーション
クラスの宣言の手前には、@Componentというアノテーションがつけ
られています。これは、そのクラスがコンポーネントであることを示
すためのものです。コンポーネントクラスには必ずこれを付けておき
ます。

「@Autowired」アノテーション
このクラスには、SampleBeanInterfaceをフィールドに保管してい
ます。このフィールドには、@Autowiredというアノテーションがつ
けられています。これは、Bean設定クラス（あるいはファイル）によ
って自動生成されたBeanインスタンスを自動的にバインドするための
ものです。

これをつけることで、生成されたBean群の中から
SampleBeanInterfaceインスタンスのものを探してこのbeanフィー
ルドに自動的に代入するのです。この@Autowairedは、コンポーネン
トに限らず、さまざまなBean利用シーンで用いられます。

```

## 17.0 BeanHolder
```
package com.tuyano.libro;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
 
@Component
public class BeanHolder {
     
    @Autowired
    private SampleBeanInterface bean;
     
    public void showMessage() {
        System.out.println("*print by BeanHolder*");
        System.out.println(bean);
        System.out.println("*end*");
    }
 
}
```

## 18.0 コンポーネントを利用する
```
コンポーネントを実際に利用しましょう。App.javaを開き、下のソ
ースコードのように書き換えてください。そして実行してみましょ
う。

「*print by BeanHolder*」という表示の下に、SampleBeanの出力
がされます。BeanHolderが取得され、その中でSampleBeanを使って
処理を実行しているのがよくわかりますね。

ここでは、AnnotationConfigApplicationContextインスタンスを
作成した後、getBeanで「BeanHolder.class」を引数に指定して
BeanHolderインスタンスを取得しています。BeanHolderは、Bean設
定クラス（SampleBeanConfig）には記述されていません。が、ちゃ
んとgetBeanで取り出せるのです。

これは、Bean設定ファイルの@ComponentScanにより、@Component
を指定されたクラスが検索され、そのインスタンスが
ApplicationContextに登録されているからです。またその内部で
は、@Autowiredにより、SampleBeanが自動的にフィールドに設定さ
れていたので、その値がshowMessageで出力されていた、というわけ
です。

このように、アノテーションを使うと、必要なBeanやコンポーネント
類がすべて自動的に用意され使えるようになります。Spring 
FrameworkのBean利用の基本的な仕組みが、これでだいぶわかってき
たのではないでしょうか。

DIによるBeanの利用は、Spring Frameworkの中核をなす技術です。
Spring Frameworkにはさまざまなライブラリが用意されています
が、それらはすべて、このBean技術を使って必要な機能をBean化
し、利用しています。Bean利用がわからないと、Spring Framework
の基本的な使い方が理解できないのです。これらは「Spring 
Frameworkの基本中の基本」として、しっかり理解しておきましょ
う。
package com.tuyano.libro;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new
            AnnotationConfigApplicationContext(SampleBeanConfig.class);
        BeanHolder holder = app.getBean(BeanHolder.class);
        holder.showMessage();
    }
}
```

## 19.0 AOPの利用
```
AOPは、「Aspect Oriented Programming（アスペクト指向プログ
ラミング）」の略です。アスペクトというのは、一般に「横断的関心
事」と呼ばれるものです。

オブジェクト指向では、プログラムは「クラス」を単位として作成さ
れます。それぞれのクラスごとに、そのクラスに必要な機能をメソッ
ドとして実装してくわけですね。この手法は、考え方としてはよくで
きていますが、逆に「クラスごとに完結している」ということが面倒
になってしまうこともあります。

例えば、プログラムの開発中、動作状況をチェックするために、あち
こちにSystem.out.println文を書いて値を出力させている、なんて
人はいませんか？　誰しもよくやる方法ですね。これ、考えてみると
ものすごく面倒くさいやり方です。多数のクラスがあったら、それぞ
れのクラスのそれぞれのメソッドにprintlnを書いていかないといけ
ません。更に、そうやってプログラムが完成したら、すべての
printlnを削除しないといけないのです。

こういう「多数のクラスにわたって共通して必要となる処理」が、横
断的関心事です。もしも、さまざまなクラスの中にあるメソッドに、
println文を自動的に挿入できる機能があったら、これはかなり便利
じゃありませんか？　そして必要がなくなったらすべて自動的に削除
できるとしたら？　これこそが、AOPの考え方なのです。

DIが「依存性（値）の注入」なら、AOPは「処理の注入」といってよ
いでしょう。外部から、クラス内の特定のところに、あらかじめ用意
しておいた処理を挿入したり取り除いたりする。これがAOPで実現さ
れることです。
```

## 20.0 pom.xmlの準備
```
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aop</artifactId>
    <version>4.1.7.RELEASE</version>
</dependency>
```

## 21.0 AOPを利用するBeanクラスを用意する
```
AOPを利用してみましょう。AOPは、特定の処理を外部からクラス内に
挿入する働きをします。これを実現するためには以下のようなものを
用意する必要があります。

AOPの対象となるクラス。ごく一般的なBeanクラスを用意してお
く。
AOPで挿入する処理を用意したクラス。ここに挿入する処理を用意す
る
AOPに関する設定情報。これはBean設定ファイルか、設定クラスを使
って用意する。

まずは、AOP対象となるクラスを用意しましょう。今回は、
com.tuyano.libro.aopというパッケージを用意して、この中に必要
なクラス類をまとめることにします。「SampleAopBean」というクラ
スを下のリストのように作成しておくことにしましょう。

これは、先に作ったSampleBeanとほとんど同じものです。メッセー
ジを保管するmessageプロパティと、コンストラクタ、そして
printMessageというメソッドを用意しておきました。このように、
使用するBean自体は、ごくごくシンプルなPOJOクラスであるのが
Spring Frameworkの特徴でしょう。
```

## 22.0 SampleAopBean
```
package com.tuyano.libro.aop;
 
public class SampleAopBean {
    private String message;
 
    public SampleAopBean() {
        super();
    }
    public SampleAopBean(String message) {
        this.message = message;
    }
     
    public String getMessage() {
        return message;
    }
 
    public void setMessage(String message) {
        this.message = message;
    }
 
    public void printMessage() {
        System.out.println("message:[" + message + "]");
    }
}
```

## 23.0 MethodBeforeAdviceクラスの作成
```
このSampleAopBeanにAOPで挿入する処理を用意しましょう。これ
も、もちろんJavaのクラスとして定義します。

com.tuyano.libro.aopパッケージ内に、「SampleMethodAdvice」
という名前でクラスを作成しましょう。そして下のリスト欄のように
コードを記述して下さい。

今回作成したSampleMethodAdviceは、２つのインターフェイスを実
装しています。このインターフェイスにより、処理の挿入に関するメ
ソッドを追加します。それぞれ簡単に整理しましょう。

●MethodBeforeAdvice
これは、メソッドの実行前に処理を挿入するためのインターフェイス
です。これは「before」というメソッドを１つ持っており、以下のよ
うに定義されています。
public void before(Method method, Object[] args, Object target) 
    throws Throwable 

Methodは対象となるメソッド、argsはその引数、targetは対象とな
るオブジェクト（インスタンス）がそれぞれ渡されます。これらの引
数により、どのインスタンスのどのメソッドが呼び出される前にこの
処理が実行されたかを知ることができます。

●AfterReturningAdvice
これは、メソッドの実行が終わり、呼び出し元に戻される際に挿入す
る処理のインターフェイスです。「AfterReturningAdvice」という
メソッドが用意されています。これは以下のように定義されていま
す。
public void afterReturning(Object returnValue, Method method, 
    Object[] args, Object target) throws Throwable

メソッドの返値、メソッド、メソッドに渡された引数、ターゲットの
インスタンスといったものが引数に渡されます。返値以外は上の
beforeと同じなので、ほぼ同じ感覚で扱うことができるでしょう。

――ここでは、それぞれメソッドとターゲットをSystem.out.println[で出力しているだけです。AOPは、「処理を挿入する」といいました[が、どこでもいいから好き勝手に挿入するというわけではありませ[ん。「このタイミングで挿入する」ということがあらかじめいくつ[か用意されているのです。

とりあえず、この２つのインターフェイスを覚えれば、「メソッドの[呼び出し前と呼び出し後」に処理を挿入できるようになります。AOP[の基本を覚えるには十分でしょう
```

## 24.0 SampleMethodAdvice
```
package com.tuyano.libro.aop;
 
import java.lang.reflect.Method;
 
import org.springframework.aop.AfterReturningAdvice;
import org.springframework.aop.MethodBeforeAdvice;
 
public class SampleMethodAdvice 
        implements MethodBeforeAdvice, AfterReturningAdvice {
 
    @Override
    public void before(Method method, Object[] args, 
            Object target) throws Throwable {
        System.out.println("*before: " + method.getName() + "[" + target + "]");
    }
 
    @Override
    public void afterReturning(Object returnValue, Method method, 
            Object[] args, Object target) throws Throwable {
        System.out.println("*after: " + method.getName() + "[" + target + "]");
    }
 
}
```

## 25.0 bean.xmlを作成する
```

5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
<?xml version="1.0" encoding="UTF-8"?>
<beans
    xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
    http://www.springframework.org/schema/beans/spring-beans.xsd">
     
    <!-- aop bean... -->
    <bean id="sampleAopBean" class="com.tuyano.libro.aop.SampleAopBean">
        <property name="message" value="this is AOP bean!" />
    </bean>
    <bean id="sampleMethodAdvice"
        class="com.tuyano.libro.aop.SampleMethodAdvice" />
 
    <bean id="proxyFactoryBean"
            class="org.springframework.aop.framework.ProxyFactoryBean">
        <property name="target" ref="sampleAopBean"></property>
        <property name="interceptorNames">
            <list>
                <value>sampleMethodAdvice</value>
            </list>
        </property>
    </bean>
             
</beans>
```

## 26.0 AOPを実行しよう
```
package com.tuyano.libro.aop;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("bean.xml");
         
        SampleAopBean bean1 = (SampleAopBean) app.getBean("sampleAopBean");
        bean1.printMessage();
 
        System.out.println("--------------------");
 
        SampleAopBean bean2 = (SampleAopBean) app.getBean("proxyFactoryBean");
        bean2.printMessage();
    }
 
}
```

## 27.0 アノテーションでAOP設定クラスを作る
```
package com.tuyano.libro.aop;
 
import org.springframework.aop.framework.ProxyFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
 
@Configuration
public class SampleAopConfig {
    private SampleAopBean sampleAopBean = 
        new SampleAopBean("this is message bean.");
    private SampleMethodAdvice sampleMethodAdvice = 
        new SampleMethodAdvice();
     
    @Bean
    SampleAopBean sampleAopBean() {
        return sampleAopBean;
    }
     
    @Bean
    SampleMethodAdvice sampleMethodAdvice() {
        return sampleMethodAdvice;
    }
     
    @Bean
    ProxyFactoryBean proxyFactoryBean() {
        ProxyFactoryBean bean = new ProxyFactoryBean();
        bean.setTarget(sampleAopBean);
        bean.setInterceptorNames("sampleMethodAdvice");
        return bean;
    }
     
     
}
```

## 28.0 AspectJを利用する
```
AOPについて調べてみると、おそらく「AspectJ」というソフトウェ
アについてたくさん見つかることでしょう。AspectJは、JavaのAOP
ソフトウェアのデファクトスタンダードといっていいほどに広く使わ
れているソフトです。

Spring AOPでも、このAspectJを利用してAOPの実装をするための機
能が用意されています。前回使ったSpring AOPとはまた違った形で
AOPを実装できるので、こちらの使い方も覚えておきたいところで
す。

では、まずAspectJを利用するための準備をしましょう。pom.xmlを
開き、<dependencies>タグ内に下のリスト欄の内容を追記して下さ
い（既に書いてあるspring-coreやspring-aopのタグは削除しない
ように！）。

例によって、ここではSpring Framework 4.1.7に合わせてバージョ
ンを指定してますので、他のバージョンを使っている場合はそれにあ
わせて<version>を調整して下さい。

ここでは２つのライブラリを追加しています。「AspectJ RT」は、
AspectJのランタイムプログラムです。これが入っていれば、
AspectJの機能を利用できるようになります。また「AspectJ 
Weaver」は、アスペクトの情報を元にアスペクトを組み込んだコード
を生成するのに必要なユーティリティプログラムです。Spring AOP
からAspectJを利用する際には、この２つをセットで用意して下さ
い。
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjrt</artifactId>
    <version>1.8.6</version>
</dependency>
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.8.6</version>
</dependency>
```

## 29.0 アスペクト・クラスを作成する
```
アスペクトで挿入する処理となるクラスを作成しましょう。今回は、
AspectJを利用するため、前回とは違った形になります。

下のリストが、作成するサンプルです。com.tuyano.libro.aopパッ
ケージに、「SampleAspect」というクラス名で作成をしましょう。

見ればわかるように、これはごく一般的なPOJOクラスです。何のイン
ターフェイスも実装していませんし、何のクラスも継承していませ
ん。違うのは、アノテーションが付けられていることだけです。

@Aspect
これがアスペクト・クラスであることを示します。AspectJで利用す
るためのクラスは、このアノテーションをつけておきます。

@Before
これはメソッドの手前に付けます。メソッドの実行前に挿入される処
理であることを示すアノテーションです。Spring AOPにあった
「before」と同様のものと考えてよいでしょう。

@After
これもメソッドの手前に付けます。こちらはメソッドの実行後に挿入
される処理であることを示すアノテーションです。Spring AOPにあ
った「afterRunning」に相当するものと考えるとよいでしょう。


――アノテーションそのものはシンプルです。わかりにくいのは、
@Beforeと@Afterの後にある()内の記述でしょう。これは以下のよう
に記述されています。
("execution(……割り当てるメソッドの指定……)")

executionの後の()に、どのメソッドにこのメソッド挿入を行うかを
指定します。これはパッケージ名からきっちりと正確にメソッドを指
定する必要があります。ただし、すべての名前を記述しなければいけ
ないわけではありません。

ここではワイルドカード（*）が利用できるので、それを利用して特
定パッケージやクラス内のすべてのメソッドなどを指定できます。ま
た指定するメソッドの引数にも、「..」という記号で不特定の引数を
指定できます。

ここでの記述を見ると、以下のようになっていますね。
* com.tuyano.libro.aop.SampleAopBean.*(..)

わかりやすく、「不特定の値」を○○と記述すると、こんな具合に書か
れていることがわかります。
○○ com.tuyano.libro.aop.SampleAopBean.○○(○○)

一番最初にある○○は、publicとかprivateといったものが指定された
場合を考えてつけています。またSampleAopBeanの後の○○は、このク
ラス内にあるどんなメソッドも全て対象に指定するものです。また
(○○)は、引数がどんな形であっても対象とするためのものです。

このexecutionの書き方がある程度わかれば、思い通りにAOP処理の
対象となるメソッドを指定できるようになるでしょう。

```

## 30.0 SampleAspect
```
package com.tuyano.libro.aop;
 
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
 
@Aspect
public class SampleAspect {
 
    @Before("execution(* com.tuyano.libro.aop.SampleAopBean.*(..))")
    public void before() {
        System.out.println("before:");
    }
 
    @After("execution(* com.tuyano.libro.aop.SampleAopBean.*(..))")
    public void after() {
        System.out.println("after:");
    }
}
```

## 31.0 aopbean.xmlの作成
```
Bean設定ファイルを用意しましょう。今回は、「aopbean.xml」と
いうファイルを新たに追加しておくことにします。

「resources」フォルダ内に「aopbean.xml」ファイルを作成し、
下のリスト欄のように内容を記述して下さい。

今回は、これまで使ってきたbean.xmlに比べて、いろいろと記述が
増えています。以下に整理しましょう。

●<beans>タグの属性
まず、<beans>タグの部分を見て下さい。以下の属性が追加されて
いますね。
xmlns:aop="http://www.springframework.org/schema/aop"

そして、このスキーマロケーションを示す値が、
xsi:schemaLocationの値に追加されています。具体的には以下の
部分です。
http://www.springframework.org/schema/aop 
http://www.springframework.org/schema/aop/spring-aop.xsd

これらは、リストで使われている<aop:aspectj-autoproxy />を使
えるようにするためのものです。多少長くなりますが、必ず追記し
ておいて下さい。

●Beanの登録
<bean id="sampleAspect" class="com.tuyano.libro.aop.SampleAspect" />
<bean id="sampleAopBean" class="com.tuyano.libro.aop.SampleAopBean">
    <property name="message" value="this is AOP bean!" />
</bean>
これは、既に何度もやりましたね。Beanの登録用のタグです。SampleAspectクラスとSampleAopBeanクラスをそれぞれBeanとし
て登録します。

●AspectJオートプロキシー
<aop:aspectj-autoproxy />
これは、AspectJのためのタグです。これは、先にSpring AOPのと
きに利用したProxyFactoryBeanに相当するものを自動生成するた
めのタグです。これを記述することで、ProxyFactoryBeanで用意
された機能が自動的に組み込まれます。

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:aop="http://www.springframework.org/schema/aop"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd 
    http://www.springframework.org/schema/aop 
    http://www.springframework.org/schema/aop/spring-aop.xsd">
 
    <bean id="sampleAspect" class="com.tuyano.libro.aop.SampleAspect" />
    <bean id="sampleAopBean" class="com.tuyano.libro.aop.SampleAopBean">
        <property name="message" value="this is AOP bean!" />
    </bean>
 
    <aop:aspectj-autoproxy />
     
</beans>
```

## 32.0 プログラムを実行する
```
package com.tuyano.libro.aop;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("aopbean.xml");
         
        SampleAopBean bean = (SampleAopBean) app.getBean("sampleAopBean");
        String msg = bean.getMessage();
        bean.setMessage("<<" + msg + ">>");
        bean.printMessage();
    }
 
}
```

## 33.0 Bean設定クラスを利用する
```
これでAspectJの基本的な利用の仕方はわかりました。が、Spring 
Frameworkでは、Beanは設定ファイルでなく、クラスを使って定義
することもできましたね。AspectJでも、この「定義クラスを使っ
た利用」を行ってみましょう。

com.tuyano.libro.aopパッケージ内に、
「SampleAspectConfig」というクラスを作成して下さい。そして
下のリスト欄のようにコードを記述しましょう。これがAspectJの
設定クラスになります。記述したら、App.javaを開き、以下の一文
を修正しましょう。

※Appの修正
ApplicationContext app = 
    new ClassPathXmlApplicationContext("aopbean.xml");
    ↓
ApplicationContext app = 
    new AnnotationConfigApplicationContext(SampleAspectConfig.class);

これで実行すれば、先程と同様にAspectJによるメソッドの挿入が
行われ、メソッドの呼び出し前後に処理が実行されるようになりま
す。このクラスでは、設定クラスであることを示す@Configuration
の他に、
@EnableAspectJAutoProxy
このようなアノテーションがクラスに追加されています。これは、
Bean定義ファイルに用意した<aop:aspectj-autoproxy />タグに
相当するものです。これを記述することで、AspectJのオートプロ
キシー機能がONになり、自動的にアスペクト・クラスのメソッド挿
入が行われるようになります。

Beanの定義はこれまでと変わりはありません。ただ、
@EnableAspectJAutoProxyを追加するだけでAspectJの機能がONに
なるわけですね。設定クラスに変えても、AspectJ利用の簡単さは
変わらないことがわかるでしょう
package com.tuyano.libro.aop;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
 
@Configuration
@EnableAspectJAutoProxy
public class SampleAspectConfig {
     
    @Bean
    SampleAopBean sampleAopBean() {
        return new SampleAopBean("this is AspectJ bean.");
    }
     
    @Bean
    SampleAspect sampleAspect() {
        return new SampleAspect();
    }
 
}
```

## 34.0 Spring Data JPAの利用
```
データベース関連は、各種のライブラリやフレームワークがもっと
も多く用意されている分野でしょう。HibernateなどのORM
（Object Relational Mapping）は、SQLなどを使うデータベース
のアクセスと、JavaのObjectiveなコードとの整合性をとるための
技術として広く使われています。

そうしたORM関連の技術の中でも、Javaの純正技術として浸透して
いるのが「JPA（Java Persistence API）」でしょう。まぁ、JPA
自体は、ORMのための技術というより、SQLをJavaなりに使いやすく
するものという感じですが、データベースとJavaオブジェクトの橋
渡しをするための基本的な技術として多くのフレームワークでも使
われています。

Spring Frameworkでも、JPAを利用してデータベースアクセスを行
う「Spring Data JPA」というライブラリが用意されています。こ
れは「Spring Data」と呼ばれるデータベースアクセス関連ライブ
ラリの一つです。この他に、非SQLであるMongoDBを利用する
「Spring Data MongoDB」や、Hadoop利用のための「Spring 
Data Hadoop」などといったものが用意されています。Spring 
Data JPAは、一般的なSQLによるリレーショナルデータベース全般
を利用するためのもので、Spring Dataの基本となるライブラリと
いっていいでしょう。

では、このSpring Data JPAを利用してみることにしましょう。ま
ずは、pom.xmlへのライブラリの追加です。下のリスト欄のように
ソースコードを書き換えて下さい。例によって、Spring 
Framework 4.1.7に合わせたバージョン構成になっています。

今回は、計３つの<dependency>タグを新たに追加してあります。そ
れぞれ簡単に説明しておきましょう。

●H2
グループIDに「com.h2database」、アーティファクトIDに「h2」
を指定してあります。H2は、JavaのSQLデータベースエンジンで
す。直接データベースファイルにアクセスしてデータを保存できま
す。データベースというとMySQLやPostgreSQLといったものが思い
浮かぶでしょうが、Javaのライブラリとして実装されているH2のよ
うなデータベースエンジンは、データベースサーバーのセットアッ
プなど面倒なことをする必要がなく、気軽に利用できるので、学習
用としては最適です。そこで今回は、H2をデータベースに利用して
Spring Data JPAを使うことにします。

●Hibernate EntityManager
JPAでは、「エンティティ」と呼ばれる形でデータベースのデータを
オブジェクト化します。このエンティティの管理を行うのが、エン
ティティマネージャです。これはさまざまなものが出回っていて、
自分で使いやすいものを選んで組み込み利用できるようになってい
ます。今回は、Hibernateが作成しているエンティティマネージャ
を使っています。グループID「org.hibernate」、アーティファク
トID「hibernate-entitymanager」で指定します。

●Spring Data JPA
これが、Spring Data JPAの本体ライブラリです。グループIDに
「org.springframework.data」、アーティファクトIDに
「spring-data-jpa」をそれぞれ指定します。


――以上の３つのライブラリをpom.xmlに追記することで、Spring 
Data JPAが使えるようになります。最初のH2は、他のデータベース
サーバーを利用する場合はもちろん不要です。
<project
    xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
    http://maven.apache.org/xsd/maven-4.0.0.xsd">
 
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.springframework.samples</groupId>
    <artifactId>MySpringApp</artifactId>
    <version>0.0.1-SNAPSHOT</version>
 
    <properties>
        <java.version>1.6</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
 
    <dependencies>
 
        <!-- Spring -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>4.1.7.RELEASE</version>
        </dependency>
 
        <!-- Database (H2) -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <version>1.4.187</version>
        </dependency>
 
        <!-- JPA Provider (Hibernate) -->
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-entitymanager</artifactId>
            <version>4.3.10.Final</version>
        </dependency>
 
        <!-- Spring Data JPA -->
        <dependency>
            <groupId>org.springframework.data</groupId>
            <artifactId>spring-data-jpa</artifactId>
            <version>1.8.1.RELEASE</version>
        </dependency>
 
    </dependencies>
</project>
```

## 35.0 persistence.xmlを作成する
```
<?xml version="1.0" encoding="UTF-8"?>
<persistence
    xmlns="http://xmlns.jcp.org/xml/ns/persistence"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence.xsd">
 
    <persistence-unit name="persistence-unit"
        transaction-type="RESOURCE_LOCAL">
        <provider>org.hibernate.ejb.HibernatePersistence</provider>
        <properties>
            <property name="hibernate.diarect" value="${hibernate.dialect}" />
            <property name="hibernate.hbm2ddl.auto" value="${hibernate.hbm2ddl.auto}" />
            <property name="javax.persistence.jdbc.driver" value="${db.driver}" />
            <property name="javax.persistence.jdbc.url" value="${db.url}" />
            <property name="javax.persistence.jdbc.user" value="${db.user}" />
            <property name="javax.persistence.jdbc.password" value="${db.password}" />
        </properties>
    </persistence-unit>
     
</persistence>
```

## 36.0 application.propertiesに追記する
```
#Database Configuration
db.driver=org.h2.Driver
db.url=jdbc:h2:mem:datajpa
db.username=sa
db.password=
  
#Hibernate Configuration
hibernate.dialect=org.hibernate.dialect.H2Dialect
hibernate.hbm2ddl.auto=create-drop
```

## 37.0 Bean設定ファイルを用意する
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:jpa="http://www.springframework.org/schema/data/jpa"
    xmlns:jdbc="http://www.springframework.org/schema/jdbc"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
        http://www.springframework.org/schema/beans/spring-beans.xsd 
        http://www.springframework.org/schema/jdbc 
        http://www.springframework.org/schema/jdbc/spring-jdbc.xsd  
        http://www.springframework.org/schema/data/jpa 
        http://www.springframework.org/schema/data/jpa/spring-jpa.xsd">
 
    <jdbc:embedded-database id="dataSource" type="H2" />
 
    <bean id="entityManagerFactory" class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <property name="jpaVendorAdapter">
            <bean class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter">
                <property name="generateDdl" value="true" />
            </bean>
        </property>
    </bean>
         
</beans>
```

## 38.0 エンティティクラスを作成する
```
package com.tuyano.libro.db;
 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
 
@Entity
public class SampleEntity {
     
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
     
    @Column(length=50, nullable=false)
    private String name;
     
    @Column(length=100, nullable=true)
    private String mail;
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public String getMail() {
        return mail;
    }
 
    public void setMail(String mail) {
        this.mail = mail;
    }
 
    public long getId() {
        return id;
    }
     
    public SampleEntity() {
        super();
    }
     
    public SampleEntity(String name, String mail) {
        this();
        this.name = name;
        this.mail = mail;
    }
     
    public String toString() {
        return "SampleEntity [id=" + id + ", name=" + name + ", mail=" + mail + "]";
    }
}
```

## 39.0 データベースを利用してみる
```
実際にデータベースを利用してみることにしましょう。
com.tuyano.libro.dbパッケージに「App」クラスを作成し、下の
リスト欄のようにソースコードを記述して下さい。

完成したら、実際にAppクラスを実行してみましょう。すると、以下
のようにテキストが出力されることがわかるでしょう。

SampleEntity [id=1, name=tuyano, mail=syoda@tuyano.com]
SampleEntity [id=2, name=hanako, mail=hanako@flower]
SampleEntity [id=3, name=taro, mail=taro@yamada]
SampleEntity [id=4, name=sachiko, mail=sachico@happy]
...ok.

これは、ダミーとして用意したエンティティをデータベースから取
得し表示しているのです。ここでは、ダミーデータを作成するため
のmakeDummyDataメソッドと、取得したリストの内容を出力する
printListメソッドを用意しておきました。では、簡単に整理しま
しょう。

1. ApplicationContextの作成
ApplicationContext app = 
    new ClassPathXmlApplicationContext("dbbean.xml");
まずは、いつものようにApplicationContextインスタンスを用意
します。ここでは、dbbean.xmlをファイル指定しておきます。


2. EntityManagerFactoryインスタンスの取得
EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
Bean設定ファイルに用意しておいた、エンティティマネージャファ
クトリーのBeanを取得します。これは、EntityManagerFactoryク
ラスのclass値として引数を指定しおきます。


3. EntityManagerの作成
EntityManager manager = factory.createEntityManager();
用意したEntityManagerFactoryから、EntityManagerを取得しま
す。これはcreateEntityManagerというメソッドを呼び出すだけで
す。


――これで、EntityManagerが用意できました。後は、これを使っ
て、ダミーデータを保存したり、あるいは全エンティティをリスト
として取り出したりしています。

とりあえず、今回は「データベース利用の基本」ということで、肝
心のEntityManagerを取り出すところまでわかればOK、としましょ
う。具体的なデータベースアクセスは次回に説明する予定です
```

## 40.0 App修正
```
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("dbbean.xml");
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        EntityManager manager = factory.createEntityManager();
 
        makeDummyData(manager);
 
        // get list
        Query query = manager.createQuery("from SampleEntity");
        List list = query.getResultList();
        printList(list);
 
        System.out.println("...ok.");
    }
 
    // create dummy entity data.
    public static void makeDummyData(EntityManager manager) {
        EntityTransaction transaction = manager.getTransaction();
        transaction.begin();
        manager.persist(new SampleEntity("tuyano", "syoda@tuyano.com"));
        manager.persist(new SampleEntity("hanako", "hanako@flower"));
        manager.persist(new SampleEntity("taro", "taro@yamada"));
        manager.persist(new SampleEntity("sachiko", "sachico@happy"));
        manager.flush();
        transaction.commit();
    }
 
    // print all entity.
    public static void printList(List list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
}
```

## 41.0 Bean設定クラスを利用する
```
package com.tuyano.libro.db;
 
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
 
@Configuration
class SampleEntityConfig {
 
    @Bean
    public DataSource dataSource() {
        EmbeddedDatabaseBuilder builder = 
            new EmbeddedDatabaseBuilder();
        return builder.setType(EmbeddedDatabaseType.H2).build();
    }
 
    @Bean
    public EntityManagerFactory entityManagerFactory() {
        HibernateJpaVendorAdapter vendorAdapter = 
            new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(true);
 
        LocalContainerEntityManagerFactoryBean factory = 
            new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("com.tuyano.libro.db");
        factory.setDataSource(dataSource());
        factory.afterPropertiesSet();
        return factory.getObject();
    }
 
}
```

## 42.0 Queryによるデータの一覧取得
```
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new
            AnnotationConfigApplicationContext(SampleEntityConfig.class);
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        EntityManager manager = factory.createEntityManager();
 
        makeDummyData(manager);
 
        // get list
        Query query = manager.createQuery("from SampleEntity");
        List list = query.getResultList();
        printList(list);
 
        System.out.println("...ok.");
    }
 
    public static void makeDummyData(EntityManager manager) { 略 }
 
    public static void printList(List list) { 略 }
}
```

## 43.0 新しいエンティティの保存
```
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
 
public class App {
 
    public static void main(String[] args) {
        ApplicationContext app = new
            AnnotationConfigApplicationContext(SampleEntityConfig.class);
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        EntityManager manager = factory.createEntityManager();
 
        makeDummyData(manager);
 
        // get list
        Query query = manager.createQuery("from SampleEntity");
        List list = query.getResultList();
        printList(list);
 
        System.out.println("...ok.");
    }
 
    // create dummy entity data.
    public static void makeDummyData(EntityManager manager) {
        EntityTransaction transaction = manager.getTransaction();
        transaction.begin();
        manager.persist(new SampleEntity("tuyano", "syoda@tuyano.com"));
        manager.persist(new SampleEntity("hanako", "hanako@flower"));
        manager.persist(new SampleEntity("taro", "taro@yamada"));
        manager.persist(new SampleEntity("sachiko", "sachico@happy"));
        manager.flush();
        transaction.commit();
    }
 
    public static void printList(List list) { 略 }
}
```

## 44.0 エンティティの更新
```
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
 
public class App {
    private static EntityManager manager;
 
    public static void main(String[] args) {
        ApplicationContext app = new
            AnnotationConfigApplicationContext(SampleEntityConfig.class);
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        manager = factory.createEntityManager();
 
        // make dummy
        makeDummyData();
         
        // update entity
        updateEntity(1L);
        updateEntity(3L);
 
        // get list
        Query query = manager.createQuery("from SampleEntity");
        List list = query.getResultList();
        printList(list);
 
        System.out.println("...ok.");
    }
 
    public static void makeDummyData() { 略 }
    public static void printList(List list) { 略 }
     
    // update entity
    public static void updateEntity(long id) {
        SampleEntity entity = manager.find(SampleEntity.class, id);
        entity.setName("**update name**");
        entity.setMail("**update@mail**");
        EntityTransaction transaction = manager.getTransaction();
        transaction.begin();
        manager.merge(entity);
        manager.flush();
        transaction.commit();
    }
}
```

## 45.0 エンティティの削除
```
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
 
public class App {
    private static EntityManager manager;
 
    public static void main(String[] args) {
        ApplicationContext app = new
            AnnotationConfigApplicationContext(SampleEntityConfig.class);
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        manager = factory.createEntityManager();
 
        // make dummy
        makeDummyData();
         
        // delete entity
        deleteEntity(1L);
        deleteEntity(3L);
 
        // get list
        Query query = manager.createQuery("from SampleEntity");
        List list = query.getResultList();
        printList(list);
 
        System.out.println("...ok.");
    }
 
    public static void makeDummyData() { 略 }
    public static void printList(List list) { 略 }
     
    // delete entity
    public static void deleteEntity(long id) {
        SampleEntity entity = manager.find(SampleEntity.class, id);
        EntityTransaction transaction = manager.getTransaction();
        transaction.begin();
        manager.remove(entity);
        manager.flush();
        transaction.commit();
    }
}
```

## 46.0 JPQLによるクエリー文の基本
```
これでCRUDの基本操作は行えるようになりました。が、ちょっと追
記して置かなければいけないのは、基本中の基本である「Read」の
部分でしょう。

先ほどのサンプルでは、すべてのエンティティを取り出すサンプル
を挙げておきました。が、実際の処理では、もっと条件を細かく指
定してエンティティを検索する必要があるでしょう。

エンティティの取得は、Queryというクラスを作成しました。これ
は、インスタンスを作成する際に「from SampleEntity」といった
文を引数に用意していました。この文は、SQLのクエリー文と同じ働
きをするもので、「JPQL」と呼ばれます。ただしSQLとは若干書き
方が違います。とりあえず、エンティティの検索の基本的な書き方
だけでもここで説明しておきましょう。

●JPQLの検索の基本
from エンティティ where 条件式
SQLでもおなじみのwhere節を使えば、基本的な検索はほぼ行うこと
ができます。条件となる式は、等号などの比較演算子（=<>）を使っ
て記述します。

・IDが１のエンティティを取得
from SampleEntity where id = 1

・IDが2より大きいエンティティを取得
from SampleEntity where id > 2

また、テキストを検索する場合は、あいまい検索の「like」が使え
ます。%記号を使い、ワイルドカードの指定も行えます。

・nameが「K」ではじまるエンティティを取得
from SampleEntity where name like 'K%'

複数の条件式を設定したい場合は、「and」「or」が使えます。whereの後に、「式 and 式」といった具合に複数の式をand/orで
つなげていきます。

・idが10以上20以下のエンティティを取得
from SampleEntity where id >= 10 and id <= 20

――とりあえず、こうした基本的な検索の仕方がわかれば、初歩的な
データ検索の処理はだいたいできるようになるでしょう。実際に
JPQLのクエリー文を書いて動かしてみると面白いですよ
```

## 47.0 JpaRepositoryを利用する
```
前回、データベースアクセスの基本についてざっと説明をしまし
た。このとき、データの検索については「JPQL」と呼ばれるクエリ
ー文を使って行う、ということを説明たのを覚えているでしょうか。

この説明を読んで、「え゛～～～」と思わず唸った人もきっと大勢
いたことでしょう。SQLなんてものを見たくないがためにフレームワ
ークを使おうと思ったのに、まさかのSQLモドキが待ち構えていたと
は……。

が、しかし安心して下さい。Spring Frameworkには、もっとスマ
ートにデータ検索を行うための仕組みがちゃんと用意されていま
す。それは「JpaRepository」と呼ばれるものです。

JpaRepositoryは、インターフェイスです。インターフェイスに、
あらかじめ検索メソッドを定義しておくことで、メソッドを呼び出
すだけでスマートにデータ検索が行えるようになるのです。「で
も、そのメソッドの中では、JPQLを使って検索処理を書くんでしょ
……」と思った人、まぁちょっとだけ我慢して下さい。決して損には
なりませんから。

まずは、JpsRepositoryのインターフェイスを作ってしまいましょ
う。com.tuyano.libro.dbパッケージ内に、
「SampleEntityRepository.java」というファイル名でソースコ
ードファイルを作成して下さい。そして、下のリスト欄のようにイ
ンターフェイスを記述しましょう。

JpaRepositoryインターフェイスは、org.springframework.data.jpa.repositoryパッケージの
「JpaRepository」というインターフェイスを継承して作成しま
す。このインターフェイスは、総称型に対応しています。コードを
見ると、こんな形で書かれていることがわかるでしょう。
public interface 名前 extends JpaRepository <エンティテ
ィ , IDタイプ>
<>内には、エンティティのクラス名と、IDフィールドのタイプが指
定されます。注意したいのは、「基本型の場合は、ラッパークラス
を指定する」という点です。サンプルのSampleEntityクラスでは
long型をIDに指定していますので、ここでは<SampleEntity, 
Long>としてあるわけですね。

もう１つ、注意しておきたいのは、アノテーションです。クラスの
宣言前に、「@Repository」というアノテーションがつけられてい
ますね。これにより、このインターフェイスがJpaRepositoryであ
ることを示します。これは必ず付けておくようにしましょう。
package com.tuyano.libro.db;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface SampleEntityRepository
    extends JpaRepository <SampleEntity, Long> {
}
```

## 48.0 Bean設定ファイルを用意する
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:jpa="http://www.springframework.org/schema/data/jpa"
    xmlns:jdbc="http://www.springframework.org/schema/jdbc"
    xsi:schemaLocation="http://www.springframework.org/schema/beans 
        http://www.springframework.org/schema/beans/spring-beans.xsd 
        http://www.springframework.org/schema/jdbc 
        http://www.springframework.org/schema/jdbc/spring-jdbc.xsd  
        http://www.springframework.org/schema/data/jpa 
        http://www.springframework.org/schema/data/jpa/spring-jpa.xsd">
 
    <jdbc:embedded-database id="dataSource" type="H2" />
 
    <bean id="entityManagerFactory"
        class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <property name="jpaVendorAdapter">
            <bean class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter">
                <property name="generateDdl" value="true" />
            </bean>
        </property>
    </bean>
         
    <jpa:repositories base-package="com.tuyano.libro.db" />
     
    <bean id="transactionManager"
        class="org.springframework.orm.jpa.JpaTransactionManager">
        <property name="entityManagerFactory" ref="entityManagerFactory" />
    </bean>
</beans>
```

## 49.0 アプリケーションでJpaReposioryを利用する
```
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class App {
    private static EntityManager manager;
     
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("dbbean.xml");
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        manager = factory.createEntityManager();
         
        SampleEntityRepository repository = app.getBean(SampleEntityRepository.class);
 
        // make dummy
        makeDummyData();
         
        // get list
        List list = repository.findAll();
        printList(list);
         
        System.out.println("...ok.");
    }
 
    // create dummy entity data.
    public static void makeDummyData() {
        EntityTransaction transaction = manager.getTransaction();
        transaction.begin();
        manager.persist(new SampleEntity("tuyano", "syoda@tuyano.com"));
        manager.persist(new SampleEntity("hanako", "hanako@flower"));
        manager.persist(new SampleEntity("taro", "taro@yamada"));
        manager.persist(new SampleEntity("sachiko", "sachico@happy"));
        manager.flush();
        transaction.commit();
    }
 
    // print all entity.
    public static void printList(List list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
}
```

## 50.0 Bean設定クラスを利用する
```
package com.tuyano.libro.db;
 
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import javax.transaction.TransactionManager;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
 
@Configuration
@EnableJpaRepositories("com.tuyano.libro.db")
@EnableTransactionManagement
class SampleEntityConfig {
 
    @Bean
    public DataSource dataSource() {
        EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
        return builder.setType(EmbeddedDatabaseType.H2).build();
    }
 
    @Bean
    public EntityManagerFactory entityManagerFactory() {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(true);
 
        LocalContainerEntityManagerFactoryBean factory = new
            LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("com.tuyano.libro.db");
        factory.setDataSource(dataSource());
        factory.afterPropertiesSet();
 
        return factory.getObject();
    }
 
    @Bean
    protected JpaTransactionManager transactionManager
            (EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }
}
```

## 51.0 JpaRepositoryの標準メソッドについて
```
ここではSampleEntityRepositoryインターフェイスを用意しまし
たが、これの中身は空っぽのままでした。それでも、findAllとい
うメソッドを呼び出して、全エンティティを取り出すことができま
した。

継承元であるJpaRepositoryには、標準でいくつものメソッドが定
義されています。とりあえず、それらを使うことで、データベース
の基本的な操作が行えます。ここで、主なメソッドについて簡単に
まとめておきましょう。
findAll()
既に登場しました。全エンティティをまとめたListを返します。
getOne(《ID》)
IDを指定してエンティティを１つだけ取り出します。引数には、そ
のエンティティのIDに指定された型の値が入ります。
saveAndFlush( エンティティ )
引数に指定したエンティティをデータベースに保存します。
delete(《ID》)
引数に指定したIDのエンティティをデータベースから削除します。
count()
エンティティの数をint値で返します。

――検索についてはfindAllだけですが、エンティティの保存や削除
などのメソッドも揃っています。これらは、いちち「トランザクシ
ョン処理を開始して……」なんて面倒なことをする必要もありませ
ん。ただメソッドを呼び出すだけで簡単に保存や削除が行えます。

```

## 52.0 リポジトリにメソッドを追加する
```
// ********************
// ※SampleEntityRepository.java
// ********************
 
package com.tuyano.libro.db;
 
import java.util.List;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface SampleEntityRepository
        extends JpaRepository <SampleEntity, Long> {
 
    public List<SampleEntity> findByNameLike(String name);
    public List<SampleEntity> findByMailEndingWith(String mail);
}
```

## 53.0 リポジトリのメソッドを利用する
```
// ********************
// ※App.java
// ********************
 
package com.tuyano.libro.db;
 
import java.util.List;
 
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class App {
    private static EntityManager manager;
 
    public static void main(String[] args) {
        //ApplicationContext app = new 
            AnnotationConfigApplicationContext(SampleEntityConfig.class);
        ApplicationContext app = new ClassPathXmlApplicationContext("dbbean.xml");
 
        EntityManagerFactory factory = app.getBean(EntityManagerFactory.class);
        manager = factory.createEntityManager();
        makeDummyData();
         
        // get repository
        SampleEntityRepository repository = app.getBean(SampleEntityRepository.class);
         
        // get list
        List list1 = repository.findByNameLike("%ko");
        System.out.println("*Find By Name*");
        printList(list1);
        List list2 = repository.findByMailEndingWith(".com");
        System.out.println("*Find By Mail*");
        printList(list2);
         
        System.out.println("...ok.");
    }
 
    // create dummy entity data.
    public static void makeDummyData() {
        EntityTransaction transaction = manager.getTransaction();
        transaction.begin();
        manager.persist(new SampleEntity("tuyano", "syoda@tuyano.com"));
        manager.persist(new SampleEntity("hanako", "hanako@flower.uk"));
        manager.persist(new SampleEntity("taro", "taro@yamada.jp"));
        manager.persist(new SampleEntity("sachiko", "sachico@happy.com"));
        manager.flush();
        transaction.commit();
    }
 
    // print all entity.
    public static void printList(List list) { 略 }
}
```

## 54.0 JpaRepositoryのメソッド命名規則について
```
JpaRepositoryでは、メソッド名の名づけ方さえわかれば、必要な
メソッドをささっと書いて追加できてしまいます。処理は一切必要
なし。ただメソッドの宣言文を書くだけです。ただし、「あらかじ
め決められたルールに従ってきちんとメソッド名をつけてあれば」
です。適当に名づけただけでは、メソッドは自動生成されないので
す。

では、どのような形でメソッド名をつければいいのでしょうか。こ
こでその命名規則について簡単に整理しておきましょう。

●findBy○○
基本は、これです。「findBy」の後にエンティティのプロパティ名
を続けて記します。このプロパティ名は、最初の１文字目は大文字
にします。例えば、nameから検索するなら「findByName」ですし、
mailから探すなら「findByMail」となるわけです。

これ以降は、この基本形である「findBy○○」の後に続けて書くもの
になります。

●Like/NotLike
「あいまい検索」に関するものです。Likeをつければ、引数に指定
したテキストを含むものを検索します。またNotLikeをつけると、
引数のテキストを含まないものを検索します。「findByNameLike」
なら、nameから引数のテキストをあいまい検索する、というわけで
す。

●StartingWith/EndingWith
テキストの値で、引数に指定したテキストで始まるもの、あるいは
終わるものを検索するためのものです。「findByNameStartingWith("A")」
なら、nameの値が"A"で始まる
ものを検索します。

●IsNull/IsNotNull
値がnullのもの、あるいはnullでないものを検索します。引数は不
要です。「findByNameIsNull()」なら、nameの値がnullのものだ
けを検索します。

●True/False
真偽値の値で、trueのもの、あるいはfalseのものを検索します。
引数は不要。「findByCheckTrue()」なら、checkという項目が
trueのものだけを検索します。

●Before/After
日時の値で使うものです。引数に指定した値より前のもの、あるい
は後のものを検索します。「findByCreateBefore(new Date())」
とすれば、createという項目の値が現在より前のものだけを検索し
ます（createがDateだった場合）。

●LessThan/GreaterThan
数値の値で使います。その項目の値が引数より小さい、あるいは大
きいものを検索します。「findByAgeLessThan(20)」なら、ageの
値が20より小さいものを検索します。

●Between
２つの値を引数に持ち、その２つの値の間のものを検索します。例
えば、「findByAgeBetween(10,20)」とすれば、ageの値が10以上
20以下のものを検索します。数値に限らず、日時の項目などでも使
えます。


――この他にもまだありますが、とりあえずこれらが使えれば、基本
的な検索はだいたいできるようになるでしょう。JpaRepositoryを
使いこなせるようになれば、ほとんどノンコーディングでさまざま
なデータ検索ができるようになります。非常に簡単ですので、サン
プルをベースにいろいろと試してみてください
```

## 55.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLv2K4G35jI5thkNgRx24?alt=media&token=5ec26c14-99a4-4f1a-8a78-e7cc4b9bc68f
