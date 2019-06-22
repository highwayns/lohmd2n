Openshift入門
===
* knowledgeid: -LdLvjsjW3CGLyxi3Qb2
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2
* language: jp
* knowledgetype: 8
* content_count: 26
* introduce: Openshift入門

## 1.0 準備
```
  このハンズオンの実行には構築済みのOpenShift Enterprise 3.2環境が必要です。Persistent Volumeは利用していません。
  利用者のPCにgitコマンドがインストールされている必要があります。GitHubまたはその他のGitホスティングサービスが必要です。
  ユーザは事前にocコマンドでログイン可能な状態にしておくか、もしくは全ユーザを解放するAllowポリシーの設定を行ってください。
  多人数で行う場合はDocker registryのディスクの空き容量に注意してください。
  GitHubとの連携を行うためには、OpenShift EnterpriseとGitHubのネットワークが相互通信可能である必要があります。つまり、インターネット上に構築されている必要があります。
  GitHub Enterpriseとの連携を行うためには、OpenShift EnterpriseとGitHub Enterpriseのネットワークが相互通信可能である必要があります。また、[Using self-signed SSL certificates](https://help.github.com/enterprise/11.10.340/admin/articles/using-self-signed-ssl-certificates/)の通りに'/etc/openshift/master/ca.crt'をGitHub Enterprise側にインストールする必要があります。
  OpenShiftクライアントバイナリであるocコマンドは[Red Hat Customer PortalのOpenShiftのダウンロードページ](https://access.redhat.com/downloads/content/290)からダウンロードできます。
```

## 2.0 OpenShiftとは
```
Dockerコンテナでアプリケーションを動作させるためのPaaS (Platform as a Service)基盤です。アプリケーションをDockerコンテナ上でビルドしてDockerイメージを作成し、Dockerコンテナとして動作させることができます。Dockerコンテナのスケジューリングを行うGoogleの[Kubernetes](http://kubernetes.io/)をベースに構築されています。

簡単なコマンド操作でアプリケーションを配置したり、複製したり、MySQLなどのデータベースを利用したりするなど、Dockerコンテナ群を自由にコントロールすることができます。

![OpenShift Overview](https://raw.githubusercontent.com/nekop/openshift-sandbox/master/docs/openshift-overview.png)

環境をセットアップして利用するのではなく、OpenShiftのようにビルド済みのDockerイメージをDocker実行環境へデプロイするモデルは現在はImmutable InfrastructureやBlue Green Deploymentの実現方法として注目を集めています。
```

## 3.0 ハンズオンシナリオの説明
```
 簡単なphpアプリケーションをGitHubに作成し、OpenShiftに登録します。
 OpenShift上でビルドを実行し、GitのソースコードからDockerイメージを作成してデプロイし、実行可能な状態にします。
 GitHubにpushされたタイミングで自動ビルドを行うように設定します。
 MySQLを利用するphpアプリケーションを作成します。
 OpenShift上で何が発生しているのか、ログやイベント、コンテナ内部を調べます。
 イメージをテスト環境や本番環境へリリースするなど、応用シナリオのデモを行います。
```

## 4.0 OpenShift Clientコマンド
```
OpenShift Clientコマンドは'oc'という単一の実行ファイルです。OpenShift Enterpriseのatomic-openshift-clients-redistributableパッケージに含まれているので、管理者の方がどこかのWebサーバなどに配置して利用者にダウンロードできるようにしてください。

また、利用者ではなく管理者が利用するコマンド'oadm'というコマンドもあります。マニュアルなどに'oadm'コマンド例が出てきた場合は、管理者作業を意味します。
```

## 5.0 ログイン
```
oc login MASTER_HOST[:MASTER_PORT]

ログアウトを行うにはoc logoutを実行します。

ログイン状態などのOpenShift関連の情報は'~/.kube/config'に保存されており、'oc config view'で同一の内容が確認できます。

TLS接続には'--certificate-authority'オプションに対応するca.crtを指定するか、無指定の場合insecureのまま接続するかどうかの選択肢が出ます。内部テスト利用などではinsecure接続を選択しても良いでしょう。
```

