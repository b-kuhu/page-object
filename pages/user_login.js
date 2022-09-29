const { I } = inject();

module.exports = {

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

  
     createUser(Email,fname,lname,password,date,month,year,address_fname,address_lname,company,address1,address2,city,state,pincode,alias){
      I.fillField(this.Email,Email);
      I.click(this.submit);
      I.waitForNavigation();
      I.see('CREATE AN ACCOUNT');
      I.click(this.title);
      I.fillField(this.fname,fname);
      I.fillField(this.lname,lname);
      I.fillField(this.password,password);
      I.selectOption(this.date,date);
      I.selectOption(this.month,month);
      I.selectOption(this.year,year);
      I.fillField(this.address_fname,address_fname);
      I.fillField(this.address_lname,address_lname);
      I.fillField(this.company,company);
      I.fillField(this.address1,address1);
      I.fillField(this.address2,address2);
      I.fillField(this.city,city);
      I.selectOption(this.state,state);
      I.fillField(this.pincode,pincode);
      I.fillField(this.alias,alias);
      I.click(this.register);

    }
}
