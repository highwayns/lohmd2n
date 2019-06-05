# Docker Overview

## こんな人に有効

- Linux 使ってるけど vagrant とか Virtual Box とか時間かかってめんどい
- VM 作りまくって何が何だかわからなくなった
- Warden が動かない, Buildpack なにそれおいしいの?
- Go!

note: Ubuntu 12.04 (linux-image-3.8.0-23-generic) 使ってます。 Kernel 3.5 以前では安定しない模様。

## インストール

````
sudo DEBIAN_FRONTEND=noninteractive apt-get install -q -y curl

$ sudo -s
# export http_proxy=xxxxx
# export https_proxy=xxxxx
# curl get.docker.io | sh -x
````

note: この手順だとサービスの自動起動を登録しないので、リブートしたときは `start dockerd` で起動させる

## いろいろ試す

### 最初のコマンド

Docker で /bin/echo をコンテナで起動する

````
# docker pull base
# docker run base /bin/echo Hello World
Hellow World
````

### コンテナのホスト名を確認

````
# docker run base /bin/hostname
550cf7ca6e98
# docker run base /bin/hostname
f2aa47f6ea1c
````

### IPアドレスは....?

````
# docker run base /sbin/ip addr | grep eth0
21: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state DOWN qlen 1000
    inet 172.16.42.7/24 brd 172.16.42.255 scope global eth0
# docker run base /sbin/ip addr | grep eth0
24: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    inet 172.16.42.8/24 brd 172.16.42.255 scope global eth0
# docker run base /sbin/ip addr | grep eth0
27: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 1000
    inet 172.16.42.9/24 brd 172.16.42.255 scope global eth0
````

## もうちょっと試す

### /bin/bash を実行する

````
# docker run -i -t base /bin/bash
root@b51e604d11b6:/# ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.1  0.0  18056  1940 ?        S    04:23   0:00 /bin/bash
root        17  0.0  0.0  15528  1124 ?        R+   04:23   0:00 ps aux
````

コンテナ内のプロセスしか見えない

### コンテナをバックグラウンドで動かす

````
# docker run -i -t -d base /bin/bash
4774e1bbbd18
# docker ps
ID                  IMAGE               COMMAND             CREATED              STATUS              PORTS
4774e1bbbd18        base:latest         /bin/bash           About a minute ago   Up About a minute
````

### コンテナにアタッチする

````
# docker attach 4774e1bbbd18

root@4774e1bbbd18:/#
````

### Node.js サーバーを試す

#### まずはアプリとDockerfileを作る

````
# mkdir nodeapp
# cd nodeapp
# mkdir src
# vi app.js
var PORT = 8080;
var server = require('http').createServer(function(req, res){
  res.send('Hello World\n');
});
server.listen(PORT)
console.log('Running on http://localhost:' + PORT);

# vi Dockerfile
FROM    base
RUN     apt-get update -o "Acquire::http::proxy=xxxxx"
RUN     apt-get install -q -y -o "Acquire::http::proxy=xxxxx" nodejs

ADD     . ./src
EXPOSE  8080
CMD     ["node", "/src/app.js"]
````

#### Docker のイメージとしてビルドする

````
# docker build -t yssk22/node-hello .
Uploading context 10240 bytes
Step 1 : FROM base
 ---> b750fe79269d
Step 2 : RUN apt-get update -o "Acquire::http::proxy=xxxxx"
 ---> Running in 9b336a266d7c
 ---> 64bcd9d40c26
Step 3 : RUN apt-get install -q -y -o "Acquire::http::proxy=xxxxx" nodejs
 ---> Running in 3554ed296982
 ---> aa27b6706638
Step 4 : ADD . ./src
 ---> 659e961143c5
Step 5 : EXPOSE 8080
 ---> Running in b7af7365a58c
 ---> 5b6e9916cc39
Step 6 : CMD ["node", "/src/app.js"]
 ---> Running in fcfdd87a6b97
 ---> c01203ff6be0
Successfully built c01203ff6be0

# docker images
REPOSITORY          TAG                 ID                  CREATED              SIZE
base                latest              b750fe79269d        3 months ago         24.65 kB (virtual 180.1 MB)
base                ubuntu-12.10        b750fe79269d        3 months ago         24.65 kB (virtual 180.1 MB)
base                ubuntu-quantal      b750fe79269d        3 months ago         24.65 kB (virtual 180.1 MB)
base                ubuntu-quantl       b750fe79269d        3 months ago         24.65 kB (virtual 180.1 MB)
yssk22/node-hello   latest              c01203ff6be0        About a minute ago   12.29 kB (virtual 309.8 MB)
````

