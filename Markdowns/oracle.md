Oracle入門
===
* knowledgeid: -LdLtaiBADqiIat-6k_8
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 リレーショナルモデル
```
Oracle はリレーショナルモデルを使用した、RDBMS(リレーショナルデータベー
スマネージメントシステム)である。
リレーショナルデータベースは、Rows：ローと Columns：カラムから構成される。
(Rows：ローとは行、Columns：カラムとは列をあらわす) この 2 次元の表形式
でデータを格納する。
行と列の交差する部分はフィールドと呼ばれる。
```

## 2.0 制約とキー
```
主キー(Primary Key)
NOT NULL 制約と一意制約を組み合せたもの
主キーの値が、表の中の複数行に存在することはできない。
主キーを構成する列に NULL を持たせることはできない。
一意キー
表の中の2 つの行が一意キーに対して同じ値を持たないようにする。
単一の列で構成される一意キーの場合は、複数のNULL（行） を持つことが可能。
複合一意キーにおいてすべてのキー列に対してNULL を持つ行も同様に複数持つこと
が可能。
ただし、1つ以上のキー列に対して NULLを持ち、その他のキー列に対して同じ組合せ
の値を持つ 2つの行は制約違反となる。(※)
(※) この制限は Oracle 検索メカニズムによるとマニュアルに書かれている。標準
SQL では制約の 1つのキー列でも NULL を持つ場合には制約違反にはならない。
外部キー(Foreign Key)
表と表の論理的な関連付けを行い外部キーに対して値（親キー）が存在することを保
証する。
外部キーには、親表の値もしくはNULLを持つことが可能。
外部キーの親キーは主キーもしくは一意キーでなければならない。 
補足
表のデータのすべての行(NULLを含む)を一意に識別するためには一意キーではなく、
主キーを使用しなければならない。
キーとインデックスは異なる。キーは制約の元で使われる。インデックスはキーを実装
するために利用されているが制約ではない。RDBMS の実装における副産物のようなもの
である。
```

## 3.0 Oracle とは 
```
オラクルとは 1979 年に世界ではじめて商用として出荷された RDBMS : データベース
・システムである。
オラクルは リレーショナル・モデル によるデータベースであり、それに加えて データ
ベースを作成、削除および管理する機能が提供されている。つまり リレーショナル・デ
ータベース を管理するシステム (Relational Database Management System: RDBMS)
Oracle というと会社を指すことも多いが、Oracle データベース・システム製品のことを
言っていることが圧倒的に多い。 （念のため、オラクルはデータベースだけではなく、様
々なソフトウェアを取り扱っている）
Oracle データベース・システムとは Oracle データベースと Oracle データベース・サ
ーバーから構成されている。
Oralce データベースにはシステム情報、ユーザー情報、制御情報が格納されている。 そ
の Oracle データベースを管理するシステムが Oracle データベース・サーバーである。
```

## 4.0 Oracle のマニュアル
```
SQL 言語リファレンス
エラー・メッセージ
開発ガイド (旧アプリケーション開発者ガイド - 基礎編 相当） 
（パフォーマンス・チューニング・ガイドを読む前に…）
パフォーマンス・チューニング・ガイド
データ・ウェアハウス・ガイド（パーティション表、分析計算およびレポート用SQL関数）
PL/SQLパッケージ・プロシージャおよびタイプ・リファレンス
グローバリゼーション・サポート・ガイド(NLS_*** 関連)
概要（Oracle Database 概要マニュアル）
管理者ガイド（概要と管理者ガイドは2つで1セットのようなもの）
リファレンス（初期化パラメータやディクショナリの説明が載っている）
ユーティリティ(Oracle Data Pump、SQL*Loader、外部表）
```

