package com.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.config.service.impl.AccountImpl;


@Component
public class CustomerUserProvider implements AuthenticationProvider{

	@Autowired
	private AccountImpl accountImpl;
	
	@Autowired @Lazy
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		// TODO Auto-generated method stub
		System.out.println("CustomerUserProvider");
		String username = authentication.getName();
		String password = authentication.getCredentials().toString().trim();
		
		CustomerUserDetail userdetail = (CustomerUserDetail) accountImpl.loadUserByUsername(username);
		if(userdetail == null)
		{
			System.out.println("Provider userdetail == null : Invalid username or password");
			throw new BadCredentialsException("Invalid username or password");
		}
		else if(!passwordEncoder.matches(password, userdetail.getPassword()))
		{
			System.out.println("Provider userdetail == null : Invalid username or password");
			throw new BadCredentialsException("Invalid username or password");
		}
		
		return new UsernamePasswordAuthenticationToken(username, password, userdetail.getAuthorities());
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