#### 起動する

````
# docker run -d yssk22/node-hello
923c56817dac
# docker ps
ID                  IMAGE                      COMMAND                CREATED             STATUS              PORTS
344d6d56fb46        yssk22/node-hello:latest   /usr/bin/nodejs /src   2 seconds ago       Up 1 seconds        49167->8080
````

note: docker ps で表示されない場合は -d を削除して interactive で起動してみるとよい

ホストのランダムポートからEXPOSEで指定したポートへのマッピング済みなのでホストから確認できる

````
# curl http://localhost:49167/
Hello World
````

## 気になるところを試す

### ネットワーク

ポートマッピング誰がしてる?

````
# netstat -an | grep 49167
tcp        0      0 127.0.0.1:49167         0.0.0.0:*               LISTEN
# lsof | grep 49167
docker    1362        root   16u     IPv4              18332      0t0        TCP localhost:49167 (LISTEN)
# ps aux | grep docker
root      1362  0.9  0.4 276900  9528 pts/2    Ssl+ 04:47   0:20 /usr/local/bin/docker -d
# iptables -t nat -L
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination
DOCKER     all  --  anywhere             anywhere             ADDRTYPE match dst-type LOCAL

Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DOCKER     all  --  anywhere            !127.0.0.0/8          ADDRTYPE match dst-type LOCAL

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination
MASQUERADE  all  --  10.0.3.0/24         !10.0.3.0/24
MASQUERADE  all  --  172.16.42.0/24      !172.16.42.0/24

Chain DOCKER (2 references)
target     prot opt source               destination
DNAT       tcp  --  anywhere             anywhere             tcp dpt:49153 to:172.16.42.6:8080

````

IPアドレスをどう管理している?

````
# docker inspect 344d6d56fb46
....
    "NetworkSettings": {
        "IPAddress": "172.16.42.21",
        "IPPrefixLen": 24,
        "Gateway": "172.16.42.1",
        "Bridge": "docker0",
        "PortMapping": {
            "8080": "49167"
        }
    },
....
````

## Docker を支える技術

### cgroup / namespacing

#### cgroup

ユーザー定義のプロセスグループにリソース(CPU時間, メモリ, IO, ...etc)を割り当てる仕組み

#### namespacing

プロセスグループを隔離する仕組み

- 他のプロセスグループとPID空間を分離する
- 他のプロセスグループとネットワーク空間を分離する
- 他のプロセスグループとファイルシステム空間を分離する
- ...etc

これにより、コンテナ毎に"同じポートやファイルシステムツリーで"サーバーを立てることが可能。

### AUFS

Another Union File System. Linux で Union Mount を可能にするファイルシステム。

### Union Mount

1つのマウントポイントで複数のディスクデバイスを扱えるようにする。

````
/mnt/disk
  + /dev/sda1
  + /dev/sdb1
````

複数のデバイスは階層化させることができるので、

````
/mnt/disk
  /dev/sda1 このディスクにベースのイメージを保存する
  /dev/sdb1 このディスクに起動後に更新のあったファイルを書き込む
````

といった感じで使うことができる(Dockerの実装は未確認)

- Docker ではこれを利用してコンテナイメージファイルの履歴管理をする
  - `docker commit`: 更新をコミットして元のイメージを更新することも出来る
  - `docker diff`: コンテナとイメージのdiffを取得できる
  - `docker history`: イメージの更新履歴を取得できる


## 四の五のいわずにとりあえずソース読もう

- GIT_REPO_ROOT/ が docker パッケージ
- GIT_REPO_ROOT/docker/ が main パッケージの構成
  main 内で

  ````
  import (

        "github.com/dotcloud/docker"
        "github.com/dotcloud/docker/utils"

  )
  ````

  のようなことをしている


./docker/docker.go: main()関数。
各種引数でオプションを処理。Dockerそのものに設定ファイルのようなものは存在しない。必要に応じてdockerパッケージのパッケージ変数を設定していく。

````
31         bridgeName := flag.String("b", "", "Attach containers to a pre-existing network bridge")
...
46         if *bridgeName != "" {
47                 docker.NetworkBridgeIface = *bridgeName
48         } else {
49                 docker.NetworkBridgeIface = docker.DefaultNetworkBridge
50         }
````

-b オプションで利用するブリッジを設定可能、デフォルトでは docker0 が使われる。

./runtime.go: Docker 環境を管理するコード。Runtime 構造体およびその関数。