## 5.0 SQL*Plus とは 
```
sqlplus scott/tiger@orcl
                   ↑ ここにスペースを入れると別の意味になるので要注意

SQL*Plus: Release 10.1.0.2.0 - Production
Copyright (c) 1982, 2004, Oracle.  All rights reserved.
↑ SQL*Plusのバージョン情報とクレジットが表示される(20年以上前・・・)

Oracle Database 10g {Enterprise Edition}  Release {10.1.0.2.0} - Production 
                     ↑インストールしたエディション  ↑Oracleのバージョンが表示される
With the Partitioning, OLAP and Data Mining options
　　　   ↑オプションでインストールしたコンポーネント
に接続されました。

SQL> SQL文 ;
    or
SQL> PL/SQL文 ;
SQL> /   ← PL/SQLの場合には、'/' で内容を実行(RUN)させる。
       結果表示
SQL> QUIT
```

## 6.0 SQL*Plus コマンド 一覧 
```
SQLPlus コマンド	コマンド 説明
@	ファイルの内容を実行（詳細は START 参照）
@@	
@?	
n	カレント行を n にする
/	バッファ内のSQL、PL/SQLブロックを実行（SQL バッファ非表示）
ACCEPT	ACCEPT vData PROMPT ' vDataを入力する。'
APPEND	行末にテキストを追加
ARCHIVE LOG	アーカイブログ運用の設定と状態表示
ATTRIBUTE	オブジェクト型列の表示書式を設定
BREAK	
BTITLE	下部に指定のタイトルの書式設定
CHANGE	SQL バッファの文字を置換
CLEAR	画面、バッファ、書式、タイマーの設定などの初期化
COLUMN	カラムの書式指定（書式モデル）
COMPUTE	
CONNECT	データベースへの接続
COPY	下位互換用
DEFINE	ユーザー定義定数の設定と表示
DEL	SQL バッファの一部を削除
DESCRIBE	スキーマオブジェクトの仕様を表示
DISCONNECT	データベースから切断
EDIT	ホストのエディタを使用した編集
EXECUTE	PL/SQL ブロックの実行
EXIT	SQL*Plus の終了
GET	ファイルの内容をSQLバッファに読み込む
HELP	オンライン・コマンドヘルプ
HOST	シェルでコマンドの実行
INPUT	文字列の追加(単独の場合には複数行追加可能)
LIST	SQL バッファ内を表示
PASSWORD	パスワードの変更
PAUSE	処理の一時停止
PRINT	バインド変数の内容を表示する
PROMPT	メッセージの表示
RECOVER	データベースのリカバリー
REMARK	コメント行
REPFOOTER	
REPHEADER	
QUIT	EXIT コマンドのエイリアス
RUN	バッファ内SQL、PL/SQLブロックを表示し実行
SAVE	SQLバッファの内容をファイルに保存
SET	システム変数を設定する
SHOW	メモリ、システム変数、初期化パラメータなどの表示
SHUTDOWN	オラクルの停止
SPOOL	出力結果をファイルへ出力の開始と終了
START	ファイルの内容を実行
STARTUP	オラクルの起動
STORE	
TIMING	タイマーの設定、表示と解除
```

