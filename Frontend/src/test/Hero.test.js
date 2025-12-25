import React from "react"; 
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"; //extend-expect is for delay to check mean extend time of checking that data is loaded or not 
import Hero from "../Landing Page/home/Hero";

//test suite
describe("Hero Component" , () => {
    test("renders hero image" , () => {// comment is 'render hero image'
       
        //we chaeck three things 1.attribute i.e hero img 2.presence of document 3.attribute check
        render(<Hero />);//load hero component, not visible on UI as it work in backend so results is on terminal so no need to open browser
        const heroImage = screen.getByAltText("Hero Image"); //select the element from the screen 
        
        // in expect, mention what we expect result when render hero component.actual output and the existing ouput get compared and ouput will be visilbe that decalre  is correct ouput or not 
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png");
    });

    // test("renders signup button" , () => {
    //     render(<Hero />);
    //     const signupButton = screen.getByRole("button", {name:"/signup now/i"}); 
    //     expect(signupButton).toBeInTheDocument();
    //     expect(signupButton).toHaveClass("btn-primary");
    // });


});