## 6.0 プロジェクト作成
```
プロジェクト名はOpenShift環境全体でユニークである必要がありますので、個人用プロジェクトは個人のidなどを名前に含めたほうが良いです(ex. 'tkimura-test-php')。また、OpenShiftの設計上、プロジェクト名は後からリネームすることはできません。プロジェクト情報をダンプして修正して取り込むことで、同一構成を新しい名前プロジェクトにすることは簡単にできます。

oc new-project PROJECT_NAME
```

## 7.0 アプリケーション作成
```
まずはgithubにアプリケーションのリポジトリを作成し、cloneしてください。'hello-php'というような名前が良いでしょう。アプリケーション名(リポジトリ名)は英字開始で、ダッシュ(ハイフン)以外の記号は利用しないでください。数字で開始したり、アンダーバーが含まれていると、OpenShiftやURLの仕様違反となる名前になってしまい、後のステップでエラーとなってしまうので注意してください。


git clone GIT_CLONE_URL

cloneが完了したら、最初のお約束であるHello Worldを配置します。

cd GIT_REPOSITORY_DIR
echo '<?php echo "Hello world"; ?>' > index.php
git add index.php
git commit -m 'Hello world'
git push

gitへpushしたらOpenShift上にアプリケーションを作成します。この'oc new-app'ではOpenShiftがgitのcloneを発行するため、sshなどの認証が必要なclone URLは利用しないでください。一般的にはhttpsのURLが認証なしのclone URLとなることが多いでしょう。認証も可能ですがこのハンズオンのスコープには含めていません。

oc new-app GIT_PUBLIC_CLONE_URL
oc expose service APP_NAME

'oc new-app'を実行するとビルドが開始され、成功するとDockerイメージがDocker registryにpushされます。DockerイメージがpushされるとImageStreamの更新トリガーが動作し、実行用podが再作成されてアプリケーションが実行されます。

'oc new-app'コマンドでは、gitリポジトリのファイルによって[利用言語を自動検出](https://docs.openshift.com/enterprise/3.2/dev_guide/new_app.html#language-detection)し、適切なビルダーイメージを割り当てます。今回のようにindex.phpがあるとPHPのビルダーイメージが利用されます。Webコンソールではこの機能はないため、自分でビルダーイメージを選択する必要があります。

'oc new-app'コマンドを実行すると、実際にはbc, dc, rc, is, svcという各種オブジェクト(後述します)と実行用podが作成されます。状態の確認には'oc status', 'oc get all'および'oc get events'を使用しますが、後述するWebコンソールのほうがCLIに慣れない最初のうちは特に見やすいので便利です。

ビルドが完了すると、以下のURLでアプリケーションにアクセスすることが可能になっているはずです。

http://APP_NAME-PROJECT_NAME.CLOUD_DOMAIN

'oc expose'を行うと、アプリケーションへアクセスするためのルーティング情報が生成されます。デフォルトでは'APP_NAME-PROJECT_NAME.CLOUD_DOMAIN'という形式のURLとなります。'--hostname'オプションで任意のURLに変更できるので、DNS設定と合わせて任意のURL、任意のドメインへのリクエストをOpenShiftでハンドルすることができます。
```

## 8.0 Webコンソール
```
ログインにも利用したOpenShiftのmasterサーバにはWebコンソールが付属しています。デフォルトでhttps, 8443ポートを利用するようになっています。ブラウザで開いてログインしてみましょう。

https://MASTER_HOST:8443/

Webコンソールでは構成がグラフィカルに表示されるようになっています。今はアプリケーションのみの単一構成なのであまり見どころはないのですが、アプリケーションのpodを増殖させたり、データベースなどを追加するとにぎやかになります。
```
## 9.0 基本的な概念
```
  Pod
    コンテナの入れ物であり、デプロイするユニットとなるKubernetesのオブジェクト。OpenShift上ではアプリケーションやMySQLなどのコンテナがそれぞれpodになる。
    [k8s Pod](https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/pods.md)
  Service (svc)
    pod群のIPアドレスを保持し、podへのアクセスポイントとなるKubernetesのオブジェクト
    [k8s Service](https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/services.md)
  Replication Controller (rs)
    podの数を管理して制御するKubernetesのオブジェクト
    [k8s Replication Controller](https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/replication-controller.md)
  Deployment Config (dc)
    デプロイ管理を行うOpenShiftのオブジェクト
  Build Config (bc)
    ビルド管理を行うOpenShiftのオブジェクト
  Image Stream (is)
    イメージ管理を行うOpenShiftのオブジェクト。タグはそれぞれ追記専用リスト(Stream)構造になっており、イメージの履歴を参照できる。イメージは実際にはDocker Registryに保存されているので、Image Streamはイメージを保持しているわけではなくイメージを参照するための情報のみを保持している。
  Route
    ルーター設定を行うOpenShiftのオブジェクト。OpenShiftのHAProxyルーターコンポーネントの設定情報を保持する。Routeを作成すると、OpenShift外部からサービスへURLアクセス可能になる。'oc expose'コマンドで作成できる。
```