## 7.0 SQL*Plus システム変数一覧 
```
コマンド	説明
SET APPINFO	スクリプトの進行状況などを設定
SET ARRAYSIZE	DBMS_OUTPUT のバッファ、データベースから一度にフェッチする配列の大きさ
SET AUTOCOMMIT	オートコミットの有効／無効
SET AUTOPRINT	バインド変数 の自動表示
SET AUTORECOVERY	RECOVERY コマンドのアーカイブログファイル名を自動補完する／しない
SET AUTOTRACE	オートトレースの有効／無効、または、トレースモードの設定
SET BLOCKTERMINATOR	PL/SQL ブロックの終了文字の設定
SET CMDSEP	SQL*Plus コマンドの区切り文字
SET COLINVISIBLE	DESCRIBE コマンド において非表示列の表示／非表示の設定
SET COLSEP	カラムとカラムの間の区切り文字
SET COMPATIBILITY	Oracle 8 以前向けの下位互換動作用
SET CONCAT	後続に文字連結するときの置換変数の終了文字の設定
SET COPYCOMMIT	COPY コマンドのコミットポイント設定
SET COPYTYPECHECK	COPY コマンドの型チェックの有効／無効
SET DEFINE	置換変数を有効／無効または接頭辞を設定
SET DESCRIBE	DESCRIBE コマンド の表示方法の調整
SET ECHO	スクリプトのSQL*Plusコマンドを表示をする／しない
SET EDITFILE	EDIT コマンド で使用する一時ファイル名の設定
	エディタプログラムの指定は _EDITOR 事前定義変数
SET EMBEDDED	異なるレポート(SQL)でも同一ページ含める／含めない
SET ERRORLOGGING	実行中に発生した例外を指定したテーブルに出力する
SET ESCAPE	エスケープ機能を有効／無効、または、別のエスケープ文字を設定
SET ESCCHAR	ファイル名を指定するときにエスケープして意味を持たせない文字を指定
SET EXITCOMMIT	EXIT(QUIT) 時のデフォルトの振る舞いで COMMIT するか ROLLBACK 
するかの設定
SET FEEDBACK	問い合わせの結果の件数を表示をする／しない、または、表示する最小件数の設定
SET FLAGGER	SQL が SQL92 に準拠しているか調べる／調べないを設定
SET FLUSH	画面出力にバッファを使用する／しないの設定
SET HEADING	列ヘッダを表示する／しない
SET HEADSEP	列ヘッダの区切り文字の設定
SET HISTORY	コマンドの履歴の無効、または、有効。有効時のヒストリ件数を設定
SET INSTANCE	デフォルトのインスタンスの設定
SET LINESIZE	１行に表示する（文字数）バイト数の設定
SET LOBOFFSET	CLOB、NCLOBの取り出し開始位置の設定
SET LOBPREFETCH	LOB のプリフェッチサイズ（バイト）の設定
SET LOGSOURCE	RECOVERY コマンドで使用するアーカイブログファイル位置の設定
SET LONG	LONG、CLOB、NCLOB の表示幅
SET LONGCHUNKSIZE	LONG、CLOB、NCLOBのチャンクサイズ
SET MARKUP	出力をHTML 形式にエンコードをする／しないの設定(SQL*Plusの場合）
SET NEWPAGE	ページの開始位置から列ヘッダーまでの余白行数の設定
SET NULL	NULL データの代替文字列設定
SET NUMFORMAT	数値のデフォルト書式の設定（書式モデル）
SET NUMWIDTH	数値のデフォルト表示幅
SET PAGESIZE	1ページの行数
SET PAUSE	１ページ毎に一時停止をする／しない
SET RECSEP	レコードセパレータを常に出力する／しない、または、折り返しが発生時のみ出力する
SET RECSEPCHAR	RECSEP が発生したときに表示される文字の設定
SET ROWPREFETCH	結果セットのプリフェッチ行数の設定
SET SECUREDCOL	セキュリティ設定で制限されたカラムに対する表示内容の設定
SET SERVEROUTPUT	標準出力に表示する／しない、または、バッファの上限サイズ
SET SHIFTINOUT	シフト文字を表示する／しない（特殊なコンソールのみ）
SET SHOWMODE	システム変数の変更前値の通知を表示する／しない
SET SQLBLANKLINES	SQL コマンド、PL/SQL ブロックに空白行を許可する／しない
SET SQLCASE	すべての入力文字を大文字、または、小文字に変換する／しない
SET SQLCONTINUE	複数行の SQL*Plusコマンド入力時のプロンプトの設定
SET SQLNUMBER	複数行の SQL コマンド、PL/SQL ブロック入力時に表示される行番号を表示する／しない
SET SQLPLUSCOMPATIBILITY	動作保証できる SQL*Plus のバージョンの設定
SET SQLPREFIX	SQL*Plus コマンドの接頭辞の設定
SET SQLPROMPT	SQL*Plus のコマンドプロンプトに表示される文字列の設定
SET SQLTERMINATOR	SQL コマンド、PL/SQL ブロックの終了文字の設定
SET STATEMENTCACHE	ステートメントキャッシュ（再パースの回避) 数の設定
SET SUFFIX	スクリプトファイルのデフォルト拡張子の設定
SET TAB	タブ文字の使用をする／しない
SET TERMOUT	@、@@、START のスクリプトによるアウトプットを表示する／しない
SET TIME	SQL プロンプトに時刻表示する／しない
SET TIMING	タイミング統計（タイマー）を表示する／しない
SET TRIMOUT	各行の出力の終わりから行末までの空白を出力する／しない（スプールには無関係）
SET TRIMSPOOL	スプールにおける TRIMOUT システム変数（画面出力には無関係）
SET UNDERLINE	列ヘッダの下の表示される -----… 文字のあり／なし／文字の設定
SET VERIFY	置換変数に設定する前後の状態を表示する／しない
SET WRAP	表示幅に収まらない部分を折り返す／切り捨てる
```

