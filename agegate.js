/*
  21+ age check. Visitors enter their date of birth (MM/DD/YYYY).
  A passed check is remembered on that device for 30 days.
*/
(function () {
  var KEY = "th_age_ok";
  var DAYS = 30;
  var root = document.documentElement;
  var gate = document.getElementById("agegate");
  if (!gate) return;
  if (root.classList.contains("age-ok")) { gate.parentNode.removeChild(gate); return; }

  // Keep keyboard and screen readers inside the check until it's passed
  var others = Array.prototype.filter.call(document.body.children, function (n) {
    return n !== gate && n.tagName !== "SCRIPT";
  });
  others.forEach(function (n) { n.setAttribute("inert", ""); n.setAttribute("aria-hidden", "true"); });

  var m = document.getElementById("ag-m");
  var d = document.getElementById("ag-d");
  var y = document.getElementById("ag-y");
  var err = gate.querySelector(".agegate-error");
  var form = gate.querySelector("form");
  [m, d, y].forEach(function (el) { el.max_ = Number(el.getAttribute("data-max")); });

  // Digits only; extra digits (fast typing or a pasted date) flow into the next box
  [[m, d], [d, y], [y, null]].forEach(function (pair) {
    var el = pair[0], next = pair[1];
    el.addEventListener("input", function () {
      var digits = el.value.replace(/\D/g, "");
      el.value = digits.slice(0, el.max_);
      var rest = digits.slice(el.max_);
      if (!next) return;
      if (rest) {
        next.value = rest;
        next.focus();
        next.dispatchEvent(new Event("input")); // may pass digits on again and move focus further
      } else if (el.value.length === el.max_) {
        next.focus();
      }
    });
  });
  [d, y].forEach(function (el, i) {
    var prev = i ? d : m;
    el.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !el.value) prev.focus();
    });
  });

  function show(msg, field) {
    err.textContent = msg;
    err.hidden = false;
    if (field) field.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var mm = parseInt(m.value, 10), dd = parseInt(d.value, 10), yy = parseInt(y.value, 10);
    var now = new Date();
    if (!(mm >= 1 && mm <= 12)) return show("Enter your birth month as a number from 01 to 12.", m);
    if (!(dd >= 1 && dd <= 31)) return show("Enter your birth day as a number from 01 to 31.", d);
    if (y.value.length !== 4 || yy < 1900 || yy > now.getFullYear()) return show("Enter your birth year with 4 digits, like 1985.", y);
    var dob = new Date(yy, mm - 1, dd);
    if (dob.getMonth() !== mm - 1 || dob.getDate() !== dd) return show("That date doesn't exist. Check the month and day.", d);
    if (dob > now) return show("Enter a date in the past.", y);
    var turns21 = new Date(yy + 21, mm - 1, dd);
    if (turns21 > now) {
      return show("Sorry, you must be 21 or older to visit this site.");
    }
    try { localStorage.setItem(KEY, String(Date.now() + DAYS * 864e5)); } catch (x) {}
    root.classList.add("age-ok");
    others.forEach(function (n) { n.removeAttribute("inert"); n.removeAttribute("aria-hidden"); });
    gate.parentNode.removeChild(gate);
    var main = document.getElementById("main");
    if (main) { main.setAttribute("tabindex", "-1"); main.focus({ preventScroll: true }); }
  });

  m.focus({ preventScroll: true });
})();
