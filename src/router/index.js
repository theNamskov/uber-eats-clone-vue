import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import BlueBackground from '@/components/BlueBackground';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/this-guy-too',
      name: 'BlueBackground',
      component: BlueBackground,
    },
  ],
});
