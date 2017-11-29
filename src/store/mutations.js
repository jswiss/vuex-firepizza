export const addOrder = (state, orders) => state.orders.push(orders);
// here, user is payload
export const userStatus = (state, user) => {
	if (user) {
		state.currentUser = user.email;
	} else {
		state.currentUser = null;
	}
};
