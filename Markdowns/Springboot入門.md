Springboot入門
===
* knowledgeid: -LdLtODpcc-J83q1aU5f
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 JSONを返す
```
Spring Boot を使って、サーバサイドから JSON を返却する方法を紹介します。
次の URL にリクエストすると、
http://localhost:8080/hello
次のレスポンスを返す例を書いていきます。
{&quot;message&quot;:&quot;Hello, World!&quot;}
```
## 2.0 環境・ツール
```
JDK 1.8 以上
Maven 3.0 以上（or Gradle 等）
```
## 3.0 ビルドファイルの作成
```

Maven の XML を作成します。アプリのルートディレクトリは gssb としています。
gssb/pom.xml</p>
<p><project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion></p>
<p>  <groupId>com.github.mamorum</groupId>
  <artifactId>gssb</artifactId>
  <version>1.0.0</version></p>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.1.RELEASE</version>
  </parent>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
  </dependencies>

  <properties>
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
  </properties>

<p>  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
</project>

```
## 4.0 コントローラの作成
```

gssb/src/main/java/gssb/controller/HelloController.java
package gssb.controller;</p>
<p>import java.util.Collections;
import java.util.Map;</p>
<p>import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;</p>
<p>@RestController  // JSON を返すコントローラに付与。
public class HelloController {</p>
<p>  // リクエスト /hello に対して実行されるメソッド。
  @RequestMapping(&quot;/hello&quot;)
  public Map&lt;String, String&gt; hello() {
    return Collections.singletonMap(&quot;message&quot;, &quot;Hello, World!&quot;);
  }
}

```
## 5.0 起動クラスの作成
```

gssb/src/main/java/gssb/App.java
package gssb;</p>
<p>import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;</p>
<p>@SpringBootApplication
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}

```
## 6.0 起動と確認
```

gssb &gt; mvn spring-boot:run
（省略）
・・・Started App in 3.865 seconds (JVM running for 8.989)</p>
<p>http://localhost:8080/hello にアクセスして、冒頭の JSON が返ってくれば成功です。

```
## 7.0 静的コンテンツを返す
```
Spring Boot の Webアプリで、サーバサイドから静的コンテンツ
（html, js, css, png, etc）を返却する方法を書いていきます。
```
## 8.0 HTML の作成
```

gssb/src/main/resources/public/index.html
&lt;!DOCTYPE html&gt;</p>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Index Page</title>
</head>
<body>
<p>Hello, World.</p>
</body>
</html>

<p>静的コンテンツは、デフォルトだと src/main/resources/public
（or src/main/resources/static）に置くと公開されます。

```
## 9.0 起動と確認
```

gssb &gt; mvn spring-boot:run</p>
<p>ブラウザで http://localhost:8080/index.html 
を開いて、次のように表示されれば成功です。

```
## 10.0 ディレクトリ階層とＵＲＬ
```
静的コンテンツは、ディレクトリ階層を作って公開することもできます。
src/main/resources/public/
  - index.html
  - css/
    - style.css
  - js/
    - main.js
上の例だと、ディレクトリ css, js の資源は、
http://localhost:8080/css/style.css,
 http://localhost:8080/js/main.js で公開されます。
```
## 11.0 jQueryでJSONを受信
```

gssb/src/main/resources/public/jquery-ajax.html
&lt;!DOCTYPE html&gt;</p>
<p><html lang="ja"></p>
<p><head></p>
<p><meta charset="utf-8"></p>
<p><meta http-equiv="X-UA-Compatible" content="IE=edge"></p>
<p><meta name="viewport" content="width=device-width, initial-scale=1"></p>
<p><title>Hello jQuery</title>
</head></p>
<p><body></p>
<p><div>
  <span class="label">Message : </span>
  <span class="message"></span>
</div>
</body></p>
<p><script src="https://code.jquery.com/jquery-1.12.1.min.js"></script></p>
<p><script type="text/javascript">
// JSON を取得して .message に表示。
$(function() {
  $.ajax({
    url: &#39;/hello&#39;,
    method: &#39;get&#39;,
    cache: false
  }).then(function(data) {
    $(&#39;.message&#39;).text(data.message);
  });
});
</script>
</html>

```
## 12.0 起動と確認
```

gssb &gt; mvn spring-boot:run</p>
<p>ブラウザで http://localhost:8080/jquery-ajax.html にアクセスして、
次のように表示されれば成功です。
Message : Hello, World!

```
## 13.0 バリデーションをする
```
Spring Boot の Webアプリで、バリデーション（入力値検証）をする方法
を書いていきます。バリデーションには、javax.validation や Hibernate 
Validator のアノテーションを使います。
```
## 14.0 コントローラの作成
```

gssb/src/main/java/gssb/controller/ValidationController.java
package gssb.controller;</p>
<p>import javax.validation.Valid;
import javax.validation.constraints.Size;</p>
<p>import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;</p>
<p>@RestController
public class ValidationController {</p>
<p>  @RequestMapping(value=&quot;/address&quot;, method=RequestMethod.POST)
  public Address create(@Valid @RequestBody Address address) {
    return address;
  }</p>
<p>  public static class Address {</p>
@NotEmpty
@Size(min=7, max=7)
public String zip;

@NotEmpty
public String address;
<p>  }
}

```
## 15.0 起動と確認
```

gssb &gt; gradle bootRun</p>
<p>正常系
入力値（リクエストの JSON）に問題がない場合、コントローラは入力値をそのまま返します。
確認コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl http://localhost:8080/address -H &quot;Content-Type: application/json&quot; -d &quot;{\&quot;zip\&quot;:\&quot;1234567\&quot;, \&quot;address\&quot;:\&quot;Japan\&quot;}&quot; -X POST
結果
{&quot;zip&quot;:&quot;1234567&quot;,&quot;address&quot;:&quot;Japan&quot;}</p>
<p>バリデーションエラー
「zip を 6桁」「address を空文字」にして、リクエストを送ってみます。
確認コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl http://localhost:8080/address -H &quot;Content-Type: application/json&quot; -d &quot;{\&quot;zip\&quot;:\&quot;123456\&quot;, \&quot;address\&quot;:\&quot;\&quot;}&quot; -X POST
結果
{&quot;timestamp&quot;:1469434038414,&quot;status&quot;:400,&quot;error&quot;:&quot;Bad Request&quot;,&quot;exception&quot;:&quot;org.springframework.web.bind.MethodArgumentNotValidException&quot;,&quot;errors&quot;:[{&quot;codes&quot;:[&quot;NotEmpty.address.address&quot;,&quot;NotEmpty.address&quot;,&quot;NotEmpty&quot;],&quot;arguments&quot;:[{&quot;codes&quot;:[&quot;address.address&quot;,&quot;address&quot;],&quot;arguments&quot;:null,&quot;defaultMessage&quot;:&quot;address&quot;,&quot;code&quot;:&quot;address&quot;}],&quot;defaultMessage&quot;:&quot;may not be empty&quot;,&quot;objectName&quot;:&quot;address&quot;,&quot;field&quot;:&quot;address&quot;,&quot;rejectedValue&quot;:&quot;&quot;,&quot;bindingFailure&quot;:false,&quot;code&quot;:&quot;NotEmpty&quot;},{&quot;codes&quot;:[&quot;Size.address.zip&quot;,&quot;Size.zip&quot;,&quot;Size&quot;],&quot;arguments&quot;:[{&quot;codes&quot;:[&quot;address.zip&quot;,&quot;zip&quot;],&quot;arguments&quot;:null,&quot;defaultMessage&quot;:&quot;zip&quot;,&quot;code&quot;:&quot;zip&quot;},7,7],&quot;defaultMessage&quot;:&quot;size must be between 7 and 7&quot;,&quot;objectName&quot;:&quot;address&quot;,&quot;field&quot;:&quot;zip&quot;,&quot;rejectedValue&quot;:&quot;123456&quot;,&quot;bindingFailure&quot;:false,&quot;code&quot;:&quot;Size&quot;}],&quot;message&quot;:&quot;Validation failed for object=&#39;address&#39;. Errorcount: 2&quot;,&quot;path&quot;:&quot;/address&quot;}
正常系とは違う JSON が返ってきました。よく見ると、エラーは２つ（Errorcount: 2）で、zip（size must be between 7 and 7）と address（may not be empty）
のエラー情報が確認できます。

```
## 16.0 Mustacheを使う
```
Spring Boot の Webアプリで、テンプレートエンジンの Mustache を使う方法
を書いてみようと思います。Mustache で HTML をレンダリングして、レスポンス
として返してみます。
pom.xml
  &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-mustache&lt;/artifactId&gt;
    &lt;/dependency&gt;
```
## 17.0 コントローラの作成
```

package gssb.controller;</p>
<p>import java.util.Date;
import java.util.Map;</p>
<p>import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;</p>
<p>@Controller
public class MstController {</p>
<p>  @RequestMapping(&quot;/hello-mst&quot;)
  public String hello(
    @RequestParam(defaultValue=&quot;World&quot;) String name,
    Map&lt;String, Object&gt; model
  ) {
    model.put(&quot;name&quot;, name);
    model.put(&quot;date&quot;, new Date());
    return &quot;hello-mst&quot;;
  }
}

```
## 18.0 画面の作成
```

gssb/src/main/resources/templates/hello-mst.html
&lt;!DOCTYPE html&gt;</p>
<p><html lang="ja"></p>
<p><head></p>
<p><meta charset="utf-8"></p>
<p><meta http-equiv="X-UA-Compatible" content="IE=edge"></p>
<p><meta name="viewport" content="width=device-width, initial-scale=1"></p>
<p><title>Hello Mustache</title>
</head></p>
<p><body></p>
<p><div>
  <p><b>Message:</b> Hello, {{name}}</p>
  <p><b>Date:</b> {{date}}</p>
</div>
</body>
</html>

```
## 19.0 起動と確認
```

gssb &gt; mvn spring-boot:run</p>
<p>ブラウザで http://localhost:8080/hello-mst にアクセスすると、次のように表示されます。
Message: Hello, World</p>
<p>Date: Fri Apr 07 14:11:33 JST 2017
リクエストパラメータをつける http://localhost:8080/hello-mst?name=Tom と、
次のように表示されます。
Message: Hello, Tom</p>
<p>Date: Fri Apr 07 14:12:12 JST 2017

```
## 20.0 ファイルアップロード
```

gssb/src/main/java/gssb/controller/FileUploadController.java</p>
<p>package gssb.controller;</p>
<p>import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;</p>
<p>import javax.servlet.http.HttpServletResponse;</p>
<p>import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;</p>
<p>@RestController
public class FileUploadController {</p>
<p>  // 引数名 file は、ファイルのリクエストパラメータ名と一致させる。
  @RequestMapping(value=&quot;/upload&quot;, method=RequestMethod.POST)
  public void handle(
    HttpServletResponse response,
    @RequestParam MultipartFile file
  ){
    // ファイルが空の場合は HTTP 400 を返す。
    if (file.isEmpty()) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      return;
    }
    // アップロードされたファイルを保存。
    try {
      BufferedInputStream in =
        new BufferedInputStream(file.getInputStream());
      BufferedOutputStream out =
        new BufferedOutputStream(
          new FileOutputStream(file.getOriginalFilename()));
      FileCopyUtils.copy(in, out);
    } catch (IOException e) {
      throw new RuntimeException(&quot;Error uploading file.&quot;, e);
    }
  }
}

```
## 21.0 画面の作成
```

gssb/src/main/resources/public/file-upload.html</p>
<p>&lt;!DOCTYPE html&gt;</p>
<p><html lang="ja"></p>
<p><head></p>
<p><meta charset="utf-8"></p>
<p><meta http-equiv="X-UA-Compatible" content="IE=edge"></p>
<p><meta name="viewport" content="width=device-width, initial-scale=1"></p>
<p><title>File Upload</title>
</head></p>
<p><body></p>
<p><div>
  <form id="form" enctype="multipart/form-data">
    <p><input type="file" name="file"></p>
    <p><input type="button" id="upload" value="アップロード"></p>
  </form>
  <span id="result" style="padding:3px;"></span>
</div>
</body></p>
<p><script src="https://code.jquery.com/jquery-1.12.1.min.js"></script></p>
<p><script type="text/javascript">
$(function() {
  // アップロードボタンが押されたら実行。
  $(&#39;#upload&#39;).click(function() {
    var formData = new FormData(
      $(&#39;#form&#39;).get()[0]
    );
    $.ajax({
      url:&#39;/upload&#39;,
      method:&#39;post&#39;,
      data:formData,
      processData:false,
      contentType:false,
      cache: false
    }).done(function(data, status, jqxhr) {
      $(&#39;#result&#39;).text(&#39;結果：成功&#39;);
    }).fail(function(data, status, jqxhr) {
      $(&#39;#result&#39;).text(&#39;結果：失敗&#39;);
    }); 
  });
});
</script>
</html>

```
## 22.0 起動と確認
```

gssb &gt; mvn spring-boot:run</p>
<p>ブラウザで http://localhost:8080/file-upload.html を開いてアップロードすると、
下の画像のように「成功」と表示されます。ファイルは gssb ディレクトリの下に保存されます。

```
## 22.4 確認画像
* picturePath: https://cdn-ak.f.st-hatena.com/images/fotolife/m/mamorums/20160814/20160814222022.png
## 23.0 サービスクラスを使う
```
Spring Boot の Webアプリで、サービスクラスを使う方法を書きます。サービスクラスは
「ドメイン駆動設計 - Wikipedia」に登場するオブジェクトで、なんらかの処理（機能）を実装するものです。
```
## 24.0 サービスクラスの作成
```

gssb/src/main/java/gssb/service/RandomNumberService.java</p>
<p>package gssb.service;</p>
<p>import org.springframework.stereotype.Service;</p>
<p>@Service  // サービスクラスに付与。
public class RandomNumberService {</p>
<p>  // 整数0-9の乱数を返却。
  public int zeroToNine() {
    return (int) (Math.random() * 10);
  }
}
@Service が付いていると、アプリ起動時に SpringBoot（のコンテナ）が管理してくれます。
管理されたオブジェクトは、他のオブジェクトに設定（DI：Dependency Injection）
できたりします。

```
## 25.0 コントローラの作成
```

gssb/src/main/java/gssb/service/RandomNumberService.java
package gssb.controller;</p>
<p>import java.util.Collections;
import java.util.Map;</p>
<p>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;</p>
<p>import gssb.service.RandomNumberService;</p>
<p>@RestController
public class RandomNumberController {</p>
<p>  // サービスクラスがＤＩされる。
  @Autowired RandomNumberService random;</p>
<p>  // 乱数をレスポンスとして返却する。
  @RequestMapping(&quot;/random&quot;)
  public Map&lt;String, Integer&gt; random() {
    int value = random.zeroToNine();
    return Collections.singletonMap(&quot;value&quot;, value);
  }
}

```
## 26.0 起動と確認
```

gssb &gt; mvn spring-boot:run</p>
<p>http://localhost:8080/random にアクセスして、次のような JSON が返ってくれば成功です。
{&quot;value&quot;:0}

```
## 27.0 MessageSource を使う
```
Spring の MessageSource を使うと、メッセージをプロパティファイルから簡単に取得できます。
これから、Spring Boot で MessageSource を使う手順を書いていこうと思います。
```
## 28.0 application.properties の設定
```
次のように設定すると、メッセージを messages_ja.properties から取得できます（日本語環境でロケールが ja の場合）。
spring.messages.basename=messages
spring.messages.cache-seconds=-1
spring.messages.encoding=UTF-8
application.properties は Spring Boot の設定ファイルで、クラスパス直下に置くと読み込んでくれます。
```
## 29.0 messages_ja.properties の作成
```
ファイルを作成して、次のようにキーとメッセージを定義します。
key=こんにちは。
messages_ja.properties も、クラスパス直下に作成します。Gradle や Maven を使っている場合は、
src/main/resources に用意すれば大丈夫です。
あと、プロパティファイルは native2ascii しなくて大丈夫みたいです（Java SE 6 から。詳細は こちら。）。
```
## 30.0 MessageSource を定義
```

メッセージを取得したい Java クラスで、MessageSource をプロパティとして定義します。
そして @Autowired を付けて、Spring Boot に設定（DI）してもらいます。
@RestController
public class MsgController {</p>
@Autowired MessageSource msg;

// ・・・省略
<p>}
※ MessageSource を使うクラスは、Spring Boot で管理されている必要があります。
（@RestController, @Controller, @Service, @Component などが付いてれば大丈夫です。）

```
## 31.0 メッセージの取得
```
MessageSource のメソッド #getMessage を呼び出して、メッセージを取得します。
String message = msg.getMessage(&quot;key&quot;, null, Locale.JAPAN);
メソッドの第１引数はメッセージキー、第２引数は置換文字列（今回は指定なし）、
第３引数はロケールを指定します。
```
## 32.0 国際化・多言語対応について
```
上の例だと、ロケール（#getMessage の第３引数 Locale.JAPAN）が固定で、
常に日本語のメッセージが取得されます。
逆に、ローケルを可変にすれば、多言語に対応することができます。
やり方は色々あると思いますが、コントローラはメソッド引数に Local を
定義すると、Spring Boot が要求元のロケールを渡してくれるみたいです。
@RequestMapping(value=&quot;/msg&quot;, method=RequestMethod.GET)
public Map&lt;String, String&gt; msg(Locale locale) {
    String message = msg.getMessage(&quot;key&quot;, null, locale);
    return Collections.singletonMap(&quot;message&quot;, message);
}
このやり方だと、クライアントに応じてメッセージを可変にすることが
できます。ロケールに対応するメッセージは、別のプロパティファイル
（messages_en.properties など）で用意します。
```
## 33.0 FlywayでDBマイグレーション
```
lyway は、SQLベースのDBマイグレーションツールです。DBマイグレーションとは、
DBのデータを残したまま、テーブル作成やカラム変更等をすることです。
SpringBoot のアプリで Flyway を使うと、起動時にマイグレーション用のSQLが
実行されるようになります。
```
## 34.0 環境・ツール
```
JDK 1.8 以上
Maven 3.0 以上（or Gradle 等）
PostgreSQL（執筆時 9.6）
```
## 35.0 ビルドファイルの作成
```

gssb-rdb/pom.xml</p>
<p><project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion></p>
<p>  <groupId>com.github.mamorum</groupId>
  <artifactId>gssb-rdb</artifactId>
  <version>1.0.0</version></p>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.1.RELEASE</version>
  </parent>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.flywaydb</groupId>
      <artifactId>flyway-core</artifactId>
    </dependency>
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
    </dependency>
  </dependencies>

  <properties>
    &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
  </properties>

<p>  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
</project>

```
## 36.0 SQLファイルの作成
```

gssb-rdb/src/main/resources/db/migration/V1__Create.sql</p>
<p>create table memo (
  id serial primary key,
  text varchar(255) not null,
  version integer not null default 0,
  updated_time timestamp not null default current_timestamp,
  created_time timestamp not null default current_timestamp
);

```
## 37.0 設定ファイルの作成
```

gssb-rdb/src/main/resources/application.properties</p>
<p>spring.datasource.url=jdbc:postgresql://localhost:5432/spring
spring.datasource.username=spring
spring.datasource.password=spring
spring.datasource.driver-class-name=org.postgresql.Driver

```
## 38.0 起動クラスの作成
```

gssb-rdb/src/main/java/gssb/rdb/App.java</p>
<p>package gssb.rdb;</p>
<p>import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;</p>
<p>@SpringBootApplication
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class);
  }
}

```
## 39.0 起動と確認
```

gssb-rdb &gt; mvn spring-boot:run</p>
<p>・・・Started Application in 4.525 seconds (JVM running for 5.188)</p>
<p>spring=&gt; select relname as table_name from pg_stat_user_tables;</p>
<h2 id="-table_name">   table_name</h2>
<p> memo
 schema_version</p>
<pcode>`
```
## 40.0 JDBCでデータアクセス
```
SpringBoot の Webアプリで、JDBC 機能を使う方法を書いていきます。プログラム内に
 SQL（insert, select など）を書いてデータを操作します。
