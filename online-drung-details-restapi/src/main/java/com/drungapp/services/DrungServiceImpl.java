package com.drungapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drungapp.exception.DrungNotFoundException;
import com.drungapp.exception.IdNotFoundException;
import com.drungapp.models.Drung;
import com.drungapp.repositories.DrungRepository;


@Service
public class DrungServiceImpl implements DrungService{
	@Autowired
	DrungRepository drungRepository;
	
	@Override
	public Drung addDrung(Drung drung) {
		return drungRepository.save(drung);
	}

	@Override
	public void updateDrung(Drung drung) {
		drungRepository.save(drung);
	}

	@Override
	public Drung getDrungById(int drungId){		
//		return drungRepository.findById(drungId).get();
		return drungRepository
				.findById(drungId)
				.orElseThrow(()->new IdNotFoundException("Id Not Found"));
	}	

	@Override
	public void deleteDrung(int drungId){
		
		if(drungId<=0) {
			throw new IdNotFoundException("Id should be grater then zero");
		}
		drungRepository.deleteById(drungId);

	}

	@Override
	public List<Drung> getDrungsByDrungType(String typeName) {		
		List<Drung> drunglList =  drungRepository.findByDrungTypeTypeName(typeName);
		if(drunglList.isEmpty()) {
			throw new DrungNotFoundException("Drung Type Name is not found");
		}
		return drunglList;		
	}
	
	@Override
	public List<Drung> getDrungsAll(){		
		return drungRepository.findAll();
	}
	
	@Override
	public List<Drung> getDrungsByDrungName(String drungName) {		
		List<Drung> drunglList =  drungRepository.findByDrungNameLike(drungName);
		if(drunglList.isEmpty()) {
			throw new DrungNotFoundException("Drung Type Name is not found");
		}
		return drunglList;		
	}


}
