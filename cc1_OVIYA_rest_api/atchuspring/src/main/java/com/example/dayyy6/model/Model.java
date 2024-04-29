package com.example.dayyy6.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Model
{
    @Id
    private int id;
    private String firstname;
    private String lastname;
    private String number;
    private String email;
    private String fromplace;
    private String toplace;
    private String departure;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFromplace() {
        return fromplace;
    }
    public void setFromplace(String fromplace) {
        this.fromplace = fromplace;
    }
    public String getToplace() {
        return toplace;
    }
    public void setToplace(String toplace) {
        this.toplace = toplace;
    }
    public String getDeparture() {
        return departure;
    }
    public void setDeparture(String departure) {
        this.departure = departure;
    }
    public Model() {
    }
    public Model(int id, String firstname, String lastname, String number, String email, String fromplace,
            String toplace, String departure) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.number = number;
        this.email = email;
        this.fromplace = fromplace;
        this.toplace = toplace;
        this.departure = departure;
    }
}