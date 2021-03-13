Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
  <div class="product">
  <div class="product-image">
    <img v-bind:src="image" />
  </div>
  <div class="product-info">
    <h1>{{ title }}</h1>
    <p :class="{outOfStock: !inStock}">In Stock</p>
    <p v-show="onSale">On Sale!</p>
    <p>Shipping: {{shipping}}</p>
    <!-- <p v-if="inventory > 10">In Stock</p>
    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
    <p v-else>Out of Stock</p> -->

    <ul class="product-details">
      <li v-for="detail in details">{{detail}}</li>
    </ul>

    <div
      class="color-box"
      v-for="(variant,index) in variants"
      :key="variant.variantId"
      :style="{backgroundColor: variant.variantColor}"
      @mouseover="updateProduct(index)"
    ></div>

    <ul class="size-list">
      <li v-for="size in sizes">{{size}}</li>
    </ul>
    <button
      class="button add"
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabled: !inStock}"
    >
      Add to cart
    </button>
    <button class="button remove" v-on:click="removeFromCart">
      Remove from cart
    </button>
    <div class="cart">
      <p>Cart({{cart}})</p>
    </div>
  </div>
</div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      onSale: false,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      sizes: ['Small', 'Medium', 'Large'],
      variants: [
        {
          variantId: 1234,
          variantColor: 'green',
          variantImage: './assets/images/vmSocks-green-onWhite.jpg',
          variantQuantity: 10,
        },
        {
          variantId: 4321,
          variantColor: 'blue',
          variantImage: './assets/images/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      } else {
        return 2.99;
      }
    },
  },
});

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
  },
});