## 8.0 SQL*Plus の起動 
```
sqlplus
sqlplus rivus/rivus_pass
sqlplus /nolog
connect rivus/rivus_pass
exit
disconnect
sqlplus rivus/rivus_pass @go.sql
sqlplus rivus/rivus_pass@orcl_net @param.sql "100" "200"

@param.sql
-- 引数１＋引数２
select to_number('&1') + to_number('&2') from dual;
quit
```

## 9.0 SQL コマンドの実行 
```
select user_id, user_name from account;
@atmark.sql param1 param2 ....
実行中のコマンド、スクリプトを停止する 
SQL*Plus で実行中のスクリプトや延々とデータを表示している状態を Ctrl+C キーを
押すことで停止することができる。
旧バージョンではアラートログを出してセッションも切断してしまう事があったので注意。
DML の処理を実行中で Ctrl+C キーの応答もない場合には、別のセッションから SID と 
SERIAL# を特定して ALTER SYSTEM KILL コマンドを使用してセッションを切断する。
```

## 10.0 PL/SQL ブロックの実行 
```
SQL> conn rivus/rivus_pass
SQL> set serveroutput on
接続されました。
SQL> declare
  2     vName   VARCHAR2(10);
  3  begin
  4     for vRec in (select user_name from account)
  5     loop
  6             dbms_output.put_line(vRec.user_name);
  7     end loop;
  8  end;
  9  /
富樫 歩夢
小杉 光輝
倉本 大翔
長谷川 春奈
荒木 奈央子

```

## 11.0 PL/SQL プロシージャを実行する 
```
SQL> set serveroutput on
SQL> call dbms_output.put_line('プロシージャをコールした');
プロシージャをコールした
 
コールが完了しました。
 
SQL> execute dbms_output.put_line('プロシージャを実行した');
プロシージャを実行した
 
PL/SQLプロシージャが正常に完了しました。
 
SQL>
```

## 12.0 PL/SQL ファンクションを実行する 
```
SQL> variable vNum number;
SQL> call sys.standard.greatest(100,2,300,4) into :vNum;
 
コールが完了しました。
 
SQL> print vNum
      VNUM
----------
       300
```

## 13.0 CALL 文 と EXECUTE コマンドの違い 
```
CALL は Oracle 9i からサポートされた 標準SQL のコマンドであり、EXECUTE は
旧来からある SQL*Plus コマンド である。（※ PL/SQL のコマンドでもない）
双方ともファンクションやプロシージャの実行に使用するが、その仕様は異なり新し
く用意された CALL が良いというものでもないといえる。
Oracle 10g までは CALL の引数は位置表記法のみに限定されていたが Oracle 11g 
からは 位置表記法および両方を併用した混合表記も可能になっている。 同時に SQL
 の関数の呼び出しも 位置表記法と混合表記がサポートされた。  

EXECUTE コマンドは テキストを PL/SQL ブロックに変換してから実行する。

CALL による呼び出しで、 SQL としてまだサポートされていない BOOLEAN 型 (TRUE
/FALSE) を PL/SQL のファンクションに使用すると、エラーが発生する。
```

