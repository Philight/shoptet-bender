// import { forEachElement } from "./utilities";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    console.log("shoptet", shoptet);

    let selector = "";

    /**
     * Custom fn for iterating Nodes
     */
    var forEachElement = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); // passes back stuff we need
      }
    };

    /**
     * Add benefitBanner heading
     */
    selector = ".benefitBanner";
    var $benefitBanner = document.querySelector(selector);

    $benefitBanner.innerHTML =
      "<h2>Nejbližší akce</h2>" + $benefitBanner.innerHTML;

    /**
     * Add buttons
     */
    selector = ".benefitBanner, .products-block";
    var $sections = document.querySelectorAll(selector);

    forEachElement($sections, function (index, $elem) {
      const btnNames = ["Všechny akce", "Další články"];
      $elem.innerHTML += `<div class="btn-wrapper"><button class="btn btn-conversion">${$elem.getAttribute("id") === "products-2" ? btnNames[1] : btnNames[0]}</button></div>`;
    });

    /**
     * Add content to blog section
     */
    selector = "#products-2 .product .p-in";
    var $blogItems = document.querySelectorAll(selector);
    const blogPost = {
      date: "05.04.2021",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla non arcu lacinia neque faucibus fringilla. Aliquam in lorem sit amet leo...",
    };
    const links = [
      "/rubrika-1/clanok-01",
      "/rubrika-1/clanok-02",
      "/rubrika-1/clanok-03",
    ];

    forEachElement($blogItems, function (index, $elem) {
      console.log(index, $elem); // passes index + value back!
      $elem.innerHTML += `
    <div class="icon-wrapper f-center-y">
      <img src="https://cdn.myshoptet.com/usr/673800.myshoptet.com/user/documents/upload/assets/icons/calendar.png"/>
      <time class="small-text" data-post-date="${blogPost.date}">${blogPost.date}</time>
      <hr class="divider" />
    </div>
    <p class="text small-text">${blogPost.text}<a class="blog-link" href="${links[index]}">celý článek</a></p>  
        `;
    });

    /**
     * Style homepage headings
     */
    selector = ".homepage-group-title";
    var $homepageTitles = document.querySelectorAll(selector);

    forEachElement($homepageTitles, function (index, $title) {
      if ($title.classList.contains("h4")) {
        $title.classList.replace("h4", "h2");
      }
    });

    /**
     * Replace cart
     */
    selector = ".toggle-window.cart-count";
    var $cart = document.querySelector(selector);
    var $newCart = document.createElement("a");

    for (const attr of $cart.attributes) {
      $newCart.setAttribute(attr.name, attr.value);
    }

    $newCart.innerHTML = `<img src="https://cdn.myshoptet.com/usr/673800.myshoptet.com/user/documents/upload/assets/icons/shopping_bag.svg" alt="Shopping Cart" />`;
    $cart.outerHTML = $newCart.outerHTML;

    /**
     * Add flair
     */
    selector = ".row.banners-row";
    const illustration1 =
      "https://cdn.myshoptet.com/usr/673800.myshoptet.com/user/documents/upload/assets/images/kompozicia_transparent.png";
    const illustration2 =
      "https://cdn.myshoptet.com/usr/673800.myshoptet.com/user/documents/upload/assets/images/kompozicia--sm.png";

    var $topBanner = document.querySelector(selector);
    for (const ill of [1, 2]) {
      $topBanner.innerHTML =
        `<img class="illustration ill-${ill} transparent" src="${illustration1}" alt="illustration-${ill}" />` +
        $topBanner.innerHTML;
    }

    selector = ".products#products-1";
    var $categoriesSection = document.querySelector(selector);
    for (const ill of [3, 4]) {
      $categoriesSection.innerHTML =
        `<img class="illustration ill-${ill} transparent" src="${illustration2}" alt="illustration-${ill}" />` +
        $categoriesSection.innerHTML;
    }

    /**
     * Footer extra links
     */
    selector =
      "#footer .custom-footer__section2 h4, #footer .custom-footer__section2 a";
    var $legalItems = document.querySelectorAll(selector);
    const itemLabels = [
      "Užitečné informace",
      "Obchodní podmínky",
      "Zpracování osobních údajů",
    ];

    forEachElement($legalItems, function (index, $elem) {
      $elem.textContent = itemLabels[index];
    });

    selector = "#footer .custom-footer__contact a";
    var $contactLinks = document.querySelectorAll(selector);
    const fb =
      "https://cdn.myshoptet.com/usr/673800.myshoptet.com/user/documents/upload/assets/icons/facebook.svg";
    const ig =
      "https://cdn.myshoptet.com/usr/673800.myshoptet.com/user/documents/upload/assets/icons/instagram.svg";

    forEachElement($contactLinks, function (index, $elem) {
      $elem.innerHTML = $elem.getAttribute("href").includes("facebook")
        ? `<img class="facebook" src="${fb}" alt="facebook link" />`
        : $elem.getAttribute("href").includes("instagram")
          ? `<img class="instagram" src="${ig}" alt="instagram link" />`
          : "info@kniznistezka.cz";
    });

    /**
     * Footer bottom (copyright)
     */
    selector = ".container.footer-bottom";

    var $footerBottom = document.querySelector(selector);
    $footerBottom.outerHTML = `<div class="footer-bottom__wrapper">${$footerBottom.outerHTML}<</div>`;
  });
})();
