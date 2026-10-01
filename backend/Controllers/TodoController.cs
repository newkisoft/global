using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private readonly ITodoService _todoService;
    
    
    private readonly ILogger<TodoController> _logger;

    public TodoController(ILogger<TodoController> logger,ITodoService todoService)
    {
        _logger = logger;
        _todoService = todoService;
    }

    [HttpGet(Name = "GetTodos")]
    public IEnumerable<Todo> GetAll()
    {
        return _todoService.GetAll();
    }

    [HttpGet("{id}", Name = "GetTodoById")]
    public IActionResult GetById(int id)
    {
        var todo = _todoService.GetById(id);
        if (todo == null)
        {
            return NotFound();
        }

        return Ok(todo);
    }

    [HttpPost(Name = "CreateTodo")]
    public IActionResult Post([FromBody] Todo todo)
    {
        _todoService.Add(todo);
        return Ok(todo);
    }
    [HttpPut("{id}", Name = "UpdateTodo")]
    public IActionResult Put(int id, [FromBody] Todo updatedTodo)
    {
         var todo = _todoService.GetById(id);
        _todoService.Update(id, updatedTodo);
        return Ok(todo);
    }

        
    [HttpDelete("{id}", Name = "DeleteTodo")]
    public IActionResult Delete(int id)
    {
        var todo = _todoService.GetById(id);
        if (todo == null)
        {
            return NotFound();
        }

        _todoService.Delete(id);
        return NoContent();
    }
}   
