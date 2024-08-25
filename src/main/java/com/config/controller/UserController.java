package com.config.controller;

import java.security.Principal;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.config.dto.ResponseDTO;
import com.config.entity.Account;
import com.config.jwt.JwtTokenProvider;
import com.config.security.CustomerUserDetail;
import com.config.security.CustomerUserProvider;
import com.config.service.impl.AccountImpl;

@RestController
@RequestMapping("/login_success")
public class UserController{

	@Autowired
	private AccountImpl accountService;
	
	@Autowired
	private JwtTokenProvider tokenProvider;
	
	@GetMapping()
	public ResponseEntity<ResponseDTO> getCurrentUser() {
		System.out.println("UserController");
		
//		Authentication authentication = new UsernamePasswordAuthenticationToken(
//				accountService.getaccount().getUsername(),
//				accountService.getaccount().getPassword()
//			);
//		SecurityContextHolder.getContext().setAuthentication(authentication);
		 
//		Authentication auth1 = SecurityContextHolder.getContext().getAuthentication();
//		System.out.println("auth1: " +auth1);
		Account account = accountService.getAccount();
		CustomerUserDetail userDetail = new CustomerUserDetail(account);
		String token = tokenProvider.generateToken(userDetail);
		System.out.println("token: " +token);
		System.out.println("userDetail: " +userDetail);
//		System.out.println("account: " +account.toString());
		
		ResponseDTO resp = new ResponseDTO(HttpStatus.OK, token, account);
		System.out.println("getResponseToken: " +resp.getResponseToken());
		System.out.println("getResponseAccount: " +resp.getResponseAccount().getUsername());
		System.out.println("getResponseCode: " +resp.getResponseCode());
		
		return ResponseEntity.ok(resp);
	}
}
