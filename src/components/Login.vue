<template>
  <div class="row">
		<div>
			<div>
				<p>Logged in as:</p>
				<p>{{ currentUser }}</p>
			</div>
			<form action="">
				<div class="form-group">
					<label for="email">Email Address</label>
					<input type="email" class="form-control" name="email" id="email" placeholder="enter email addy">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" class="form-control" name="password" id="password">
				</div>
				<button type="button" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
				<button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
			</form>
		</div>
  </div>
</template>

<script>
	import Firebase from 'firebase';
	import { store } from '../store';

	Firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			store.dispatch('setUser', user);
		} else {
			store.dispatch('setUser', null);
		}
	});

	export default {
		methods: {
			signIn() {
				const email = document.getElementById('email').value;
				const password = document.getElementById('password').value;

				Firebase.auth()
					.signInWithEmailAndPassword(email, password)
					.catch(error => {
						const errorCode = error.code;
						const errorMessage = error.message;

						if (errorCode === 'auth/wrong-password') {
							alert('Wrong password!');
						} else {
							alert(errorMessage);
						}
					});
			},
			signOut() {
				Firebase.auth()
					.signOut()
					.then(() => {
						alert('logged out');
					})
					.catch(error => {
						alert('error!');
					});
			},
		},
		computed: {
			currentUser() {
				return this.$store.getters.currentUser;
			},
		},
	};
</script>
