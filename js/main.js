$("#sideS").click(function(){
    $("#search").css("display","block")
    $("#search").siblings().css("display","none")
})
$("#sideCa").click(function(){
    $("#category").css("display","block")
    $("#category").siblings().css("display","none")
})
$("#sideA").click(function(){
    $("#area").css("display","block")
    $("#area").siblings().css("display","none")
})
$("#sideI").click(function(){
    $("#ingredients").css("display","block")
    $("#ingredients").siblings().css("display","none")
})
$("#sideCo").click(function(){
    $("#contactUs").css("display","block")
    $("#contactUs").siblings().css("display","none")
})











var homeList = [];
$("#nav-button").click(function () {

    var x = $(".box").outerWidth()

    if ($(".side-nav").css("left") == "0px") {

        $(".side-nav").animate({ "left": -x })
        $(".side-nav li").hide(500)

    } else {
        $(".side-nav").animate({ "left": 0 }, function () {
            $(".side-nav li").show(500)
        })
    }

    if ($("#open").css("display") == "block") {
        $("#open").css("display", "none")
        $("#close").css("display", "block")
    } else {
        $("#open").css("display", "block")
        $("#close").css("display", "none")
    }

})
async function getData() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let dataList = await data.json()
    homeList = dataList.meals
    display()
    console.log(homeList);


}
function display() {
    let temp = ""
    for (var i = 0; i < homeList.length; i++) {
        temp += `<div id="Searchitems" class="item item2 col-lg-3 col-md-6" Recipe-text="${homeList[i].strMeal}" 
        Recipe-img="${homeList[i].strMealThumb}" Recipe-inst="${homeList[i].strInstructions}"
         Recipe-area="${homeList[i].strArea}" Recipe-cat="${homeList[i].strCategory}" 
         Recipe-you="${homeList[i].strYoutube}" Recipe-sour="${homeList[i].strSource}"Recipe-mes1="${homeList[i].strMeasure1}"
         Recipe-mes2="${homeList[i].strMeasure2}"Recipe-mes3="${homeList[i].strMeasure3}"Recipe-mes4="${homeList[i].strMeasure4}"
         Recipe-mes5="${homeList[i].strMeasure5}"Recipe-mes6="${homeList[i].strMeasure6}"Recipe-mes7="${homeList[i].strMeasure7}"
         Recipe-mes8="${homeList[i].strMeasure8}"Recipe-mes9="${homeList[i].strMeasure9}"Recipe-mes10="${homeList[i].strMeasure10}"
         Recipe-ing1="${homeList[i].strIngredient1}" Recipe-ing2="${homeList[i].strIngredient2}"Recipe-ing3="${homeList[i].strIngredient3}"
         Recipe-ing4="${homeList[i].strIngredient4}"Recipe-ing5="${homeList[i].strIngredient5}"Recipe-ing6="${homeList[i].strIngredient6}"
         Recipe-ing7="${homeList[i].strIngredient7}"Recipe-ing8="${homeList[i].strIngredient8}"Recipe-ing9="${homeList[i].strIngredient9}"
         Recipe-ing10="${homeList[i].strIngredient10}"Recipe-mes11="${homeList[i].strMeasure11}"Recipe-ing11="${homeList[i].strIngredient11}">
    <img id="one" src="${homeList[i].strMealThumb}" class="w-100 rounded-1" alt="">
    <div class="layer rounded-1 d-flex align-items-center">
        <p>${homeList[i].strMeal}</p>
    </div> 
</div>`
    }
    document.getElementById("recipes").innerHTML = temp
    getSearchInfo()

}
getData()





