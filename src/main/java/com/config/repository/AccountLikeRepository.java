package com.config.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.config.dto.AccountDTO;
import com.config.dto.AccountLikeDTO;
import com.config.entity.AccountLike;
import java.util.List;
import java.util.Optional;



public interface AccountLikeRepository extends JpaRepository<AccountLike, Long>{
	
	@Query("Select u From AccountLike u where u.account.accountId = :accountId and u.accountPoster.posterId = :posterId")
	Optional<AccountLike> findByAccount(long accountId, long posterId);
	
}
