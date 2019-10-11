const add = (x, y) => { return x * y }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Praneeth',
    firstNumber: 4,
    secondNumber: 5
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, your area is ${add(i, j)}.`
    }
  }
})