var SearchHomeList = [];
async function getSearchData(category) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
    let dataList = await data.json()
    SearchHomeList = dataList.meals
    console.log(SearchHomeList);
    SearchDisplay()
}
function SearchDisplay() {
    let temp2 = ""
    for (var i = 0; i < SearchHomeList.length; i++) {
        temp2 += `<div id="Searchitems" class="item item2 col-lg-3 col-md-6" Recipe-text="${SearchHomeList[i].strMeal}" 
        Recipe-img="${SearchHomeList[i].strMealThumb}" Recipe-inst="${SearchHomeList[i].strInstructions}"Recipe-area="${SearchHomeList[i].strArea}"Recipe-cat="${SearchHomeList[i].strCategory}" Recipe-you="${SearchHomeList[i].strYoutube}"
         Recipe-sour="${SearchHomeList[i].strSource}"Recipe-mes1="${SearchHomeList[i].strMeasure1}"
         Recipe-mes2="${SearchHomeList[i].strMeasure2}"Recipe-mes3="${SearchHomeList[i].strMeasure3}"
         Recipe-mes4="${SearchHomeList[i].strMeasure4}"Recipe-mes5="${SearchHomeList[i].strMeasure5}"
         Recipe-mes6="${SearchHomeList[i].strMeasure6}"Recipe-mes7="${SearchHomeList[i].strMeasure7}"
         Recipe-mes8="${SearchHomeList[i].strMeasure8}"Recipe-mes9="${SearchHomeList[i].strMeasure9}"
         Recipe-mes10="${SearchHomeList[i].strMeasure10}"Recipe-ing1="${SearchHomeList[i].strIngredient1}" 
         Recipe-ing2="${SearchHomeList[i].strIngredient2}" Recipe-ing3="${SearchHomeList[i].strIngredient3}"
         Recipe-ing4="${SearchHomeList[i].strIngredient4}"Recipe-ing5="${SearchHomeList[i].strIngredient5}"
         Recipe-ing6="${SearchHomeList[i].strIngredient6}" Recipe-ing7="${SearchHomeList[i].strIngredient7}"
         Recipe-ing8="${SearchHomeList[i].strIngredient8}"Recipe-ing9="${SearchHomeList[i].strIngredient9}"
         Recipe-ing10="${SearchHomeList[i].strIngredient10}"Recipe-mes11="${SearchHomeList[i].strMeasure11}"
         Recipe-ing11="${SearchHomeList[i].strIngredient11}">
         <img id="one" src="${SearchHomeList[i].strMealThumb}" class="w-100 rounded-1" alt="">
         <div class="layer rounded-1 d-flex align-items-center">
         <p>${SearchHomeList[i].strMeal}</p>
         </div> 
         </div>`
    }
    document.getElementById("Search-recipes").innerHTML = temp2
    getSearchInfo()
}
$("#searchName").keyup(function () {
    var searchval = document.getElementById("searchName").value
    getSearchData(searchval)

})
function getSearchInfo() {
    $(".item2").click(function () {
        $("#search").css("display", "none")
        $("#home").css("display", "none")
        $("#info").css("display", "block")
        $("#areaMeals").css("display", "none")

        document.getElementById("title").innerHTML = this.getAttribute("Recipe-text")
        document.getElementById("infoInstruction").innerHTML = this.getAttribute("Recipe-inst")
        document.getElementById("infoArea").innerHTML = this.getAttribute("Recipe-area")
        document.getElementById("infoCategory").innerHTML = this.getAttribute("Recipe-cat")

        $("#infoImage").attr("src", this.getAttribute("Recipe-img"))
        $("#infoYoutube").attr("href", this.getAttribute("Recipe-you"))
        $("#infoSource").attr("href", this.getAttribute("Recipe-sour"))

        document.getElementById("infoIngredient1").innerHTML = this.getAttribute("Recipe-mes1") + this.getAttribute("Recipe-ing1")
        document.getElementById("infoIngredient2").innerHTML = this.getAttribute("Recipe-mes2") + this.getAttribute("Recipe-ing2")
        document.getElementById("infoIngredient3").innerHTML = this.getAttribute("Recipe-mes3") + this.getAttribute("Recipe-ing3")
        document.getElementById("infoIngredient4").innerHTML = this.getAttribute("Recipe-mes4") + this.getAttribute("Recipe-ing4")
        document.getElementById("infoIngredient5").innerHTML = this.getAttribute("Recipe-mes5") + this.getAttribute("Recipe-ing5")
        document.getElementById("infoIngredient6").innerHTML = this.getAttribute("Recipe-mes6") + this.getAttribute("Recipe-ing6")
        document.getElementById("infoIngredient7").innerHTML = this.getAttribute("Recipe-mes7") + this.getAttribute("Recipe-ing7")
        document.getElementById("infoIngredient8").innerHTML = this.getAttribute("Recipe-mes8") + this.getAttribute("Recipe-ing8")
        document.getElementById("infoIngredient9").innerHTML = this.getAttribute("Recipe-mes9") + this.getAttribute("Recipe-ing9")
        document.getElementById("infoIngredient10").innerHTML = this.getAttribute("Recipe-mes10") + this.getAttribute("Recipe-ing10")
        document.getElementById("infoIngredient11").innerHTML = this.getAttribute("Recipe-mes11") + this.getAttribute("Recipe-ing11")
    })
}



