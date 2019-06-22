Springboot マニュアル
===
* knowledgeid: -LdLtODpcc-J83q1aU5f
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2
* language: jp
* knowledgetype: 1
* content_count: 65
* introduce: Springboot マニュアル

## 1.0 JSONを返す
```
Spring Boot を使って、サーバサイドから JSON を返却する方法を紹介します。
次の URL にリクエストすると、
http://localhost:8080/hello
次のレスポンスを返す例を書いていきます。
{"message":"Hello, World!"}
```

## 2.0 環境・ツール
```
JDK 1.8 以上
Maven 3.0 以上（or Gradle 等）
```

## 3.0 ビルドファイルの作成
```
Maven の XML を作成します。アプリのルートディレクトリは gssb としています。
gssb/pom.xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.github.mamorum</groupId>
  <artifactId>gssb</artifactId>
  <version>1.0.0</version>

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
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <build>
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
package gssb.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // JSON を返すコントローラに付与。
public class HelloController {

  // リクエスト /hello に対して実行されるメソッド。
  @RequestMapping("/hello")
  public Map<String, String> hello() {
    return Collections.singletonMap("message", "Hello, World!");
  }
}
```

## 5.0 起動クラスの作成
```
gssb/src/main/java/gssb/App.java
package gssb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}
```

## 6.0 起動と確認
```
gssb > mvn spring-boot:run
（省略）
・・・Started App in 3.865 seconds (JVM running for 8.989)

http://localhost:8080/hello にアクセスして、冒頭の JSON が返ってくれば成功です。
```

## 7.0 静的コンテンツを返す 
```
Spring Boot の Webアプリで、サーバサイドから静的コンテンツ
（html, js, css, png, etc）を返却する方法を書いていきます。
```

## 8.0 HTML の作成
```
gssb/src/main/resources/public/index.html
<!DOCTYPE html>
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

静的コンテンツは、デフォルトだと src/main/resources/public
（or src/main/resources/static）に置くと公開されます。
```

## 9.0 起動と確認
```
gssb > mvn spring-boot:run

ブラウザで http://localhost:8080/index.html 
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
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello jQuery</title>
</head>
<body>
<div>
  <span class="label">Message : </span>
  <span class="message"></span>
</div>
</body>
<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
<script type="text/javascript">
// JSON を取得して .message に表示。
$(function() {
  $.ajax({
    url: '/hello',
    method: 'get',
    cache: false
  }).then(function(data) {
    $('.message').text(data.message);
  });
});
</script>
</html>
```

## 12.0 起動と確認
```
gssb > mvn spring-boot:run

ブラウザで http://localhost:8080/jquery-ajax.html にアクセスして、
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
package gssb.controller;

import javax.validation.Valid;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {

  @RequestMapping(value="/address", method=RequestMethod.POST)
  public Address create(@Valid @RequestBody Address address) {
    return address;
  }
  
  public static class Address {
    
    @NotEmpty
    @Size(min=7, max=7)
    public String zip;
    
    @NotEmpty
    public String address;
  }
}
```

## 15.0 起動と確認
```
gssb > gradle bootRun

正常系
入力値（リクエストの JSON）に問題がない場合、コントローラは入力値をそのまま返します。
確認コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl http://localhost:8080/address -H "Content-Type: application/json" -d "{\"zip\":\"1234567\", \"address\":\"Japan\"}" -X POST
結果
{"zip":"1234567","address":"Japan"}

バリデーションエラー
「zip を 6桁」「address を空文字」にして、リクエストを送ってみます。
確認コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl http://localhost:8080/address -H "Content-Type: application/json" -d "{\"zip\":\"123456\", \"address\":\"\"}" -X POST
結果
{"timestamp":1469434038414,"status":400,"error":"Bad Request","exception":"org.springframework.web.bind.MethodArgumentNotValidException","errors":[{"codes":["NotEmpty.address.address","NotEmpty.address","NotEmpty"],"arguments":[{"codes":["address.address","address"],"arguments":null,"defaultMessage":"address","code":"address"}],"defaultMessage":"may not be empty","objectName":"address","field":"address","rejectedValue":"","bindingFailure":false,"code":"NotEmpty"},{"codes":["Size.address.zip","Size.zip","Size"],"arguments":[{"codes":["address.zip","zip"],"arguments":null,"defaultMessage":"zip","code":"zip"},7,7],"defaultMessage":"size must be between 7 and 7","objectName":"address","field":"zip","rejectedValue":"123456","bindingFailure":false,"code":"Size"}],"message":"Validation failed for object='address'. Errorcount: 2","path":"/address"}
正常系とは違う JSON が返ってきました。よく見ると、エラーは２つ（Errorcount: 2）で、zip（size must be between 7 and 7）と address（may not be empty）
のエラー情報が確認できます。
```

