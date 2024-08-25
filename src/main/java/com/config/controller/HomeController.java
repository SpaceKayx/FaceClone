package com.config.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.config.dto.AccountDTO;
import com.config.service.AccountService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping( "/api/accounts")
public class HomeController {

	private final AccountService accountService;
	
	@PostMapping()
	public ResponseEntity<AccountDTO> createAccount(@RequestBody AccountDTO AccountDTO)
	{
			AccountDTO savedAccount = accountService.createAccount(AccountDTO);
			return new ResponseEntity<>(savedAccount, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<AccountDTO> getAccountByID(@PathVariable("id") Long AccountId)
	{
		AccountDTO getAccountById = accountService.getAccountById(AccountId);
		
		return ResponseEntity.ok(getAccountById);
	}

	@GetMapping("/byUsername/{username}")
	public ResponseEntity<AccountDTO> getAccountByUsernameOrEmail(@PathVariable("username") String username)
	{
		System.out.println(username);
		AccountDTO getAccountByUsername = accountService.getAccountByUsername(username);
		System.out.println(getAccountByUsername);
		return ResponseEntity.ok(getAccountByUsername);
	}
	
	@GetMapping()
	public ResponseEntity<List<AccountDTO>> getAllAccount(){
		System.out.println("getAllAccountaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("auth: "+auth);
		List<AccountDTO> Accounts = accountService.getAllAccount();
		return ResponseEntity.ok(Accounts);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<AccountDTO> updateAccount(
			@PathVariable("id") Long AccountId, 
			@RequestBody AccountDTO updateAccountDTO)
	{
		AccountDTO AccountDTO = accountService.updateAccount(AccountId, updateAccountDTO);
		return ResponseEntity.ok(AccountDTO);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteAccount(@PathVariable("id") Long AccountId)
	{
		accountService.deleteAccount(AccountId);
		return ResponseEntity.ok("Account Delete is successfully");
	}
	
	
}
