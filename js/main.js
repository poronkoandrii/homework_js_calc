$(document).ready(function () {
  let num = "";
  let symbol;
  $(".clear").click(() => {
    document.form.view.value = "";
  });
  $(".back").click(() => {
    let back = document.form.view.value;
    document.form.view.value = back.substr(0, back.length - 1);
  });
  $(".num").click(function () {
    if (document.form.view.value != symbol) {
      document.form.view.value =
        document.form.view.value + $(this).attr("value");
    } else {
      document.form.view.value = "";
      document.form.view.value = $(this).attr("value");
    }
  });
  $(".symbol").click(function () {
    if (!num) {
      num = document.form.view.value;
    }
    if (
      ~num.indexOf("*") ||
      ~num.indexOf("/") ||
      ~num.indexOf("+") ||
      ~num.indexOf("-")
    ) {
      num = num.substr(0, num.length - 1);
      console.log(num);
    }
    symbol = $(this).attr("value");
    if (num) {
      num += symbol;

      document.form.view.value = symbol;
    }
    return num, symbol;
  });
  $(".point").click(function () {
    let point = $(this).attr("value");
    if (point === "." && document.form.view.value) {
      document.form.view.value += point;
    } else {
      document.form.view.value = "0" + point;
    }
  });
  $(".equal").click(() => {
    if (num) {
      document.form.view.value = eval(num + document.form.view.value);
      return (num = "");
    }
  });
});
