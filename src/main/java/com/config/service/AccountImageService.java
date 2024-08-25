package com.config.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.config.dto.AccountImageDTO;
import com.config.entity.AccountImage;

public interface AccountImageService {
	List<AccountImageDTO> getListAccountImageById(long accountId);
	AccountImageDTO createAccountImage(AccountImageDTO accountImage);
}
