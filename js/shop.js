window.Shop = {
    API_BASE_URL: "http://localhost:8085",

    getBooks:function () {
        $.ajax({
           // method: "GET" ,
            url: Shop.API_BASE_URL + "/books"

        }).done (function (response) {
            console.log(response)
            Shop.displayBooks(response.content);
        });
    },


    displayBooks:function (books) {
        var allBooksHtml = "";
        books.forEach(book => allBooksHtml += Shop.getBooksHtml(book));
        $(".single-product-area .row:first-child") .html(allBooksHtml);
    },

    getBooksHtml:function (book) {
        return `<div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img src="image/book1.png" alt="">
                        </div>
                        <h2><a href="">${book.title}</a></h2>
                        <div class="product-carousel-price">
                            <ins>$${book.price}</ins>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-book_id="${book.id}" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>`
    },

    addBookToCart: function (bookId) {
        //userId to be read from memory somehow in the future
        var requestBody = {
            userId: 39,
            bookId: bookId
        };
            console.log(requestBody)
        $.ajax({
            url: Shop.API_BASE_URL + "/carts",
            method:"PUT",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
            window.location.replace("cart.html")
        }) //asa fac navigatie spre alta pagina
    },

        bindEvents: function () {
            $(".single-product-area").delegate(".add_to_cart_button", "click", function (event) {
                event.preventDefault();

                let bookId = $(this).data("book_id");
                console.log(bookId);
                Shop.addBookToCart(bookId);
            })
        }
};

Shop.getBooks();
Shop.bindEvents();