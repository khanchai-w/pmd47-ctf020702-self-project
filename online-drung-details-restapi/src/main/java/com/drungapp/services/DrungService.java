package com.drungapp.services;

import java.util.List;

import com.drungapp.exception.DrungNotFoundException;
import com.drungapp.exception.IdNotFoundException;
import com.drungapp.models.Drung;

public interface DrungService {
	Drung addDrung(Drung drung) throws IdNotFoundException;
	void updateDrung(Drung drung) throws IdNotFoundException;
	Drung getDrungById(int drungId) throws IdNotFoundException;
	void deleteDrung(int drungId) throws IdNotFoundException;
	
	List<Drung> getDrungsByDrungType(String typeName) throws DrungNotFoundException;
	List<Drung> getDrungsAll() throws DrungNotFoundException;
	List<Drung> getDrungsByDrungName(String drungName) throws DrungNotFoundException;

}
