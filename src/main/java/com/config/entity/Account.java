package com.config.entity;

import java.util.List;

import org.springframework.context.annotation.Lazy;

import com.config.dto.AccountImageDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "accounts")
public class Account {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AccountId")
	@Id
	long accountId;
	
	@Column(name = "Username", columnDefinition = "nvarchar(50)", nullable = false, unique = true)
	String username;

	@Column(name = "Password", columnDefinition = "NCHAR(60)", nullable = false)
	String password;

	@Column(name = "FirstName", columnDefinition = "nvarchar(30)", nullable = false)
	String firstName;

	@Column(name = "LastName", columnDefinition = "nvarchar(30)", nullable = false)
	String lastName;

	@Column(name = "Address", columnDefinition = "nvarchar(200)", nullable = true)
	String Address;
	
	@Column(name = "Email", columnDefinition = "nvarchar(100)", nullable = false, unique = true)
	String email;

	@Column(name = "Role", nullable = false)
	boolean role;
	
	@Column(name = "Gender")
	boolean gender;
	
	@Column(name = "Married")
	boolean married;
	
	@Column(name = "PhoneNumber", nullable = true, unique = true)
	String phoneNumber;
	
	@Lazy
	@JsonIgnore
	@OneToMany(mappedBy = "accountId", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	List<AccountPoster> accountPoster;
	

	@Lazy
	@JsonIgnore
	@OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
	List<AccountLike> accountLike;
}
