document.addEventListener('DOMContentLoaded', ()=>{

    fetch('node.json')
        .then(response => response.json())
        .then(data =>{

            const navLeft = document.querySelector('.nav-left')
            const navRight = document.querySelector('.nav-right')

            data.navBar.forEach(item =>{

                const navAnchorOne = document.createElement('a')
                navAnchorOne.className = 'a-1'
                navAnchorOne.innerHTML = '<i class="nav-icon-a11y nav-sprite"></i>'

                const navAnchorTwo = document.createElement('a')
                navAnchorTwo.className = 'a-2'

                const spanOne = document.createElement('span')
                spanOne.className = 'span-1 nav-sprite'
                const spanTwo = document.createElement('span')
                spanTwo.className = 'span-2'
                spanTwo.textContent = item.in

                navAnchorTwo.append(spanOne,spanTwo)

                navLeft.append(navAnchorOne,navAnchorTwo)
                // -----

                const navSign = document.createElement('div')
                navSign.innerHTML = `<a>${item.sign}</a>`
                const navPerson = document.createElement('a')
                navPerson.className = 'nav-person nav-sprite'
                navPerson.innerHTML = '<i class="nav-icon-a11y nav-sprite"></i>'
                const navCart = document.createElement('a')
                navCart.className = ' nav-cart'

                const cartSpanOne = document.createElement('span')
                cartSpanOne.className = 'nav-sprite'
                cartSpanOne.innerHTML = '<span>0'
                navCart.append(cartSpanOne)

                navRight.append(navSign,navPerson,navCart)
           
                // -----

                const formType = document.querySelector('.form-type')
                const formSearch = document.querySelector('.form-search')

                const inForm = document.createElement('div')
                const inputLabel = document.createElement('input')
                inputLabel.placeholder = 'Search Amazon.in'
                inputLabel.type = 'text'

                inForm.append(inputLabel)
                formType.append(inForm)

                const inSearch = document.createElement('div')
                const inputSearch = document.createElement('input')
                inputSearch.type = 'submit'
                inputSearch.className = 'nav-input'
                const searchI = document.createElement('i')
                searchI.className = 'nav-sprite search-i'

                inSearch.append(inputSearch,searchI)
                formSearch.append(inSearch)

                // -----

                const navThree = document.querySelector('.nav-3-pad')

                const navLocation = document.createElement('div')
                navLocation.className = 'nav-location nav-sprite'

                const navWrite = document.createElement('div')
                navWrite.className = 'nav-write'
                const writeSpan = document.createElement('span')
                writeSpan.textContent = item.deleivery
                navWrite.append(writeSpan)

                navThree.append(navLocation,navWrite)
            })
            // --------------------------------------------



            // ============= main-body ============

            const mainDivOne = document.querySelector('.div-1-marg')

            data.divone.forEach(item =>{

            const mainSpan = document.createElement('span')
            mainSpan.className = 'main-span'

            const divOneTop  = document.createElement('div')
            divOneTop.className = 'div-1-top'

            const topLeft = document.createElement('div')
            topLeft.className = 'top-left'
            const topLeftPad = document.createElement('div')
            topLeftPad.className = 'top-left-pad'
            const topLeftA = document.createElement('a')
            topLeftA.innerHTML = `<span class="span-1"><i class="bg-2 span-i"></i></span>
            <span class="span-2"></span>`

            topLeftPad.append(topLeftA)
            topLeft.append(topLeftPad)

            const topRight = document.createElement('div')
            topRight.className = 'top-right'
            const rightSpan = document.createElement('span')
            rightSpan.className = 'right-span'
            const filterBtn = document.createElement('button')
            const inBtn = document.createElement('div')
            inBtn.className = 'in-filt-btn'
            inBtn.innerHTML = `<span class='inbtn-1'>${item.filter}</span><span class='inbtn-2'></span>`
            
            filterBtn.append(inBtn)
            rightSpan.append(filterBtn)
            topRight.append(rightSpan)

            divOneTop.append(topLeft,topRight)
            const divOneHr = document.createElement('hr')
            
            const divOneBotm = document.createElement('div')
            divOneBotm.className = 'div-1-botm'
            const botmMarg = document.createElement('div')
            botmMarg.className = 'botm-flex'
            
            divOneBotm.append(botmMarg)

            mainSpan.append(divOneTop,divOneHr,divOneBotm)
            mainDivOne.append(mainSpan)


            // ---------

            const botmFlex = document.querySelector('.botm-flex')
            item.uls.forEach(ul =>{
                const ulDiv = document.createElement('div')
                ulDiv.className = 'ul-div'

                const ulA = document.createElement('a')
                ulA.className = 'ul-a'
                ulA.href = '#'

                const liDiv = document.createElement('div')
                liDiv.className = 'li-div'

                const liSpan = document.createElement('span')
                liSpan.textContent = ul

                liDiv.append(liSpan)
                ulA.append(liDiv)
                ulDiv.append(ulA)
                botmFlex.append(ulDiv)
            })

            // -----
        })
            // --------------------------------------------

        const Mobiles = document.querySelector('.mobiles')

        function renderingPage(items){

            Mobiles.innerHTML = ''

            if(items.length === 0){
                const noElement = document.createElement('div')
                noElement.className = 'no-element'
                noElement.innerHTML = `Oops! Item Not Found
                <img src='images/search-not-found-illustration-download-in-svg-png-gif-file-formats--page-error-404-empty-state-pack-user-interface-illustrations-5210416.webp'>`

                Mobiles.appendChild(noElement)

                return     
            }

            for(i = 1; i <= data.Phones.length; i++){
                const item = items[i]

                const contPad = document.createElement('div')
                contPad.className = 'conts-in main-pad'
                const inConts = document.createElement('div')
                inConts.className = 'inconts-flex cont-border'
                contPad.append(inConts)
    
                Mobiles.append(contPad)

                    // mob
                const mobSide = document.createElement('div')
                mobSide.className = 'mob-side'
                const mobFlex = document.createElement('div')
                mobFlex.className = 'mob-flex'

                const mobImageDiv = document.createElement('a')
                const mobImg = document.createElement('img')
                mobImg.src = item.img
                mobImg.className = item.imgclass

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
                

            }
        }

        renderingPage(data.Phones)

            // --------------------------------------------

        })
})