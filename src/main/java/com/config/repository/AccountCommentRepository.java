package com.config.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.config.entity.AccountComment;
import com.config.entity.AccountPoster;

public interface AccountCommentRepository extends JpaRepository<AccountComment, Long>{
	@Query("Select u From AccountComment u where u.accountPoster.posterId = :posterId")
	List<AccountComment> findByAccountPoster(long posterId);
}
