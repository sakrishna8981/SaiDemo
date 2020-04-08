package Cucumber.Automation;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseDriver {
	public static WebDriver driver;
	public static Properties prop;
	
	public static WebDriver driverInit() throws IOException {
		
	prop = new Properties();
	FileInputStream fis = new FileInputStream("C:\\Users\\hp\\eclipse-workspace\\Automation\\src\\test\\java\\Cucumber\\Automation\\Common.properties");
	prop.load(fis);
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.get(prop.getProperty("url"));
	return driver;
}
}
