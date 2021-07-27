package com.drungapp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class DrungType {
	@Id
	@GeneratedValue(generator ="dt_id", strategy = GenerationType.AUTO)
	@SequenceGenerator(name = "dt_id", sequenceName = "drungtype_id")
	
	private Integer drungtypeId;
	private String typeName;
	public DrungType(String typeName) {
		super();
		this.typeName = typeName;
	}
	@Override
	public String toString() {
		return "DrungType [typeName=" + typeName + "]";
	}
	
	
	
}
