package com.config.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.ErrorResponse;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.config.dto.ResponseDTO;

@RestControllerAdvice
public class AccessHandleException {

	@ExceptionHandler(AccessDeniedException.class)
	@ResponseStatus(code = HttpStatus.UNAUTHORIZED)
	public ResponseEntity<ResponseDTO> handleAccessDeniedException()
	{
		System.out.println("AccessDeniedException");
		ResponseDTO error = new ResponseDTO(HttpStatus.UNAUTHORIZED, "You should login", null);
		return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
	}
}
