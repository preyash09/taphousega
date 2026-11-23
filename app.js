(function () {
  var site = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Rank lookup links
  $$(".js-rank").forEach(function (a) {
    a.href = site.rankLookup || "#";
    a.target = "_blank";
    a.rel = "noopener";
  });
  if (site.bonusTitle) $(".js-bonus-title").textContent = site.bonusTitle;
  $(".js-year").textContent = new Date().getFullYear();

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function shopUrl(b) {
    return "https://taphouseliquor.com/shop?ch-query=" + encodeURIComponent(b.search || b.name);
  }

  // Detail sheet
  var sheet = $(".js-sheet");
  function openSheet(b) {
    $(".js-sheet-img").src = b.photo ? "img/bottles/" + b.photo : "";
    $(".js-sheet-img").alt = b.name;
    $(".js-sheet-name").textContent = b.name;
    var nick = $(".js-sheet-nick");
    nick.textContent = b.nickname ? "“" + b.nickname + "”" : "";
    nick.hidden = !b.nickname;
    var thumbs = $(".js-sheet-thumbs"); thumbs.innerHTML = "";
    if (b.photo && b.photo2) {
      [b.photo, b.photo2].forEach(function (p, i) {
        var t = el("button", "thumb");
        t.type = "button";
        t.setAttribute("aria-label", i ? "Show back of bottle" : "Show front of bottle");
        if (!i) t.setAttribute("aria-current", "true");
        var im = el("img"); im.src = "img/bottles/" + p; im.alt = "";
        t.appendChild(im);
        t.addEventListener("click", function () {
          $(".js-sheet-img").src = "img/bottles/" + p;
          $$(".thumb", thumbs).forEach(function (x) { x.removeAttribute("aria-current"); });
          t.setAttribute("aria-current", "true");
        });
        thumbs.appendChild(t);
      });
    }
    var tags = $(".js-sheet-tags"); tags.innerHTML = "";
    if (b.soldOut) tags.appendChild(el("span", "badge badge-soldout", "Sold out"));
    if (b.isNew && !b.soldOut) tags.appendChild(el("span", "badge badge-new", "New"));
    if (b.pick) tags.appendChild(el("span", "badge", "Tap House Pick"));
    if (b.points) tags.appendChild(el("span", "badge badge-points", b.points));
    var chips = $(".js-sheet-chips"); chips.innerHTML = "";
    (b.details || []).forEach(function (d) { chips.appendChild(el("span", "chip", d)); });
    if (b.type) chips.appendChild(el("span", "chip", b.type.charAt(0).toUpperCase() + b.type.slice(1)));
    $(".js-sheet-price").textContent = b.price || "Ask in store for price";
    $(".js-sheet-shop").href = shopUrl(b);
    if (sheet.showModal) sheet.showModal(); else window.open(shopUrl(b), "_blank");
  }
  if (sheet) {
    sheet.addEventListener("click", function (e) { if (e.target === sheet) sheet.close(); });
  }

  function card(b) {
    var c = el("button", "card" + (b.soldOut ? " is-soldout" : ""));
    c.type = "button";
    c.setAttribute("aria-label", b.name + (b.price ? ", " + b.price : "") + ". Show details");
    var photo = el("div", "card-photo");
    if (b.photo) {
      var img = el("img");
      img.src = "img/bottles/" + b.photo;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      photo.appendChild(img);
    }
    if (b.soldOut) photo.appendChild(el("span", "badge badge-soldout", "Sold out"));
    else if (b.pick) photo.appendChild(el("span", "badge", "Tap House Pick"));
    if (b.points) photo.appendChild(el("span", "badge badge-points", b.points));
    if (b.isNew && !b.soldOut) photo.appendChild(el("span", "badge badge-new", "New"));
    c.appendChild(photo);

    var body = el("div", "card-body");
    if (b.nickname) body.appendChild(el("p", "card-nick", "“" + b.nickname + "”"));
    body.appendChild(el("p", "card-name", b.name));
    if (b.details && b.details.length) {
      var chips = el("div", "chips");
      b.details.forEach(function (d) { chips.appendChild(el("span", "chip", d)); });
      body.appendChild(chips);
    }
    body.appendChild(el("p", "card-price", b.price || "Ask in store"));
    c.appendChild(body);
    c.addEventListener("click", function () { openSheet(b); });
    return c;
  }

  function render(box, list) {
    box.innerHTML = "";
    list.forEach(function (b) { box.appendChild(card(b)); });
  }

  render($(".js-bonus"), window.BONUS_BOTTLES || []);

  // Single barrels with filters
  var barrels = window.SINGLE_BARRELS || [];
  var filters = [
    { key: "all", label: "All", test: function () { return true; } },
    { key: "bourbon", label: "Bourbon", test: function (b) { return b.type === "bourbon"; } },
    { key: "rye", label: "Rye", test: function (b) { return b.type === "rye"; } },
    { key: "other", label: "Other", test: function (b) { return b.type && b.type !== "bourbon" && b.type !== "rye"; } }
  ];
  var fbox = $(".js-filters"), bbox = $(".js-barrels"), empty = $(".js-empty");
  function apply(key) {
    var f = filters.filter(function (x) { return x.key === key; })[0];
    var list = barrels.filter(f.test);
    render(bbox, list);
    empty.hidden = list.length > 0;
    $$(".filter", fbox).forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.key === key ? "true" : "false"); });
  }
  filters.forEach(function (f) {
    var n = barrels.filter(f.test).length;
    if (f.key !== "all" && n === 0) return;
    var b = el("button", "filter");
    b.type = "button";
    b.dataset.key = f.key;
    b.textContent = f.label;
    b.appendChild(el("span", "count", String(n)));
    b.addEventListener("click", function () { apply(f.key); });
    fbox.appendChild(b);
  });
  apply("all");
})();
