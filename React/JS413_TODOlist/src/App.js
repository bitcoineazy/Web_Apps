import React from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ todo, index, markTodo, removeTodo, setCategory }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-info" onClick={() => setCategory(index)}>
          {todo.category}
        </Button>
      </div>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo, filterCategory }) {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState(["Study", "Job", "Vacation"]);
  const [currentCategory, setCurrentCategory] = React.useState("")
  const [categoryFilter, setCategoryFilter] = React.useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, currentCategory);
    setValue("");
  };

  const renderCategory = () => {
    return category.map((item, id) => {
      return (

            <Button type="submit" key={id} onClick={() => handleCategory(item)} variant="outline-info" style={{ margin: 30 }}>
              {item}
            </Button>


        )
    })
  }

  const handleCategory = (category) => {
    setCurrentCategory(category)
    console.log(currentCategory)
    //filterCategory(category)
  }

  const handleFilterSubmit = (text) => {
    console.log("category" + text)
    var e = document.getElementById("seriesInput");
    var category = e.value;
    console.log("category + " + category)
    filterCategory(category)
  }



  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {renderCategory()}
      <label htmlFor="seriesInput">Отсортировать по категории </label>
      <select id="seriesInput" onChange={(text) => handleFilterSubmit(text)}>
        <option value="All">All</option>
        <option value="Study">Study</option>
        <option value="Job">Job</option>
        <option value="Vacation">Vacation</option>
      </select>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      category: "",
      isDone: false,
    },
  ]);
  const [results, setResults] = React.useState([
    {}
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, { text, category: category }];
    setTodos(newTodos);
  };

  const filterCategory = (category) => {
    setResults([])
    todos.map((item) => {
      if (item.category === category) {
        console.log("match")
        setResults(oldArray => [...oldArray, item]);
      }
    });

    console.log(results)

    return (
        <div>
          <ul>
            {results}
          </ul>
        </div>
    )
  }

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const setCategory = (index) => {
    const category = prompt("Category")
    const newCategory = [...todos];
    newCategory[index].category = category
    setTodos(newCategory)
    console.log(category)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} filterCategory={filterCategory} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  setCategory={setCategory}
                />
              </Card.Body>
            </Card>
          ))}
          Filter Results:
          {results.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                      key={index}
                      index={index}
                      todo={todo}
                      markTodo={markTodo}
                      removeTodo={removeTodo}
                      setCategory={setCategory}
                  />
                </Card.Body>
              </Card>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;
