## 目的

- Dockerを管理するフレームワーク。Google製。
- 船の舵をとる人、という意味

## 構成例

![](https://cloud.githubusercontent.com/assets/15371677/23779104/a9879592-0581-11e7-8447-db8d59ee23ad.png)

## 仕組みを知るうえで、欠かせない概念

- Pod
- Label
- Replication Controllers
- Services

### Pod

- コンテナの集まり
- 1 Pod 1 Container でも良い
- Pod内のコンテナは、必ず同一ホストになる
- ストレージとか、IPアドレスを共有しなければならないコンテナをまとめられる

### Label

- Podにラベルを自由に与えられる
- たとえば環境を示すラベル（production, development, stagingなど）
- 役割を示すラベル（Frontend, Backend, Worker, Loggerなど）
- 1つのPodに複数のラベルが付けられる

![](https://cloud.githubusercontent.com/assets/15371677/23779125/d0f2d0f6-0581-11e7-90ec-450353048b2c.png)

### Replication Controllers

- Podのテンプレートから、指定された数のReplicaを作成する仕組み（Replicaは『「複製品」「模造品」「復刻版」』の意）
- Podの監視をしていて、指定された数より多ければ減らし、少なければ減らす

![image](https://cloud.githubusercontent.com/assets/15371677/23779183/42d6e8c4-0582-11e7-9dd1-1cef5ef84505.png)

### Service

- L3のプロキシみたいなもの
- 設定したPodにラウンドロビンでアクセスを分配する

![image](https://cloud.githubusercontent.com/assets/15371677/23779206/6b9e1e26-0582-11e7-98cc-80cfe9f137e5.png)

## いろいろな環境で試せる

![image](https://cloud.githubusercontent.com/assets/15371677/23779422/b1ff6784-0583-11e7-8cde-09804d9dfcff.png)

ただし、環境によって構築方法は異なる。

- Kubernetesリポジトリの、[Getting Started Guide]()を参照するとよい。
- GCEで構築するのはめちゃくちゃ楽

## 知見

![](https://cloud.githubusercontent.com/assets/15371677/23779571/9738d150-0584-11e7-90e9-c3b23453c0cd.png)

## 資料

- [Kubernetesを触ってみた](https://www.slideshare.net/jacopen/kubernetes)