## 16.0 Mustacheを使う 
```
Spring Boot の Webアプリで、テンプレートエンジンの Mustache を使う方法
を書いてみようと思います。Mustache で HTML をレンダリングして、レスポンス
として返してみます。
pom.xml
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-mustache</artifactId>
    </dependency>
```

## 17.0 コントローラの作成
```
package gssb.controller;

import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MstController {

  @RequestMapping("/hello-mst")
  public String hello(
    @RequestParam(defaultValue="World") String name,
    Map<String, Object> model
  ) {
    model.put("name", name);
    model.put("date", new Date());
    return "hello-mst";
  }
}
```

## 18.0 画面の作成
```
gssb/src/main/resources/templates/hello-mst.html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello Mustache</title>
</head>
<body>
<div>
  <p><b>Message:</b> Hello, {{name}}</p>
  <p><b>Date:</b> {{date}}</p>
</div>
</body>
</html>
```

## 19.0 起動と確認
```
gssb > mvn spring-boot:run

ブラウザで http://localhost:8080/hello-mst にアクセスすると、次のように表示されます。
Message: Hello, World

Date: Fri Apr 07 14:11:33 JST 2017
リクエストパラメータをつける http://localhost:8080/hello-mst?name=Tom と、
次のように表示されます。
Message: Hello, Tom

Date: Fri Apr 07 14:12:12 JST 2017
```

## 20.0 ファイルアップロード
```
gssb/src/main/java/gssb/controller/FileUploadController.java

package gssb.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {
    
  // 引数名 file は、ファイルのリクエストパラメータ名と一致させる。
  @RequestMapping(value="/upload", method=RequestMethod.POST)
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
      throw new RuntimeException("Error uploading file.", e);
    }
  }
}
```

## 21.0 画面の作成
```
gssb/src/main/resources/public/file-upload.html

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>File Upload</title>
</head>
<body>
<div>
  <form id="form" enctype="multipart/form-data">
    <p><input type="file" name="file"></p>
    <p><input type="button" id="upload" value="アップロード"></p>
  </form>
  <span id="result" style="padding:3px;"></span>
</div>
</body>
<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
<script type="text/javascript">
$(function() {
  // アップロードボタンが押されたら実行。
  $('#upload').click(function() {
    var formData = new FormData(
      $('#form').get()[0]
    );
    $.ajax({
      url:'/upload',
      method:'post',
      data:formData,
      processData:false,
      contentType:false,
      cache: false
    }).done(function(data, status, jqxhr) {
      $('#result').text('結果：成功');
    }).fail(function(data, status, jqxhr) {
      $('#result').text('結果：失敗');
    }); 
  });
});
</script>
</html>
```

## 22.0 起動と確認
```
gssb > mvn spring-boot:run

ブラウザで http://localhost:8080/file-upload.html を開いてアップロードすると、
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
gssb/src/main/java/gssb/service/RandomNumberService.java

package gssb.service;

import org.springframework.stereotype.Service;

@Service  // サービスクラスに付与。
public class RandomNumberService {

  // 整数0-9の乱数を返却。
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
package gssb.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gssb.service.RandomNumberService;

@RestController
public class RandomNumberController {

  // サービスクラスがＤＩされる。
  @Autowired RandomNumberService random;
  
  // 乱数をレスポンスとして返却する。
  @RequestMapping("/random")
  public Map<String, Integer> random() {
    int value = random.zeroToNine();
    return Collections.singletonMap("value", value);
  }
}
```

