// const { all } = require("axios")

document.addEventListener('DOMContentLoaded', () => {

    fetch('node.json')
        .then(response => response.json())
        .then(data => {

            const navLeft = document.querySelector('.first-nav .nav-left')

            const informLeft = document.querySelector('.inform-left')
            const informFill = document.querySelector('.inform-fill')
            const informRit = document.querySelector('.inform-rit')

            const navRight = document.querySelector('.in-navright')

            data.navbarTwoTop.forEach(item => {
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
                navAnchorTwo.append(spanOne, spanTwo)


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

                locWrite.append(locSpanOne, locSpanTwo)

                leftLocA.append(locLogo, locWrite)
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

                allTxt.append(txtSpan, imgSpan)

                const allSelect = document.createElement('select')
                item.all.forEach(one => {
                    const optionValue = document.createElement('option')
                    optionValue.value = one
                    optionValue.innerHTML = one

                    allSelect.append(optionValue)
                })

                inInfL.append(allTxt, allSelect)
                informLeft.append(inInfL)

                informLeft.addEventListener('click', () => informLeft.classList.add('click'))

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

                anchorOneSpan.append(spanone, spantwo, spanthree)
                anchorOne.append(anchorOneSpan)

                // ....

                const anchorTwo = document.createElement('a')
                const twoDiv = document.createElement('div')
                const twoSpan = document.createElement('span')

                twoDiv.textContent = item.p1
                twoSpan.innerHTML = item.span1

                anchorTwo.append(twoDiv, twoSpan)
                // ....

                const anchorThree = document.createElement('a')
                const threeDiv = document.createElement('div')
                threeDiv.textContent = item.p2
                const threeSpan = document.createElement('span')
                threeSpan.textContent = item.span2

                anchorThree.append(threeDiv, threeSpan)
                // ....

                const anchorFour = document.createElement('a')

                const fourDiv = document.createElement('div')
                const fourZero = document.createElement('span')
                fourZero.textContent = '0'
                const fourSpan = document.createElement('p')
                fourSpan.className = 'four-p nav-sprite-3'

                const fourDivTwo = document.createElement('span')
                fourDivTwo.className = 'cart-span'
                fourDivTwo.textContent = item.cart

                fourDiv.append(fourZero, fourSpan)
                anchorFour.append(fourDiv, fourDivTwo)

                navRight.append(anchorOne, anchorTwo, anchorThree, anchorFour)
            })
            // -------------------------------------------

            const secondNavA = document.querySelector('.second-nav-left a')
            const secondNavFill = document.querySelector('.second-fill-flex')
            const secondNavRight = document.querySelector('.second-right-pad')

            data.navbarTwoBotm.forEach(item => {
                const botmI = document.createElement('i')
                botmI.className = 'nav-sprite-3'
                const botmSpan = document.createElement('span')
                botmSpan.textContent = item.all

                secondNavA.append(botmI, botmSpan)

                item.uls.forEach((ul, idx) => {
                    const ulA = document.createElement('a')
                    ulA.className = 'ul-a'
                    ulA.href = '#'
                    ulA.textContent = ul

                    if (idx === 0) {
                        ulA.textContent = ''
                        ulA.classList.add('ul-a-1')
                        const ulSpan = document.createElement('span')
                        ulSpan.textContent = ul
                        const ulTwospan = document.createElement('span')
                        ulTwospan.className = 'nav-sprite-3'

                        ulA.append(ulSpan, ulTwospan)
                    }


                    secondNavFill.append(ulA)
                })
                // ------

                const secondRightA = document.createElement('a')
                const secondImg = document.createElement('img')
                secondImg.src = item.img

                secondRightA.append(secondImg)
                secondNavRight.append(secondRightA)
            })

            // -------------------------------------------



            // ============ body ===============

            // top

            const topLeft = document.querySelector('.top-flex .top-left')
            const topRight = document.querySelector('.top-right .top-pad')

            data.top.forEach(item => {
                const leftPad = document.createElement('div')
                leftPad.className = 'top-pad'

                const leftSpanOne = document.createElement('span')
                leftSpanOne.className = 'left-span1'
                leftSpanOne.textContent = item.result
                const leftSpanTwo = document.createElement('span')
                leftSpanTwo.className = 'left-span2'
                leftSpanTwo.textContent = item.mob

                leftPad.append(leftSpanOne, leftSpanTwo)
                topLeft.append(leftPad)

                // -----

                const rightForm = document.createElement('form')

                const inForm = document.createElement('div')
                const spanPad = document.createElement('span')

                const inSpanOne = document.createElement('p')
                inSpanOne.className = 'p-1'
                inSpanOne.textContent = item.sort
                const inSpanTwo = document.createElement('p')
                inSpanTwo.className = 'p-2'
                inSpanTwo.textContent = item.feat
                const spanTwoI = document.createElement('i')
                spanTwoI.className = 'symbols'
                inSpanTwo.append(spanTwoI)

                spanPad.append(inSpanOne, inSpanTwo)
                inForm.append(spanPad)
                rightForm.append(inForm)
                topRight.append(rightForm)
            })
            // ---------------

            // main-body

            const sideBar = document.querySelector('.sidebar .sides')
            const contents = document.querySelector('.contents .conts')


            // ---- sidebar
            const insides = document.createElement('div')
            insides.className = 'insides'
            sideBar.append(insides)

            data.sidebar.forEach((item, idx) => {
                const allDiv = document.createElement('div')
                allDiv.className = 'all-div'

                const txtDiv = document.createElement('div')
                txtDiv.className = item.class
                txtDiv.textContent = item.txt

                const itemUls = document.createElement('ul')

                                         
                if(idx=== 4){
                    const priceDiv = document.createElement('div')
                    priceDiv.className = 'price-div'
               
                    const txt = document.createElement('div')
                    txt.className = item.class 
                    txt.textContent = item.name

                    const prices = document.createElement('div')
                    prices.className = 'prices' 

                    const priceValue = document.createElement('div')
                    priceValue.className = 'price-value'
                    priceValue.textContent = item.price 

                    const priceLine = document.createElement('div')
                    priceLine.className = 'price-line'
                    const line = document.createElement('div')
                    line.className = 'line'
                    line.innerHTML = `
                    <div class='line-1'><input></div>
                    <div class='line-2'><input></div>`
                    const go = document.createElement('div')
                    go.className = 'go'
                    go.textContent = item.go 

                    priceLine.append(line,go)
                    prices.append(priceValue,priceLine)
                    priceDiv.append(txt,prices)

                    allDiv.append(priceDiv)
                
                } else{

                item.uls.forEach(ul => {
                    const itemLis = document.createElement('li')
                    itemUls.append(itemLis)

                    const itemLiA = document.createElement('a')

                    if (idx === 0) {
                        itemLiA.textContent = ul

                        itemLis.append(itemLiA)

                    }  else {

                        itemLabel = document.createElement('label')
                        itemInput = document.createElement('input')
                        itemInput.type = 'checkbox'
                        itemInput.value = ''

                        const itemSpan = document.createElement('span')
                        itemSpan.className = 'item-span'
                        itemSpan.textContent = ul

                        itemLabel.append(itemInput, itemSpan)
                        itemLiA.append(itemLabel)

                        // itemLiA.append(itemLiASpan)
                        itemLis.append(itemLiA)
                        itemUls.append(itemLis)
                        txtDiv.append(itemUls)
                    }

                })
            }

                allDiv.append(txtDiv, itemUls)
                insides.append(allDiv)
            })


            // contents
            data.Phones.forEach(item =>{
                
                const contPad = document.createElement('div')
                contPad.className = 'conts-in main-pad'
                const inConts = document.createElement('div')
                inConts.className = 'inconts-flex cont-border'
                contPad.append(inConts)
    
                contents.append(contPad)

                    // mob
                const mobSide = document.createElement('div')
                mobSide.className = 'mob-side'
                const mobFlex = document.createElement('div')
                mobFlex.className = 'mob-flex'

                const mobImageDiv = document.createElement('a')
                const mobImg = document.createElement('img')
                mobImg.src = item.img

                mobImageDiv.append(mobImg)
                mobFlex.append(mobImageDiv)
                mobSide.append(mobFlex)

                    // writes
                const contentSide = document.createElement('div')
                contentSide.className = 'cont-side'
                const contMarg = document.createElement('div')
                contMarg.className = 'cont-marg'

                    // .....
                const contentOne = document.createElement('div')
                contentOne.className = 'content-1'

                const sponsered = document.createElement('div')
                sponsered.className = 'sponsored'
                sponsered.innerHTML = `
                <span>${item.spons}</span>
                <p>`

                const mobName = document.createElement('div')
                mobName.className = 'mobNames'
                mobName.innerHTML = `<h2>${item.h2}</h2>`

                contentOne.append(sponsered,mobName)

                    // .....
                const contentTwo = document.createElement('div')
                contentTwo.className = 'content-2'

                const stars = document.createElement('div')
                stars.className = 'stars'
                stars.innerHTML = `
                <span class='star-1'>
                <i class='star-rate all-stars'></i>
                <i class='arw all-stars'></i>
                </span>

                <span class='star-2'><p>${item.star}</p></span>`

                const bought = document.createElement('div')
                bought.className = 'bought'
                bought.innerHTML = `<p>${item.bought}</p>`

                contentTwo.append(stars,bought)

                    // .....
                const contentThree = document.createElement('div')
                contentThree.className = 'content-3 inconts-flex'

                const threeLeft = document.createElement('div')
                threeLeft.className = 'three-left main-pad'

                const divOne = document.createElement('div')
                divOne.className = 'left-div-1 left-div-pad'
                const oneSubOne = document.createElement('div')
                oneSubOne.className = 'one-sub-1'
                oneSubOne.innerHTML = `<span>${item.gif}</span>`

                const oneSubTwo = document.createElement('div')
                oneSubTwo.className = 'one-sub-2'
                oneSubTwo.innerHTML = `
                <div class='a-sub2'>
                <span class='rs'>${item.rs}</span>
                <span class='mrp'>${item.mrp}</span>
                </div>
                <span class='off'>${item.off}</span>
                `

                const oneSubThree = document.createElement('div')
                oneSubThree.className = 'one-sub-3'
                oneSubThree.innerHTML = `
                <div class='save-coup'>
                <span class = 'save'>${item.save}</span>
                <span class = 'coup'>${item.coup}</span>
                </div>`

                divOne.append(oneSubOne,oneSubTwo,oneSubThree)
                            // ===
                const divTwo = document.createElement('div')
                divTwo.className = 'left-div-2 left-div-pad'

                const twoSubOne = document.createElement('div')
                twoSubOne.className = 'two-sub-1 two-sub'
                twoSubOne.innerHTML = `
                <span>
                <i class='bg-2'></i>
                </span>`

                const twoSubTwo = document.createElement('div')
                twoSubTwo.className = 'two-sub-2 two-sub'
                twoSubTwo.innerHTML = `<span class='deliver'>${item.delivery}</span>`

                const twoSubThree = document.createElement('div')
                twoSubThree.className = 'two-sub-3 two-sub'
                twoSubThree.innerHTML = `<span class='fastest'>${item.fast}</span>`
                          
                divTwo.append(twoSubOne,twoSubTwo,twoSubThree)
                            // ===
                const divThree = document.createElement('div')
                divThree.className = 'left-div-3 left-div-pad'
                divThree.innerHTML = `<span class='service'>${item.service}</span>`

                            // ===
                const divFour = document.createElement('div')
                divFour.className = 'left-div-4 left-div-pad'
                divFour.innerHTML = `
                <span class='addcart'>
                <button>${item.addto}</button>
                </span>`
                            // ===
                const divFive = document.createElement('div')
                divFive.className = 'left-div-5 left-div-pad'
                divFive.innerHTML = `
                <span class ='color'>
                <a>${item.colors}</a>
                </span>`

                threeLeft.append(divOne,divTwo,divThree,divFour,divFive)

                const threeRight = document.createElement('div')
                threeRight.className = 'three-right'
                const inThreeRight = document.createElement('div')
                inThreeRight.className = 'main-pad'
                threeRight.append(inThreeRight)

                contentThree.append(threeLeft,threeRight)
                    // .....
                contMarg.append(contentOne,contentTwo,contentThree)
                contentSide.append(contMarg)

                inConts.append(mobSide, contentSide)
            })
         

            // -------------------------------------------

        })
})