import Firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyB_qbXmw-Na-Eq-cMufzGmYUIfvJBtuEkI',
	authDomain: 'pizza-vue.firebaseapp.com',
	databaseURL: 'https://pizza-vue.firebaseio.com',
	projectId: 'pizza-vue',
	storageBucket: '',
	messagingSenderId: '577411964820',
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