## 26.0 起動と確認
```
gssb > mvn spring-boot:run

http://localhost:8080/random にアクセスして、次のような JSON が返ってくれば成功です。
{"value":0}
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
public class MsgController {

    @Autowired MessageSource msg;

    // ・・・省略
}
※ MessageSource を使うクラスは、Spring Boot で管理されている必要があります。
（@RestController, @Controller, @Service, @Component などが付いてれば大丈夫です。）
```

## 31.0 メッセージの取得
```
MessageSource のメソッド #getMessage を呼び出して、メッセージを取得します。
String message = msg.getMessage("key", null, Locale.JAPAN);
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
@RequestMapping(value="/msg", method=RequestMethod.GET)
public Map<String, String> msg(Locale locale) {
    String message = msg.getMessage("key", null, locale);
    return Collections.singletonMap("message", message);
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
gssb-rdb/pom.xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.github.mamorum</groupId>
  <artifactId>gssb-rdb</artifactId>
  <version>1.0.0</version>

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
    <java.version>1.8</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <build>
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
gssb-rdb/src/main/resources/db/migration/V1__Create.sql

create table memo (
  id serial primary key,
  text varchar(255) not null,
  version integer not null default 0,
  updated_time timestamp not null default current_timestamp,
  created_time timestamp not null default current_timestamp
);
```

## 37.0 設定ファイルの作成
```
gssb-rdb/src/main/resources/application.properties

spring.datasource.url=jdbc:postgresql://localhost:5432/spring
spring.datasource.username=spring
spring.datasource.password=spring
spring.datasource.driver-class-name=org.postgresql.Driver
```

## 38.0 起動クラスの作成
```
gssb-rdb/src/main/java/gssb/rdb/App.java

package gssb.rdb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class);
  }
}
```

## 39.0 起動と確認
```
gssb-rdb > mvn spring-boot:run

・・・Started Application in 4.525 seconds (JVM running for 5.188)

spring=> select relname as table_name from pg_stat_user_tables;
   table_name
----------------
 memo
 schema_version

```

## 40.0 JDBCでデータアクセス 
```
SpringBoot の Webアプリで、JDBC 機能を使う方法を書いていきます。プログラム内に
 SQL（insert, select など）を書いてデータを操作します。
```

## 41.0 コントローラの作成
```
gssb-rdb/src/main/java/gssb/rdb/controller/JdbcMemoController.java
package gssb.rdb.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/jdbc/memos")
public class JdbcMemoController {

  @Autowired JdbcTemplate jdbc;

  // リクエストパラメータ text を insert。
  @RequestMapping(method=RequestMethod.POST)
  public Map<String, Long> create(@RequestParam String text) {
    Long id = jdbc.queryForObject(
      "insert into memo (text) values (?) returning id",
      new Object[] {text},
      (rs, num) -> rs.getLong("id")
    );
    return Collections.singletonMap("id", id);
  }

  // リクエストＵＲＬ末尾のＩＤと等しいデータを select。
  @RequestMapping(path="/{id}", method=RequestMethod.GET)
  public Map<String, Memo> read(@PathVariable Long id) {
    Memo memo = jdbc.queryForObject(
      "select id, text from memo where id = ?",
      new Object[] {id},
      (rs, num) -> new Memo(rs.getLong("id"), rs.getString("text"))
    );
    return Collections.singletonMap("memo", memo);
  }

  // JDBC で操作するエンティティ。
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
gssb-rdb > mvn spring-boot:run

メモの作成（insert）
curl http://localhost:8080/jdbc/memos -X POST -d "text=Test"

メモの検索（select）
curl http://localhost:8080/jdbc/memos/1

```

## 43.0 JPAでデータアクセス 
```
SpringBoot の Webアプリで、JPA を使う方法を書いていきます。
JPA を使うと、SQL を書かずにデータを操作することができます。
```