## 10.0 基本的なコマンド
```
  'oc status'
  'oc get all'
  'oc get events'
  'oc get pod'
  'oc get RESOURCE_TYPE'
  'oc describe RESOURCE_TYPE RESOURCE_NAME'
  'oc get all -o yaml'
  'oc logs POD_NAME'
  'oc rsh POD_NAME'
  'oc delete RESOURCE_TYPE RESOURCE_NAME'
  'oc delete all,pvc --all' # プロジェクトの内容全消し
```
## 11.0 リソースのリスト
```
リソース名は最後に"s"をつけてもつけなくても動作します。いくつかのリソース名は名前が長いので省略形が用意されています。

'oc types'で全てのリストと説明が表示されます。

  pod
  build
  route
  service, svc
  buildconfig, bc
  deploymentconfig, dc
  replicationcontroller, rc
  imagestream, is
  persistentvolumeclaim, pvc
```
## 12.0 oc get allの出力
```
'oc get all'は以下のリソースをまとめて表示します。

  buildconfig
  build
  imagestream
  deploymentconfig
  replicationcontroller
  service
  pod
```

## 13.0 自動ビルドの設定
```
'oc describe bc BUILD_CONFIG_NAME'を実行してビルドコンフィグを参照すると、hookのURLが取得できます。このhookをGitHubのWebhookに設定したり、Webhook GenericのURLをgitのpost-updateなどのhookでcurl -X POSTで呼び出すことで自動的にビルドがトリガーされます。


$ oc describe bc hello-php
Name:			hello-php
Created:		28 seconds ago
Labels:			<none>
Latest Version:		1
Strategy:		Source
Image Reference:	ImageStreamTag openshift/php:latest
Source Type:		Git
URL:			https://github.com/nekop/hello-php
Output to:		hello-php:latest
Output Spec:		<none>
Webhook GitHub:		https://ose3.example.com:8443/oapi/v1/namespaces/hello-php/buildconfigs/hello-php/webhooks/g3igOAnHOjzENk7n6gQq/github
Webhook Generic:	https://ose3.example.com:8443/oapi/v1/namespaces/hello-php/buildconfigs/hello-php/webhooks/5VKy_GmzLooTDmDYw1bH/generic
Image Repository Trigger
  LastTriggeredImageID:	registry.access.redhat.com/openshift3/php-55-rhel7:latest
Builds:
  Name		Status		Duration	Creation Time
  hello-php-1 	running 	running for 1s 	2015-07-12 16:55:49 +0900 JST


GitHubのリポジトリのページから、'Settings' -> 'Webhooks & services' -> 'Add webhook'でWebhookの追加が行えます。

テストを行うにはいくつか空コミットを生成してpushします。gitで空コミットを作るには'git commit --allow-empty'を実行します。


git commit --allow-empty -m 'empty' && git push


OpenShiftはhookからブランチ名などを取得し、ビルド要否を判断して自動ビルドを行います。Webhookからのビルドでは、'oc describe build BUILD_NAME'や'oc describe isimage IMAGE'の出力にgitのcommit SHA-1値が含まれるようになります。
```

