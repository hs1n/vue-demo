<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link to="/" active-class="current">Home</router-link>
        </li>
        <li>
          <router-link to="/hello">HelloWorld</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.current {
  color: red;
}
.router-link-active {
  color: red;
}
ul:before{
    content:attr(aria-label);
    font-size:120%;
    font-weight:bold;
    margin-left:-15px;
}
</style>
