<template>
  <div id="app">
    <header>
      <h1>Gerenciamento de Carros</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/carros">Listagem de Carros</router-link>
        <router-link to="/carros/cadastrar">Cadastrar Carro</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  padding: 10px;
  color: white;
}

header h1 {
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>