var SearchLetterHomeList = [];
let searchLetterName2
async function getSearchData(category) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
    let dataList = await data.json()
    SearchLetterHomeList = dataList.meals
    SearchletDisplay()
}
function SearchletDisplay() {
    let temp = ""
    for (var i = 0; i < SearchLetterHomeList.length; i++) {
        temp += `<div id="Searchitems" class="item item2 col-lg-3 col-md-6" Recipe-text="${SearchLetterHomeList[i].strMeal}" 
        Recipe-img="${SearchLetterHomeList[i].strMealThumb}" Recipe-inst="${SearchLetterHomeList[i].strInstructions}"
         Recipe-area="${SearchLetterHomeList[i].strArea}" Recipe-cat="${SearchLetterHomeList[i].strCategory}" 
         Recipe-you="${SearchLetterHomeList[i].strYoutube}" Recipe-sour="${SearchLetterHomeList[i].strSource}"
         Recipe-mes1="${SearchLetterHomeList[i].strMeasure1}" Recipe-mes2="${SearchLetterHomeList[i].strMeasure2}"
         Recipe-mes3="${SearchLetterHomeList[i].strMeasure3}"Recipe-mes4="${SearchLetterHomeList[i].strMeasure4}"
         Recipe-mes5="${SearchLetterHomeList[i].strMeasure5}"Recipe-mes6="${SearchLetterHomeList[i].strMeasure6}"
         Recipe-mes7="${SearchLetterHomeList[i].strMeasure7}"Recipe-mes8="${SearchLetterHomeList[i].strMeasure8}
         "Recipe-mes9="${SearchLetterHomeList[i].strMeasure9}"Recipe-mes10="${SearchLetterHomeList[i].strMeasure10}"
         Recipe-ing1="${SearchLetterHomeList[i].strIngredient1}" Recipe-ing2="${SearchLetterHomeList[i].strIngredient2}"
         Recipe-ing3="${homeList[i].strIngredient3}"Recipe-ing4="${SearchLetterHomeList[i].strIngredient4}"
         Recipe-ing5="${SearchLetterHomeList[i].strIngredient5}"Recipe-ing6="${homeList[i].strIngredient6}"
         Recipe-ing7="${SearchLetterHomeList[i].strIngredient7}"Recipe-ing8="${SearchLetterHomeList[i].strIngredient8}"
         Recipe-ing9="${homeList[i].strIngredient9}"Recipe-ing10="${SearchLetterHomeList[i].strIngredient10}"
         Recipe-mes11="${SearchLetterHomeList[i].strMeasure11}"Recipe-ing11="${SearchLetterHomeList[i].strIngredient11}">
         <img id="one" src="${SearchLetterHomeList[i].strMealThumb}" class="w-100 rounded-1" alt="">
         <div class="layer rounded-1 d-flex align-items-center">
         <p>${SearchLetterHomeList[i].strMeal}</p>
         </div> 
         </div>`
    }
    document.getElementById("Search-recipes").innerHTML = temp
    getSearchInfo()
}
$("#searchLetterName").keyup(function (e) {
    var searchLetterName = e.target.value
    getSearchData(searchLetterName)
})




var areaListId = []
var areaList = []
var idApi = ""

