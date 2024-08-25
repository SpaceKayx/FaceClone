package com.config.service;

import java.util.List;

import com.config.dto.AccountDTO;

public interface AccountService {
	AccountDTO createAccount(AccountDTO accountDTO);
	AccountDTO getAccountById(Long id);
	AccountDTO updateAccount(Long accountId, AccountDTO updatedAccount);
	AccountDTO getAccountByUsername(String username);
	
	void deleteAccount(Long accountId);
	
	List<AccountDTO> getAllAccount();
}
