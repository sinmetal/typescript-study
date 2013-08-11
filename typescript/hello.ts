module Greeting {
    export class Hello {
        constructor(private text: string) {
        }
        say(): void {
            console.log(this.text);
        }
    }
}

var hello : Greeting.Hello = new Greeting.Hello("Hello World!");
hello.say();

// 関数型リテラル
var hoge : ()=>void = function() {

};

var piyo:Function = hoge;
hoge.apply(null);


// 省略可能な引数
function omissionArgument(searchString: string, position?: number) {
}

// デフォルト値を入れることもできる。デフォルト値を入れた場合、省略可能であるとみなされる
function defaultArgument(searchString: string, position: number = 0) {
}

// 可変長引数
function variableLengthArgument(...content: any[]) {
}

// function文における型注釈
function functionSentence(str: string) : number {
    return 0;
}

// function式における型注釈
var functionFormula : (str: string) => number = function (str: string) : number {
    return 0;
};

// 関数のオーバーロード
function createVector(v: string): string;
function createVector(x:number, y:number): string;
function createVector(a:any, b?:number): string {
    // こいつが本体。本体は最後に定義する。
    return "";
}

// 定数によるオーバーロード
//interface Hoge {
//    createElement(tagName: string) :void;
//    createElement(tagName "a"): string;
//}

//var Hoge.createElement("a");って呼ぶと、stringが返るようになるらしい

// アロー関数式
(x) => { return Math.sin(x); };
(x) => Math.sin(x);
x => { return Math.sin(x); };
x => Math.sin(x);

// 配列
var seasons : string[] = ["spring", "summer", "fall", "winter"]

// オブジェクト型リテラル
var object2d: { position: number; paint: ()=>void; };

object2d = {
    position: 1,
    paint: ()=>{ console.log(this.position); },
    size: 30 // 不必要なメンバがあっても代入は出来る。でも、アクセスはできない。
}