## 14.0 データベースの追加とテンプレート
```
データベースなどの追加ソフトウェアなどはテンプレートという機構で管理します。今回は'mysql-ephemeral'というテンプレートを利用します。

全ユーザが利用できるテンプレートは'openshift'プロジェクトに定義されています。以下のコマンドでテンプレートの一覧と、各テンプレートの情報を取得できます。


oc get template -n openshift
oc describe template mysql-ephemeral -n openshift

テンプレートから実際にオブジェクトを生成するには'oc new-app'コマンドを利用します。'oc new-app'コマンドは表向きの概念としてはアプリケーションを作る、というものでありコマンド名もそのようになっていますが、実際にはアプリケーションに必要なオブジェクト群を生成するコマンドです。

MySQLはデータベース名やユーザ名にハイフンは利用できないので注意してください。もし入力してしまってMySQLが起動しない場合は'oc edit dc hello-php-mysql'で修正でき、DeploymentConfigの変更トリガーはデフォルトで有効になっているので自動で再デプロイされます。


oc new-app --template=mysql-ephemeral --param=DATABASE_SERVICE_NAME=hello-php-mysql,MYSQL_DATABASE=hello,MYSQL_USER=user,MYSQL_PASSWORD=pass


テンプレートはデータベースの追加以外にも、任意の構成を簡単に作るための用途に幅広く利用できます。
```

## 15.0 データベースへの接続
```
phpアプリケーションからデータベースへ接続するためにはMySQLへの接続情報をphp側へ設定する必要があります。接続情報は上記の情報を渡せば良いのですが、'oc env --list'コマンドでも参照できます。


oc env dc hello-php-mysql --list


'oc env'コマンドを利用してphpアプリケーションへ接続情報を設定します。


oc env dc hello-php MYSQL_USER=user MYSQL_PASSWORD=pass MYSQL_DATABASE=hello


MySQLのホスト名が無いことに気付いたでしょうか。MySQLのサービスホスト名はKubernetesにより自動的に環境変数設定されます。サービス名を大文字にして'_SERVICE_HOST'を付与した環境変数に格納されています。今回はMySQLのサービス名は'hello-php-mysql'なので、'HELLO_PHP_MYSQL_SERVICE_HOST'となります。もし単純に'database'というサービス名にした場合は'DATABASE_SERVICE_HOST'になります。

'index.php'を作成したデータベースに接続するように変更します。

php
<?php

echo "<h1>Hello world</h1>";
$mysqli = new mysqli(getenv("HELLO_PHP_MYSQL_SERVICE_HOST"), getenv("MYSQL_USER"), getenv("MYSQL_PASSWORD"), getenv("MYSQL_DATABASE"));
if ($mysqli->connect_error) {
    exit($mysqli->connect_error);
} else {
    $mysqli->set_charset("utf8");
}
$result = $mysqli->query("select 1") or exit($mysqli->error());
echo var_dump($result->fetch_assoc());
$mysqli->close();

?>


メンテナンスなどのためのmysqlへのアクセスは以下の手順で行うことができます。


oc get pod
oc describe pod POD_NAME # IP取得
oc rsh POD_NAME
mysql -h HOSTNAME -u USERNAME -p


もしくは'oc port-forward'で自マシンと接続します。


oc port-forward -p POD_NAME  3306:3306
mysql -h 127.0.0.1 -P 3306 -u user -p


'oc rsh'でリモートのPaaSサーバ群のどこかに配置されているDockerコンテナのシェルを手元から簡単に起動できて操作できます。'oc rsh'の通信にはWebSocketが利用されています。

また、再度Webコンソールを開いてみてください。アプリケーションとデータベースが配置されているのが確認できます。
```
## 16.0 構成のテンプレート化
```
アプリケーションとデータベースをセットにしてテンプレート化して利用することにより、new-appで目的の構成をすぐセットアップする、ということも可能です。

たとえばこのハンズオンの内容は以下のコマンドで作成できます。

oc new-app https://raw.githubusercontent.com/nekop/hello-php/master/hello-php.yaml

既存のプロジェクトからテンプレートの雛形を作成するには、'oc export'コマンドを利用します。

oc export bc,dc,is,svc,pvc --as-template=hello-php > hello-php.yaml
```
## 17.0トラブルシューティング
```
ビルドに失敗した場合は'oc logs'でビルドPodのログを参照します。

oc get pod
oc logs BUILD_POD_NAME

デプロイに失敗した、もしくはデプロイは成功しているが正常に動いていない、という場合は'oc logs'で対象podのログを参照します。デプロイのリトライは'oc deploy --retry'で行うことができます。

oc logs POD_NAME
oc deploy DEPLOYMENT_CONFIG_NAME --retry

phpのpodではApache httpdが動作しており、'oc logs'でログを参照するとサーバ名の設定がされていないため以下の警告メッセージが見えますが無視してかまいません。OpenShift上では不要なものです。

AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 10.x.x.x. Set the 'ServerName' directive globally to suppress this message

ビルドやデプロイは'new-app'の直後などはタイミングの問題により失敗したりします。その場合は少し待ってから再実行すると成功します。

DockerイメージのpullやDockerコンテナのステータス変更などのイベントの一覧は'oc get events'で参照できます。

oc get events

コンテナの内部を調べたい場合は'oc rsh'を利用します。しかし、Dockerコンテナの中は通常最低限のツールのみがインストールされている状態ですので、あまりできることは多くありません。コンテナの中のファイルの確認などには便利です。

oc rsh POD_NAME

ハンズオン中に実際にトラブルが発生したものを例に挙げてフォローおよび解説する予定です。何もトラブルがなかったらごめんなさい。
```


