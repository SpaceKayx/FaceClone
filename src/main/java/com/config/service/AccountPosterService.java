package com.config.service;

import java.util.List;

import com.config.dto.AccountImageDTO;
import com.config.dto.AccountPosterDTO;
import com.config.entity.AccountPoster;

public interface AccountPosterService {
//	List<AccountImageDTO> getListImageByPosterId(long posterId);
	List<AccountPosterDTO> getListPosterByAccountId(long accountId);
	
	AccountPosterDTO createPoster(AccountPosterDTO posterDTO);
	
	AccountPosterDTO getPosterByPosterId(long posterId);
	
	void deletePoster(Long posterId);
}
