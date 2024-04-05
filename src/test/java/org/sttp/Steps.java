package org.sttp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.test.Baseclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps extends Baseclass{
	@Given("To launch the Browser and Maximize")
	public void to_launch_the_Browser_and_Maximize() {
	    launchBrowser();
	    WindowMaximize();
	}

	@When("To launch the facebook url")
	public void to_launch_the_facebook_url() {
	    launchUrl("https://en-gb.facebook.com/");
	}

	@When("To pass the email in email field")
	public void to_pass_the_email_in_email_field() {
	   WebElement email = driver.findElement(By.id("email"));
	   email.sendKeys("jaya@gmail.com");
	}

	@When("To pass the password in password field")
	public void to_pass_the_password_in_password_field() {
	    WebElement pass = driver.findElement(By.name("pass"));
	    pass.sendKeys("123456");
	}

	@When("Click the login buttone")
	public void click_the_login_buttone() {
	   driver.findElement(By.name("login")).click();
	}
	@Then("Close the browser")
	public void close_the_browser() {
		closeEntireBrowser();
	}
	
}
