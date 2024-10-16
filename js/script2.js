// const { all } = require("axios")

document.addEventListener('DOMContentLoaded', ()=>{

    fetch('node.json')
    .then(response => response.json())
    .then(data => {

        const navLeft = document.querySelector('.first-nav .nav-left')

        const informLeft = document.querySelector('.inform-left')
        const informFill = document.querySelector('.inform-fill')
        const informRit = document.querySelector('.inform-rit')

        const navRight = document.querySelector('.in-navright')

        data.navbarTwoTop.forEach(item =>{
            const navLeftLogo = document.createElement('div')
            navLeftLogo.className = 'navleft-logo'

            const navAnchorTwo = document.createElement('a')
            navAnchorTwo.className = 'a-2'

            const spanOne = document.createElement('span')
            spanOne.className = 'span-1 nav-sprite-3'
            const spanTwo = document.createElement('span')
            spanTwo.className = 'span-2'
            spanTwo.textContent = item.in

            navLeftLogo.append(navAnchorTwo)
            navAnchorTwo.append(spanOne,spanTwo)


            const navLeftLocation = document.createElement('div')
            navLeftLocation.className = 'navleft-loc static'
            const leftLocA = document.createElement('a')

            const locLogo = document.createElement('div')
            locLogo.className = 'nav-sprite-3 locLogo'

            const locWrite = document.createElement('div')
            locWrite.className = 'loc-write'
            const locSpanOne = document.createElement('span')
            locSpanOne.textContent = item.delivery
            const locSpanTwo = document.createElement('span')
            locSpanTwo.textContent = item.p 

            locWrite.append(locSpanOne,locSpanTwo)
            
            leftLocA.append(locLogo,locWrite)
            navLeftLocation.append(leftLocA)

            navLeft.appendChild(navLeftLogo)
            navLeft.appendChild(navLeftLocation)

            // --------

            const inInfL = document.createElement('div')
            inInfL.className = 'in-info-l'

            const allTxt = document.createElement('div')
            allTxt.className = 'all-txt'

            const txtSpan = document.createElement('span')
            txtSpan.textContent = item.alltxt 
            const imgSpan = document.createElement('i') 
            imgSpan.className = 'nav-sprite-3 i' 

            allTxt.append(txtSpan,imgSpan)

            const allSelect = document.createElement('select')
            item.all.forEach(one =>{
                const optionValue = document.createElement('option')
                optionValue.value = one 
                optionValue.innerHTML = one

                allSelect.append(optionValue)
            })

            inInfL.append(allTxt,allSelect)
            informLeft.append(inInfL)

            // ------

            const inInFill = document.createElement('div')

            const inputDiv = document.createElement('div')
            inputDiv.className = 'input-div'

            const infoInput = document.createElement('input')
            infoInput.placeholder = item.placeholder
            infoInput.type = 'text'
            infoInput.className = 'input'
            // infoInput.value = item.value
            
            inputDiv.append(infoInput)
            inInFill.append(inputDiv)
            informFill.append(inInFill)

                    // ....

            const inSearch = document.createElement('div')
            inSearch.className = 'nav-sprite-3 in-search'
            const inputSearch = document.createElement('input')
            inputSearch.type = 'submit'
            inputSearch.className = ' nav-input'

            inSearch.append(inputSearch)
            informRit.append(inSearch)

            // ------

            const anchorOne = document.createElement('a')
            const anchorOneSpan = document.createElement('div')
            
            const spanone = document.createElement('span')
            spanone.className = 'span-01 countries'
            const spantwo = document.createElement('span')
            spantwo.className = 'span-02'
            spantwo.textContent = item.en
            const spanthree = document.createElement('span')
            spanthree.className = 'span-03 nav-sprite-3'

            anchorOneSpan.append(spanone,spantwo,spanthree)
            anchorOne.append(anchorOneSpan)

                    // ....

            const anchorTwo = document.createElement('a')
            const twoDiv = document.createElement('div')
            const twoSpan = document.createElement('span')

            twoDiv.textContent = item.p1
            twoSpan.innerHTML = item.span1

            anchorTwo.append(twoDiv,twoSpan)
                    // ....

            const anchorThree = document.createElement('a')
            const threeDiv = document.createElement('div')
            threeDiv.textContent = item.p2 
            const threeSpan = document.createElement('span')
            threeSpan.textContent = item.span2

            anchorThree.append(threeDiv,threeSpan)
                    // ....

            const anchorFour = document.createElement('a')
            const fourDiv = document.createElement('div')
            const fourZero = document.createElement('span')
            fourZero.textContent = '0'
            const fourSpan = document.createElement('p')
            fourSpan.className = 'four-p nav-sprite-3'

            fourDiv.append(fourZero,fourSpan)
            anchorFour.append(fourDiv)

            navRight.append(anchorOne,anchorTwo,anchorThree,anchorFour)
        })
        // -------------------------------------------

         const secondNavA = document.querySelector('.second-nav-left a')
         const secondNavFill = document.querySelector('.second-fill-flex')

         data.navbarTwoBotm.forEach(item =>{
            const botmI = document.createElement('i')
            botmI.className = 'nav-sprite-3'
            const botmSpan = document.createElement('span')
            botmSpan.textContent = item.all

            secondNavA.append(botmI,botmSpan)

            item.uls.forEach((ul,idx) =>{
                const ulA = document.createElement('a')
                ulA.className = 'ul-a'
                ulA.href = '#'
                ulA.textContent = ul

                if(idx === 0){
                    ulA.textContent =''
                    ulA.classList.add('ul-a-1')
                    const ulSpan = document.createElement('span')
                    ulSpan.textContent = ul
                    const ulTwospan = document.createElement('span')
                    ulTwospan.className = 'nav-sprite-3'
                    
                    ulA.append(ulSpan,ulTwospan)
                }


                secondNavFill.append(ulA)
            })
         })
        // -------------------------------------------
 
    })
})