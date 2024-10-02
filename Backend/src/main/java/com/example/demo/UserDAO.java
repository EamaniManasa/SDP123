package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDAO {
  
  @Autowired
  UserInterface repo;

  public void insert(User user) {
    repo.save(user);
    
  }

  public User findbymail(String email) {
    
    return repo.findByEmail(email);
  }
  
  

}