package com.drungapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drungapp.models.Drung;
import com.drungapp.services.DrungService;

@RestController
//@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/drungs-restapi")
public class DrungController {
	@Autowired
	DrungService drungService;
	
	@PostMapping("/drungs")
	public ResponseEntity<Drung> addDrung(@RequestBody Drung drung){
		Drung newDrung = drungService.addDrung(drung);		//
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "one drung added");
		return ResponseEntity.ok().headers(header).body(newDrung);
	}	
	@PutMapping("/drungs")
	public ResponseEntity<Drung> updateDrung(@RequestBody Drung drung){		
		drungService.updateDrung(drung);
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "one drung updated");
		return ResponseEntity.ok().headers(header).body(null);
	}
	@GetMapping("/drungs/drung-by-id/{drungId}")
	public ResponseEntity<Drung> getDrungById(@PathVariable int drungId){
		Drung drung = drungService.getDrungById(drungId);		//
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "getting one drung instance");
		return ResponseEntity.ok().headers(header).body(drung);
	}
	@DeleteMapping("/drungs/drung-by-id/{drungId}")
	public ResponseEntity<Void> deleteDrung(@PathVariable int drungId){
		drungService.deleteDrung(drungId);
		return ResponseEntity.ok().build();	
	}
	@GetMapping("/drungs/drung-by-typeName/{typeName}")
	public ResponseEntity<List<Drung>> getDrungsByDrungType(@PathVariable String typeName){
		List<Drung> drungList =  drungService.getDrungsByDrungType(typeName);
		return ResponseEntity.ok().body(drungList);
	}
	@GetMapping("/drungs/drung-all")
	public ResponseEntity<List<Drung>> getDrungsAll(){
		List<Drung> drungList =  drungService.getDrungsAll();
		return ResponseEntity.ok().body(drungList);
	}
	@GetMapping("/drungs/drung-by-drungName/{drungName}")
	public ResponseEntity<List<Drung>> getDrungsByDrungName(@PathVariable String drungName){
		List<Drung> drungList =  drungService.getDrungsByDrungName(drungName);
		return ResponseEntity.ok().body(drungList);
	}
}
