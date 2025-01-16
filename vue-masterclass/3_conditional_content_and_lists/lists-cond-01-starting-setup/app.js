const app = Vue.createApp({
  data() {
    return { 
      goalInput: '',
      goals: [],
     };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalInput);
      this.goalInput = '';
    },
    isGoalsVisible() {
      return this.goals.length > 0;
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
