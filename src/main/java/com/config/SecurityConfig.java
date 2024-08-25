package com.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.config.jwt.JwtTokenProvider;
import com.config.security.CustomerAuthenticationSuccessHandler;
import com.config.security.CustomerUserProvider;
import com.config.service.impl.AccountImpl;


@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true) cho phép phân quyền bằng annontation
public class SecurityConfig{

	@Autowired
	private AccountImpl accountImpl;
	
	@Autowired
	private CustomerUserProvider userProvider;
	
	@Bean
	public SecurityFilterChain filter(HttpSecurity http) throws Exception
	{
		System.out.println("securityConfig");
		http
		.csrf().disable()
		.cors()
		.and()
		.userDetailsService(accountImpl)
		.addFilterBefore(new JwtTokenProvider(accountImpl), UsernamePasswordAuthenticationFilter.class)
		.authenticationProvider(authencationProvider())
		.authorizeRequests(req ->{ req
			.requestMatchers("/api/**", "/account/**").authenticated()
			.anyRequest().permitAll();
//			.requestMatchers("/signin", "/register").permitAll();
		})
		.formLogin((login) -> {login
			.loginPage("/signin")
			.defaultSuccessUrl("/login_success")
//			.successHandler(authenticationSuccessHandler())
			.permitAll();
		})
		.logout(out ->{ out
			.logoutUrl("/logout")
			.deleteCookies("FaceClone")
			.clearAuthentication(true)
			.permitAll();
		})
		;
		return http.build();
	}
	
	@Bean
	public AuthenticationSuccessHandler authenticationSuccessHandler()
	{
		return new CustomerAuthenticationSuccessHandler();
	}
	
	@Bean
	public DaoAuthenticationProvider authencationProvider()
	{
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(accountImpl);
		provider.setPasswordEncoder(passwordEncoder());
		
		return provider;
	}
	
	@Bean
	public AuthenticationManager authencationManager(AuthenticationConfiguration authConfig) throws Exception
	{
		return authConfig.getAuthenticationManager();
	}
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource()
	{
		System.out.println("CorsConfigurationSource");
		CorsConfiguration cors = new CorsConfiguration();
		cors.setAllowedOrigins(Arrays.asList("http://localhost:8080", "http://localhost:3000"));
		cors.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE", "PUT"));
		cors.setAllowedHeaders(Arrays.asList("content-type", "authorization"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", cors);
		return source;
	}
}


