Vue.component('cart', {
    data(){
        return {
            cart: [],
        }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let product of data.contents){
                    this.cart.push(product);
                }
            });
    },
    methods: {
        addProduct(product){
            let find = this.cart.find(
                item => item.id_product === product.id_product
                );
            if(find){
                this.$parent.putJson(`/api/cart/${product.id_product}`, 
                {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            product.quantity++
                        }
                    })
            }else{                
                const prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`/api/cart/${product.id_product}`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cart.push(prod)
                            this.$parent.countItems = this.cart.length;
                        }
                    })
            }
        },
        removeProduct(product){
            // this.cart.splice(this.cart.indexOf(product), 1);
            // this.countItems = this.cart.length;
            this.$parent.delJson(`/api/cart/${product.id_product}`)
            .then(data => {
                if (data.result) {
                    this.cart.splice(
                        this.cart.indexOf(product), 1
                        );
                    this.$parent.countItems = this.cart.length;
                } else {
                    console.log('Error');
                }
            })
        },
        reduceQty(product){
            if (product.quantity > 1) {
            this.$parent.putJson(`/api/cart/${product.id_product}`, 
            {quantity: -1})
                .then(data => {
                    if(data.result === 1){
                        product.quantity--;
                        this.$parent.countItems = this.cart.length;
                    }
                })
            }
        },
        increaseQty(product){
            this.$parent.putJson(`/api/cart/${product.id_product}`, 
            {quantity: 1})
            .then(data => {
                if(data.result === 1){
                    product.quantity++;
                    this.$parent.countItems = this.cart.length;
                }
            })
        },
    },
    props: ['visibility'],
    template: `
    <div class="cart-list" v-show="visibility">
        <h2  v-if="this.$parent.countItems == 0">Cart is empty :(</h2>
        <cart-item v-for="product of cart" 
        :key="product.id_product" 
        :img="product.img" 
        :product="product"
        @removeProduct="removeProduct"
        @reduceQty="reduceQty"
        @increaseQty="increaseQty"
        ></cart-item>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['product', 'img'],
    template: `
        <div class="shopping-cart-item">
        <img class="cart-image" :src="img" alt="image">
            <div class="shopping-cart-description">
                <div class="shopping-cart-header-wrp">
                    <h2>{{product.product_name}}</h2>
                    <button type="button" class="shopping-cart-close-button" 
                        @click="$emit('removeProduct', product)">
                    </button>
                </div>
                <p>Price: {{product.price}} $</p>
                <div class="shopping-cart-description-quantity">
                    <p>Quantity:</p>
                    <input type="number" readonly="readonly" min="1" :value="product.quantity" 
                    placeholder="">
                </div>
                <button class="remove-cart-button" :key="product.id_product" 
                    @click="$emit('removeProduct', product)">Удалить</button>
                <button class="reduce-cart-button" 
                    @click="$emit('reduceQty', product)">-</button>
                <button class="increase-cart-button" 
                    @click="$emit('increaseQty', product)">+</button>
            </div>
        </div>
    `
});