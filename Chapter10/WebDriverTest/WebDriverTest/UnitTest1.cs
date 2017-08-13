using System;
//using Microsoft.VisualStudio.TestTools.UnitTesting;

using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using NUnit.Framework;

namespace WebDriverTest
{
    [TestFixture]
    public class BingTest
    {
        private IWebDriver driver = null;

        [SetUp]
        public void SetUp()
        {
            driver = new ChromeDriver(); // construct the ChromeDriver object
        }

        [TearDown]
        public void TearDown()
        {
            driver.Quit();
        }

        [Test]
        public void Search()
        {
            // navigate to bing.com
            driver.Navigate().GoToUrl("http://www.bing.com");
            // locate the search box by id, set “selenium” as search text
            driver.FindElement(By.Id("sb_form_q")).SendKeys("selenium");
            // locate the search button and click
            driver.FindElement(By.Id("sb_form_go")).Click();

            System.Threading.Thread.Sleep(5000);
            Assert.IsNotNull(driver.FindElement(By.XPath("//a[@href='http://docs.seleniumhq.org/']")));

        }


    }
}
