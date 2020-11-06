import transport from "../assets/transport.jpg"
import emotions from "../assets/Emotions.jpg"
import colors from "../assets/colors.jpg"
import action from "../assets/action.jpg"
import clothes from "../assets/clothes.jpg"
import vegetables from "../assets/vegetables.jpg"
import animals from "../assets/cat1.jpg"
import fruits from "../assets/fruits.jpg"
import cat from "../assets/cat1.jpg"
import dog from "../assets/dog.jpg"
import lion from "../assets/lion.jpg"
import pig from "../assets/pig.jpg"
import apple from "../assets/apple.jpg"
import pear from "../assets/pear.jpg"
import banana from "../assets/banana.jpg"
import orange from "../assets/orange.jpg"

// const GET_CATEGORY_INFO="English_for_kids/GET_CATEGORY_INFO"

const initialState={
    categories:[
        {mainTitle:"Animals", mainImage:animals,
            cards:[
                {image:cat,title:"Cat"},
                {image:dog,title:"Dog"},
                {image:lion,title:"Lion"},
                {image:pig,title:"Pig"},
            ]},
        {mainTitle:"Fruits", mainImage:fruits,
            cards:[
                {image:apple,title:"Apple"},
                {image:pear,title:"Pear"},
                {image:banana,title:"Banana"},
                {image:orange,title:"Orange"},
            ]}
    ]
}

const categoriesReducer=(state=initialState,action)=>{
    switch (action.type) {

        default:
            return state;
    }
}

// const getCategoryInfo=(name)=>({type:GET_CATEGORY_INFO})
export default categoriesReducer;
