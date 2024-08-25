package com.config.jwt;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Enumeration;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.config.mapper.AccountMapper;
import com.config.security.CustomerUserDetail;
import com.config.service.impl.AccountImpl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Slf4j
@Component
public class JwtTokenProvider extends OncePerRequestFilter
{
//	@Autowired
	private final AccountImpl accountService;
	
	// Đoạn JWT_SECRET này là bí mật, chỉ có phía server biết
	private final byte[] secretKey = "The innovative FaceClone technology allows users to create highly realistic virtual avatars that can be used across various online platforms. While the technology raises some privacy concerns, the developers claim to have implemented security measures to address these issues".getBytes(StandardCharsets.UTF_8);
//	SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);
	
	//Thời gian có hiệu lực của chuỗi jwt
	private final long JWT_EXPIRATION = 604800000L;
	
	// Tạo JWT từ thông tin user
	public String generateToken(CustomerUserDetail userDetail) 
	{
		System.out.println("generateToken");
		System.out.println("secretKey: "+secretKey);
		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
		
		// Tạo chuỗi jwt từ id user
		 return Jwts.builder()
				 .setSubject(userDetail.getUsername())
				 .setIssuedAt(now)
				 .setExpiration(expiryDate)
				 .signWith(SignatureAlgorithm.HS512, secretKey)
				 .compact();
	}
	// Lấy thông tin User từ JWT
	public String getUserNameFromJWT(String token)
	{
		Claims claims = Jwts.parser()
							.setSigningKey(secretKey)
							.parseClaimsJws(token)
							.getBody();
		return claims.getSubject();
	}
	
	public boolean validateToken(String token)
	{
		try {
			System.out.println("validateToken");
			System.out.println("secretKey: "+secretKey);
			System.out.println("token: "+token);
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
            return false;
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            return false;
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
            return false;
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
            return false;
        }
	}

	@Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String token = getTokenFromRequest(request);
        if (token != null && validateToken(token)) {
            String username = getUserNameFromJWT(token);
            UserDetails userDetails = accountService.loadUserByUsername(username);
            if (userDetails != null) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } else {
                log.error("Failed to load user details for username: {}", username);
            }
        }
        filterChain.doFilter(request, response);
    }

	public String getTokenFromRequest(HttpServletRequest request)
	{
		System.out.println("url: " +request.getRequestURI());
		String bearerToken = request.getHeader("Authorization");
		System.out.println("bearerToken: " +bearerToken);
		System.out.println("StringUtils: " +StringUtils.hasText(bearerToken));
		if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer "))
		{
			return bearerToken.substring(7);
		}
		return null;
	}
}
