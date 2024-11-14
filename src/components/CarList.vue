<template>
  <div class="car-list">
    <div v-if="cars.length === 0" class="no-cars-message">
      <p>Nenhum carro disponível.</p>
    </div>
    <ul v-else>
      <li v-for="car in cars" :key="car.id" class="car-item">
        <p>
          <strong>Modelo: </strong>{{ car.model }}<br>
          <strong>Marca: </strong>{{ car.brand }}<br>
          <strong>Ano: </strong>{{ car.year }}</p>
        <button @click="deleteCar(car.id)" class="delete-button">Deletar</button>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cars: JSON.parse(localStorage.getItem('cars')) || []
    };
  },
  methods: {
    deleteCar(id) {
      this.cars = this.cars.filter(car => car.id !== id);
      localStorage.setItem('cars', JSON.stringify(this.cars));
    }
  }
};
</script>

<style scoped>
.car-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
li{
  text-align: left;
  background-color: #dad8d8;
  margin: 10px;
}

h2 {
  text-align: center;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

.car-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.car-item:last-child {
  border-bottom: none;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>
