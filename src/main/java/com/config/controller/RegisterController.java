package com.config.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.config.dto.AccountDTO;
import com.config.service.AccountService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor	
@RequestMapping("/register")
public class RegisterController {

	private final AccountService accountService;
	
	private final BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping()
	public ResponseEntity<AccountDTO> createAccount(@RequestBody AccountDTO accountDTO)
	{
		System.out.println(accountDTO);
		String encoder = passwordEncoder.encode(accountDTO.getPassword());
		accountDTO.setPassword(encoder);
		AccountDTO savedAccount = accountService.createAccount(accountDTO);
		
		return new ResponseEntity<AccountDTO>(savedAccount, HttpStatus.CREATED);
	}
	
}
