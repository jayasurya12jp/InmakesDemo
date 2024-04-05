package org.sttp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.test.Baseclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step2 extends Baseclass{
	@Given("User launch the Browser")
	public void user_launch_the_Browser() {
	    launchBrowser();
	    WindowMaximize();
	}

	@When("User launch Facebook URL")
	public void user_launch_Facebook_URL() {
	   launchUrl("https://www.facebook.com/");
	   
	}

	@When("User has to pass data {string} in email field")
	public void user_has_to_pass_data_in_email_field(String em) {
		 WebElement email = driver.findElement(By.id("email"));
		   email.sendKeys(em);
	}

	@When("User has to pass data {string} in Password field")
	public void user_has_to_pass_data_in_Password_field(String pa) {
		WebElement pass = driver.findElement(By.name("pass"));
	    pass.sendKeys(pa);
	}

	@When("User has to Click Login buttone")
	public void user_has_to_Click_Login_buttone() {
		driver.findElement(By.name("login")).click();
	}

	@Then("User has to close the Browser")
	public void user_has_to_close_the_Browser() {
	  closeEntireBrowser();
	}

}