```
## 41.0 コントローラの作成
```

gssb-rdb/src/main/java/gssb/rdb/controller/JdbcMemoController.java
package gssb.rdb.controller;</p>
<p>import java.util.Collections;
import java.util.Map;</p>
<p>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;</p>
<p>@RestController
@RequestMapping(path=&quot;/jdbc/memos&quot;)
public class JdbcMemoController {</p>
<p>  @Autowired JdbcTemplate jdbc;</p>
<p>  // リクエストパラメータ text を insert。
  @RequestMapping(method=RequestMethod.POST)
  public Map&lt;String, Long&gt; create(@RequestParam String text) {
    Long id = jdbc.queryForObject(
      &quot;insert into memo (text) values (?) returning id&quot;,
      new Object[] {text},
      (rs, num) -&gt; rs.getLong(&quot;id&quot;)
    );
    return Collections.singletonMap(&quot;id&quot;, id);
  }</p>
<p>  // リクエストＵＲＬ末尾のＩＤと等しいデータを select。
  @RequestMapping(path=&quot;/{id}&quot;, method=RequestMethod.GET)
  public Map&lt;String, Memo&gt; read(@PathVariable Long id) {
    Memo memo = jdbc.queryForObject(
      &quot;select id, text from memo where id = ?&quot;,
      new Object[] {id},
      (rs, num) -&gt; new Memo(rs.getLong(&quot;id&quot;), rs.getString(&quot;text&quot;))
    );
    return Collections.singletonMap(&quot;memo&quot;, memo);
  }</p>
<p>  // JDBC で操作するエンティティ。
  public static class Memo {
    public Long id;
    public String name;
    public Memo(Long id, String name) {
      this.id = id;
      this.name = name;
    }
  }
}

