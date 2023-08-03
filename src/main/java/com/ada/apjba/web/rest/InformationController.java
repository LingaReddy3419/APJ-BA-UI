package com.ada.apjba.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ada.apjba.domain.Information;
import com.ada.apjba.repository.InformationRepo;
@RestController
public class InformationController {
	@Autowired
	private InformationRepo informationReo;
	
	@GetMapping("/scenarios")
	public List<Information>getInformations(){
		return informationReo.findAll();
		
	}

}
