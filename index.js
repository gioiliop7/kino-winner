function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let money = 0.5;
let numbers_played = [50, 23, 22,23];

//Remove dublicates from array if exist
numbers_played = numbers_played.filter(onlyUnique);

let numbers_len = numbers_played.length;
let successes = [];
let draw;
let odd;
let odd_bonus;
let kino_bonus = 24;
let kino_bonus_checkbox = true;
let total_money;
draw = [
  37, 43, 29, 11, 7, 8, 9, 10, 34, 30, 50, 40, 13, 14, 15, 23, 24, 25, 32, 22,
];

numbers_played.forEach((element) => {
  draw.forEach((number) => {
    if (element == number) {
      successes.push(element);
    }
  });
});
let success_count = successes.length;
if (numbers_len > 12 || numbers_len < 1) {
  return;
} else {
  switch (numbers_len) {
    case 1:
      switch (success_count) {
        case 1:
          odd = 2.5;
          odd_bonus = 52.5;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 2:
      switch (success_count) {
        case 1:
          odd = 1;
          odd_bonus = 16;
          break;
        case 2:
          odd = 5;
          odd_bonus = 70;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 3:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 8;
          break;
        case 2:
          odd = 2.5;
          odd_bonus = 18;
          break;
        case 3:
          odd = 25;
          odd_bonus = 175;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 4:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 5;
          break;
        case 2:
          odd = 1;
          odd_bonus = 8;
          break;
        case 3:
          odd = 4;
          odd_bonus = 24;
          break;
        case 4:
          odd = 100;
          odd_bonus = 600;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 5:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 3;
          break;
        case 2:
          odd = 0;
          odd_bonus = 5;
          break;
        case 3:
          odd = 2;
          odd_bonus = 17;
          break;
        case 4:
          odd = 20;
          odd_bonus = 90;
          break;
        case 5:
          odd = 450;
          odd_bonus = 1350;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 6:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 3;
          break;
        case 3:
          odd = 1;
          odd_bonus = 9;
          break;
        case 4:
          odd = 7;
          odd_bonus = 27;
          break;
        case 5:
          odd = 50;
          odd_bonus = 300;
          break;
        case 6:
          odd = 1600;
          odd_bonus = 4100;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 7:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 3;
          break;
        case 3:
          odd = 1;
          odd_bonus = 8;
          break;
        case 4:
          odd = 3;
          odd_bonus = 13;
          break;
        case 5:
          odd = 20;
          odd_bonus = 80;
          break;
        case 6:
          odd = 100;
          odd_bonus = 400;
          break;
        case 7:
          odd = 5000;
          odd_bonus = 15000;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 8:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 3;
          break;
        case 3:
          odd = 0;
          odd_bonus = 4;
          break;
        case 4:
          odd = 2;
          odd_bonus = 7;
          break;
        case 5:
          odd = 10;
          odd_bonus = 30;
          break;
        case 6:
          odd = 50;
          odd_bonus = 200;
          break;
        case 7:
          odd = 1000;
          odd_bonus = 3000;
          break;
        case 8:
          odd = 15000;
          odd_bonus = 40000;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 9:
      switch (success_count) {
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 3;
          break;
        case 3:
          odd = 0;
          odd_bonus = 4;
          break;
        case 4:
          odd = 1;
          odd_bonus = 6;
          break;
        case 5:
          odd = 5;
          odd_bonus = 15;
          break;
        case 6:
          odd = 25;
          odd_bonus = 70;
          break;
        case 7:
          odd = 200;
          odd_bonus = 500;
          break;
        case 8:
          odd = 4000;
          odd_bonus = 10000;
          break;
        case 9:
          odd = 40000;
          odd_bonus = 100000;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 10:
      switch (success_count) {
        case 0:
          odd = 2;
          odd_bonus = 0;
          break;
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 2.5;
          break;
        case 3:
          odd = 0;
          odd_bonus = 3;
          break;
        case 4:
          odd = 0;
          odd_bonus = 4;
          break;
        case 5:
          odd = 2;
          odd_bonus = 7;
          break;
        case 6:
          odd = 20;
          odd_bonus = 60;
          break;
        case 7:
          odd = 80;
          odd_bonus = 180;
          break;
        case 8:
          odd = 500;
          odd_bonus = 1500;
          break;
        case 9:
          odd = 10000;
          odd_bonus = 25000;
          break;
        case 10:
          odd = 100000;
          odd_bonus = 250000;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 11:
      switch (success_count) {
        case 0:
          odd = 2;
          odd_bonus = 0;
          break;
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 2.5;
          break;
        case 3:
          odd = 0;
          odd_bonus = 3;
          break;
        case 4:
          odd = 0;
          odd_bonus = 4;
          break;
        case 5:
          odd = 1;
          odd_bonus = 6;
          break;
        case 6:
          odd = 10;
          odd_bonus = 25;
          break;
        case 7:
          odd = 50;
          odd_bonus = 105;
          break;
        case 8:
          odd = 250;
          odd_bonus = 550;
          break;
        case 9:
          odd = 1500;
          odd_bonus = 3500;
          break;
        case 10:
          odd = 15000;
          odd_bonus = 31000;
          break;
        case 11:
          odd = 500000;
          odd_bonus = 1200000;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
    case 12:
      switch (success_count) {
        case 0:
          odd = 4;
          odd_bonus = 0;
          break;
        case 1:
          odd = 0;
          odd_bonus = 2;
          break;
        case 2:
          odd = 0;
          odd_bonus = 2.5;
          break;
        case 3:
          odd = 0;
          odd_bonus = 3;
          break;
        case 4:
          odd = 0;
          odd_bonus = 3.5;
          break;
        case 5:
          odd = 0;
          odd_bonus = 4;
          break;
        case 6:
          odd = 5;
          odd_bonus = 10;
          break;
        case 7:
          odd = 25;
          odd_bonus = 50;
          break;
        case 8:
          odd = 150;
          odd_bonus = 350;
          break;
        case 9:
          odd = 1000;
          odd_bonus = 2200;
          break;
        case 10:
          odd = 2500;
          odd_bonus = 5500;
          break;
        case 11:
          odd = 25000;
          odd_bonus = 75000;
          break;
        case 12:
          odd = 1000000;
          odd_bonus = 2000000;
          break;
        default:
          odd = 0;
          odd_bonus = 0;
          break;
      }
      break;
  }

  total_money = odd * money;

  if (kino_bonus_checkbox == true) {
    if (numbers_played.includes(kino_bonus)) {
      total_money = odd_bonus * money;
    }
  }
}
