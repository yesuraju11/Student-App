package com.example.Registration.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.example.Registration.Entity.Registration;
import com.example.Registration.Repo.RegisterRepo;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student/v1")
public class StdRegistrationController 
{	
	@Autowired
	private RegisterRepo registerRepo;
	
	//-----------get Method-------------
	
	@GetMapping("/stdGet/")
	//@CrossOrigin(origins = "*")
	public List<Registration> getAllData()
	{
		return registerRepo.findAll();
		
	}
	
	//-----------post Method---------------
	
	@PostMapping("/post")
	//@CrossOrigin(origins = "*")
	/*public String post()
	{
		return "post method....";
	}
	*/
	public /*Registration*/String postStdData(@RequestBody Registration registration)
	{
		Registration r=new Registration();
		//r.setFirstName(registration.getFirstName());
		System.out.println("--------------------------");
		
		System.out.println(registration);
		
		System.out.println("--------------------------");
		registerRepo.save(registration);
		return "dataa get";
		 
	}
	
	//-------------------------Get Student by Id------------------
	
	@GetMapping("/student/{id}")
	public Registration getStd(@PathVariable Integer id)
	{
		/*Registration res=registerRepo.getById(id);
		System.out.println(res);*/
		return registerRepo.getById(id);
		
	}

	//-------------update student--------------------
	
	@PutMapping("/student/{id}")
	public /*ResponseEntity<Registration>*/String  updateStudent(@PathVariable Integer id,@RequestBody Registration registration)
	{
		Registration res=registerRepo.getById(id);
		res.setFirstName(registration.getFirstName());
		res.setLastName(registration.getLastName());
		res.setEmail(registration.getEmail());
		res.setPhoneNum(registration.getPhoneNum());
		res.setGender(registration.getGender());
		res.setAddress(registration.getAddress());
		Registration r= registerRepo.save(res);
		return "std update";
		
		
	}
	
	/*----------  Delete student data ----------------*/
	@DeleteMapping("/student/{id}")
	public String stdDelete(@PathVariable Integer id)
	{
		registerRepo.deleteById(id);
		return "delete std data...";
		
	}
}
