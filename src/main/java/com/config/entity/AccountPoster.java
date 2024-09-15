package com.config.entity;

import java.util.Date;
import java.util.List;

import org.hibernate.annotations.Nationalized;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

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

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PosterId")
	long posterId;

	@Nationalized
	@Column(name = "Description", columnDefinition = "nvarchar(MAX)")
	String description;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Column(name = "PremiereDate", columnDefinition = "date")
	Date premiereDate;

	@OneToMany(mappedBy = "accountPoster", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	List<AccountLike> accountLike;

	@OneToMany(mappedBy = "accountPoster", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	List<AccountComment> accountComment;

	@OneToMany(mappedBy = "accountPoster", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	List<AccountImage> accountImage;

	@ManyToOne()
	@JsonIgnore
	@JoinColumn(name = "AccountId", nullable = false)
	Account accountId;
}
