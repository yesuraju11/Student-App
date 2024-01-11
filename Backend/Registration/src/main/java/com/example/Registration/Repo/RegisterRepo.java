package com.example.Registration.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Registration.Entity.Registration;
@Repository
public interface RegisterRepo extends JpaRepository<Registration, Integer>
{

	List<Registration> findAll();

}
