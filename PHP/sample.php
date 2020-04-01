<?php

// 1. 基本的な記述方法

// PHPは`.php`という拡張子のファイルに記述します。
// HTMLのソースコードの中で`<?php`から始まる部分がPHPのコード部分になります。
// PHPでは文末にセミコロン`;`が必要になります。
// コメントを書くときは、`//`を使います。
/* また、複数行に渡るコメントは
このように書くことができます。*/
// オブジェクトの値を出力するときは、`echo`を使います。


// 2. 変数とデータ型

// 変数は、`$変数名 = 値;`として宣言します。

$str = '文字列'; // 文字列
echo $str;

$num = 123; // 数値
echo $num;

$isBoolean = true; // 真偽値
echo $isBoolean;

$arr = array('Python', 'R', 'JavaScript', 'PHP'); // 配列
echo $arr;

$dict = array(
    'Python' => 'AI',
    'R' => 'statistics',
    'JavaScript' => 'web',
    'PHP' => 'WordPress'
); // 連想配列
echo $dict;


// 3. 制御文

// 3.1. 条件分岐

// 3.1.1.  if文

// if文は、`if (条件) {処理}`と記述します。
// さらに場合分けするときは、`else`や`else if`を使います。

$num = 3;

if ($num == 1) {
    echo '1';
} else if ($num == 2) {
    echo '2';
} else if ($num == 3) {
    echo '3';
} else {
    echo '1でも2でも3でもない';
}


// 3.1.2. switch文

// if文で場合分けが多くなる場合は、switch文を使うと簡単に書けます。
// switch文は、`switch (変数) {case 値: 処理; ・・・}`と記述します。

$num = 3;

switch ($num) {
    case 1:
        echo '1';
        break;
    case 2:
        echo '2';
        break;
    case 3:
        echo '3';
        break;
    default:
        echo '1でも2でも3でもない';
        break;
}

// なお、`break`を書かないと、条件に合った場合でも後続の`case`の処理が走ってしまうので注意が必要です。


// 3.2. 反復処理

// 3.2.1. for文

// 一定回数だけ繰り返し処理を実行する（繰り返し回数があらかじめ分かっている）ときは、for文を用います。
// for文は、`for ($変数名 = 初期値; $変数 <= 最大値; $変数の値の更新)`と記述します。

for ($i = 1; $i <= 5; $i++) {
    echo $i;
}

// ここで、`$i++`となっているのは、`$i = $i + 1`すなわち反復処理を繰り返すごとに変数`$i`を1ずつ大きくしていくことを示しています。
// これは、`$i += 1`とも書けますが、変数の値を1ずつ更新していく場合は、この書き方はあまりせず、`$i++`または`$i--`と書きます。
// 変数の更新幅が1以外の場合は、`$i += 2`のように書きます。

// また、`foreach ($配列 as $変数名) {処理}`とすると、配列の要素を一つずつ取り出すことができます。

$arr = array('Python', 'R', 'JavaScript', 'PHP');

foreach ($arr as $lang) {
    echo $lang;
}


// 3.2.2. while文

// ある条件を満たす間だけ処理を繰り返す場合は、while文を用います。
// while文は、`while (条件) {処理}`と記述します。

$i = 1;

while ($i < 5) {
    echo $i;
    $i++; // 変数の値の更新
}


// 4. 関数

// 関数は、`function 関数名(引数){処理}`とすることで作成できます。

function copyNumber($num) {
    return $num;
}

echo copyNumber(123);


// 5. クラス

// クラスは、`class クラス名 {プロパティ、メソッドなどの内容}`とすることで作成できます。
// `new`を使うことで、新しいインスタンスを生成できます。

class Human {
    public $name;
    public $age;
    public function introduceMyself() {
        return 'I am ' + $this->name + ' and ' + $this->age + ' years old. ';
    }
}

$yukiya = new Human();
$yukiya->name = 'Yukiya';
$yukiya->age = 31;


echo $yukiya->name;
echo $yukiya->age;
echo $yukiya->introduceMyself();


?>