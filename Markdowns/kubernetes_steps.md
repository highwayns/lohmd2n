## kubernetesとは

kubernetesは、複数台のサーバーを対象に、複数のコンテナを、ネットワークのルーティングも含め、横断的に管理できるプロダクト（デプロイ/オーケストレーションツール）

## kubernetesが提供する機能

- 関連するコンテナのグルーピング
- コンテナに割り振られるIPアドレスの管理
- コンテナ間のネットワークルーティング管理
- 複数のコンテナを利用した負荷分散
- コンテナに割り当てるストレージの管理
- コンテナの監視

## kubernetesを構成するコンポーネント

| コンポーネント名 | 説明 |
|:--|:--|
| apiserver | kubernetesを操作するためのAPIを提供する |
| controller-manager | コンテナの状態管理やノードの管理と言った各種管理作業を行う |
| proxy | コンテナへのネットワークルーティングおよび負荷分散を行う |
| scheduler | 各ノードに対しコンテナの割り当てなどを行う |
| kubelet | 各ノード上でのコンテナ作成/削除やボリュームの割り当てなどを行う |
| kubectl | API経由でKubenetesを操作するためのクライアントツール |

## kubernetesの基本的な構成

![image](https://cloud.githubusercontent.com/assets/15371677/23779831/24854902-0586-11e7-8435-8bfafd1f7c7b.png)

## クラスタ環境の例

![image](https://cloud.githubusercontent.com/assets/15371677/23779845/42aa63b8-0586-11e7-9154-bcfe6ba35113.png)

## 基本操作

### Podを作る

#### 設定ファイルを作る

```
apiVersion: v1
kind: Pod  ←Podに関する設定ファイルであることを指定
metadata:  ←メタデータに関する情報を指定
  name: httpd  ←Podの名前を指定
  labels:  ←Podに付与するラベルを指定
    app: httpd
spec:
  containers:
  - name: httpd  ←コンテナ名を指定
    image: httpd  ←コンテナを作成する際に使用するイメージを指定
    ports:
    - containerPort: 80  ←コンテナに外部からアクセスできるポートを指定
```

#### Podを作る

```
$ kubectl create -f pod-httpd.yaml
pods/httpd
```

Podを作成すると、自動的に指定したコンテナが作成される。Podを動かしているノードで「docker ps」を実行すると、コンテナが稼働していることが確認できる。

#### Podの稼働状況の確認

```
$ kubectl get pods
NAME      READY     STATUS    RESTARTS   AGE
httpd     0/1       Pending   0          6s
```

詳しい情報を知りたいときは、 `-o yaml` オプションを付けると、設定ファイルが確認できる。

### 永続ストレージを利用する（Volume）

- 永続ストレージはコンテナ外のストレージをコンテナ内の指定したディレクトリにマウントすることで実現される。
- 使用できるストレージとしてはノードのローカルファイルシステムやGoogle Compute Engine、Amazon Web Serviceなどのクラウドストレージ、NFS、iSCSIなどから選択可能。

#### 設定例

```
apiVersion: v1
kind: Pod
metadata:
  name: mysql
  labels:
    app: mysql
spec:
  volumes:
  - name: mysql-storage  ←ボリューム名を指定
    hostPath:
      path: /var/kube-test/mysql-db  ←ボリュームとして使用するローカルファイルシステムのパスを指定
  containers:
  - name: mysql
    image: mysql
    volumeMounts:
    - name: mysql-storage  ←コンテナにマウントするボリューム名を指定
      mountPath: /var/lib/mysql  ←マウント先を指定
    ports:
    - containerPort: 3306
    env:  ←環境変数を指定
    - name: MYSQL_ROOT_PASSWORD
      value: ＜MySQLのrootパスワード＞
```

- ローカルファイルシステムを永続ストレージとして指定した場合、Podが実行されるノードが変わるとストレージ上の内容も変わってしまう点には注意。
- 実行されるノードが変わっても同じデータを参照したい場合はNFSやiSCSIなどを利用するか、もしくはクラウドストレージを利用することになる。

### Podに特定のIPアドレスを割り当てる（Services）

- kubernetesでは、どのPodがどのノードで実行されるかはPodの作成時に決定される。
- Podが作成されるまではそれぞれのPodにどのIPアドレスが紐付けられるかは分からない。
- 指定したPodに特定のIPアドレスを割り当てるための「Service」という仕組みが用意されている。

#### Serviceの設定

```
apiVersion: v1
kind: Service  ←Serviceの定義であることを指定
metadata:
  name: mysql-master  ←Service名を指定
spec:
  ports:
    - port: 3306  ←Serviceが使用するポート番号を指定
  selector:  ←対象とするPodをラベルで指定
    app: mysql
```

#### Serviceの作成

```
$ kubectl create -f service-mysql.yaml
services/mysql-service
```

#### Serviceの確認

```
$ kubectl get services
NAME           LABELS                                    SELECTOR    IP(S)           PORT(S)
kubernetes     component=apiserver,provider=kubernetes   <none>      10.254.0.1      443/TCP
mysql-master   <none>                                    app=mysql   10.254.31.188   3306/TCP
```

##### Serviceに応じた環境変数

- Serviceを作成すると、各コンテナ内ではそれに応じた環境変数が作成される。
- 「mysql-master」というServiceの場合、そのServiceにアクセスするためのIPアドレスが「MYSQL_MASTER_SERVICE_HOST」という環境変数に、Serviceが使用するポートが「MYSQL_MASTER_SERVICE_PORT」という環境変数に格納される。
- MySQLデータベースを使用するアプリケーションを稼動させるPodでは、これらの環境変数を使って接続先データベースのホストを指定するようにすれば良い。

## 出典

- [kubernetesによるDockerコンテナ管理入門 - さくらのナレッジ](http://knowledge.sakura.ad.jp/tech/3681/)