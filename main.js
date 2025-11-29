import data from "./data.js";

const allFeatures = data.allFeatures;
const allExt = data.allExtension;
const askedQuestions = data.askedQuestions

const bookmarkingTab = document.getElementById("bookmarking")
const searchingTab = document.getElementById("searching")
const sharingTab = document.getElementById("sharing")
const featuresContent = document.getElementById("features-content")
const downloadTabImg = document.getElementById("download-tab-img")
const qsan = document.getElementsByClassName("qsan")[0]


// const qs1 = document.getElementById("qs1")
// qs1.addEventListener("click", function(e){
//     const qs1p = document.getElementById("qs1p")
//     const ps1Span = document.getElementById("ps1Span")
//     if (qs1p.classList == "hide") {
//         qs1p.classList.remove("hide")
//         ps1Span.style.transform = "rotate(0deg)"
//     }else{
//         qs1p.classList.add("hide")
//         ps1Span.style.transform = "rotate(180deg)"
//     }  
// })

function qsAndAnserCrater (askedQuestion) {
    const qnaDiv = document.createElement("div")
    qnaDiv.className = "qs"
    qnaDiv.id = "qs"

    const qnah4 = document.createElement("h4")
    qnah4.innerHTML = askedQuestion.question
    const qnaSpan = document.createElement("span")
    // qnaSpan.id = "psSpan"
    const qnaImg = document.createElement("img")
    qnaImg.src = "./images/icon-arrow.svg"

    const qnaP = document.createElement("p")
    qnaP.innerHTML = askedQuestion.answer
    qnaP.className = "hide"
    // qnaP.id = "qsP"

    qnaDiv.addEventListener("click", function(){
        if (qnaP.classList == "hide") {
            qnaP.classList.remove("hide")
            qnaSpan.style.transform = "rotate(0deg)"
        }else{
            qnaP.classList.add("hide")
            qnaSpan.style.transform = "rotate(180deg)"
        }
    })
    qnaSpan.append(qnaImg)
    qnah4.append(qnaSpan)
    qnaDiv.append(qnah4)
    qnaDiv.append(qnaP)
    qsan.append(qnaDiv)


}

function featuresTabCrater (features) {
    const mainImgDiv = document.createElement("div")
    mainImgDiv.className = "features-content-image-part"
    const mainImg = document.createElement("img")
    mainImg.src = features.mainImg
    const mainImgBg = document.createElement("span")
    mainImgBg.className = "features-content-image-background"
    mainImgDiv.append(mainImg)
    mainImgDiv.append(mainImgBg)

    const mainTextDiv = document.createElement("div")
    mainTextDiv.className = "features-content-text-part"
    const textH2 = document.createElement("h2")
    textH2.innerHTML = features.h2
    const textP = document.createElement("p")
    textP.innerHTML = features.para
    const textA = document.createElement("a")
    textA.href = "#"
    textA.innerHTML = features.bt
    mainTextDiv.append(textH2)
    mainTextDiv.append(textP)
    mainTextDiv.append(textA)

    featuresContent.append(mainImgDiv)
    featuresContent.append(mainTextDiv)
}
function downloadTabCrater(ext) {
    const extensionPart = document.createElement("div")
    extensionPart.classList = "extension-part"
    const extImg = document.createElement("img")
    extImg.src = ext.img
    extImg.alt = ext.exeName
    const exth3 = document.createElement("h3")
    exth3.innerHTML = ext.h3
    const extp = document.createElement("p")
    extp.innerHTML = ext.p
    const exta = document.createElement("a")
    exta.href = "#"
    exta.innerHTML = ext.a

    extensionPart.append(extImg)
    extensionPart.append(exth3)
    extensionPart.append(extp)
    extensionPart.append(exta)

    downloadTabImg.append(extensionPart)
}
bookmarkingTab.addEventListener("click", function(){
    featuresContent.innerHTML = ""
    const bookmarkingTab = allFeatures[0]
    featuresTabCrater(bookmarkingTab)

    this.classList.add("red-line")
    searchingTab.classList.remove("red-line")
    sharingTab.classList.remove("red-line")
})
searchingTab.addEventListener("click", function(){
    featuresContent.innerHTML = ""
    const searchingTab = allFeatures[1]
    featuresTabCrater(searchingTab)

    this.classList.add("red-line")
    bookmarkingTab.classList.remove("red-line")
    sharingTab.classList.remove("red-line")
})
sharingTab.addEventListener("click", function(){
    featuresContent.innerHTML = ""
    const sharingTab = allFeatures[2]
    featuresTabCrater(sharingTab)

    this.classList.add("red-line")
    searchingTab.classList.remove("red-line")
    bookmarkingTab.classList.remove("red-line")
})
addEventListener("DOMContentLoaded", () => { 
    featuresContent.innerHTML = ""
    const bookmarkingTab = allFeatures[0]
    featuresTabCrater(bookmarkingTab)

})

allExt.forEach(function(e){
    downloadTabCrater(e)
})
askedQuestions.forEach((e)=>{
    qsAndAnserCrater(e)
})
