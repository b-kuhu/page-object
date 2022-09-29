Feature('login test');

Scenario('user login ', ({I,user_loginPage}) => {
  I.amOnPage('/');
  user_loginPage.createUser('kuhu@gmail.com','Kuhu','Bhatnagar','12345','28',
  'October','2000','Shiva Tower','ABC','Crowdstaffing','456A','Turab Nagar','Ghaziabad','California','9876543210','XYZ');
});

