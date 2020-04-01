// 1. 基本的な記述方法

// JavaScriptは、`.js`が拡張子の外部ファイルを作成するか、HTMLファイルに`<script>`タグを作って記述するかのどちらかで利用することが多いです。
// 各行の最後には、セミコロン`;`を書くようにします（セミコロンがなくても動作しますが、書いた方が良いです）。
// 「//」以降は、その行の最後までコメントと認識され、プログラムの実行範囲から除外されます。
// 複数行にわたってコメントを書きたい場合は、`/* */`を用います。
// オブジェクトの値を出力するときには、`console.log()`を用います。


// 2. 変数とデータ型

// 変数は、`let 変数名 = 値`で宣言します。

let str = '文字列'; // 文字列
console.log(str);

let num = 12345; // 数値
console.log(num);

let isBool = true; // 真偽値
console.log(isBool);

let arr = ['Python', 'R', 'JavaScript', 'PHP']; // 配列
console.log(arr);

let obj = {'Python': 'AI', 'R': 'statistics', 'JavaScript':'web', 'PHP': 'WordPress'}; // オブジェクト
console.log(obj);

// 一方、定数を使いたい場合は、`const`を使います。
// `let`で宣言した変数は値が更新できるのに対し、`const`で宣言した定数は値を更新することができません。

const str = '定数';
// str = '変数'; // 定数の値は更新できない


// 3. 制御文

// 3.1. 条件分岐

// 3.1.1. if文

// if文は、`if (条件) {処理}`と記述します。
// さらに場合分けするときは、`else`や`else if`を使います。

let num = 3;

if (num == 1) {
    console.log('1');
} else if (num == 2) {
    console.log('2');
} else if (num == 3) {
    console.log('3')
} else {
    console.log('1でも2でも3でもない')
}


// 3.1.2. switch文

// if文で場合分けが多くなる場合は、switch文を使うと簡単に書けます。
// switch文は、`switch (変数) {case 値: 処理; ・・・}`と記述します。

let num = 3;

switch (num) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    default:
        console.log('1でも2でも3でもない');
        break;
}

// なお、`break`を書かないと、条件に合った場合でも後続の`case`の処理が走ってしまうので注意が必要です。


// 3.2. 反復処理

// 3.2.1. for文

// 一定回数だけ繰り返し処理を実行する（繰り返し回数があらかじめ分かっている）ときは、for文を用います。
// for文は、`for (var 変数名 = 初期値; 変数 <= 最大値; 変数の値の更新)`と記述します。

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ここで、`i++`となっているのは、`i = i + 1`すなわち反復処理を繰り返すごとに変数`i`を1ずつ大きくしていくことを示しています。
// これは、`i += 1`とも書けますが、変数の値を1ずつ更新していく場合は、この書き方はあまりせず、`i++`または`i--`と書きます。
// 変数の更新幅が1以外の場合は、`i += 2`のように書きます。

// また、`for (var 変数名 in 配列) {処理}`とすると、配列の要素を一つずつ取り出すことができます。

let arr = ['Python', 'R', 'JavaScript', 'PHP'];

for (let key in arr) {
    console.log(key); // キーを出力
    console.log(arr[key]); // 値を出力
}

for (let key of arr) {
    console.log(key); // キーを出力
}


// さらに、配列の代わりにオブジェクトを対象とする場合は、以下のようになります。

let obj = {'Python': 'AI', 'R': 'statistics', 'JavaScript':'web', 'PHP': 'WordPress'};

for (let key in obj) {
    console.log(key); // キーを出力
    console.log(obj[key]); // 値を出力
}


// 3.2.2. while文

// ある条件を満たす間だけ処理を繰り返す場合は、while文を用います。
//  while文は、`while (条件) {処理}`と記述します。

let num = 1;

while (num < 5) {
    console.log(num);
    num++; // 変数の値の更新
}


// 以下のように、`do while`を使うと、必ず1回は処理が実行されます。

let num = 1;

do {
    console.log(num);
    num++;
} while (num < 1);


// 4. 関数

// 関数は、`function 関数名(引数){処理}`とすることで作成できます。

function copyNumber(num) {
    return num;
}

console.log(copyNumber(123));


// 以下のように書くこともできます。

let myFunc = function copyNumber(num) {
    return num;
};

console.log(myFunc(123));


// 5. オブジェクト

// オブジェクトは、`var オブジェクト名 = {キー: 値, ・・・}`とすることで作成できます。

let human = {
    name: 'Yukiya',
    age: 31,
    introduceMyself: function() {
        return 'I am ' + human.name + ' and ' + human.age + ' years old. ';
    }
};

console.log(human.introduceMyself());


// 以下のように書くこともできます。

let human = {};
human.name = 'Yukiya';
human.age = 31;
human.introduceMyself = function() {
    return 'I am ' + human.name + ' and ' + human.age + ' years old. ';
}

console.log(human.introduceMyself());


// `new`演算子を用いることで、新しいインスタンスを作成できます。

let human = function(name, age) {
    this.name = name;
    this.age = age;
    this.introduceMyself = function() {
        return 'I am ' + this.name + ' and ' + this.age + ' years old. ';
    }
};

let human1 = new human('Yukiya', 31);
console.log(human1.introduceMyself());





