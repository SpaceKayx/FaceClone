package com.config.entity;

import java.util.Date;
import java.util.List;

import org.hibernate.annotations.Nationalized;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "poster")
public class AccountPoster {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PosterId")
	@Id
	long posterId;

	@Nationalized
	@Column(name = "Description", columnDefinition = "nvarchar(MAX)")
	String description;


	@jakarta.persistence.Temporal(value = TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Column(name = "PremiereDate" , columnDefinition ="date")
	Date premiereDate;
	
	@OneToMany(mappedBy = "accountPoster", fetch = FetchType.EAGER)
	List<AccountLike> accountLike;

	@OneToMany(mappedBy = "accountPoster", fetch = FetchType.EAGER)
	List<AccountComment> accountComment;

	@JsonIgnore
	@OneToMany(mappedBy = "accountPoster", fetch = FetchType.EAGER)
	List<AccountImage> accountImage;
	
	@ManyToOne()
	@JsonIgnore
	@JoinColumn(name = "AccountId", nullable = false)
	Account accountId;
}