async function areaDataId(category) {
    let Adata = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${category}`)
    let AdataList = await Adata.json()
    areaListId = AdataList.meals
    console.log(areaListId);
    document.getElementById("infoInstruction").innerHTML = areaListId[0].strInstructions
    document.getElementById("infoArea").innerHTML = areaListId[0].strArea
    document.getElementById("infoCategory").innerHTML = areaListId[0].strCategory


    $("#infoYoutube").attr("href", areaListId[0].strYoutube)
    $("#infoSource").attr("href", areaListId[0].strSource)

    document.getElementById("infoIngredient1").innerHTML = areaListId[0].strMeasure1 + areaListId[0].strIngredient1
    document.getElementById("infoIngredient2").innerHTML = areaListId[0].strMeasure2 + areaListId[0].strIngredient2
    document.getElementById("infoIngredient3").innerHTML = areaListId[0].strMeasure3+ areaListId[0].strIngredient3
    document.getElementById("infoIngredient4").innerHTML = areaListId[0].strMeasure4 + areaListId[0].strIngredient4
    document.getElementById("infoIngredient5").innerHTML = areaListId[0].strMeasure5 + areaListId[0].strIngredient5
    document.getElementById("infoIngredient6").innerHTML = areaListId[0].strMeasure6 + areaListId[0].strIngredient6
    document.getElementById("infoIngredient7").innerHTML = areaListId[0].strMeasure7 +areaListId[0].strIngredient7
    document.getElementById("infoIngredient8").innerHTML = areaListId[0].strMeasure8 + areaListId[0].strIngredient8
    document.getElementById("infoIngredient9").innerHTML = areaListId[0].strMeasure9 + areaListId[0].strIngredient9
    document.getElementById("infoIngredient10").innerHTML = areaListId[0].strMeasure10 + areaListId[0].strIngredient10
    document.getElementById("infoIngredient11").innerHTML = areaListId[0].strMeasure11 + areaListId[0].strIngredient11
}
async function areaData(category) {
    let Adata = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`)
    let AdataList = await Adata.json()
    areaList = AdataList.meals
    console.log(areaList);
    areaDisplay()
}
function areaDisplay() {
    let temp3 = ""
    for (var i = 0; i < areaList.length; i++) {
        temp3 += `<div id="Searchitems" class="item item2 col-lg-3 col-md-6" Recipe-text="${areaList[i].strMeal}" 
        Recipe-img="${areaList[i].strMealThumb}" recipe-id="${areaList[i].idMeal}">
         <img id="one" src="${areaList[i].strMealThumb}" class="w-100 rounded-1" alt="">
         <div class="layer rounded-1 d-flex align-items-center">
         <p>${areaList[i].strMeal}</p>
         </div> 
         </div>`
    }
    document.getElementById("area-recipes").innerHTML = temp3
    getSearchInfo()
    $(".item").click(function () {

        idApi = this.getAttribute("recipe-id")
        areaDataId(idApi)
        document.getElementById("infoInstruction").innerHTML = areaListId[0].strInstructions
    })

}

$(".areaItem").click(function () {
    var areaInput = this.innerText
    areaData(areaInput)
    $("#areaMeals").css("display", "block")
    $("#area").css("display", "none")
})





