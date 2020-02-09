package com.rachana.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthenticationController {

	@GetMapping( path="/basicauth")
	public AuthenticationBean helloWorld() {
		//throw new RuntimeException("error occurred.");
		return new AuthenticationBean("You are authenticated");
	}
	


}