```
## 42.0 起動と確認
```

gssb-rdb &gt; mvn spring-boot:run</p>
<p>メモの作成（insert）
curl http://localhost:8080/jdbc/memos -X POST -d &quot;text=Test&quot;</p>
<p>メモの検索（select）
curl http://localhost:8080/jdbc/memos/1</p>
<pcode>`
```
## 43.0 JPAでデータアクセス
```
SpringBoot の Webアプリで、JPA を使う方法を書いていきます。
JPA を使うと、SQL を書かずにデータを操作することができます。
```
## 44.0 ドメイン（エンティティ）の作成
```

gssb-rdb/src/main/java/gssb/rdb/model/Memo.java
package gssb.rdb.model;</p>
<p>import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;</p>
<p>import org.hibernate.validator.constraints.NotEmpty;</p>
<p>@Entity    // JPAエンティティに必要。
public class Memo extends TimestampEntity {</p>
<p>  // データ型 serial（PostgreSQL）。
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  public long id;</p>
<p>  @NotEmpty
  public String text;</p>
<p>  @Version
  public long version;<br>}

```
## 45.0 親クラス
```

gssb-rdb/src/main/java/gssb/rdb/model/TimestampEntity.java
package gssb.rdb.model;</p>
<p>import java.sql.Timestamp;
import java.util.Date;</p>
<p>import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;</p>
<p>@MappedSuperclass    // JPAエンティティの親に必要。
public abstract class TimestampEntity {</p>
<p>  public Timestamp updatedTime;</p>
<p>  @Column(updatable=false)
  public Timestamp createdTime;</p>
<p>  @PrePersist
  public void prePersist() {
    Timestamp ts = new Timestamp((new Date()).getTime());
    this.createdTime = ts;
    this.updatedTime = ts;
    }</p>
<p>  @PreUpdate
  public void preUpdate() {
    this.updatedTime = new Timestamp((new Date()).getTime());
  }
}

```
## 46.0 リポジトリの作成
```

gssb-rdb/src/main/java/gssb/rdb/repository/MemoRepository.java
package gssb.rdb.repository;</p>
<p>import org.springframework.data.repository.CrudRepository;</p>
<p>import gssb.rdb.model.Memo;</p>
<p>public interface MemoRepository extends CrudRepository&lt;Memo, Long&gt; {
  // 引数の text に一致するエンティティを取得。
  Iterable<Memo> findByText(String text);
}

```
## 47.0 コントローラの作成
```

gssb-rdb/src/main/java/gssb/rdb/controller/JpaMemoController.java
package gssb.rdb.controller;</p>
<p>import java.util.Collections;
import java.util.Map;</p>
<p>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;</p>
<p>import gssb.rdb.model.Memo;
import gssb.rdb.repository.MemoRepository;</p>
<p>@RestController
@RequestMapping(path=&quot;/jpa/memos&quot;)
public class JpaMemoController {</p>
<p>  @Autowired MemoRepository repository;</p>
<p>  // リクエストの JSON を Memo にバインドして insert。
  @RequestMapping(method=RequestMethod.POST)
  public Map&lt;String, Memo&gt; create(@RequestBody Memo memo) {
    Memo result = repository.save(memo);
    return Collections.singletonMap(&quot;memo&quot;, result);
  }</p>
<p>  // リクエストパラメータ text の内容と等しいデータを select。
  @RequestMapping(method=RequestMethod.GET)
  public Map&lt;String, Iterable<Memo>&gt; read(@RequestParam String text) {
    Iterable<Memo> result = repository.findByText(text);
    return Collections.singletonMap(&quot;memos&quot;, result);
  }
}

```
## 48.0 起動と確認
```

gssb-rdb &gt; mvn spring-boot:run</p>
<p>メモの作成
実行コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl -H &quot;Content-Type: application/json&quot; -d &quot;{\&quot;text\&quot;:\&quot;Data\&quot;}&quot; http://localhost:8080/jpa/memos -X POST
実行結果
{&quot;memo&quot;:{&quot;updatedTime&quot;:1464938295852,&quot;createdTime&quot;:1464938295852,&quot;id&quot;:3,&quot;text&quot;:&quot;Data&quot;,&quot;version&quot;:0}}</p>
<p>メモの検索
実行コマンド
curl http://localhost:8080/jpa/memos?text=Data
実行結果
{&quot;memos&quot;:[{&quot;updatedTime&quot;:1464938295852,&quot;createdTime&quot;:1464938295852,&quot;id&quot;:3,&quot;text&quot;:&quot;Data&quot;,&quot;version&quot;:0}]}</p>
<pcode>`
```
## 49.0 トランザクションの管理
```
Spring Boot の Webアプリで、RDB のトランザクションを管理する方法を書きます。
Spring Framework の アノテーション @Transactional を使って管理します。
```
## 50.0 コントローラの作成
```

