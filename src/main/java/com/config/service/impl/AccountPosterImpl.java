package com.config.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.config.dto.AccountImageDTO;
import com.config.dto.AccountPosterDTO;
import com.config.entity.AccountImage;
import com.config.entity.AccountPoster;
import com.config.exception.ResourceNotFoundException;
import com.config.mapper.AccountImageMapper;
import com.config.mapper.AccountPosterMapper;
import com.config.repository.AccountPosterRepository;
import com.config.service.AccountPosterService;

@Service
public class AccountPosterImpl implements AccountPosterService{

	@Autowired
	AccountPosterRepository posterRepository;
	
//	@Override
//	public List<AccountImageDTO> getListImageByPosterId(long posterId) {
//		List<AccountImage> images = posterRepository.getListImageByPosterId(posterId);
//		return images.stream().map((image) -> AccountImageMapper.mapToAccountImageDTO(image)).collect(Collectors.toList());
//	}

	@Override
	public List<AccountPosterDTO> getListPosterByAccountId(long id) {
		// TODO Auto-generated method stub
		List<AccountPoster> posters = posterRepository.getListPosterByAccountId(id);
		return posters.stream().map((poster) -> AccountPosterMapper.mapToAccountPosterDTO(poster)).collect(Collectors.toList());
	}

	@Override
	public AccountPosterDTO createPoster(AccountPosterDTO posterDTO) {
		// TODO Auto-generated method stub
		AccountPoster poster = AccountPosterMapper.mapToAccountPoster(posterDTO);
		AccountPoster savedPoster = posterRepository.save(poster);
		return AccountPosterMapper.mapToAccountPosterDTO(savedPoster);
	}

	@Override
	public AccountPosterDTO getPosterByPosterId(long posterId) {
		AccountPoster poster = posterRepository.findById(posterId).get();
		return AccountPosterMapper.mapToAccountPosterDTO(poster);
	}

	@Override
	public void deletePoster(Long posterId) {
		System.out.println("deletePoster: " + posterId);
		posterRepository.findById(posterId).orElseThrow(() -> new ResourceNotFoundException("Poster Id not found: " +posterId));
		posterRepository.deleteById((long) posterId);
	}

}
