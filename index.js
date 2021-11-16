startTime();

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time-now").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var input = document.getElementById("numbers");
var goodKey = "0123456789,";

var checkInputTel = function (e) {
  var key = typeof e.which == "number" ? e.which : e.keyCode;
  var start = this.selectionStart,
    end = this.selectionEnd;

  var filtered = this.value.split("").filter(filterInput);
  this.value = filtered.join("");

  /* Prevents moving the pointer for a bad character */
  var move =
    filterInput(String.fromCharCode(key)) || key == 0 || key == 8 ? 0 : 1;
  this.setSelectionRange(start - move, end - move);
};

var filterInput = function (val) {
  return goodKey.indexOf(val) > -1;
};

input.addEventListener("input", checkInputTel);

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let date_div = document.getElementById("date");
date_div.innerText = date;

$("#kinosubmit").click(function () {
  let numbers_played = [];
  let the_numbers = $("#numbers").val();
  the_numbers = the_numbers.split(",");
  the_numbers.forEach((element) => {
    element = parseInt(element);
    numbers_played.push(element);
  });

  //Remove NaN values

  numbers_played = numbers_played.filter(function (value) {
    return !Number.isNaN(value);
  });

  if (!$("#money").val() || !$("#numbers").val()) {
    alert("Συμπλήρωσε τα πεδία");
  }

  let numbers_len = numbers_played.length;

  numbers_played = numbers_played.filter(function (number) {
    return number > 0 && number < 81;
  });

  console.log(numbers_played);

  let fetch_url;
  let drawidinput = document.getElementById("drawid");
  drawidinput = drawidinput.value;

  if ($("#drawid").val()) {
    fetch_url = `https://api.opap.gr/draws/v3.0/1100/${drawidinput}`;
  } else {
    fetch_url = "https://api.opap.gr/draws/v3.0/1100/last-result-and-active";
  }

  fetch(fetch_url)
    .then((response) => response.json())
    .then((data) => {
      if (fetch_url.indexOf("last-result-and-active") > -1) {
        data = data.last;
      }
      let drawid = data.drawId;
      let drawtext = document.getElementById("draw");
      drawtext.innerText = drawid;
      let drawtime = data.drawTime;
      var date = new Date(drawtime);
      drawtime =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes();

      let timetext = document.getElementById("time");
      timetext.innerText = drawtime;

      let winningNumbers = data.winningNumbers;

      //Remove dublicates from array if exist
      numbers_played = numbers_played.filter(onlyUnique);
      let successes = [];
      let draw;
      let odd;
      let odd_bonus;
      let kino_bonus = winningNumbers.bonus[0];
      let kino_bonus_checkbox = $("input[name=kinobonus]:checked").val();
      let money = document.getElementById("money");
      money = money.value;
      let total_money;
      draw = winningNumbers.list;

      numbers_played.forEach((element) => {
        draw.forEach((number) => {
          if (element == number) {
            successes.push(element);
          }
        });
      });
      let success_count = successes.length;
      if (numbers_len > 12 || numbers_len < 1) {
        console.log("Δεν υπολόγισα κάτι");
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

        if (kino_bonus_checkbox == "yes") {
          if (numbers_played.includes(kino_bonus)) {
            total_money = odd_bonus * money;
          }
        }
        let amount = document.querySelector(".amount");
        if (total_money > 0) {
          total_money = new Intl.NumberFormat("el-GR", {
            style: "currency",
            currency: "EUR",
          }).format(total_money);
          amount.innerText = total_money;
        } else {
          amount.innerText = "Δεν υπάρχει κέρδος";
        }
      }
    })
    .catch((error) => {
      alert("Δεν μπόρεσε να βρεθεί η κλήρωση, παρακαλώ ξαναπροσπάθησε");
      console.log(error);
    });
  $("#numbers").val("");
});
