function addString(stringA){
  var greeting = "こんにちは" + stringA;
  return greeting;
}

//alertStringという変数に関数addStringを格納
//ここで引数に渡したい引数を入れる
var alertString;
alertString = addString("しろくまさん。");

// 作成した変数をアラートに表示させる
alert(alertString);