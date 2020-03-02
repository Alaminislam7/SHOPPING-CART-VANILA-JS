let removeCartItemButtons = document.querySelectorAll('.remove-item');
        for (let i = 0; i < removeCartItemButtons.length; i++) {

            let button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }

        let quantityInputs = document.querySelectorAll('.quantity-input');
        for (let i = 0; i < quantityInputs.length; i++) {

            let input = quantityInputs[i]
            input.addEventListener('change', quantityChanged);
        }

        function removeCartItem(event) {
            let buttonCliked = event.target;
            buttonCliked.parentElement.parentElement.remove()
            updateCartTotal()
        }

        function quantityChanged() {

            let input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            updateCartTotal()
        }

        function updateCartTotal() {
            let cartItemContainer = document.querySelector('.click-cart');
            let cartRows = cartItemContainer.querySelectorAll('.cart-row');

            let total = 0
            for (let i = 0; i < cartRows.length; i++) {
                let cartRow = cartRows[i]
                let priceElement = cartRow.querySelector('.shop-price');
                let quantityElement = cartRow.querySelector('.quantity-input');

                let price = parseFloat(priceElement.innerText.replace('$', ''))
                let quantity = quantityElement.value
                total = total + (price * quantity)
            }
            total = Math.round(total * 100) / 100
            document.querySelector('.cart-total-price').innerText = '$' + total;
        }