//①ユーザーにじゃんけんの手を入力してもらう入力ダイアログ表示
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーからひとつ選んでください。');

// ③JavaScriptがじゃんけんの手をランダムに出す関数を呼び出す
var js_hand = chooseJShand();

// ③②で使う変数を定義、⑥で作った「ユーザの手とJavaScriptのじゃんけんの手を比べる関数」を呼び出し、結果をjudgeに格納
var judge = winLose(user_hand, js_hand);

// ②結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果はあなたの' + judge + 'です。');

// ④じゃんけんの手をランダムに出す関数の作成
function chooseJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 ); //0~2の3つのランダムな整数を出す関数をjs_hand_numに格納
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ⑤ユーザの手とJavaScriptのじゃんけんの手を比べる関数を作る(if文)
function winLose(user, js){
  var winLoseString;

  if(user == "グー"){
    if(js == "グー"){
      winLoseString = "あいこ";
    } else if(js == "チョキ"){
      winLoseString = "勝ち";
    } else if(js == "パー"){
      winLoseString = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseString = "負け";
    } else if(js == "チョキ"){
      winLoseString = "あいこ";
    } else if(js == "パー"){
      winLoseString = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseString = "勝ち";
    } else if(js == "チョキ"){
      winLoseString = "負け";
    } else if(js == "パー"){
      winLoseString = "あいこ";
    }
  }

  return winLoseString;
}