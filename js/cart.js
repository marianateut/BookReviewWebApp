window.Cart = {
    API_BASE_URL: "http://localhost:8085",

    getCart:function () {
        var userId = 39;
        $.ajax({
            url: Cart.API_BASE_URL + "/carts/" + userId

          //  method: "GET"

        }).done(function (response) {
            console.log(response);
            Cart.displayBooks(response.books);
        })
    },


    displayBooks:function (books) {
        var allBooksHtml = "";
        books.forEach(book => allBooksHtml += Cart.getBookHtml(book));
        $(".shop_table.cart tbody").html(allBooksHtml);
    },

    getBookHtml:function (book) {
        return `<tr class="cart_item">
                         <td class="product-remove">
                             <a title="Remove this item" class="remove" href="#">×</a> 
                         </td>
                         <td class="product-thumbnail">
                             <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="image/book2.png"></a>
                         </td>
                         <td class="product-name">
                             <a href="single-product.html">${book.title}</a> 
                         </td>
                         <td class="product-price">
                             <span class="amount">${book.price}</span> 
                         </td>
                         <td class="product-quantity">
                             <div class="quantity buttons_added">
                                 <input type="button" class="minus" value="-">
                                 <input type="number" size="4" class="input-text qty text" title="Qty" value="1" min="0" step="1">
                                 <input type="button" class="plus" value="+">
                             </div>
                         </td>
                         <td class="product-subtotal">
                             <span class="amount">${book.price}</span> 
                         </td>
                    </tr>`
    },


};


Cart.getCart();