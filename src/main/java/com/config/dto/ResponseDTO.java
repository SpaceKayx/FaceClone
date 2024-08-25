package com.config.dto;

import org.springframework.http.HttpStatus;

import com.config.entity.Account;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseDTO{
	HttpStatus responseCode;
	String responseToken;
	Account responseAccount;
}
