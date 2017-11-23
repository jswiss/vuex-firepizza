<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button 
                class="btn btn-sm btn-outline-success" 
                type="button"
                @click="addToBasket(item, option)"
                >+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Shopping Basket -->
    <div class="col-sm-12 col-md-6">
      <div v-if="basket.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="item in basket" :key="item.id">
            <tr>
              <td>
                <button 
                  class="btn btn-sm" 
                  type="button"
                  @click="dec(item)"
                >-</button>
                <span>-{{ item.quantity }}-</span>
                <button 
                  class="btn btn-sm" 
                  type="button"
                  @click="inc(item)"
                >+</button>
              </td>
              <td>{{ item.name }} {{ item.size }}"</td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>Order total: </p>
        <button class="btn btn-success btn-block">Place Order</button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				basket: [],
				basketText: 'Your basket is empty!',
			};
		},
		methods: {
			addToBasket(item, option) {
				this.basket.push({
					name: item.name,
					price: option.price,
					size: option.size,
					quantity: 1,
					id: this.basket.length,
				});
			},
			removeFromBasket(item) {
				this.basket.slice(this.basket.indexOf(item), 1);
			},
			inc(item) {
				item.quantity++;
			},
			dec(item) {
				item.quantity--;
				if (item.quantity === 0) this.removeFromBasket(item);
			},
		},
	};
</script>
