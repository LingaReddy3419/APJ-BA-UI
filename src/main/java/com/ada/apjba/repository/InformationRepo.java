package com.ada.apjba.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ada.apjba.domain.Information;

public interface InformationRepo extends JpaRepository<Information, Long> {
	List<Information> findAll();
	
	

}
