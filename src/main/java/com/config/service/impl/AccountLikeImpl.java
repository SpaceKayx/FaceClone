package com.config.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import com.config.dto.AccountDTO;
import com.config.dto.AccountLikeDTO;
import com.config.dto.RequestBodyLikeDTO;
import com.config.entity.Account;
import com.config.entity.AccountLike;
import com.config.entity.AccountPoster;
import com.config.exception.ResourceNotFoundException;
import com.config.mapper.AccountLikeMapper;
import com.config.repository.AccountLikeRepository;
import com.config.repository.AccountPosterRepository;
import com.config.repository.AccountRepository;
import com.config.service.AccountLikeService;

@Service
public class AccountLikeImpl implements AccountLikeService{

	@Autowired
	private AccountLikeRepository likeRepository;

	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	
	private AccountPosterRepository posterRepository;
	
	@Override
	public AccountLikeDTO acctionLike(RequestBodyLikeDTO likeDTO) {
		// TODO Auto-generated method stub
		Optional<AccountLike> isAccountLike =
				likeRepository.findByAccount(likeDTO.getAccountId(),
												likeDTO.getPosterId());
//		System.out.println("isAccountLike: " +isAccountLike.get().getAccountLikeId());
		if(isAccountLike.isPresent())
		{
			try {
				System.out.println("deleteLike");
				System.out.println("deleteLike1: " +isAccountLike.get().getAccountLikeId());
				System.out.println("deleteLike2: " +isAccountLike.get().getAccountPoster().getPosterId());
				System.out.println("deleteLike3: " +isAccountLike.get().getAccount().getAccountId());
				deleteLike(isAccountLike.get());
				return null;
			}
			catch(Exception ex)
			{
				ex.printStackTrace();
			}
		}
		return createLike(likeDTO);
	}

	@Override
	public AccountLikeDTO createLike(RequestBodyLikeDTO likeDTO) {
		// TODO Auto-generated method stub
		Optional<Account> account = accountRepository.findById(likeDTO.getAccountId());
		Optional<AccountPoster> poster = posterRepository.findById(likeDTO.getPosterId());
		AccountLike createLike = new AccountLike(0, poster.get(), account.get());
		AccountLike savedLike = likeRepository.save(createLike);
		
		return AccountLikeMapper.mapToAccountLikeDTO(savedLike);
	}

	@Override
	public void deleteLike(AccountLike accountLike) {
		// TODO Auto-generated method stub
//		AccountLike deleteLike = likeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ID not found: " +id));
//		System.out.println("deleteLike: " +deleteLike.getAccountLikeId());
		System.out.println("id: " +accountLike);

		likeRepository.delete(accountLike);
		System.out.println("deleteLike is successfully");
	}

}
