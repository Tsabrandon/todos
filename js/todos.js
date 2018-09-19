var taskApp = new Vue({
    el: '#taskApp',
    data: {
      tasks: [
        { name: 'Watch movies', done: false },
        { name: 'Buy clothes', done: false },
        { name: 'Go home', done: false },
      ]
    },
    methods: {
      addTask: function(e) {
        e.preventDefault();
        this.tasks.push({
          name: this.tasks.name,
          done: false
        });
      },
      deleteTask: function(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
      }
    }
  });