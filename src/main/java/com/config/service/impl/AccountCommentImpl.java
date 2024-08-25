package com.config.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.config.dto.AccountCommentDTO;
import com.config.entity.AccountComment;
import com.config.mapper.AccountCommentMapper;
import com.config.repository.AccountCommentRepository;
import com.config.service.AccountCommentService;

@Service
public class AccountCommentImpl implements AccountCommentService{

	@Autowired
	private AccountCommentRepository commentRepository;
	
	@Override
	public AccountCommentDTO createComment(AccountCommentDTO commentDTO) {
		AccountComment mappToComment = AccountCommentMapper.mapToAccountComment(commentDTO);
		AccountComment comment = commentRepository.save(mappToComment);
		return AccountCommentMapper.mapToAccountCommentDTO(comment);
	}

	@Override
	public List<AccountCommentDTO> getListCommentByPosterId(long posterId) {
		// TODO Auto-generated method stub
		List<AccountComment> listComment = commentRepository.findByAccountPoster(posterId);
		
		return listComment.stream().map(comment -> AccountCommentMapper.mapToAccountCommentDTO(comment)).collect(Collectors.toList());
	}

}