````
 22 type Runtime struct {
 23         root           string
 24         repository     string
 25         containers     *list.List
 26         networkManager *NetworkManager
 27         graph          *Graph
 28         repositories   *TagStore
 29         idIndex        *utils.TruncIndex
 30         capabilities   *Capabilities
 31         kernelVersion  *utils.KernelVersionInfo
 32         autoRestart    bool
 33         volumes        *Graph
 34         srv            *Server
 35         Dns            []string
 36 }
````

./network.go ネットワーク管理。NetworkManager 構造体およびその関数。

````
539 // Network Manager manages a set of network interfaces
540 // Only *one* manager per host machine should be used
541 type NetworkManager struct {
542         bridgeIface   string
543         bridgeNetwork *net.IPNet
544
545         ipAllocator   *IPAllocator
546         portAllocator *PortAllocator
547         portMapper    *PortMapper
548 }
````

NetworkManager は専用にBridgeを利用する(渡された名前のものがなければ作る)

````
564 func newNetworkManager(bridgeIface string) (*NetworkManager, error) {
565         addr, err := getIfaceAddr(bridgeIface)
566         if err != nil {
567                 // If the iface is not found, try to create it
568                 if err := CreateBridgeIface(bridgeIface); err != nil {
569                         return nil, err
570                 }
571                 addr, err = getIfaceAddr(bridgeIface)
572                 if err != nil {
573                         return nil, err
574                 }
575         }
````

決め打ちで "172.16.42.1/24", "10.0.42.1/24", "192.168.42.1/24" が順に使われる模様。routing情報が設定されていなければ勝手に使ってしまうので、注意。

````
115 func CreateBridgeIface(ifaceName string) error {
116         // FIXME: try more IP ranges
117         // FIXME: try bigger ranges! /24 is too small.
118         addrs := []string{"172.16.42.1/24", "10.0.42.1/24", "192.168.42.1/24"}
119
120         var ifaceAddr string
121         for _, addr := range addrs {
122                 _, dockerNetwork, err := net.ParseCIDR(addr)
123                 if err != nil {
124                         return err
125                 }
126                 if err := checkRouteOverlaps(dockerNetwork); err == nil {
127                         ifaceAddr = addr
128                         break
129                 } else {
130                         utils.Debugf("%s: %s", addr, err)
131                 }
132         }
133         if ifaceAddr == "" {
134                 return fmt.Errorf("Could not find a free IP address range for interface '%s'. Please configure its address     manually and run 'docker -b %s'", ifaceName, ifaceName)
135         }
136         utils.Debugf("Creating bridge %s with network %s", ifaceName, ifaceAddr)
````

ifaceName と ifaceAddr が決まったら ip コマンドでブリッジを作ってNATする。

````
137
138         if output, err := ip("link", "add", ifaceName, "type", "bridge"); err != nil {
139                 return fmt.Errorf("Error creating bridge: %s (output: %s)", err, output)
140         }
141
142         if output, err := ip("addr", "add", ifaceAddr, "dev", ifaceName); err != nil {
143                 return fmt.Errorf("Unable to add private network: %s (%s)", err, output)
144         }
145         if output, err := ip("link", "set", ifaceName, "up"); err != nil {
146                 return fmt.Errorf("Unable to start network bridge: %s (%s)", err, output)
147         }
148         if err := iptables("-t", "nat", "-A", "POSTROUTING", "-s", ifaceAddr,
149                 "!", "-d", ifaceAddr, "-j", "MASQUERADE"); err != nil {
150                 return fmt.Errorf("Unable to enable network bridge NAT: %s", err)
151         }
152         return nil
153 }
````

(参考): ルーティングの確認

````
 96 func checkRouteOverlaps(dockerNetwork *net.IPNet) error {
 97         output, err := ip("route")
 98         if err != nil {
 99                 return err
100         }
101         utils.Debugf("Routes:\n\n%s", output)
102         for _, line := range strings.Split(output, "\n") {
103                 if strings.Trim(line, "\r\n\t ") == "" || strings.Contains(line, "default") {
104                         continue
105                 }
106                 if _, network, err := net.ParseCIDR(strings.Split(line, " ")[0]); err != nil {
107                         return fmt.Errorf("Unexpected ip route output: %s (%s)", err, line)
108                 } else if networkOverlaps(dockerNetwork, network) {
109                         return fmt.Errorf("Network %s is already routed: '%s'", dockerNetwork.String(), line)
110                 }
111         }
112         return nil
113 }
````
