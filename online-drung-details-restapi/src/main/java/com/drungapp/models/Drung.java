package com.drungapp.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Drung {
	@Id
	@GeneratedValue(generator = "drung_id", strategy = GenerationType.AUTO)
	@SequenceGenerator(name = "drung_id", sequenceName = "drung_id")
	
	private Integer drungId;
	private String drungName;
	@OneToOne(cascade =  CascadeType.ALL )
	@JoinColumn(name = "drungtype_id")
	private DrungType drungType;
	private String dosage;
	private String propreties;
	private String beforeUse;
	private String howUse;
	private String codeConduct;
	private String danger;
	private String keep;
	private String look;
	private String image;
	private String referUrl;
	public Drung(String drungName, DrungType drungType, String dosage, String propreties, String beforeUse,
			String howUse, String codeConduct, String danger, String keep, String look, String image, String referUrl) {
		super();
		this.drungName = drungName;
		this.drungType = drungType;
		this.dosage = dosage;
		this.propreties = propreties;
		this.beforeUse = beforeUse;
		this.howUse = howUse;
		this.codeConduct = codeConduct;
		this.danger = danger;
		this.keep = keep;
		this.look = look;
		this.image = image;
		this.referUrl = referUrl;
	}
	@Override
	public String toString() {
		return "Drung [drungName=" + drungName + ", drungType=" + drungType + ", dosage=" + dosage + ", propreties="
				+ propreties + ", beforeUse=" + beforeUse + ", howUse=" + howUse + ", codeConduct=" + codeConduct
				+ ", danger=" + danger + ", keep=" + keep + ", look=" + look + ", image=" + image + ", referUrl="
				+ referUrl + "]";
	}
	
	

}
