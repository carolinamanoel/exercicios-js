<template>
  <div class="to-do">
    <div>
      <input type="text" v-model="value">
      <button @click="addItem()">Adicionar</button>
      <br><br>
      <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index">
          <input type="checkbox" v-model="item.checked">
          <span :class="{ 'is-done': item.checked === true }">{{ `${index+1} - ${item.text}` }}</span>
          <button @click="removeItem(index)">Remover</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data: () => ({
    value: '',
    list: []
  }),
  methods: {
    addItem() {
      this.list.push({ text: this.value, checked: false })
    },

    removeItem(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.to-do {
  display: flex;
  justify-content: center;
}

.list {
  width: 400px;
  border: 1px solid grey;
  border-radius: 5px;
}

.item {
  background-color: lavender;
  border: 1px solid white;
  border-radius: 5px;
}

.is-done {
  text-decoration: line-through;
  color: gray;
}
</style>