namespace backend.Services;

public interface ITodoService
{
    IEnumerable<Todo> GetAll();
    Todo GetById(int id);
    void Add(Todo todo);
    void Update(int id, Todo updatedTodo);
    void Delete(int id);
}