## 44.0 ドメイン（エンティティ）の作成
```
gssb-rdb/src/main/java/gssb/rdb/model/Memo.java
package gssb.rdb.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

import org.hibernate.validator.constraints.NotEmpty;

@Entity    // JPAエンティティに必要。
public class Memo extends TimestampEntity {

  // データ型 serial（PostgreSQL）。
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  public long id;

  @NotEmpty
  public String text;

  @Version
  public long version;    
}
```

## 45.0 親クラス
```
gssb-rdb/src/main/java/gssb/rdb/model/TimestampEntity.java
package gssb.rdb.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@MappedSuperclass    // JPAエンティティの親に必要。
public abstract class TimestampEntity {

  public Timestamp updatedTime;

  @Column(updatable=false)
  public Timestamp createdTime;

  @PrePersist
  public void prePersist() {
    Timestamp ts = new Timestamp((new Date()).getTime());
    this.createdTime = ts;
    this.updatedTime = ts;
    }

  @PreUpdate
  public void preUpdate() {
    this.updatedTime = new Timestamp((new Date()).getTime());
  }
}
```

## 46.0 リポジトリの作成
```
gssb-rdb/src/main/java/gssb/rdb/repository/MemoRepository.java
package gssb.rdb.repository;

import org.springframework.data.repository.CrudRepository;

import gssb.rdb.model.Memo;

public interface MemoRepository extends CrudRepository<Memo, Long> {
  // 引数の text に一致するエンティティを取得。
  Iterable<Memo> findByText(String text);
}
```
## 47.0 コントローラの作成
```
gssb-rdb/src/main/java/gssb/rdb/controller/JpaMemoController.java
package gssb.rdb.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import gssb.rdb.model.Memo;
import gssb.rdb.repository.MemoRepository;

@RestController
@RequestMapping(path="/jpa/memos")
public class JpaMemoController {

  @Autowired MemoRepository repository;

  // リクエストの JSON を Memo にバインドして insert。
  @RequestMapping(method=RequestMethod.POST)
  public Map<String, Memo> create(@RequestBody Memo memo) {
    Memo result = repository.save(memo);
    return Collections.singletonMap("memo", result);
  }

  // リクエストパラメータ text の内容と等しいデータを select。
  @RequestMapping(method=RequestMethod.GET)
  public Map<String, Iterable<Memo>> read(@RequestParam String text) {
    Iterable<Memo> result = repository.findByText(text);
    return Collections.singletonMap("memos", result);
  }
}
```

## 48.0 起動と確認
```
gssb-rdb > mvn spring-boot:run

メモの作成
実行コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl -H "Content-Type: application/json" -d "{\"text\":\"Data\"}" http://localhost:8080/jpa/memos -X POST
実行結果
{"memo":{"updatedTime":1464938295852,"createdTime":1464938295852,"id":3,"text":"Data","version":0}}

メモの検索
実行コマンド
curl http://localhost:8080/jpa/memos?text=Data
実行結果
{"memos":[{"updatedTime":1464938295852,"createdTime":1464938295852,"id":3,"text":"Data","version":0}]}

```

## 49.0 トランザクションの管理 
```
Spring Boot の Webアプリで、RDB のトランザクションを管理する方法を書きます。
Spring Framework の アノテーション @Transactional を使って管理します。
```

## 50.0 コントローラの作成
```
gssb-rdb/src/main/java/gssb/rdb/controller/TxMemoController.java
package gssb.rdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import gssb.rdb.model.Memo;
import gssb.rdb.repository.MemoRepository;

@RestController
@RequestMapping(path="/tx")
public class TxMemoController {

  @Autowired MemoRepository repository;

  // メモを１つ作成して、その後でエラーを発生させるメソッド
  private void create(Memo memo) {
    repository.save(memo);
    repository.save(new Memo()); // text の NotEmpty でエラー。
  }

  // トランザクションを管理する。
  @Transactional
  @RequestMapping(path="/on/memos", method=RequestMethod.POST)
  public void txOn(@RequestBody Memo memo) {
    create(memo);
  }

  // トランザクションを管理しない。
  @RequestMapping(path="/off/memos", method=RequestMethod.POST)
  public void txOff(@RequestBody Memo memo) {
    create(memo);
  }
}
```

