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
        })

            // --------------------------------------------

        })
})