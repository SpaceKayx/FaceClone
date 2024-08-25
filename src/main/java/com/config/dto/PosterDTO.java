package com.config.dto;

import java.util.List;

import com.config.entity.Account;
import com.config.entity.AccountImage;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PosterDTO {

	long posterId;
	String description;
	int like;
	String comment;
	List<AccountImage> accountImage;
}
