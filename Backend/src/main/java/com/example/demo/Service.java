package com.example.demo; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin
public class Service {
  @Autowired
  UserDAO dao;
  
  @GetMapping("/hello/{name}")
  public String hello(@PathVariable("name") String name) {
    return "hello!! " +name;
  }
  
  @PostMapping("/signup")
  public String insertuser(@RequestBody User user) {
    System.out.println(user);
    dao.insert(user);
    return "user inserted";
  }
  
  @GetMapping("/signin")
  public String insertuser(@RequestParam("email")String email,@RequestParam("password") String password) {
    System.out.println(email);
    User u1=dao.findbymail(email);
    
    
    if(u1==null ) {
      
      return "no";
    }
    else {
      if(password.equals(u1.getPassword())) {
        if(email.equals("admin@indiainsight.in")&&password.equals("admin")) {
          return "admin";
        }
        else {
          return "yes";
        }
      }
      else {
      return "no";
      }
    }
    
  }
}