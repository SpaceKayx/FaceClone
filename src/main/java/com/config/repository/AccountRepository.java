package com.config.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.config.entity.Account;
import java.util.List;


@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{

	Account findByUsername(String username);
	
}