## 14.0 RUN コマンド 
```
セミコロン(;)
SQL*Plus コマンドの終端文字 
単独で使用すると LIST コマンドと同じ動作になる。
SQL と SQL*Plus コマンドの終端文字はデフォルトで同一であるが SQL*Plus コマンド
の終端文字は CMDSEP システム変数で変更可能。
セミコロン(;)
単一の SQL 文、 PL/SQL ステートメントの終端文字
SQLTERMINATOR システム変数で変更可能
スラッシュ(/)
SQL バッファの実行 兼 ブロック全体の終端文字
PL/SQLブロック内には、文の終端文字としてセミコロンが既に使用されているため、文末
と全体の終端との区別のためにある。 機能的には、RUN コマンドと似ているがスラッシュ
は SQL バッファを表示しないで実行する、 また、RUN コマンドには終端文字として機能
はないという点も異なる。
単独で使用すると SQL バッファを実行(再実行)する。
ドット(.)
ブロック全体の終端文字
行頭で使用することで、終端文字として扱われる。(変数の終了文字としても使用する。)
ブロック要素の入力途中での間違いや入力を中断したいときに使用する(程度しか思い当た
らない) (入力文字はバッファに入る)
BLOCKTERMINATOR システム変数で変更可能
```

## 15.0 問い合わせなどの実行結果をファイルに出力する 
```
SQL> SPOOL
現在はスプールしていません。
SQL> SET COLSEP ,
SQL> SET HEAD OFF
SQL> SPOOL id_name_csv_file.csv
SQL> select id ,name from account order by id ;
 
         1,小栗 有美
         2,新村 憲一
         3,茂木 拓也
         4,石山 美紀
         5,古橋 聡
 
SQL> SPOOL OFF
```

## 16.0 システムコマンド（OSコマンド）を実行する 
```
windows
SQL> $ dir | sort | more
               2 個のファイル               9,493 バイト
              66 個のディレクトリ   3,703,697,408 バイトの空き領域
 C:\oracle\product\10.2.0\db_1 のディレクトリ
 ドライブ C のボリューム ラベルがありません。
 ボリューム シリアル番号は A818-F405 です
2006/04/05  00:10                43 install.platform
2006/04/05  00:10    <DIR>          admin
2006/04/05  00:10    <DIR>          assistants
.....
SQL>
-------------------
linux
SQL> ! vi /tmp/sqlplus_test.txt
... エディタが起動
... 終了するまで、プロンプトは戻らない
... エディタを終了
SQL>
```

## 17.0 結果を CSV で出力する 
```
set pagesize 0
set linesize 300
select * from table(unload.get_csv(q'{select * from user_tables order by table_name}'));
```

## 18.0 結果を CSV で出力する (複雑)
```
set echo off
set feedback off
set term off
set head off
set linesize 1000
-- set linesize 2000
-- set linesize 4000
-- set linesize 32767
--  ↑↑ １レコードの文字列の長さによって適宜調整する（レコード数増加により相当遅くなる）
set long 32767
set longchunksize 32767
set pagesize 0
set trimspool on
set serveroutput on
var cur refcursor
begin
	:cur := unload.sql_to_csv(
		data_source => 'select * from user_tables order by table_name',
		date_format => 'YYYY"年"MM"月"DD"日"',
		set_col_sep => CHR(9)
	);
exception
 when others then
	dbms_output.put_line('ERROR : ' || SQLERRM);
	raise;
end;
/
set term off
spool user_tables.csv
print cur
spool off
set term on
```

## 19.0 SERVEROUTPUT システム変数 
```
SET SERVEROUTPUT ON [SIZE n]
SET SERVEROUTPUT ON [SIZE n] [ FORMAT 表示制御オプション ]
SET SERVEROUTPUT OFF
SET SERVEROUTPUT ON UNLIMITED  (Oracle 10g R2〜)

SQL> SET LINESIZE 15
SQL> -- 文字ベースの折り返し
SQL> SET SERVEROUTPUT ON FORMAT WRAPPED
SQL> call dbms_output.put_line('1234567890 1234567890');
1234567890 1234
567890
 
SQL> -- 単語ベースの折り返し（半角・全角空白）
SQL> SET SERVEROUTPUT ON FORMAT WORD_WRAPPED
SQL> call dbms_output.put_line('1234567890 1234567890');
1234567890
1234567890
 
SQL> -- 切り捨て
SQL> SET SERVEROUTPUT ON FORMAT TRUNCATED
SQL> call dbms_output.put_line('1234567890 1234567890');
1234567890 1234
 
SQL>
```

