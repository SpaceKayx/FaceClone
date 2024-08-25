package com.config.service;

import com.config.dto.AccountDTO;
import com.config.dto.AccountLikeDTO;
import com.config.dto.RequestBodyLikeDTO;
import com.config.entity.AccountLike;

public interface AccountLikeService 
{
	
	AccountLikeDTO acctionLike(RequestBodyLikeDTO likeDTO);
	
	AccountLikeDTO createLike(RequestBodyLikeDTO likeDTO);
	
	void deleteLike(AccountLike accountLike);
}