## 18.0 チームでの開発環境、テスト環境、本番環境の管理
```
joe, aliceそしてbenの開発者が小さなphp/mysqlプロジェクト'hello-php'でチーム開発を行います。joeがプロジェクトを作成し、aliceとbenを管理者として登録します。チームのプロジェクトなので、特に個人名などは付与しません。

oc new-project hello"
oc project hello
oc policy add-role-to-user admin alice
oc policy add-role-to-user admin ben

joeがこのプロジェクトを構成していきます。もちろんaliceでもbenでもこの作業は可能です。

oc new-app http://github.example.jp/hello-php/hello-php
oc expose svc hello-php --hostname=hello.apps.example.jp

この後にWebhookで自動ビルドを設定します。これでGitのhello-phpのmasterブランチである開発バージョンは'hello-php.apps.example.jp'で常にビルドされて公開される状態になりました。masterブランチにpull requestがマージされて更新されるたびに開発バージョンがアップデートされて自動デプロイされます。

joe, alice, ben各個人はこのリポジトリをforkして、OpenShift上では個人のプロジェクトへ'new-app'を発行し、自動ビルドを設定します。各個人は各個人の環境で開発を行い、プロジェクトのgitリポジトリへPull Requestを送信します。

続いて本番環境を作成します。同じ手順でテスト環境、ステージング環境などを定義でき、開発環境から本番環境まで順次イメージをプロモーションするようなワークフローが作成できます。

![OpenShift Image Promotion](https://raw.githubusercontent.com/nekop/openshift-sandbox/wip/image-promotion.jpg)

環境のコピーは開発バージョンのDeploymentConfig, Serviceをexportして利用します。本番環境はビルドを行わないのでBuildConfigはありません。

oc export dc,svc -o yaml --as-template=hello > prod-hello.yaml

出力されたYAMLファイルの中に定義されている、デプロイするイメージのタグをlatestではなくprodへ変更します。

perl -i -pe 's/name: hello-php:latest/name: hello-php:prod/g' prod-hello.yaml

本番環境用prod-helloプロジェクトを作成し、helloプロジェクトからイメージをpullできるよう権限を付与してnew-appでオブジェクトを生成します。

oc new-project prod-hello
oc policy add-role-to-user system:image-puller system:serviceaccount:prod-hello:default -n hello
oc new-app -f prod-hello.yaml
oc expose svc hello-php --hostname=prod-hello.apps.example.jp

'oc describe is hello-php -n hello'を実行して、本番環境の'prod'タグを開発環境の適当なイメージに付与します。

oc tag hello/hello-php@sha256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx hello-php:prod

タグ付けを行うとデプロイが実行され、イメージは本番環境へとリリースされることになります。

この利用方法での'oc describe is'の出力例ですが、以下のようになります。devがv5、prodはv4がデプロイされています。この例では"v4"などの部分は読みやすいように書き換えてありますが、実際には64ケタのsha256値です。

$ oc describe is hello-php -n hello
Name:			hello-php
Created:		25 hours ago
Labels:			<none>
Docker Pull Spec:	172.30.55.101:5000/hello/hello-php

Tag     Spec                      Created       PullSpec
latest  library/hello-php:latest   2 hours ago  172.30.55.101:5000/hello/hello-php@sha256:v5
                                   7 hours ago  172.30.55.101:5000/hello/hello-php@sha256:v4
                                   7 hours ago  172.30.55.101:5000/hello/hello-php@sha256:v3
                                   9 hours ago  172.30.55.101:5000/hello/hello-php@sha256:v2
                                  25 hours ago  172.30.55.101:5000/hello/hello-php@sha256:v1
                                  25 hours ago  library/hello-php:latest

$ oc describe is hello-php -n prod-hello
Name:			hello-php
Created:		25 hours ago
Labels:			<none>
Docker Pull Spec:	172.30.55.101:5000/prod-hello/hello-php

Tag     Spec                      Created       PullSpec
prod    library/hello-php:latest   7 hours ago  172.30.55.101:5000/prod-hello/hello-php@sha256:v4
                                  25 hours ago  library/hello-php:latest
```


