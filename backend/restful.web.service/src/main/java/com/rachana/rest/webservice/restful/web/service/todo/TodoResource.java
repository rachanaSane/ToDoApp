package com.rachana.rest.webservice.restful.web.service.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {
	
	@Autowired
	private HardCodedService hardcodedService;

	@GetMapping("/users/{username}/todos")
	public List<ToDo> getAllTodos(String username){
		return hardcodedService.findAll(username);
	}
	
	@GetMapping("/users/{username}/todos/{todo_id}")
	public ToDo getTodo(@PathVariable String username,@PathVariable long todo_id) {		
		return hardcodedService.findById(todo_id);
	}
	
	@DeleteMapping("/users/{username}/todos/{todo_id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable long todo_id){
		
		if(hardcodedService.deleteTodoById(todo_id) !=null) {
		return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
		
	}
	
	@PutMapping("/users/{username}/todos/{todo_id}")
	public ResponseEntity<ToDo> updateTodo(@PathVariable String username,@PathVariable long todo_id, @RequestBody ToDo todo){
		
		ToDo updatedTodo= hardcodedService.save(todo);
		return new ResponseEntity<ToDo>(updatedTodo,HttpStatus.OK);
		
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody ToDo todo){
		
		ToDo createdTodo= hardcodedService.save(todo);
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
}
