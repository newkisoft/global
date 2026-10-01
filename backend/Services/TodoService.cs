namespace backend.Services;

public class TodoService : ITodoService
{    
    
    private readonly List<Todo> _todos;

    public TodoService()
    {
        _todos = new List<Todo>();
    }

    public IEnumerable<Todo> GetAll()
    {
        return _todos;
    }

    public Todo GetById(int id)
    {
        return _todos.FirstOrDefault(t => t.Id == id);
    }

    public void Add(Todo todo)
    {
        _todos.Add(todo);
    }

    public void Update(int id, Todo updatedTodo)
    {
        var todo = _todos.FirstOrDefault(t => t.Id == id);
        if (todo != null)
        {
            todo.Title = updatedTodo.Title;
            todo.Completed = updatedTodo.Completed;
        }
    }

    public void Delete(int id)
    {
        var todo = _todos.FirstOrDefault(t => t.Id == id);
        if (todo != null)
        {
            _todos.Remove(todo);
        }
    }
}