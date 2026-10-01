using backend.Services;

namespace backend.Tests;

public class UnitTest1
{
   [Fact]
    public void GetAll_Todos()
    {
        // Arrange
        var service = new TodoService();

        service.Add(new Todo { Id = 1, Title = "Test Todo", Completed = false });

        // Act
        var todos = service.GetAll();

        // Assert
        Assert.Single(todos);
        Assert.Equal(1, todos.First().Id);
        Assert.Equal("Test Todo", todos.First().Title);
    }

    [Fact]
    public void GetById_Todo()
    {
     
        var service = new TodoService();
        var todo = new Todo { Id = 1, Title = "Test Todo", Completed = false };
        service.Add(todo);

     
        var result = service.GetById(1);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(todo.Id, result.Id);
        Assert.Equal(todo.Title, result.Title);
    }

    [Fact]
    public void Update_Todo()
    {
        var service = new TodoService();
        var todo = new Todo { Id = 1, Title = "Test Todo", Completed = false };
        service.Add(todo);

        var updatedTodo = new Todo { Id = 1, Title = "Updated Todo", Completed = true };
        service.Update(1, updatedTodo);

        var result = service.GetById(1);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(updatedTodo.Title, result.Title);
        Assert.Equal(updatedTodo.Completed, result.Completed);
    }

    [Fact]
    public void Delete_Todo()
    {
        var service = new TodoService();
        var todo = new Todo { Id = 1, Title = "Test Todo", Completed = false };
        service.Add(todo);

        service.Delete(1);

        var result = service.GetById(1);

        // Assert
        Assert.Null(result);
    }

}