## 20.0 テーブル定義 
```
CREATE TABLE USER_MASTER
(
   USER_ID           VARCHAR2(8) NOT NULL,
   DEPT_NO           VARCHAR2(8),
   USER_NAME         VARCHAR2(32),
   CREATED_ON        DATE DEFAULT SYSDATE,
   MODIFIED_ON       DATE
);
```

## 21.0 ALTER TABLE （列の追加、変更、削除）
```
ALTER TABLE my_table ADD ( time_col TIMESTAMP(3) ) ;
ALTER TABLE my_table MODIFY ( char_col VARCHAR2(80 char)  ) ;
ALTER TABLE my_table RENAME COLUMN time_col TO date_col ;
ALTER TABLE my_table DROP (
    char_col , number_col
)
-- 以下はオプションなので必須ではない
CASCADE CONSTRAINT INVALIDATE;
```

## 22.0 DROP TABLE、FLASHBACK TABLE 
```
DROP TABLE USER_MASTER CASCADE CONSTRAINTS ;
FLASHBACK TABLE USER_MASTER TO BEFORE DROP ;
```

## 23.0 ALTER TABLE （プライマリキーの追加、削除、変更）
```
ALTER TABLE table_name ADD CONSTRAINT primary_key_name 
  PRIMARY KEY  (user_id) 
  USING INDEX -- インデックス CREATE 文
  (
    -- CREATE INDEX 文をそのまま記述
    -- インデックス名はプライマリキー同じ名前でも名前の衝突はしない
    CREATE UNIQUE INDEX primary_key_name ON table_name (col_name, colname2 ..) 
    PCTFREE 50 INITRANS 20
    STORAGE( INITIAL 1M )
    TABLESPACE USERS
  ) ;
```

## 24.0 SQL コマンド一覧 （SQL の種類）
```
SQL DDL コマンド一覧
ALTER 〜 すべて (＝セッション、システム制御文を含むかどうかわかりません)
ANALYZE
ASSOCIATE STATISTICS / DISASSOCIATE STATISTICS
AUDIT
COMMENT 

CREATE 〜 すべて
DROP 〜 すべて
TRUNCATE
FLASHBACK 〜 すべて
PURGE
RENAME 

GRANT
REVOKE
NOAUDIT

データ操作言語 / DML (Data Manipulation Language） 
Oracle において DML とは Data ( access and ) Manipulation Language となっている。
SQL DML コマンド一覧
SELECT (≠ Manipulate) ／ SELECT FOR UPDATE
INSERT
DELETE
UPDATE
MERGE  

CALL
LOCK TABLE 

EXPLAIN PLAN

トランザクション制御文 
トランザクション制御文
COMMIT
ROLLBACK
SET TRANSACTION
SAVEPOINT

セッション制御文 ( ALTER SESSION / SET ROLE ) 
セッションのプロパティを設定する。(暗黙コミットは発生しない)
ALTER SESSION 
ADVISE { COMMIT|ROLLBACK | NOTHING }
CLOSE DATABASE LINK dblink
{ ENABLE | DISABLE } COMMIT IN PROCEDURE
{ ENABLE | DISABLE } GUARD
{ ENABLE | DISABLE | FORCE } PARALLEL { DML | DDL |QUERY} [ PARALLEL integer ]
ENABLE RESUMABLE [ TIMEOUT integer ] [ NAME string ]
DISABLE RESUMABLE
SET parameter = value [, value, ...]
SET ROLE 
NONE
ALL [ EXCEPT { role | role_list } ]
role IDENTIFIED BY password

システム制御文 ( ALTER SYSTEM ) 
インスタンスのプロパティを設定する。(暗黙コミットは発生しない)
ALTER SYSTEM 
ARCHIVE LOG 〜
CHECKPOINT [ GLOBAL | LOCAL ]
CHECK DATAFILES [ GLOBAL | LOCAL ]
{ ENABLE | DISABLE } DISTRIBUTED RECOVERY
```

