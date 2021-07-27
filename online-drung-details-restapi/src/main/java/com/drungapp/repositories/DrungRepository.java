package com.drungapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.drungapp.models.Drung;

@Repository
public interface DrungRepository extends JpaRepository<Drung, Integer>{
	List<Drung> findByDrungTypeTypeName(String typeName);	
	
	@Query("SELECT d FROM Drung d WHERE d.drungName LIKE %:drungName%")
	List<Drung> findByDrungNameLike(String drungName);
	
//	@Query("FROM Hotel h INNER JOIN h.menuList mn WHERE mn.menuName=?1")
//	List<Hotel> getHotelsByMenu(String menuName);
//	
//	@Query("FROM Hotel h INNER JOIN h.delivery d WHERE d.partnerName=?1" )
//	List<Hotel> getHotelsByDelivery(String partnerName);
//	
//	@Query("FROM Hotel h INNER JOIN h.address a INNER JOIN h.menuList mn WHERE a.streetName=?1 AND mn.menuName=?2")
//	List<Hotel> getHotelsByLocationAndMenu(String location, String menuName);

}