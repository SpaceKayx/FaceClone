package com.config.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.config.dto.AccountCommentDTO;
import com.config.entity.AccountComment;

public interface AccountCommentService {

	 AccountCommentDTO createComment(AccountCommentDTO commentDTO);
	
	List<AccountCommentDTO> getListCommentByPosterId(long posterId);
}
