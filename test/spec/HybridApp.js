describe('ApiDemos App', () => {

  it('touch and tap', async () => {
      await driver.launchApp();    
      await driver.pause(7000);   
  
     
      const mainPageTitle = await $("~App");  
      await expect(mainPageTitle).toBeExisting();
      await expect(mainPageTitle).toHaveText("App");  
  });

  // 2.Navigation and switch between apps
  it('switch app', async () => {
     
      await driver.background(-1);   
      await driver.launchApp();    
  
      await driver.pause(5000);      
  
      const currentApp = await driver.getCurrentPackage();   
      console.log('Current app package:', currentApp);  
  });

  // 3.Keyboard input simulation
  it('keyboard mouse', async () => {
      const inputField = await $("~text_input");  
      await inputField.setValue("Test input");    
  
      const enteredText = await inputField.getText();    
      console.log('Entered text:', enteredText);

      await expect(enteredText).toEqual("Test input");
  });

  // 4.Forward and backward navigation
  it('forward and backward navigation', async () => {
      await driver.back();   // Navigate back
      await driver.pause(2000);   // Pause briefly
  
      const newPageTitle = await $("~new_page_title_locator");  
      await expect(newPageTitle).toBeExisting();  
  });

  // 5.Navigate to another page
  it('navigate to another page', async () => {
      const buttonToClick = await $("~accessibility_button");  
      await buttonToClick.click();  // Click the button to navigate
      await driver.pause(3000);     // Wait for the new page to load
  
      const newPageTitle = await $("~accessibility_node_provider");  
      await expect(newPageTitle).toBeExisting();  
  
      await driver.closeApp();  
      console.log("ApiDemos app closed");
  });

});