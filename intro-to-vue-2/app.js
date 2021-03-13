const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/images/vmSocks-green-onWhite.jpg',
    inStock: true,
    onSale: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    sizes: ['Small', 'Medium', 'Large'],
    variants: [
      {
        variantId: 1234,
        variantColor: 'green',
      },
      {
        variantId: 4321,
        variantColor: 'blue',
      },
    ],
    // inventory: 10,
  },
});
