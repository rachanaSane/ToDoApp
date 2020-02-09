package com.rachana.rest.webservice.restful.web.service.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class HardCodedService {
	
	private static List<ToDo> todos = new ArrayList<>();
	private static long idCounter=0;

	static {
		todos.add(new ToDo(++idCounter, "rachana", "go to paris", new Date(), false));
		todos.add(new ToDo(++idCounter, "rachana", "go to pune", new Date(), false));
		todos.add(new ToDo(++idCounter, "rachana", "go to italy", new Date(), false));
		todos.add(new ToDo(++idCounter, "rachana", "go to croatia", new Date(), false));
	}
	

	public static List<ToDo> findAll(@PathVariable String username){
		return todos;
	}
	
	public static ToDo deleteTodoById(long id) {
		
		ToDo todo = findById(id);
		if(todo== null) return null;
		
		if(todos.remove(todo)){
			return todo;
		};
		return null;
	}
	
	public static ToDo findById(long id) {
		
		for(ToDo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
		
	}
	
	public static ToDo save(ToDo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteTodoById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
		
	}
}