## 20.0 Dockerイメージのデプロイ
```
'oc new-app'では、ソースコードではなく一般的なDockerイメージを指定することもできます。

OpenShift環境では[セキュリティのためにデフォルトではUIDの利用に制限](https://docs.openshift.com/enterprise/3.2/admin_guide/manage_scc.html)があり、実行時にはランダムなUIDが割り当たります。そのため、Dockerfileで特定のユーザを作っていて特定のユーザでの動作を期待するようなDockerイメージや、USERを指定しておらずrootでの動作を前提としてしまっているイメージはそのままでは動作せず、実際にデプロイした場合はパーミッションエラーで起動しません。[Docker Hubのopenshiftユーザー](https://registry.hub.docker.com/repos/openshift/)でホストされているイメージはそのまま動作するように作られています。


oc new-app openshift/jenkins-1-centos
```

## 21.0 スケールとローリングアップデート
```
OpenShiftではアプリケーションコンテナを複数立ち上げることができます。接続はOpenShiftに含まれる'router'コンポーネントによって、接続数の少ないコンテナへロードバランスされます。'router'コンポーネントは[HAProxy](http://www.haproxy.org/)によって実装されており、'leastconn'ロードバランスがデフォルトで適用されるようになっています。


oc scale rc REPLICATION_CONFIG_NAME --replicas=2

負荷に応じて自動的にスケールを制御する[オートスケール](https://docs.openshift.com/enterprise/3.2/dev_guide/pod_autoscaling.html)というものもあります。

OpenShiftのpodのデプロイ方法は2つ'Rolling'と'Recreate'があり、デフォルトは'Rolling'です。'Rolling'では新しいpodを生成してから古いpodを停止する、というのを1つずつ行うローリングアップデートであり、ベーシックな無停止リリースが可能となっています。

oc edit dc DEPLOYMENT_CONFIG_NAME

'Recreate'では全てのpodを停止してから、新しいpodをデプロイします。
```

## 22.0 ロールバック
```
まずはロールバック対象となるデプロイ名を探します。

oc describe dc DEPLOYMENT_CONFIG_NAME

ロールバック対象のデプロイ名を指定して'oc rollback'を発行します。発行すると、指定されたデプロメントと同じ内容の新しいデプロイメントが作成され、自動デプロイトリガーが無効化されます。

oc rollback DEPLOYMENT_CONFIG_NAME

問題が解決したあと、自動デプロイトリガーを有効化するには以下を発行します。

oc deploy DEPLOYMENT_CONFIG_NAME --enable-triggers
```


## 23.0 障害復旧
```
OpenShiftはサービスへの接続を監視しており、機能不全となっているコンテナは自動的に再起動されます。pod内のプロセスを停止したり、podを削除したりしても短時間で復旧します。


oc delete pod POD_NAME
oc rsh POD_NAME kill 1
```