gssb-rdb/src/main/java/gssb/rdb/controller/TxMemoController.java
package gssb.rdb.controller;</p>
<p>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;</p>
<p>import gssb.rdb.model.Memo;
import gssb.rdb.repository.MemoRepository;</p>
<p>@RestController
@RequestMapping(path=&quot;/tx&quot;)
public class TxMemoController {</p>
<p>  @Autowired MemoRepository repository;</p>
<p>  // メモを１つ作成して、その後でエラーを発生させるメソッド
  private void create(Memo memo) {
    repository.save(memo);
    repository.save(new Memo()); // text の NotEmpty でエラー。
  }</p>
<p>  // トランザクションを管理する。
  @Transactional
  @RequestMapping(path=&quot;/on/memos&quot;, method=RequestMethod.POST)
  public void txOn(@RequestBody Memo memo) {
    create(memo);
  }</p>
<p>  // トランザクションを管理しない。
  @RequestMapping(path=&quot;/off/memos&quot;, method=RequestMethod.POST)
  public void txOff(@RequestBody Memo memo) {
    create(memo);
  }
}

```
## 51.0 起動と確認
```

gssb-rdb &gt; mvn spring-boot:run</p>
<p>動作確認には curl と psql を使います。事前に psql で Memo テーブルを空にしておきます。
実行コマンド
spring=&gt; delete from memo;</p>
<p>トランザクション管理の確認
curl を使って、トランザクションを管理するメソッドを呼び出します。メモを１つ登録して、エラーが発生します。
実行コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl -H &quot;Content-Type: application/json&quot; -d &quot;{\&quot;text\&quot;:\&quot;Data\&quot;}&quot; http://localhost:8080/tx/on/memos -X POST
実行結果
{&quot;timestamp&quot;:1465023216817,&quot;status&quot;:500,&quot;error&quot;:&quot;Internal Server Error&quot;,&quot;exception&quot;:&quot;javax.validation....
トランザクションがロールバックされるので、メモは１つも登録されていないはずです。psql で確認します。</p>
<p>実行コマンド
spring=&gt; select * from memo;
実行結果
 id | text | version | updated_time | created_time
----+------+---------+--------------+--------------
(0 行)

```
## 52.0 mockitoで単体テスト
```
Spring Boot の Webアプリで、mockito を使って単体テストをする方法を書きます。
今回は、リポジトリクラスのモックを用意して、DB にアクセスせずにテストしてみます
```
## 53.0 テスト対象コントローラ
```

gssb-rdb/src/main/java/gssb/rdb/controller/JpaMemoController.java
@RestController
@RequestMapping(path=&quot;/jpa/memos&quot;)
public class JpaMemoController {</p>
<p>  @Autowired MemoRepository repository;</p>
<p>  // リクエストの JSON を Memo にバインドして insert。
  @RequestMapping(method=RequestMethod.POST)
  public Map&lt;String, Memo&gt; create(@RequestBody Memo memo) {
    Memo result = repository.save(memo);
    return Collections.singletonMap(&quot;memo&quot;, result);
  }

```
## 54.0 ビルドファイルの編集
```
pom.xml
 &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
追加すると、Spring Test, JUnit, AssertJ, Mockito 等が使えるようになります。
詳細は「Test scope dependencies - Spring Boot Reference」に記載されています。
```
## 55.0 テストクラスの作成
```

gssb-rdb/src/test/java/gssb/rdb/controller/JpaMemoControllerTest.java
package gssb.rdb.controller;</p>
<p>import static org.assertj.core.api.Assertions.<em>;
import static org.mockito.Mockito.</em>;
import java.util.Map;
import org.junit.Test;
import gssb.rdb.model.Memo;
import gssb.rdb.repository.MemoRepository;</p>
<p>public class JpaMemoControllerTest {</p>
<p>  @Test public void testCreate() {</p>
// 準備：テストデータ
Memo memo = new Memo();
memo.text = &quot;テスト&quot;;

// 準備：リポジトリのモック（戻り値を設定）
MemoRepository repo = mock(MemoRepository.class);
when(repo.save(memo)).thenReturn(memo);

// 準備：テスト対象（リポジトリのモックを設定）
JpaMemoController controller = new JpaMemoController();
controller.repository = repo;

// 実行
Map&lt;String, Memo&gt; result = controller.create(memo);

// 検証
assertThat(result.get(&quot;memo&quot;).text).isEqualTo(&quot;テスト&quot;);
<p>  }
}

```
## 56.0 テスト実行
```
Eclipse の場合、テストクラスをエディタで開いて「実行（JUnit テストとして実行）」
します。下のように、Maven コマンドでも実行できます。
gssb-rdb &gt; mvn test
```
## 57.0 アプリのjar作成
```

Spring Boot の Webアプリを、jar 形式でパッケージングして起動する方法を書きます。</p>
<p>Maven の package タスクで作成します。
gssb &gt; mvn package
jar は、target 配下に出力されます。</p>
<p>次のコマンドで起動します。
gssb &gt; java -jar target\gssb-1.0.0.jar

```
## 58.0 タスクのスケジューリング
```
Spring Boot のスケジューリング機能を使って、一定間隔で処理を実行する方法を書きます。
```
## 59.0 タスクの作成・有効化
```

gssb/src/main/java/gssb/App.java
package gssb;</p>
<p>import java.text.SimpleDateFormat;
import java.util.Date;</p>
<p>import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;</p>
<p>@SpringBootApplication
@EnableScheduling
public class App {</p>
<p>  private static final SimpleDateFormat
    fmt = new SimpleDateFormat(&quot;HH:mm:ss&quot;);</p>
<p>  // 5秒ごとに実行されるメソッド。
  @Scheduled(fixedRate = 5000)
  public void reportTime() {
    System.out.println(fmt.format(new Date()));
  }</p>
<p>  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}

```
## 60.0 起動・確認
```
次のコマンドでアプリを起動します。
gssb &gt; gradle bootRun
（省略）
・・・Started Application in 4.525 seconds (JVM running for 5.188)
17:22:41
17:22:46
17:22:51
（省略）
５秒ごとに時刻が表示されます。
```
## 61.0 アプリの管理やモニタリング
```
Spring Boot の Webアプリを、HTTP経由で管理したり、モニタリングする方法を書きます。
今回は、Spring Boot の Actuator という機能を使います。
```
## 62.0  ビルドファイルの編集
```

pom.xml</p>
<p> <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

```
## 63.0 起動と確認
```

次のコマンドでアプリを起動します。
gssb &gt; mvn spring-boot:run</p>
<p>http://localhost:8080/health にアクセスすると、システムの状態を受け取ることができます。
{&quot;status&quot;:&quot;UP&quot;}

```
## 64.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtODpcc-J83q1aU5fx66?alt=media&token=62ade9d6-a6f9-4ac6-ac0d-52c05e4b4910
