package org.sttp;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = "org.sttp", 
dryRun = false , monochrome = true,
     plugin = {"json:Report\\jsonreport.json"})
public class Runner {

}
