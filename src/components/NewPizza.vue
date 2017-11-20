<template>
  <form action="">
    <h3>Add New Pizza:</h3>
    <div class="form-group row">
      <label for="name" class="col-sm-3">Name</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" name="name" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label for="desc" class="col-sm-3">Description</label>
      <div class="col-sm-9">
        <textarea type="text" class="form-control" name="desc" rows="5" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>Option 1:</strong></p>
    <div class="form-group row">
      <label for="size" class="col-sm-3">Size (")</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" name="size" v-model="newPizza.options[0].size">
      </div>
    </div>
    <div class="form-group row">
      <label for="price" class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" name="price" v-model="newPizza.options[0].price">
      </div>
    </div>
    <p><strong>Option 2:</strong></p>
    <div class="form-group row">
      <label for="size" class="col-sm-3">Size (")</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" name="size" v-model="newPizza.options[1].size">
      </div>
    </div>
    <div class="form-group row">
      <label for="price" class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" name="price" v-model="newPizza.options[1].price">
      </div>
    </div>
    <div class="form-group row">
      <button class="btn btn-success btn-block" type="button" @click="addMenuItem">Add</button>
    </div>
  </form>
</template>

<script>
  import { dbMenuRef } from '../firebaseConfig';

  export default {
  	data() {
  		return {
  			newPizza: {
  				name: 'Eg. Margherita',
  				id: 1,
  				description:
  					'Eg. A delicious tomato based pizza topped with mozzarella',
  				options: [
  					{
  						size: 9,
  						price: 6.95,
  					},
  					{
  						size: 12,
  						price: 10.95,
  					},
  				],
  			},
  		};
  	},
  	methods: {
  		addMenuItem() {
  			dbMenuRef.push(this.newPizza);
  		},
  	},
  };
</script>
