package org.sttp;

import org.test.Baseclass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends Baseclass{
	@Before(order= 2)
	private void precondition3() {
		
		WindowMaximize();

	}
	@Before(order= 1)
	private void precondition1() {
		launchBrowser();
		

	}
	@Before(order= 3, value= "@Sanity")
	private void precondition2() {
		System.out.println("Precondition 2 ");

	}
	
	@After(order= 9)
	private void postcondition1() {
		System.out.println("Postcondition 1 ");
	}
	@After(order= 2)
	private void postcondition2() {
		closeEntireBrowser();
	}

}
