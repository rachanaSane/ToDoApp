package com.rachana.rest.webservice.restful.web.service.jwt.resource;


public class AuthenticationException extends RuntimeException {
	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}