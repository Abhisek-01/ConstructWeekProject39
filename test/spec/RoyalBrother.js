describe('RoyalBrother_RentalVehicle', () => {
  
  it('Test', async() => {
    
    // await driver.launchApp();  
    driver.pause(5000);

    await $("//android.widget.TextView[@text='SKIP']").click();

    await $("//android.view.ViewGroup[@content-desc='BANGALORE']/android.view.ViewGroup/android.widget.ImageView").click();
    
    // scrolling to activa scooty

    await driver.execute("mobile:scroll",{strategy:"accessibility id", selector:"Honda Activa 6G"})
    await $("//android.view.ViewGroup[@content-desc='VIEW ALL']").click();

    await $("//android.widget.TextView[@text='7 DAYS']").click();
    await $("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView").click();
    await $("//android.widget.TextView[@text='BOOK NOW']").click();
    

    //Select the date of the pick up
    await $("(//android.view.ViewGroup[@content-desc=' Date '])[1]").click();
    await $("//android.widget.TextView[@text='7']").click();
    await $("//android.widget.TextView[@text='08:30 AM']").click();

    //Select the date for drop-off
    await $("//android.widget.TextView[@text='11']").click();
    await $("//android.widget.TextView[@text='10:30 AM']").click();

    // Check availability of bike
    await $("//android.widget.TextView[@text='CHECK AVAILABILITY']").click();
    driver.pause(2000);
    await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup').click();
    
    
    // Navigating the offer
    await $("//android.widget.TextView[@text='Offers']").click();
    await driver.execute("mobile:scroll",{strategy:"accessibility id", selector:"MBK500"})
    
    // Navigate to the User Top Pic's
    await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup').click();
    await $("//android.widget.TextView[@text='HOME']").click();
    driver.pause(500);
    await driver.execute("mobile:scroll",{strategy:"accessibility id", selector:"Honda Activa 6G"})
    await $("//android.view.ViewGroup[@content-desc='VIEW ALL']").click();


    //Searching model
    await $("//android.widget.TextView[@text='Search by Model']").click();
    const model = await $("android.widget.EditText");
    model.setValue("Honda Activa");
    await $("//android.widget.TextView[@text='Honda Activa 4G']").click();

    // Back to Home 
    await driver.back();
    await driver.back();
    await driver.pressKeyCode(3);
    
  });

});
