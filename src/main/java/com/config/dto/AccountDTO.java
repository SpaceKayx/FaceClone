package com.config.dto;

import java.util.List;

import com.config.entity.Account;
import com.config.entity.AccountImage;
import com.config.entity.AccountLike;
import com.config.entity.AccountPoster;
import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AccountDTO {
	Long id;
	String username;
	String password;
	String firstName;
	String lastName;
	String address;
	String email;
	boolean role;
	boolean gender;
	boolean married;
	String phoneNumber;
	List<AccountPoster> accountPoster;
	List<AccountLike> accountLike;
}
