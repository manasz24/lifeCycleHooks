import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //for storing answers
    correctAnswers = 0
    isSubmitted =false
    myQuestions=[
            {
                id:"Question1",
                question:"Which of the following is not template loop",    
                answers:{
                    A:"for:each",
                    B:"iterator",
                    C:"map loop"
            },
            correctAnswer:"C"
        },


        {
            id:"Question2",
            question:"Which of the following is invalid in the component folder",    
            answers:{
                A:".APEX",
                B:".SVG",
                C:".JS"
        },
        correctAnswer:"A"
    },

    {
        id:"Question3",
        question:"Which of the following is not a directive",    
        answers:{
            A:"for:each",
            B:"if:true",
            C:"@track"
    },
    correctAnswer:"C"
}
    ]

    changeHandler(event){


        console.log("name :", event.target.name)
        console.log("value :", event.target.value)
        const {name,value} = event.target
        this.selected ={...this.selected,[name]:value}

    }

    submitHandler(event){
            event.preventDefault()
            let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
            this.correctAnswers=correct.length
            this.isSubmitted = true
            console.log('this.correctAnswers',this.correctAnswers)
            
    }

    clearHandler(event){
          this.selected = {}
          this.correctAnswers=0
          this.isSubmitted = false

    }

    get isDisabled(){

        return !(Object.keys(this.selected).length===this.myQuestions.length)

    }

    get isScoredFull(){

        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`


    }

}