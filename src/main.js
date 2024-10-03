import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './route.js';
import Amplify from 'aws-amplify';

const awsConfig = {
  Auth: {
      userPoolId: 'eu-north-1_hv0BQsGRy',
      userPoolWebClientId: '035409775233',
      region: 'eu-north-1',
  }
};
Amplify.configure(awsConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');
