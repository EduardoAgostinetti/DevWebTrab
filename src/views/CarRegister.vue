<template>
  <div class="car-form">
    <h2>Cadastrar Carro</h2>
    <form @submit.prevent="addCar">
      <div class="form-group">
        <label for="model">Modelo</label>
        <input v-model="model" id="model" type="text" required />
      </div>
      <div class="form-group">
        <label for="brand">Marca</label>
        <input v-model="brand" id="brand" type="text" required />
      </div>
      <div class="form-group">
        <label for="year">Ano</label>
        <input v-model="year" id="year" type="number" required />
      </div>
      <button type="submit" class="submit-button">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      brand: '',
      year: ''
    };
  },
  methods: {
    addCar() {
      const newCar = {
        id: Date.now(),
        model: this.model,
        brand: this.brand,
        year: this.year
      };
      const cars = JSON.parse(localStorage.getItem('cars')) || [];
      cars.push(newCar);
      localStorage.setItem('cars', JSON.stringify(cars));
      this.model = '';
      this.brand = '';
      this.year = '';
      alert('Carro cadastrado com sucesso!');
    }
  }
};
</script>

<style scoped>
.car-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 90%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #369d72;
}
</style>