## 51.0 起動と確認
```
gssb-rdb > mvn spring-boot:run

動作確認には curl と psql を使います。事前に psql で Memo テーブルを空にしておきます。
実行コマンド
spring=> delete from memo;

トランザクション管理の確認
curl を使って、トランザクションを管理するメソッドを呼び出します。メモを１つ登録して、エラーが発生します。
実行コマンド（※ JSON 内のエスケープ文字「\」は Windows で必要）
curl -H "Content-Type: application/json" -d "{\"text\":\"Data\"}" http://localhost:8080/tx/on/memos -X POST
実行結果
{"timestamp":1465023216817,"status":500,"error":"Internal Server Error","exception":"javax.validation....
トランザクションがロールバックされるので、メモは１つも登録されていないはずです。psql で確認します。

実行コマンド
spring=> select * from memo;
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
@RequestMapping(path="/jpa/memos")
public class JpaMemoController {

  @Autowired MemoRepository repository;

  // リクエストの JSON を Memo にバインドして insert。
  @RequestMapping(method=RequestMethod.POST)
  public Map<String, Memo> create(@RequestBody Memo memo) {
    Memo result = repository.save(memo);
    return Collections.singletonMap("memo", result);
  }
```

## 54.0 ビルドファイルの編集
```
pom.xml
 <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
追加すると、Spring Test, JUnit, AssertJ, Mockito 等が使えるようになります。
詳細は「Test scope dependencies - Spring Boot Reference」に記載されています。
```

## 55.0 テストクラスの作成
```
gssb-rdb/src/test/java/gssb/rdb/controller/JpaMemoControllerTest.java
package gssb.rdb.controller;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;
import java.util.Map;
import org.junit.Test;
import gssb.rdb.model.Memo;
import gssb.rdb.repository.MemoRepository;

public class JpaMemoControllerTest {

  @Test public void testCreate() {

    // 準備：テストデータ
    Memo memo = new Memo();
    memo.text = "テスト";

    // 準備：リポジトリのモック（戻り値を設定）
    MemoRepository repo = mock(MemoRepository.class);
    when(repo.save(memo)).thenReturn(memo);

    // 準備：テスト対象（リポジトリのモックを設定）
    JpaMemoController controller = new JpaMemoController();
    controller.repository = repo;

    // 実行
    Map<String, Memo> result = controller.create(memo);

    // 検証
    assertThat(result.get("memo").text).isEqualTo("テスト");
  }
}
```

## 56.0 テスト実行
```
Eclipse の場合、テストクラスをエディタで開いて「実行（JUnit テストとして実行）」
します。下のように、Maven コマンドでも実行できます。
gssb-rdb > mvn test
```

## 57.0 アプリのjar作成 
```
Spring Boot の Webアプリを、jar 形式でパッケージングして起動する方法を書きます。

Maven の package タスクで作成します。
gssb > mvn package
jar は、target 配下に出力されます。

次のコマンドで起動します。
gssb > java -jar target\gssb-1.0.0.jar
```

## 58.0 タスクのスケジューリング 
```
Spring Boot のスケジューリング機能を使って、一定間隔で処理を実行する方法を書きます。
```

## 59.0 タスクの作成・有効化
```
gssb/src/main/java/gssb/App.java
package gssb;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
@EnableScheduling
public class App {

  private static final SimpleDateFormat
    fmt = new SimpleDateFormat("HH:mm:ss");
  
  // 5秒ごとに実行されるメソッド。
  @Scheduled(fixedRate = 5000)
  public void reportTime() {
    System.out.println(fmt.format(new Date()));
  }
  
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}
```

## 60.0 起動・確認
```
次のコマンドでアプリを起動します。
gssb > gradle bootRun
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
pom.xml

 <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
```

## 63.0 起動と確認
```
次のコマンドでアプリを起動します。
gssb > mvn spring-boot:run

http://localhost:8080/health にアクセスすると、システムの状態を受け取ることができます。
{"status":"UP"}
```

## 64.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtODpcc-J83q1aU5fx66?alt=media&token=62ade9d6-a6f9-4ac6-ac0d-52c05e4b4910
