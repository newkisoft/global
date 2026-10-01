import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditFormComponent } from './add-edit-todo';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { TodoService } from '../../services/todo-service';
import { of } from 'rxjs';
import { Todo } from '../../models/todo';
import { vi } from 'vitest';

describe('AddEditFormComponent', () => {
  let component: AddEditFormComponent;
  let fixture: ComponentFixture<AddEditFormComponent>;

  const todoServiceMock = {
    getTodo: vi.fn(),
    addTodo: vi.fn(),
    editTodo: vi.fn()
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    todoServiceMock.getTodo.mockReturnValue(
      of(new Todo(1, 'Test Todo', false))
    );

    await TestBed.configureTestingModule({
      imports: [AddEditFormComponent],
      providers: [
        provideRouter([]),
        {
          provide: TodoService,
          useValue: todoServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of(
              convertToParamMap({ id: '1' })
            )
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditFormComponent);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the todo item and set edit mode when an id query param is present', () => {
    expect(component.isEditMode).toBe(true);
    expect(component.todoId).toBe(1);
    expect(todoServiceMock.getTodo).toHaveBeenCalledTimes(1);
  });
});