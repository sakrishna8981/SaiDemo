package stepdefinitions;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import Cucumber.Automation.BaseDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {

	public WebDriver driver;

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() throws IOException {
		driver = BaseDriver.driverInit();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^User enters Username \"([^\"]*)\"amd Password \"([^\"]*)\"$")
	public void user_enters_username_somethingamd_password_something(String strArg1, String strArg2) throws Throwable {

		WebElement login = driver.findElement(By.id("DrpDwnMn04label"));
		login.click();
		WebElement username = driver.findElement(By.id("user_email"));
		username.sendKeys(strArg1);
		Thread.sleep(3000);
		WebElement password = driver.findElement(By.id("user_password"));
		password.sendKeys(strArg2);
		Thread.sleep(3000);
	}

	@When("^User enters the following detail on signup page$")
	public void user_enters_the_following_detail_on_signup_page(DataTable tab) throws InterruptedException {
		List<List<String>> obj = tab.raw();
		WebElement signup = driver.findElement(By.id("comp-iiqg1vggactionTitle"));
		signup.click();
		WebElement email = driver.findElement(By.id("signUpDialogemailInputinput"));
		email.sendKeys(obj.get(0).get(0));
		Thread.sleep(3000);
		WebElement pwd = driver.findElement(By.id("signUpDialogpasswordInputinput"));
		pwd.sendKeys(obj.get(0).get(1));
		Thread.sleep(3000);

	}
	 @When("^User enter Username (.+) amd Password (.+)$")
	    public void user_enters_username_amd_password(String username, String password) throws InterruptedException  {
		 WebElement login = driver.findElement(By.id("DrpDwnMn04label"));
			login.click();
			WebElement username1 = driver.findElement(By.id("user_email"));
			username1.sendKeys(username);
			Thread.sleep(3000);
			WebElement password1 = driver.findElement(By.id("user_password"));
			password1.sendKeys(password);
			Thread.sleep(3000);
			System.out.println("successfully logged in with" +  "username: " + username   + "password: " +  password);
	        
	    }

	@And("^clicks on signup button$")
	public void clicks_on_signup_button() throws InterruptedException {
		driver.findElement(By.id("signUpDialogokButton")).click();
		Thread.sleep(3000);

	}

	@And("^clicks on Login button$")
	public void clicks_on_Login_button() throws InterruptedException {
		WebElement loginbtn = driver.findElement(By.name("commit"));
		loginbtn.click();
		Thread.sleep(3000);
	}

	@Then("^He can visit the practice page$")
	public void he_can_visit_the_practice_page() {
		WebElement practice = driver.findElement(By.xpath("//*[@id=\"navbar\"]/div/div/div/ul/li[3]/a"));
		practice.click();
	}

	@And("^A message is displayed$")
	public void a_message_is_displayed() {
		System.out.println("login is successful");
		
	}

}
