const { I } = inject();

module.exports = {
  locators:{
    Email:"#email_create",
    submit:"#SubmitCreate",
    title:"#id_gender2",
    fname:"#customer_firstname",
    lname:"#customer_lastname",
    password:"#passwd",
    date:"#days",
    month:"#months",
    year:"#years",
    address_fname:"#firstname",
    address_lname:"#lastname",
    company:"#company",
    address1:"#address1",
    address2:"#address2",
    city:"#city",
    state:"#id_state",
    pincode:"#postcode",
    phone:"#phone_mobile",
    alias:"#alias",
    register:"#submitAccount",
  },
    

  
     createUser(Email,fname,lname,password,date,month,year,address_fname,address_lname,company,address1,address2,city,state,pincode,alias){
      I.fillField(this.locators.Email,Email);
      I.click(this.locators.submit);
      I.waitForNavigation();
      I.see('CREATE AN ACCOUNT');
      I.click(this.locators.title);
      I.fillField(this.locators.fname,fname);
      I.fillField(this.locators.lname,lname);
      I.fillField(this.locators.password,password);
      I.selectOption(this.locators.date,date);
      I.selectOption(this.locators.month,month);
      I.selectOption(this.locators.year,year);
      I.fillField(this.locators.address_fname,address_fname);
      I.fillField(this.locators.address_lname,address_lname);
      I.fillField(this.locators.company,company);
      I.fillField(this.locators.address1,address1);
      I.fillField(this.locators.address2,address2);
      I.fillField(this.locators.city,city);
      I.selectOption(this.locators.state,state);
      I.fillField(this.locators.pincode,pincode);
      I.fillField(this.locators.alias,alias);
      I.click(this.locators.register);

    }
}
