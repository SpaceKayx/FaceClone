package com.config.dto;

import java.util.Date;
import java.util.List;

import com.config.entity.Account;
import com.config.entity.AccountComment;
import com.config.entity.AccountImage;
import com.config.entity.AccountLike;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AccountPosterDTO {

	long posterId;
	String description;
	Date premiereDate;
	List<AccountLike> accountLike;
	List<AccountComment> accountComment;
	List<AccountImage> accountImage;
	Account accountId;
	
	
	
	
	
}
