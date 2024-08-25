package com.config.entity;

import java.util.List;

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
@Table(name = "images")
public class AccountImage {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ImageId")
	@Id
	long id;

	@Column(name = "ImageName", nullable = false, length = 255)
	String imageName;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "AccountPoster", nullable = false)
	AccountPoster accountPoster;
}