## 25.0 DMLの基本形式:INSERT
```
INSERT INTO USER_MASTER (
        USER_ID, DEPT_NO, USER_NAME, CREATED_ON, MODIFIED_ON
) VALUES (
        '0020', '1001',
        '小泉 純一',
        DEFAULT,
        NULL
) ;
-- 行コメント
```

## 26.0 DMLの基本形式:SELECT
```
SELECT * 
  FROM USER_MASTER
 WHERE CREATED_ON BETWEEN '2004/10/01' AND '2004/10/31'
 または
SELECT * 
  FROM USER_MASTER
 WHERE CREATED_ON >= '2004/10/01' AND CREATED_ON <= '2004/10/31'
```

## 27.0 DMLの基本形式:UPDATE
```
DELETE FROM (
     SELECT
            DEPT_NO
     FROM USER_MASTER
     WHERE  DEPT_NO = '1002'
) -- [ ビューの別名 ]
 /*
 WHERE
    DEPT_NO = '1002'
 */
```

## 28.0 日付に変換
```
alter session set nls_timestamp_tz_format = 'YYYY-MM-DD HH24:MI:SSXFF TZR';
 
SQL> select tzr, ts_tz, ts_tz AT LOCAL as at_local_time from at_timezone_sample;
 
TZR             TS_TZ                              AT_LOCAL_TIME
--------------- ---------------------------------- ----------------------------------
Asia/Tokyo      2007-01-01 09:00:00.000000 +09:00  2007-01-01 09:00:00.000000 +09:00
UTC             2007-01-01 09:00:00.000000 +00:00  2007-01-01 18:00:00.000000 +09:00
US/Hawaii       2007-01-01 09:00:00.000000 -10:00  2007-01-02 04:00:00.000000 +09:00
US/Pacific      2007-01-01 09:00:00.000000 -07:00  2007-01-02 01:00:00.000000 +09:00
```

## 29.0 SQL 比較条件、比較演算子 
```
=	等しい
<>	等しくない
!=	¬= は、あまり一般的でないプラットフォーム向け
^=	<> は標準SQLに規定されている不等号
¬=	
>	（左辺が）より大きい、より小さい
<	
>=	（左辺が）以上、以下
<=	
```

## 30.0 NULL 値の検索 
```
SQL> select * from null_test where col IS NULL;
 
COL
------
<NULL>
```

## 31.0 重複行の削除: DISTINCT 
```
SELECT DISTINCT /* 重複行を削除するキーワード DISTINCT */
       DEPT_NO
  FROM USER_MASTER
 ORDER BY DEPT_NO
```

## 32.0 SELECT ＊ と疑似列を併記する方法 
```
SQL> select * from my_table where rownum <= 10;
 
FIRST_NAME           LAST_NAME
-------------------- -------------------------
Ellen                Abel
Sundar               Ande
Mozhe                Atkinson
David                Austin
Hermann              Baer
Shelli               Baida
Amit                 Banda
Elizabeth            Bates
Sarah                Bell
David                Bernstein
 
10行が選択されました。
 
SQL> select rownum, * from my_table where rownum <= 10;
select rownum, * from my_table where rownum <= 10
               *
行1でエラーが発生しました。:
ORA-00936: 式がありません。
```

## 33.0 並び替え:ORDER BY 
```
SELECT * FROM USER_MASTER
 ORDER BY DEPT_NO DESC
```

## 34.0 検索結果のグループ化 (GROUP BY と HAVING) 
```
SELECT "学年", "生徒番号" FROM "成績表"
WHERE "学年" = 4
GROUP BY "生徒番号"
HAVING MAX("成績") >= 3
```

## 35.0 SELECT 時に明示的な行ロックを行なう方法 
```
SELECT ... FOR UPDATE ;
IF (condition) THEN
	UPDATE ... SET ... ;
	-- COMMIT;  ここには COMMIT 文を記述しない
END IF;
COMMIT ;   -- ← ここで COMMIT すると FOR UPDATE は常に解放される
```

