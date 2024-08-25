package com.config.security;

import java.util.Collection;
import java.util.Collections;

import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.config.entity.Account;

import lombok.AllArgsConstructor;
import lombok.Builder;

@Lazy
@Builder
@AllArgsConstructor
public class CustomerUserDetail implements UserDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Account account;
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		System.out.println("CustomerUserDetail");
//		System.out.println("account: "+account);
		System.out.println("account role: "+account.isRole());
		
//		Authentication authentication = new UsernamePasswordAuthenticationToken(
//				account.getUsername(),
//				account.getPassword()
//			);
//		SecurityContextHolder.getContext().setAuthentication(authentication);
//		test t = new test();
//		t.setAuth(authentication);

//		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//		System.out.println("auth: " +auth);
		if(account.isRole()) {
			return Collections.singleton(new SimpleGrantedAuthority("ROLE_ADMIN"));
			
		}
		return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return account.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return account.getUsername();
	}

}
