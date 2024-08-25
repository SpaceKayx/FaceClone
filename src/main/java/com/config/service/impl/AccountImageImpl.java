//package com.config.service.impl;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.config.dto.AccountImageDTO;
//import com.config.entity.AccountImage;
//import com.config.mapper.AccountImageMapper;
//import com.config.repository.AccountImageRepository;
//import com.config.service.AccountImageService;
//
//@Service
//public class AccountImageImpl implements AccountImageService{
//
//	@Autowired
//	AccountImageRepository imageRepository;
//	
//	@Override
//	public List<AccountImageDTO> getListAccountImageById(long accountId) {
//		// TODO Auto-generated method stub
//		List<AccountImage> accountImage = imageRepository.getListAccountImageById(accountId);
//		
//		return accountImage.stream().map((account) -> AccountImageMapper.mapToAccountImageDTO(account)).collect(Collectors.toList());
//	}
//
//	@Override
//	public AccountImageDTO createAccountImage(AccountImageDTO accountImage) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//}