var categoryList = []
var catid =""
async function catDataId(category) {
    let Adata = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${category}`)
    let AdataList = await Adata.json()
    categoryList = AdataList.meals
    console.log(categoryList);
 

    document.getElementById("infoInstruction").innerHTML = categoryList[0].strInstructions
    document.getElementById("infoArea").innerHTML = categoryList[0].strArea
    document.getElementById("infoCategory").innerHTML = categoryList[0].strCategory


    $("#infoYoutube").attr("href", categoryList[0].strYoutube)
    $("#infoSource").attr("href", categoryList[0].strSource)


    document.getElementById("infoIngredient1").innerHTML = categoryList[0].strMeasure1 + categoryList[0].strIngredient1
    document.getElementById("infoIngredient2").innerHTML = categoryList[0].strMeasure2 + categoryList[0].strIngredient2
    document.getElementById("infoIngredient3").innerHTML = categoryList[0].strMeasure3+ categoryList[0].strIngredient3
    document.getElementById("infoIngredient4").innerHTML = categoryList[0].strMeasure4 + categoryList[0].strIngredient4
    document.getElementById("infoIngredient5").innerHTML = categoryList[0].strMeasure5 + categoryList[0].strIngredient5
    document.getElementById("infoIngredient6").innerHTML = categoryList[0].strMeasure6 + categoryList[0].strIngredient6
    document.getElementById("infoIngredient7").innerHTML = categoryList[0].strMeasure7 +categoryList[0].strIngredient7
    document.getElementById("infoIngredient8").innerHTML = categoryList[0].strMeasure8 + categoryList[0].strIngredient8
    document.getElementById("infoIngredient9").innerHTML = categoryList[0].strMeasure9 + categoryList[0].strIngredient9
    document.getElementById("infoIngredient10").innerHTML = categoryList[0].strMeasure10 + categoryList[0].strIngredient10
    document.getElementById("infoIngredient11").innerHTML = categoryList[0].strMeasure11 + categoryList[0].strIngredient11
}
async function categoryData(category){
    let Adata = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let AdataList = await Adata.json()
    categoryList = AdataList.meals
    console.log(categoryList);
    categoryDisplay() 
}
function categoryDisplay() {
    let temp3 = ""
    for (var i = 0; i < categoryList.length; i++) {
        temp3 += `<div id="Searchitems" class="item item2 item19 col-lg-3 col-md-6" Recipe-text="${categoryList[i].strMeal}" 
        Recipe-img="${categoryList[i].strMealThumb}" recipe-id="${categoryList[i].idMeal}">
         <img id="one" src="${categoryList[i].strMealThumb}" class="w-100 rounded-1" alt="">
         <div class="layer rounded-1 d-flex align-items-center">
         <p>${categoryList[i].strMeal}</p>
         </div> 
         </div>`
    }
    document.getElementById("category-recipes").innerHTML = temp3
    getSearchInfo()
    $(".item19").click(function () {
        $("#info").css("display","block")
        $("#categoryMeals").css("display","none")
        catid = this.getAttribute("recipe-id")
        // areaDataId(idApi)
        catDataId(catid)
       
    })

}
$(".categoryItem").click(function(){
    $("#category").css("display","none")
    $("#info").css("display","none")
    $("#categoryMeals").css("display","block")
    categoryData(this.getAttribute("cat"))
})





var ingredItemList = []
var inglist = []

async function ingredientItemData(){
    let Adata = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let AdataList = await Adata.json()
    ingredItemList = AdataList.meals
    displayingfiinal()
}
ingredientItemData()
function displayingfiinal() {
    let temp7 = ""
    for (var i = 0; i < 20; i++) {
        temp7 += `<div id="Searchitems" class="item shadow item2 item6 item12 col-lg-3 col-md-6 text-center" Recipe-text="${ingredItemList[i].strIngredient}">
        <i class="fa-solid fa-bowl-food fa-3x"></i>
            <h2 class="text-white">${ingredItemList[i].strIngredient}</h2>
            <p class="text-white">${ingredItemList[i].strDescription.split(" ").splice(0,20).join(" ")}}</p>
        </div>`

    }
    document.getElementById("ingredients-item").innerHTML = temp7
    $(".item12").click(function(){
        ingredData(this.getAttribute("Recipe-text"))
        $("#ingredientsMeals").css("display","block")
        $("#ingredients").css("display","none")
        $("#info").css("display","none")

    })

}
async function ingredData(category){
    let Adata = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`)
    let AdataList = await Adata.json()
    inglist = AdataList.meals
    console.log(inglist);
    displaying()
}
function displaying() {
    let temp4 = "";
    for (var i = 0; i < inglist.length; i++) {
        temp4 += `<div id="Searchitems" class="item item2 item9 col-lg-3 col-md-6" Recipe-text="${inglist[i].strMeal}" 
        Recipe-img="${inglist[i].strMealThumb}" recipe-id="${inglist[i].idMeal}">
         <img id="one" src="${inglist[i].strMealThumb}" class="w-100 rounded-1" alt="">
         <div class="layer rounded-1 d-flex align-items-center">
         <p>${inglist[i].strMeal}</p>
         </div> 
         </div>`
    }
    document.getElementById("ingredients-recipes").innerHTML = temp4

    $(".item9").click(function(){
        $("#info").css("display","block")
        $("#ingredientsMeals").css("display","none")
        $("#ingredients").css("display","none")
        areaDataId(this.getAttribute("recipe-id"))
        console.log(this.getAttribute("recipe-id"));
        document.getElementById("title").innerHTML=this.getAttribute("Recipe-text")
        $("#infoImage").attr("src",this.getAttribute("Recipe-img"))
    })


}





