package com.example.dayyy6.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dayyy6.model.Model;

@Repository
public interface RRepository extends JpaRepository <Model,Integer>
{
    Optional<Model> findByEmail(String username);
}
