Minikube 入門
====
* knowledgeid: -LdLtaiBADqiIat-6k_47
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2
* language: jp
* knowledgetype: 8
* content_count: 13
* introduce: Minikube 入門

## 1.0 ゴール
```
  環境構築
  Minikubeクラスタの作成
  単純なNode.jsアプリをkubernetes上で動作させる
```
## 2.0 前提
```
  MacOS
  Docker for Mac
```
## 3.0 Install vm-driver: xhyve
```
    $ brew install xhyve
    $ brew install docker-machine-driver-xhyve
    $ sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
    $ sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve

  'docker-machine' がインストールされますが気にせずに
```
## 4.0 Install minikube
```
    $ curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/

  'brew cask install minikube' でもインストールできます。
  公式チュートリアルだと上記を推奨しています。
```
## 5.0 Install kubectl
```
    $ curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl
    $ chmod +x ./kubectl
    $ sudo mv ./kubectl /usr/local/bin/kubectl

  'brew install kubectl' でもインストールできます。
  公式チュートリアルだと上記を推奨しています。
```
## 6.0 Minikubeクラスタの作成
```
    $ minikube start --vm-driver=xhyve

作成したクラスタと通信できることを確認します（設定の表示）

    $ kubectl cluster-info
```
## 7.0 Node.jsアプリケーションの作成
```
 'hellonode' ディレクトリを作成
 以下のJavaScriptを 'server.js' として保存
 サーバーを起動

    $ mkdir hellonode
    $ vim hellonode/server.js
    $ node hellonode/server.js

javascript
var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
```

## 8.0 Dockerfileの作成
```
'hellonode/Dockerfile' を作成します

FROM node:6.9.2
EXPOSE 8080
COPY server.js .
CMD node server.js

Minikubeホストを使用しているため、環境変数をexportします。

    $ eval $( minikube docker-env ) 

Minikube Dockerデーモンを使用して、Dockerイメージをビルドします。

    $ docker build -t hello-node:v1 .
```
## 9.0 デプロイメント
```
Kubernetes Podは、1つないし複数のコンテナのグループであり、管理およびネットワークの目的で一緒に結び付けられています。このチュートリアルのPodには1つのコンテナしかありません。

Kubernetes Deploymentは、ポッドの正常性をチェックし、ポッドのコンテナが終了した場合は再起動します。ポッドの作成とスケーリングを管理するには、デプロイメントをお勧めします。
```
## 10.0 デプロイする
```
    $ kubectl run hello-node --image=hello-node:v1 --port=8080 

depoloymentを表示する

    $ kubectl get deployments

Podを表示する

    $ kubectl get pods

クラスタイベントを表示する

    $ kubectl get events

kubectlで設定を表示する

    $ kubectl config view -o yaml

サービスの作成

デフォルトでは、PodはKubernetesクラスタ内の内部IPアドレスによってのみアクセス可能です（EXPOSEするまで、外部には公開されていない状態）。

hello-nodeコンテナにKubernetesの仮想ネットワークの外部からアクセスできるようにするには、PodをKubernetesサービスとして公開する必要があります。
```
## 11.0 サービスとして公開する（サービスの作成）
```
    $ kubectl expose deployment hello-node --type=LoadBalancer

  '--type=LoadBalancer' フラグは、サービスをクラスタ外に公開することを示します。
  ロードバランサをサポートするクラウドプロバイダでは、サービスにアクセスするために外部IPアドレスがプロビジョニングされます。
```
## 12.0 作成したサービスを確認する
```
    $ kubectl get services

ブラウザで展開する

    $ minikube service hello-node

ログを表示する

    $ kubectl logs <POD-NAME>
```
## 13.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FCIxg5db1wHWTu1eeymVp4EkLzfg1%2F-LbW07Cj8C37LDyZeKHF-LcPuq3uP8_kKl9Si9yX?alt=media&token=22d159ac-ead7-4465-9279-35ce0d322b20
