<template>
  <div>
    <p>Click below for more info</p>
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <router-link :to="{ name: 'contactLink' }" tag="li"><a class="nav-link">Contact</a></router-link>
        <router-link :to="{ name: 'historyLink' }" tag="li"><a class="nav-link">History</a></router-link>
        <router-link :to="{ name: 'deliveryLink' }" tag="li"><a class="nav-link">Delivery</a></router-link>
        <router-link :to="{ name: 'orderingLink' }" tag="li"><a class="nav-link">Ordering Guide</a></router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
