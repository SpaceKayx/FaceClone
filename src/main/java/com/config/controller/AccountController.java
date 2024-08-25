package com.config.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.config.dto.AccountCommentDTO;
import com.config.dto.AccountDTO;
import com.config.dto.AccountLikeDTO;
import com.config.dto.AccountPosterDTO;
import com.config.dto.RequestBodyLikeDTO;
import com.config.security.CustomerUserDetail;
import com.config.service.AccountCommentService;
import com.config.service.AccountLikeService;
import com.config.service.AccountPosterService;
import com.config.service.AccountService;

import lombok.AllArgsConstructor;


@CrossOrigin("*")
@RestController
@RequestMapping( "/account")
public class AccountController {

	@Autowired
	private AccountService accountService;
	
	@Autowired
	private AccountPosterService posterService;
	
	@Autowired
	private AccountLikeService likeService;
	
	@Autowired
	private AccountCommentService commentService;
	
	@GetMapping("/aboutme")
	public ResponseEntity<AccountDTO> getMyAccount()
	{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		CustomerUserDetail obj = (CustomerUserDetail) authentication.getPrincipal();
		AccountDTO accountDTO = accountService.getAccountByUsername(obj.getUsername());
		return ResponseEntity.ok(accountDTO);
	}
	
	@PostMapping("/poster/getAll")
	public ResponseEntity<List<AccountPosterDTO>> getListPosterByAccountId(@RequestBody long accountId) 
	{
		List<AccountPosterDTO> posters = posterService.getListPosterByAccountId(accountId);
		return ResponseEntity.ok(posters);
	}
	
	
	@PostMapping("/poster/createPoster")
	public ResponseEntity<AccountPosterDTO> createPoster(@RequestBody AccountPosterDTO posterDTO) {
		//TODO: process POST request
		System.out.println("posterDTO: " +posterDTO);
		AccountPosterDTO poster = posterService.createPoster(posterDTO);
		return new ResponseEntity<>(posterDTO, HttpStatus.CREATED);
	}
	@DeleteMapping("/poster/deletePoster")
	public ResponseEntity<HttpStatus> deletePoster(@RequestBody long posterId)
	{
		posterService.deletePoster(posterId);
		return ResponseEntity.ok(HttpStatus.OK);
	}
	
	@PostMapping("/poster/like")
	public ResponseEntity<AccountLikeDTO> isLike(@RequestBody RequestBodyLikeDTO likeDTO)
	{
		System.out.println("like");
		AccountLikeDTO isLike = likeService.acctionLike(likeDTO);
		return ResponseEntity.ok(isLike);
	}
	
	@PostMapping("/poster/getByPosterId")
	public ResponseEntity<AccountPosterDTO> getPosterById(@RequestBody long posterId)
	{
		System.out.println("like");
		AccountPosterDTO poster = posterService.getPosterByPosterId(posterId);
		return ResponseEntity.ok(poster);
	}
	
	@PostMapping("/comment/createComment")
	public ResponseEntity<AccountCommentDTO> createComment(@RequestBody AccountCommentDTO commentDTO) {
		//TODO: process POST request
		AccountCommentDTO poster = commentService.createComment(commentDTO);
		return new ResponseEntity<>(poster, HttpStatus.CREATED);
	}
	
	@PostMapping("/comment/getListCommentByPosterId")
	public ResponseEntity<List<AccountCommentDTO>> getListCommentByPosterId(@RequestBody long posterId) {
		//TODO: process POST request
		List<AccountCommentDTO> comment = commentService.getListCommentByPosterId(posterId);
		return ResponseEntity.ok(comment);
	}
	
}
