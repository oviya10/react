package com.example.dayyy6.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.dayyy6.model.Model;
import com.example.dayyy6.repository.RRepository;

@Service
public class Sservice
{
    @Autowired
    private RRepository ab;
    //create user

    public Model createnewuser(@NonNull Model user)
    {
        return ab.save(user);
    }
    //getuser

    public List<Model> getAllusers()
    {
        return ab.findAll();
    }
    //getuserusingemail
    public Optional<Model>getModelByEmail(String email)
    {
        return ab.findByEmail(email);
    }
    //update user
    public Model updateUser(@NonNull Integer id,@RequestBody Model user)
    {
        return ab.findById(id)
        .map(existingUser->{
            existingUser.setDeparture(user.getDeparture());
            existingUser.setEmail(user.getEmail());
            existingUser.setFirstname(user.getFirstname());
            existingUser.setLastname(user.getLastname());
            existingUser.setFromplace(user.getFromplace());
            existingUser.setToplace(user.getToplace());
            existingUser.setId(user.getId());
            existingUser.setNumber(user.getNumber());
            return ab.save(existingUser);
        }).orElseThrow(()->new RuntimeException("User not found with this email: "+id));
    }

    
    
    public void removeUser(@NonNull Integer userId)
    {
        ab.deleteById(userId);
    }

}
