package com.config.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "comments")
public class AccountComment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long commentId;
	
	@Column(name = "Description", nullable = false)
	String description;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "AccountPoster", nullable = false)
	AccountPoster accountPoster;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "Account", nullable = false)
	Account account;
	
}
