package testrun;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (
		monochrome=true,
		features = "src/test/java/features",
		glue="stepdefinitions", tags = "@RegTest",
		plugin= {"pretty", "html:target/cucumber", "json:target/cucumber.json", "junit:target/junitreport.xml"}
		)
	
public class TestRunner {

}
