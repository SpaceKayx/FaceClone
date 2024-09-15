package com.config.mapper;

import com.config.dto.AccountPosterDTO;
import com.config.entity.AccountPoster;

public class AccountPosterMapper
{
	public static AccountPosterDTO mapToAccountPosterDTO(AccountPoster account)
	{
		return new AccountPosterDTO(
				account.getPosterId(), 
				account.getDescription(),
				account.getPremiereDate(),
				account.getAccountLike(), 
				account.getAccountComment(), 
				account.getAccountImage(), 
				account.getAccountId()
				);
	}

//	public static AccountPosterDTO mapToAccountPosterDTONoAccount(AccountPoster account)
//	{
//		return new AccountPosterDTO(
//				account.getPosterId(), 
//				account.getDescription(), 
//				account.getAccountLike(), 
//				account.getAccountComment(),
//				account.getAccountImage(),
//				account.getAccountId().getFirstName(),
//				account.getAccountId().getLastName()
//				);
//	}
	
	public static AccountPoster mapToAccountPoster(AccountPosterDTO account)
	{
		return new AccountPoster(
				account.getPosterId(), 
				account.getDescription(), 
				account.getPremiereDate(),
				account.getAccountLike(),
				account.getAccountComment(),
				account.getAccountImage(), 
				account.getAccountId()
				);
	}
}
