package com.config.mapper;

import com.config.dto.AccountLikeDTO;
import com.config.entity.AccountLike;

public class AccountLikeMapper {
	public static AccountLikeDTO mapToAccountLikeDTO(AccountLike account)
	{
		return new AccountLikeDTO(
				account.getAccountLike(),
				account.getAccountPoster(),
				account.getAccount()
				);
	}
	public static AccountLike mapToAccountLike(AccountLikeDTO account)
	{
		return new AccountLike(
				account.getAccountLike(),
				account.getAccountPoster(),
				account.getAccount()
				);
	}
}
