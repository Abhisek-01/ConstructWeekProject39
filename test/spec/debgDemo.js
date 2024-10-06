// const { expect } = require("chai");

//IF it is hybrid app I am going to s Xpath as my only for locator or selector 
describe('ApiDemo', () => {

  before(async () => {
    let bag = await driver.getContext();
    console.log(bag);
  });

  it('App', async () => {
      // UiAutomator2-driver methods can be accessed by driver object
      await driver.pause(5000);
      const app=await $("~App");
      // Any of the locator here in mobile testing we are going to give with $("~<ACID>") 
      app.click();
      const bar=await $("~Action Bar");
      expect (bar).toBeExisting()
  });


  
it('Class Name', async() => {
  //find element by class Name
  //API Demos //This is at the first screen
  const classname = await $('android.widget.TextView')
   console.log(await classname.getText());
  //Assertion
  await expect(classname).toHaveText("API Demos")
});  


it('App', async () => {

  const app=await $("~App");
  app.click();
    
  await $('android=new UiSelector().text("Activity")').click();
  // Xpath locator-no need to give any symbol
  const sec = await $('//android.widget.TextView[@content-desc="Secure Surfaces"]')
  await driver.execute("mobile:scroll", {strategy: "accessibility id", selector: 'Secure Surfaces'})
  // driver.execute("activity", {properties}) only accessibilty id and class name will work in properties
  await sec.click();

});



it('scroll to tanslucent', async() => {
      const app = await $('~App');
      await app.click();
      // you need to give particular android = locator
      await $('android-new UiSelector().text("Activity")').click();
      // Xpath locator-no need to give any symbol
      const sec = await $('//android.widget.TextView[@content-desc="Translucent"]')
      await driver.execute("mobile:scroll", {strategy: "accessibility id", selector: 'Translucent'})
      // driver.execute("activity", {properties}) only accessibilty id and class name will work in properties 
      await sec.click();
  });

  
it('views', async () => {

    const view = await $('~ Views');
    await view.click();

    const auto = await $('~Auto Complete');
    await auto.click();

    const screen = await $('~1. Screen Top');
    await screen.click();

    await $('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")').setValue('India');
    
    await $('android-new UiSelector().resourceId("io.appium.android.apis:id/edit")').click();
    await $('~Give me Focus').click();

});

it('Text Multiple element', async() => {
      const expectedList = [
        'API Demos', 'Accessibility', 'Animation', 'App', 'Content',
        'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'
    ];

    const actualList =  []
    const  classList = await $$('android.widget.TextView')

    for(const ele of classList){
        const textEle = await ele.getText();
        actualList.push(textEle);
    }

    console.log(actualList);
    await expect(actualList).toEqual(expectedList);

});

it('Notification',async () => {

    await driver.openNotifications();

    //Clear all Notifiacation
    // await $ ("~Clear all notifications.").click();


  });

it('Alert',async () => {
  await driver.pause(5000);
  const app = await $('~App');
  await app.click();
  await $ ("~Alert Dialogs").click();
  await $ ("~OK Cancel dialog with a message").click();

  // await driver.acceptAlert();
  await driver.dismissAlert();
});

it('Navigation', async () => {

  // await driver.back();
  await driver.pressKeyCode(24);
  await driver.pressKeyCode(25);
  // await driver.pressKeyCode(26);

// Back Button: 4
// Home Button: 3
// Apps Button (Recent Apps): 187
// Menu Button: 82
// Search Button: 84 
// Enter Button: 66 
// Volume Up: 24 
// Volume Down: 25 
// Power Button: 26
});

it.only('Idetification Mobile Type', async() => {
  //Identifying the application like Native or Hybrid app
  let bag = await driver.getContext();
  console.log(bag);

});

it('Alert Ultra Long Msg', () => {
  
  

});


});

