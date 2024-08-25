package com.config.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.config.entity.AccountImage;

@Repository
public interface AccountImageRepository extends JpaRepository<AccountImage, Long>
{
//	@Query("Select u From AccountImage u where u.account.id = :accountId")
//	List<AccountImage> getListPosterByAccountId(long accountId);
}
