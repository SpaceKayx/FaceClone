package com.config.mapper;

import com.config.dto.AccountCommentDTO;
import com.config.entity.AccountComment;

public class AccountCommentMapper {
	public static AccountCommentDTO mapToAccountCommentDTO(AccountComment account)
	{
		return new AccountCommentDTO(
				account.getCommentId(),
				account.getDescription(),
				account.getAccountPoster(),
				account.getAccount()
				);
	}
	public static AccountComment mapToAccountComment(AccountCommentDTO account)
	{
		return new AccountComment(
				account.getCommentId(),
				account.getDescription(),
				account.getAccountPoster(),
				account.getAccount()
				);
	}
}