## 24.0 OSおよびミドルウェアのパッチ
```
openshiftプロジェクトのImageStreamに定義されているビルダーイメージにはミドルウェアやOSが含まれています。これらのミドルウェアやOSにセキュリティ修正などの変更がある場合には、'oc -import-image'を実行して新しいバージョンのイメージを取得します。関連するイメージで'latest'タグを参照しているアプリケーションなどは全て再ビルドされてデプロイされます。


$ oc get is -n openshift
NAME                                  DOCKER REPO                                                                    TAGS                               UPDATED
fis-java-openshift                    registry.access.redhat.com/jboss-fuse-6/fis-java-openshift                     1.0-9,latest,1.0-10 + 2 more...    4 weeks ago
fis-karaf-openshift                   registry.access.redhat.com/jboss-fuse-6/fis-karaf-openshift                    latest,1.0-10,1.0-11 + 2 more...   4 weeks ago
jboss-amq-62                          registry.access.redhat.com/jboss-amq-6/amq62-openshift                         1.2-12,1.2,1.1 + 5 more...         4 weeks ago
jboss-datagrid65-openshift            registry.access.redhat.com/jboss-datagrid-6/datagrid65-openshift               1.2-13,1.2-18,1.2-19 + 2 more...   4 weeks ago
jboss-decisionserver62-openshift      registry.access.redhat.com/jboss-decisionserver-6/decisionserver62-openshift   1.2-10,1.2-17,1.2-18 + 2 more...   4 weeks ago
jboss-eap64-openshift                 registry.access.redhat.com/jboss-eap-6/eap64-openshift                         1.3,1.3-10,1.2-19 + 7 more...      7 days ago
jboss-webserver30-tomcat7-openshift   registry.access.redhat.com/jboss-webserver-3/webserver30-tomcat7-openshift     1.1-2,1.1-6,1.2 + 5 more...        4 weeks ago
jboss-webserver30-tomcat8-openshift   registry.access.redhat.com/jboss-webserver-3/webserver30-tomcat8-openshift     1.1-3,1.2-10,1.2-11 + 5 more...    4 weeks ago
jenkins                               172.30.48.173:5000/openshift/jenkins                                           1,latest                           4 weeks ago
mongodb                               172.30.48.173:5000/openshift/mongodb                                           2.4,2.6,latest                     4 weeks ago
mysql                                 172.30.48.173:5000/openshift/mysql                                             5.6,latest,5.5                     4 weeks ago
nodejs                                172.30.48.173:5000/openshift/nodejs                                            0.10,latest                        4 weeks ago
perl                                  172.30.48.173:5000/openshift/perl                                              latest,5.20,5.16                   4 weeks ago
php                                   172.30.48.173:5000/openshift/php                                               5.6,latest,5.5                     4 weeks ago
postgresql                            172.30.48.173:5000/openshift/postgresql                                        9.4,latest,9.2                     4 weeks ago
python                                172.30.48.173:5000/openshift/python                                            3.4,latest,3.3 + 1 more...         4 weeks ago
ruby                                  172.30.48.173:5000/openshift/ruby                                              2.2,latest,2.0                     4 weeks ago
 oadm build-chain --all
{
	"fullname": "openshift/php",
	"tags": [
		"latest"
	],
	"edges": [
		{
			"fullname": "hello-php/hello-php",
			"to": "hello-php/hello-php"
		}
	],
	"children": [
		{
			"fullname": "hello-php/hello-php",
			"tags": [
				"latest"
			]
		}
	]
}
 oc import-image php
```


## 25.0 テンプレート作成
```
既存のプロジェクトからテンプレートを作成するには以下のコマンドを発行します。


oc export bc,is,dc,svc --all --as-template=hello-php
```

## 26.0 よくある質問
```
  アプリケーションのログはどうしたらいいですか？
    Dockerコンテナの標準入出力は'oc logs'で参照でき、また、OpenShift上のjournaldにも集約されています。
    クラウド環境ではfluentdなどのネットワークログサーバに送信するというのが一般的です。
    どうしてもファイルベースでということであれば、PersistentVolumeをアタッチしてそちらに出力するという方法もあります。
  カスタマイズはできますか？
    はい、OpenShiftのほぼ全てがAPIで構成され、プログラマブルになっています。ocコマンドもWebコンソールも基本的にはAPIを叩いているだけのAPIクライアント実装です。
    ビルドされるイメージをカスタマイズしたい場合は、['.sti/bin'ディレクトリにカスタムの'assemble', 'run'スクリプトを含めるか、カスタムのビルダーイメージを作成](https://docs.openshift.com/enterprise/3.2/creating_images/s2i.html)します。
    アプリケーションのpodの開始、終了の前後処理を行う[ライフサイクルフック](https://docs.openshift.com/enterprise/3.2/dev_guide/deployments.html#pod-based-lifecycle-hook)が定義できます。
```
## 27.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FCIxg5db1wHWTu1eeymVp4EkLzfg1%2F-LbW07Cj8C37LDyZeKHF-LcPuq3uP8_kKl9Si9yX?alt=media&token=22d159ac-ead7-4465-9279-35ce0d322b20
