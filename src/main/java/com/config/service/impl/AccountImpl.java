package com.config.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.config.dto.AccountDTO;
import com.config.entity.Account;
import com.config.exception.ResourceNotFoundException;
import com.config.mapper.AccountMapper;
import com.config.repository.AccountRepository;
import com.config.security.CustomerUserDetail;
import com.config.service.AccountService;

import lombok.AllArgsConstructor;

//@AllArgsConstructor
@Lazy
@Service
public class AccountImpl implements AccountService, UserDetailsService{

	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired @Lazy
	private BCryptPasswordEncoder passwordEncoder;
	
	public Account currentUser;
	
	public Account getAccount()
	{
		return this.currentUser;
	}
	
	@Override
	public AccountDTO createAccount(AccountDTO accountDTO) {
		// TODO Auto-generated method stub
		Account account = AccountMapper.mapToAccount(accountDTO);
		Account savedAccount = accountRepository.save(account);
		
		return AccountMapper.mapToAccountDTO(savedAccount);
	}

	@Override
	public AccountDTO getAccountById(Long id) {
		// TODO Auto-generated method stub
		Account account = accountRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("ID Not Found: " +id) );
		return AccountMapper.mapToAccountDTO(account);
	}

	@Override
	public List<AccountDTO> getAllAccount() {
		// TODO Auto-generated method stub
		List<Account> accounts = accountRepository.findAll();
		return accounts.stream().map((account) -> AccountMapper.mapToAccountDTO(account)).collect(Collectors.toList());
	}

	@Override
	public AccountDTO updateAccount(Long accountId, AccountDTO updatedAccount) {
		// TODO Auto-generated method stub
		Account account = accountRepository.findById(accountId).orElseThrow(() 
							-> new ResourceNotFoundException("ID Not Found: " +accountId));
		
		account.setEmail(updatedAccount.getEmail());
		account.setFirstName(updatedAccount.getFirstName());
		account.setLastName(updatedAccount.getLastName());
		account.setPassword(updatedAccount.getPassword());
		account.setUsername(updatedAccount.getUsername());
		account.setAddress(updatedAccount.getAddress());
		account.setRole(updatedAccount.isRole());
		account.setGender(updatedAccount.isGender());
		account.setMarried(updatedAccount.isMarried());
		account.setPhoneNumber(updatedAccount.getPhoneNumber());
		account.setAccountPoster(updatedAccount.getAccountPoster());
		account.setAccountLike(updatedAccount.getAccountLike());
		
		Account updateaccountObj = accountRepository.save(account);
		
		return AccountMapper.mapToAccountDTO(updateaccountObj);
	}

	@Override
	public void deleteAccount(Long accountId) {
		// TODO Auto-generated method stub

		Account account = accountRepository.findById(accountId).orElseThrow(() 
							-> new ResourceNotFoundException("ID Not Found: " +accountId));
		accountRepository.deleteById(accountId);
	}

	@Override
	public AccountDTO getAccountByUsername(String username) {
		// TODO Auto-generated method stub
		
		Account account = accountRepository.findByUsername(username);
		if(account == null)
		{
			throw new ResourceNotFoundException( "Đăng nhập thất bại !!");
		}
		return AccountMapper.mapToAccountDTO(account) ;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		System.out.println("loadUserByUsername");
		System.out.println("username: "+username);
		Account account = accountRepository.findByUsername(username);
		System.out.println("account: " +account.getUsername());
		currentUser = account; 
		if(account == null)
		{
			System.out.println("loadUserByUsername is null");
			throw new UsernameNotFoundException("Username is fail");
		}
		return new CustomerUserDetail(account);
	}

}