## 36.0 UNION と UNION ALL 集合演算子 
```
SELECT 1, 2 FROM DUAL
UNION ALL
SELECT 1, 2 FROM DUAL;
         1          2
---------- ----------
         1          2
         1          2
```

## 37.0 INTERSECT
```
SELECT 1, 2 FROM DUAL
UNION
SELECT 2, 3 FROM DUAL
INTERSECT
SELECT 1, 2 FROM DUAL;
 
         1          2
---------- ----------
         1          2
```

## 38.0 ROWNUM 擬似列 
```
SELECT ROWNUM FROM EMP ;
    ROWNUM
----------
         1
         2
  ...
```

## 39.0 SQL の IF 「CASE 〜 WHEN 式」 
```
SQL> select
  2     color_code,　　　　　　　　   -- カラーコード
  3     CASE color_code
  4       WHEN 'FFF' THEN 'WHITE'　   -- FFF なら白
  5       WHEN '000' THEN 'BACK'      -- 000 なら黒
  6       ELSE             color_code -- それ以外ならコード値を戻す
  7     END color_name
  8  from
  9     color_sample;
 
COLOR_CODE COLOR_NAME
---------- ----------
FFF        WHITE
000        BACK
F00        F00
0F0        0F0
00F        00F
```

## 40.0 書式
```
書式	入力
fmt	n
TO_CHAR( n, '99.99')	0.5
	-0.5
	500
	0.005
	0
TO_CHAR( n, '9')	0
TO_CHAR( n, '00.00')	0.5
```

## 41.0 日付用の書式
```
主な用途は TO_CHAR（日付）、TO_DATE、TO_TIMESTAMP 関数などにおいて日付、
時刻用のフォーマット文字列として使用する。
```

## 42.0 SYSDATE で色々やってみる 
```
CREATE OR REPLACE FUNCTION FUNC_GET_TIMESTAMP
RETURN TIMESTAMP
IS
BEGIN
  RETURN SYSTIMESTAMP;
END;
/
SELECT
    D7 D7_1
    ,TO_CHAR(SYSTIMESTAMP, 'FF6')           D1
    ,TO_CHAR(FUNC_GET_TIMESTAMP(), 'FF6')   D2
    ,TO_CHAR(FUNC_GET_TIMESTAMP(), 'FF6')   D3
    ,TO_CHAR(SYSTIMESTAMP, 'FF6')           D4
    ,( SELECT TO_CHAR(SYSTIMESTAMP, 'FF6')  FROM MY_DUAL ) D5
    , D6
    , D7 D7_2
 FROM (
    SELECT
            'DUMMY'
　　　　　　,TO_CHAR(SYSTIMESTAMP, 'FF6')            D6
            ,TO_CHAR(FUNC_GET_TIMESTAMP(), 'FF6')    D7
    FROM
            USER_CATALOG
    WHERE ROWNUM <= 5    --- これの有り無しで結果が異なった。
 );
 
 実行計画  ROWNUM <= 5  を使用した場合
|8|SELECT STATEMENT|
|1| └TEST.MY_DUAL TABLE ACCESS [FULL]|
|7|   TEST. VIEW|
|6|   └COUNT [STOPKEY]|
|5|       FILTER|
|2|       └SYS.OBJ$ TABLE ACCESS [FULL]|
|4|       └SYS.TAB$ TABLE ACCESS [CLUSTER]|
|3|         └SYS.I_OBJ# INDEX [UNIQUE SCAN]|
 
 実行計画  ROWNUM <= 5  を指定していない場合
|6|SELECT STATEMENT
|1|TEST.MY_DUAL TABLE ACCESS [FULL]
|5|FILTER
|2|└SYS.OBJ$ TABLE ACCESS [FULL]
|4|└SYS.TAB$ TABLE ACCESS [CLUSTER]
|3|  └SYS.I_OBJ# INDEX [UNIQUE SCAN]
```

## 43.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtaiBADqiIat-6k_8x45?alt=media&token=e9ceb421-9a51-4c9e-9b0f-4fa2b95e3653
