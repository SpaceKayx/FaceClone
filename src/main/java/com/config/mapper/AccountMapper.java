package com.config.mapper;

import com.config.dto.AccountDTO;
import com.config.entity.Account;

public class AccountMapper {

	public static AccountDTO mapToAccountDTO(Account account)
	{
		return new AccountDTO(account.getAccountId(), 
				account.getUsername(), 
				account.getPassword(),
				account.getFirstName(), 
				account.getLastName(), 
				account.getAddress(),
				account.getEmail(),
				account.isRole(),
				account.isGender(),
				account.isMarried(),
				account.getPhoneNumber(),
				account.getAccountPoster(),
				account.getAccountLike()
				); 
	}

	public static Account mapToAccount(AccountDTO accountDTO)
	{
		return new Account(
				accountDTO.getId(), 
				accountDTO.getUsername(), 
				accountDTO.getPassword(),
				accountDTO.getFirstName(), 
				accountDTO.getLastName(),
				accountDTO.getAddress(),
				accountDTO.getEmail(),
				accountDTO.isRole(),
				accountDTO.isGender(),
				accountDTO.isMarried(),
				accountDTO.getPhoneNumber(),
				accountDTO.getAccountPoster(),
				accountDTO.getAccountLike()
				);
	}
}
