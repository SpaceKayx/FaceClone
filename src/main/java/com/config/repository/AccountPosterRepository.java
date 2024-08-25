package com.config.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.config.entity.Account;
import com.config.entity.AccountImage;
import com.config.entity.AccountPoster;

@Repository
public interface AccountPosterRepository extends JpaRepository<AccountPoster, Long>{

//	@Query("Select u From AccountPoster u where u.accountImage.id = :posterId")
//	List<AccountImage> getListImageByPosterId(long posterId);
	
//	@Query(value = "select * from poster where AccountId = :id", nativeQuery = true)
	@Query("Select u From AccountPoster u where u.accountId.accountId = :id")
	List<AccountPoster> getListPosterByAccountId(@Param("id") long id);

	
}
