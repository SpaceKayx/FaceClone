package com.config.security;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class CustomerAuthenticationSuccessHandler implements AuthenticationSuccessHandler{

//	public ResponseEntity<Authentication> onAuthenticationSuccess1(HttpServletRequest request, HttpServletResponse response,
//			Authentication authentication) throws IOException, ServletException {
//		System.out.println("CustomerAuthenticationSuccessHandler");
//		
//		System.out.println("get: "+SecurityContextHolder.getContext().getAuthentication());
//		return ResponseEntity.ok(authentication);
//	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		System.out.println("CustomerAuthenticationSuccessHandler");
		System.out.println("authentication: " +authentication);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(convertObjToJson(authentication.getPrincipal()));
	}

	private String convertObjToJson(Object principal) {
		// TODO Auto-generated method stub
		try {
			return new ObjectMapper().writeValueAsString(principal);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return null;
		}
	}
}
