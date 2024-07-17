// Cree una función llamada uncompletedNotes que devuelva solo todos los no completados.

const notes = [
    {
      id: 1,
      description: "Workout program",
      todos: [
        {
          id: 1,
          name: "Push ups - 10 x 3",
          done: false,
        },
        {
          id: 2,
          name: "Abdominals - 20 x 3",
          done: true,
        },
        {
          id: 3,
          name: "Tapis Roulant - 15min",
          done: true,
        },
      ],
    },
    {
      id: 2,
      description: "Front-end Roadmap",
      todos: [
        {
          id: 1,
          name: "Learn HTML",
          done: true,
        },
        {
          id: 2,
          name: "Learn CSS",
          done: true,
        },
        {
          id: 3,
          name: "Learn JavaScript",
          done: true,
        },
        {
          id: 4,
          name: "Learn Angular",
          done: false,
        },
      ],
    },
  ];

  function uncompletedNotes(notes) {
    const result = [];
  
    notes.forEach(note => {
      // Filtrar las tareas no completadas
      const uncompletedTodos = note.todos.filter(todo => !todo.done);
  
      // Si hay tareas no completadas, agregar la nota al resultado
      if (uncompletedTodos.length > 0) {
        result.push({
          ...note,
          todos: uncompletedTodos,
        });
      }
    });
  
    return result;
  }
  
  console.log(uncompletedNotes(notes));