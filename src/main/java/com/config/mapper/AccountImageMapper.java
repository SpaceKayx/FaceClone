package com.config.mapper;

import com.config.dto.AccountImageDTO;
import com.config.entity.AccountImage;

public class AccountImageMapper {

	public static AccountImageDTO mapToAccountImageDTO(AccountImage account)
	{
		return new AccountImageDTO(
				account.getId(), 
				account.getImageName(),
				account.getAccountPoster()
				); 
	}

	public static AccountImage mapToAccountImage(AccountImageDTO accountDTO)
	{
		return new AccountImage(
				accountDTO.getId(), 
				accountDTO.getImageName(),
				accountDTO.getAccountPoster()
				);
	}
}
