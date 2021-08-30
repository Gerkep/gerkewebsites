package com.gerke.gerkewebsites.controller;

import com.gerke.gerkewebsites.mail.EmailService;
import com.gerke.gerkewebsites.model.MyMail;
import com.sendgrid.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @Autowired
    EmailService emailService;

    @RequestMapping("/")
    public String home() {
        return "index.html";
    }

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("mail", new MyMail("", ""));
        return "index";
    }

    @GetMapping("/error")
    public String error() {
        return "error";
    }

    @PostMapping("/send")
    public String sendMail(@ModelAttribute MyMail mail, Model model) {
        model.addAttribute("mail", mail);
        Response response = emailService.sendEmail(mail);
        return "index";
    }
}