var mail =document.getElementById("mail")
var regexMail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,3}$/
$("#mail").keyup(function(){
    


    if(regexMail.test(mail.value) ==true ){
        $("#mailVald").addClass("d-none")
        $("#mailVald").removeClass("d-block")
        $("#mail").addClass("is-valid")
        $("#mail").removeClass("is-invalid")
    }else{
        
        $("#mailVald").addClass("d-block")
        $("#mailVald").removeClass("d-none")
        $("#mail").addClass("is-invalid")
        $("#mail").removeClass("is-valid")

    }
})
var pass =document.getElementById("pass")
var regexPass = /[A-Za-z]{7,}[0-9]+[A-Za-z]*/
$("#pass").keyup(function(){
    

    if(regexPass.test(pass.value) ==true ){
        $("#passVald").addClass("d-none")
        $("#passVald").removeClass("d-block")
        $("#pass").addClass("is-valid")
        $("#pass").removeClass("is-invalid")
    }else{
        
        $("#passVald").addClass("d-block")
        $("#passVald").removeClass("d-none")
        $("#pass").addClass("is-invalid")
        $("#pass").removeClass("is-valid")

    }
})
var rePass =document.getElementById("rePass")
$("#rePass").keyup(function(){
    
    if( rePass.value == pass.value ){
        $("#rePassVald").addClass("d-none")
        $("#rePassVald").removeClass("d-block")
        $("#rePass").addClass("is-valid")
        $("#rePass").removeClass("is-invalid")
    }else{
        $("#rePassVald").addClass("d-block")
        $("#rePassVald").removeClass("d-none")
        $("#rePass").addClass("is-invalid")
        $("#rePass").removeClass("is-valid")
    }
})
var phone =document.getElementById("phone")
var phoneregex =/[0-9]{11}/
$("#phone").keyup(function(){
    if( phoneregex.test(phone.value) ==true ){
        $("#phoneValid").addClass("d-none")
        $("#phoneValid").removeClass("d-block")
        $("#phone").addClass("is-valid")
        $("#phone").removeClass("is-invalid")
    }else{
        $("#phoneValid").addClass("d-block")
        $("#phoneValid").removeClass("d-none")
        $("#phone").addClass("is-invalid")
        $("#phone").removeClass("is-valid")
    }
})
var age =document.getElementById("Age")
$("#Age").keyup(function(){
    
    if( age.value<100 && age.value>0 ){
        $("#ageVald").addClass("d-none")
        $("#ageVald").removeClass("d-block")
        $("#Age").addClass("is-valid")
        $("#Age").removeClass("is-invalid")
    }else{
        $("#ageVald").addClass("d-block")
        $("#ageVald").removeClass("d-none")
        $("#Age").addClass("is-invalid")
        $("#Age").removeClass("is-valid")
    }
})

var nameInput =document.getElementById("name")
var regexName = /[A-Za-z]+/
$("#name").keyup(function(){
    

    if(regexName.test(nameInput.value) ==true ){
        $("#nameVald").addClass("d-none")
        $("#nameVald").removeClass("d-block")
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
    }else{
        
        $("#nameVald").addClass("d-block")
        $("#nameVald").removeClass("d-none")
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")


    }
})


$("input").keyup(function(){
    if( regexMail.test(mail.value) ==true &&age.value<100 && age.value>0 && phoneregex.test(phone.value) ==true &&regexPass.test(pass.value) ==true &&regexName.test(nameInput.value) ==true &&rePass.value == pass.value){
        $("#submit").css("display","none")
        $("#submit1").css("display","block")


    }
})
