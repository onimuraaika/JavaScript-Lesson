var max = 10;
var count = 0;
var number = 1;

while(number < max){    //（）の中身がtrueの間は{}内の処理が繰り返される
  number = number + 2;
  count = count + 1;
}

alert('2を足し続けて' + max + 'を超えるのに必要だった回数は' + count + '回です。');