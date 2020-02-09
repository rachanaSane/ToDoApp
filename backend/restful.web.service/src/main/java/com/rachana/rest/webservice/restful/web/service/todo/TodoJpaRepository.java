package com.rachana.rest.webservice.restful.web.service.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TodoJpaRepository extends JpaRepository<ToDo, Long> {
	
	List<ToDo> findByUsername(String username);

}
