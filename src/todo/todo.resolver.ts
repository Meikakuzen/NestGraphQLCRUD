import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/inputs/create.todo.input';
import { UpdateTodoInput } from './dto/inputs/update.todo.input';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver(()=> Todo)
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService
    ){}

    @Query(()=>[Todo], {name: 'todos'})
    findAll(): Todo[]{
        return this.todoService.findAll();
    }

    @Query(()=>Todo, {name: 'todo'})
    findOne(@Args('id', {type: ()=>Int})id: number){
        return this.todoService.findOne(id)
    }

    @Mutation(()=> Todo, {name: 'createTodo'})
    createTodo(
        @Args('createTodoInput' ) createTodoInput: CreateTodoInput
    ){
        return this.todoService.create(createTodoInput)

    }

    @Mutation(()=> Todo, {name: "updateTodo"})
    updateTodo(
        @Args('updateTodoInput') updateTodoInput: UpdateTodoInput
    ){
         return this.todoService.update(updateTodoInput.id, updateTodoInput)
    }

    @Mutation(()=> Boolean)
    removeTodo(
        @Args('id', {type: ()=> Int}) id: number
    ){
        return this.todoService.delete(id)
    }

}
