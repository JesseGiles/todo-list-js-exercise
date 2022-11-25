//function creates a task object when called
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };

  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Wax on, Wax off", "Left a circle, right a circle");
const task2 = newTask("Sand the floor", "Practice, Daniel-san");
const tasks = [task1, task2];

task1.logState(); //not complete
task1.markCompleted();
task1.logState(); //now complete

// for now, let's just make sure we see our tasks
console.log(tasks);
