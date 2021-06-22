
import { LightningElement,track } from 'lwc';

export default class LwcPractice1 extends LightningElement {
        name
        age = 30
        fullData ="Salesforce"
        details = {

            name :"dummy",
            place :"AUS" 
        }
        UserList =["A","B"] 
        fullName = "Zero to Hero"
        title ="AURA";
// Methods

 getName(){
 }

//Data Binding

 changeHandler(event){
    this.title=event.target.value
 }

 //Spread
     address = {
        city : 'MediaList',
        postcode :908003,
        country :'jupiter' 


    }

    trackHandler(event){
        this.address={...this.address,"city":event.target.value}
     }

//@track

@track address2 = {
    city : 'MediaList',
    postcode :908003,
    country :'jupiter' 


}

trackHandler2(event){
    this.address2.city=event.target.value
 }

//Getters

ABC =[1,2,3,4,5,6]

get sum(){

    return this.ABC[0] + this.ABC[1]
    
}

//conditional rendering


}