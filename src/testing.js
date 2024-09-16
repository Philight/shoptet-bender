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

    //     const url = "https://673800.myshoptet.com/api/";

    //     // const url =
    //     //   "https://673800.myshoptet.com/action/ApiOAuthServer/getAccessToken";

    //     fetch(url)
    //       .then((res) => console.log(res))
    //       .catch((e) => console.error(e));

    //     //
    //     $("body").append(`
    //      <h3>
    //          This is the text which has
    //          been inserted by JS
    //      </h3>

    //      <form action="">
    //        <input type="text" name="query" id="searchTesting" value="box" />
    //      </form>

    //      <div id="boxTesting" style="width: 200px; height: 200px; border: 1px solid red">
    // BOX INSTER HERE
    //      </div>

    //  `);

    //     let $searchInput = $("#searchTesting");
    //     let $searchContainer = $("#boxTesting");
    //     var xhr;

    //     function ajaxTesting() {
    //       var $form = $searchInput.parents("form");
    //       if (!xhr || xhr.readyState === 4) {
    //         console.log("ajax form", $form.serialize());
    //         xhr = $.ajax({
    //           url: "/action/ProductSearch/ajaxSearch/",
    //           type: "GET",
    //           headers: { "X-Shoptet-XHR": "Shoptet_Coo7ai" },
    //           data: $form.serialize(),
    //         })
    //           .done(function (result) {
    //             console.log("ajax result", result);
    //             var response = $.parseJSON(result);
    //             console.log("ajax result JSON", response);
    //             // $searchContainer.html(response);
    //             // if ($searchInput.is(":focus")) {
    //             //   $searchContainer.addClass("active");
    //             //   $("body").addClass("search-focused");
    //             // }
    //             shoptet.scripts.signalDomLoad("ShoptetDOMSearchResultsLoaded");
    //           })
    //           .fail(function () {
    //             // TODO: add error message
    //           });
    //       }
    //     }

    //     ajaxTesting();
    //     fulltextSearch($searchInput, $searchContainer);
  });
})();
