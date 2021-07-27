package com.drungapp;

import java.awt.List;
import java.util.Arrays;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.drungapp.models.Drung;
import com.drungapp.models.DrungType;
import com.drungapp.services.DrungService;

@SpringBootApplication
public class OnlineDrungDetailsRestapiApplication extends SpringBootServletInitializer implements CommandLineRunner  {

	public static void main(String[] args) {
		SpringApplication.run(OnlineDrungDetailsRestapiApplication.class, args);
	}
	
	@Autowired
	DrungService drungService;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Rest API Started...");
		
		/* Create new */
//		DrungType drungType = new DrungType("น้ำ");					
//		Drung drung = new Drung("พาราเซตามอลเด็ก", drungType, "80 มิลลิลิตร", "ยานี้ใชเพื่อลดไข ้", "ห้ามใชในผู้ที่ ้ เคยแพ้ยาพาราเซตามอล", "ขนาดและวิธีใช", "ไม่กินยาติดต่อกันเป็นเวลานาน", "อันตรายที่อาจเกิดจากยา", "ควรเก็บยานีอย่างไร", "ลักษณะและสวนประกอบของยาน", "img", "link");		
//		drungService.addDrung(drung);
		
		
//		drungService.getDrungsAll()
//			.stream()
//			.forEach(System.out::println);
//		System.out.println();
		
//		Drung drung = drungService.getDrungById(1);
//		System.out.println(drung);
		
//		drungService.getDrungsByDrungType("น้ำ")
//		.stream()
//		.forEach(System.out::println);
//		System.out.println();
	}
	
	
	
}
