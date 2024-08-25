package com.config.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.config.dto.AccountDTO;
import com.config.entity.Account;

@CrossOrigin("*")
@RestController
@RequestMapping("/signin")
public class SignInController 
{
}
