package stepdefinitions;

import Cucumber.Automation.BaseDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseDriver {

	@Before("@WebTest")
	public void beforeExecution() {
		System.out.println("Before Execution");
	}

	@After("@RegTest")
	public void afterExecution() {
		System.out.println("After Execution");
		driver.close();
		
	}

}
