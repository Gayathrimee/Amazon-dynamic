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
                fourDiv.innerHTML = '<span class ="zero">0'
                const fourSpan = document.createElement('p')
                fourSpan.className = 'four-p nav-sprite-3'

                const fourDivTwo = document.createElement('span')
                fourDivTwo.className = 'cart-span'
                fourDivTwo.textContent = item.cart

                fourDiv.append( fourSpan)
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
                inForm.className = 'in-form'
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

                // -----
                const formUls = document.createElement('div')
                formUls.className = 'form-uls'
                const formAllUls = document.createElement('ul')

                item.features.forEach((txt,idx) => {
                    const options = document.createElement('li')
                    const liA = document.createElement('a')
                    liA.href = '#'
                    liA.textContent = txt

                    if(item.classes[idx]){
                        liA.className = item.classes[idx]
                    }

                    liA.addEventListener('click', (e)=>{
                        e.preventDefault()
                        inSpanTwo.textContent = txt
                        rightForm.classList.remove('drop')

                        const spanTwoI = document.createElement('i')
                        spanTwoI.className = 'symbols'
                        inSpanTwo.append(spanTwoI)
                    })

                    options.appendChild(liA)
                    formAllUls.appendChild(options)
                })

                formUls.append(formAllUls)
                rightForm.append(formUls)

                // even listener

                rightForm.addEventListener('click', (e) => {
                    e.stopPropagation()
                    rightForm.classList.add('border', 'drop')
                })

                        // window click

                let windowClickCount = 0;

                window.addEventListener('click', (e) => {
                    windowClickCount++;  

                    if (windowClickCount === 1) {
                        e.stopPropagation()
                        rightForm.classList.remove('drop'); 

                    } else if (windowClickCount === 2) {
                        rightForm.classList.remove('border');  

                        windowClickCount = 0; 

                        e.stopPropagation()
                    }

                });

                    // li click

                document.querySelectorAll('.form-uls li').forEach((li, idx) => {

                    if (idx === 0) {
                        li.classList.add('active')
                    }

                    li.addEventListener('click', (e) => {

                        rightForm.classList.remove('drop')

                        document.querySelectorAll('.form-uls li').forEach(item => item.classList.remove('active'));
                        li.classList.add('active')

                        e.stopPropagation()
                    })
                })


            })
            // ---------------

            // main-body

            const sideBar = document.querySelector('.sidebar .sides')


            // ---- sidebar
            const insides = document.createElement('div')
            insides.className = 'insides'
            sideBar.append(insides)

            data.sidebar.forEach((item, idx) => {
                const allDiv = document.createElement('div')
                allDiv.className = 'all-div'
                allDiv.id = item.id

                const txtDiv = document.createElement('div')
                txtDiv.className = item.class
                txtDiv.textContent = item.txt

                const clearAll = document.createElement('div')
                clearAll.className = 'clear'
                clearAll.textContent = 'clear all'

                const itemUls = document.createElement('ul')



                if (idx === 4) {
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
                    <div class='line-1 rounds'>
                    <input class='input-1' type=''text'>
                    <input class='input-2'>
                    </div>
                    <div class='line-2 rounds'>
                    <input class='input-1' type=''text'>
                    <input class='input-2'>
                    </div>`
                    const go = document.createElement('div')
                    go.className = 'go'
                    const goSpan = document.createElement('span')
                    goSpan.textContent = item.go
                    go.append(goSpan)

                    priceLine.append(line, go)
                    prices.append(priceValue, priceLine)
                    priceDiv.append(txt, prices)

                    allDiv.append(priceDiv)

                } else {

                    item.uls.forEach(ul => {
                        const itemLis = document.createElement('li')
                        itemUls.append(itemLis)

                        const itemLiA = document.createElement('a')

                        if (idx === 0) {
                            itemLiA.textContent = ul

                            itemLis.append(itemLiA)

                        } else {

                            itemLabel = document.createElement('label')
                            itemInput = document.createElement('input')
                            itemInput.type = 'checkbox'
                            itemInput.value = ul

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

                allDiv.append(txtDiv,clearAll,itemUls)
                insides.append(allDiv)
            })


            // contents   ========= mobiles =============

            const contents = document.querySelector('.contents .conts')
            // const mainPad = document.querySelector('.main-pad')

            const itemsPerPage = 6
            let currentPage = 1

            function renderPage(pageNumber, items) {

                contents.innerHTML = ''

                if (items.length === 0) {
                    const noElement = document.createElement('div')
                    noElement.className = 'no-element'
                    noElement.innerHTML = `Oops! Item Not Found
                    <img src='images/search-not-found-illustration-download-in-svg-png-gif-file-formats--page-error-404-empty-state-pack-user-interface-illustrations-5210416.webp'>`

                    contents.appendChild(noElement)

                    return
                }

                const startIndex = (pageNumber - 1) * itemsPerPage
                const endIndex = Math.min(startIndex + itemsPerPage, items.length)

                for (let i = startIndex; i < endIndex; i++) {
                    const item = items[i];


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

                    contentOne.append(sponsered, mobName)

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

                    contentTwo.append(stars, bought)

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

                    divOne.append(oneSubOne, oneSubTwo, oneSubThree)
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

                    divTwo.append(twoSubOne, twoSubTwo, twoSubThree)
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

                    threeLeft.append(divOne, divTwo, divThree, divFour, divFive)

                    const threeRight = document.createElement('div')
                    threeRight.className = 'three-right'
                    const inThreeRight = document.createElement('div')
                    inThreeRight.className = 'main-pad'
                    threeRight.append(inThreeRight)

                    contentThree.append(threeLeft, threeRight)
                    // .....
                    contMarg.append(contentOne, contentTwo, contentThree)
                    contentSide.append(contMarg)

                    inConts.append(mobSide, contentSide)
                }

            }


            // pagination

            function paginationControl(totalItems) {
                const pagination = document.querySelector('.pagination')

                const pageSpan = document.createElement('span')
                pageSpan.className = 'page-span'

                const totalPages = Math.ceil(totalItems / itemsPerPage)

                pagination.innerHTML = ''

                    
                        // prev value
                const prevValue = document.createElement('div')
                prevValue.innerHTML = `
                <img src = "${data.pagination.prev.img}">
                ${data.pagination.prev.value}`
                prevValue.className = data.pagination.prev.class

                pageSpan.append(prevValue)

                // eventlistener
                prevValue.addEventListener('click', () => {
                    if (currentPage > 1) {
                        currentPage--
                        renderPage(currentPage, data.Phones)
                        paginationControl(data.Phones.length)

                        document.querySelector('.prev').classList.add('click')

                    }

                    if(currentPage === 1){
                        document.querySelector('.prev').classList.remove('click')
                    }

                })            

                    // ----
                for (let i = 1; i <= totalPages; i++) {

                    const pageButton = document.createElement('button')
                    pageButton.innerHTML = `<a>${i}</a>`

                    pageSpan.append(pageButton)
                    pagination.append(pageSpan)

                    if (i === currentPage) {
                        pageButton.classList.add('selected')
                    }

                            // page button event listener
                    pageButton.addEventListener('click', () => {
                        currentPage = i
                        renderPage(currentPage, data.Phones)

                        document.querySelectorAll('.page-span button').forEach(btn => {
                            btn.classList.remove('selected')
                        })

                        pageButton.classList.add('selected')

                        if(currentPage === 1){
                            document.querySelector('.prev').classList.remove('click')
                        } else {
                            document.querySelector('.prev').classList.add('click')
                        }

                        if(currentPage === totalPages){
                            document.querySelector('.next').classList.remove('click')
                        } else{
                            document.querySelector('.next').classList.add('click')
                        }
                        
                    })
                            // ---

                }

                    
                      // next value
                const nextValue = document.createElement('div')
                nextValue.innerHTML = `
                ${data.pagination.next.value}
                <img src = "${data.pagination.next.img}">`
                nextValue.className = data.pagination.next.class

                pageSpan.append(nextValue)

                nextValue.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        currentPage++
                        renderPage(currentPage, data.Phones)
                        paginationControl(data.Phones.length)

                        document.querySelector('.next').classList.add('click')
                    
                    } 

                    if(currentPage === totalPages){
                        document.querySelector('.next').classList.remove('click')

                    }

                })       
                        // ---
            }
            // ----------

            paginationControl(data.Phones.length)
            renderPage(currentPage, data.Phones)
            // -------------------------------------------

            // ================ functions - filtering ====================

            //  filter by brands

            function filterPhonesByBrands() {
                const brands = document.getElementById('brand')

                const checkedBrands = Array.from(brands.querySelectorAll('input:checked'))

                if (checkedBrands.length === 0) {
                    renderPage(1, data.Phones)

                    return
                }

                const selectedBrands = checkedBrands.map(input => input.value.toLowerCase())

                const filteredPhones = data.Phones.filter(phone =>
                    selectedBrands.includes(phone.id.toLowerCase())
                )

                renderPage(currentPage, filteredPhones)

                console.log('filteredphones', filteredPhones)
            }

            const brandCheckBoxes = document.querySelectorAll('#brand input[type="checkbox"]')
            brandCheckBoxes.forEach(checkbox => {
                checkbox.addEventListener('change', filterPhonesByBrands)
            })


            // ----------------------

            //  filter by ram


            function filterByRam() {
                const ramRanges = {
                    "2 to 3.9 GB": { min: 2, max: 3.9 },
                    "4 to 5.9 GB": { min: 4, max: 5.9 },
                    "6 to 7.9 GB": { min: 6, max: 7.9 },
                    "8 to 9.9 GB": { min: 8, max: 9.9 },
                    "10 GB & Above": { min: 10, max: Infinity }
                };

                const ram = document.getElementById('ram')
                const checekdRam = Array.from(ram.querySelectorAll('input:checked'))
                    .map(input => input.value.toLowerCase())

                const filterPhones = data.Phones.filter(phone => {
                    const ramMatch = phone.h2.match(/(\d+)\s*GB/)

                    if (ramMatch) {
                        const ramSize = parseFloat(ramMatch[1])

                        return checekdRam.some(range => {
                            const { min, max } = ramRanges[range] || {}

                            if (min !== undefined && max !== undefined) {
                                return ramSize >= min && ramSize <= max
                            }
                        })
                    }

                    return false
                })

                renderPage(1, filterPhones)
            }

            const ramCheckBoxes = document.querySelectorAll('#ram input[type="checkbox"]')
            ramCheckBoxes.forEach(checkbox => {
                checkbox.addEventListener('change', filterByRam)
            })


            // filter by memory storage

            function filterByStorage() {
                const storage = document.getElementById('storage')
                const checkedStorage = Array.from(storage.querySelectorAll('input:checked'))
                    .map(input => input.value.toLowerCase().trim().replace(/\s+/g, ''))

                console.log('checked storage', checkedStorage)

                if (checkedStorage.length === 0) {
                    renderPage(1, data.Phones)

                    return
                }

                const filteredPhones = data.Phones.filter(phone => {

                    if (!phone.h2 || typeof phone.h2 !== 'string' || phone.h2.trim() === "") {
                        console.warn('missing h2 for phone', phone)
                        return false
                    }

                    const h2Text = phone.h2.toLowerCase()
                    console.log('h2text:', h2Text)

                    const storageMatch = h2Text.match(/(\d+\.?\d*)\s*gb\s*(storage|rom)/i)

                    if (storageMatch) {
                        // const phoneStorage = storageMatch[0].toLowerCase().trim()
                        // const phoneStorage = `${parseInt(storageMatch[1])}gb`

                        const phoneStorage = parseInt(storageMatch[1])

                        return checkedStorage.some(option => {
                            if (option === '512gb&above') {
                                return phoneStorage >= 512

                            } else if (option === 'upto3.9gb') {
                                return phoneStorage <= 3

                            } else {
                                return option === `${phoneStorage}gb`
                            }
                        })

                        // return checkedStorage.includes(phoneStorage)
                    }

                    return false

                })

                console.log('filterd phones', filteredPhones)

                renderPage(1, filteredPhones)
            }

            const storages = document.querySelectorAll('#storage input[type="checkbox"]')
            storages.forEach(store => {
                store.addEventListener('change', filterByStorage)
            })

            // -------------------------------------------

            // price low to high

            const lowToHigh = document.querySelector('.form-uls .low')
            lowToHigh.addEventListener('click', ()=>{

                const lowItem = [...data.Phones]

                const sortedItems = lowItem.sort((high,low) =>{
                    const priceA = parseFloat(high.rs.replace(/[₹,]/g, '').trim())
                    const priceB = parseFloat(low.rs.replace(/[₹,]/g, '').trim())

                    return priceA - priceB

                })
                console.log('sorted-items:',sortedItems)

                renderPage(1,sortedItems)
            })


            // price high to low

            const highToLow = document.querySelector('.form-uls .high')
            highToLow.addEventListener('click', ()=>{

                const highItems = [...data.Phones]

                const sortedItems = highItems.sort((low,high) =>{
                    const priceA = parseFloat(low.rs.replace(/[₹,]/g, '').trim())
                    const priceB = parseFloat(high.rs.replace(/[₹,]/g, '').trim())

                    return priceB - priceA
                })
                console.log('sorteditem',sortedItems)
                renderPage(1, sortedItems)
            })

            // featured
            const featuredOnes = document.querySelector('.form-uls .feat')
            featuredOnes.addEventListener('click', () => {
                paginationControl(data.Phones.length)
                renderPage(currentPage, data.Phones)
            })

            // avg review
            
            const avgReview = document.querySelector('.form-uls .avg')
            avgReview.addEventListener('click', () =>{
                
                const avgItems = [...data.Phones]

                console.log(avgItems.map(phone => phone.star))

                const sortedItems = avgItems.sort((a,b) =>{
                    const starA =  parseFloat(a.star.replace(/[, ]/, '').trim())
                    const starB =  parseFloat(b.star.replace(/[, ]/, '').trim())

                    return starB - starA
                })
                console.log('sorted items', sortedItems)
                renderPage(currentPage,sortedItems)
            })

            // 2g-4g-5g

            function filterByGen(){

                const Techs = document.getElementById('tech')
                const generations = Array.from(Techs.querySelectorAll('input:checked'))

                const selectedGen = generations.map(input => input.value.toLowerCase())

                const filteredPhones = data.Phones.filter(phone =>{
                    return  selectedGen.some(gen => {
                        const regex = new RegExp(`\\b${gen}\\b`, 'i'); // \b asserts a word boundary
                        return regex.test(phone.h2.toLowerCase())
                    })
                })

                renderPage(1, filteredPhones)
                console.log('filteredphones', filteredPhones)
            }
             const genCheckBoxes = document.querySelectorAll('#tech input')
             genCheckBoxes.forEach(gen =>{
                gen.addEventListener('change', filterByGen)
            })

            // -------

            // clear fn
       
            document.querySelectorAll('.all-div').forEach(div => {
                div.querySelectorAll('li').forEach(li => {
                    li.addEventListener('click', () => {

                        const clrFn = div.querySelector('.clear');
                        if (clrFn) {
                            clrFn.classList.add('show');
                        
                        } 
                                  
                    });
                });
            });

            document.querySelectorAll('.clear').forEach(clear =>{
                clear.addEventListener('click', ()=>{
                    document.querySelectorAll('.all-div input:checked').forEach(input =>{
                        input.checked = false

                        if(input.checked === false){
                            clear.classList.remove('show')
                        }
                    })

                    clear.classList.remove('show')
                    renderPage(1,data.Phones)
                })

            })
            // -------------------------------------------


            let value = 0

            const addToCart = document.querySelectorAll('.addcart button')
            addToCart.forEach(cart =>{
                cart.addEventListener('click', ()=>{

                    const cartValue = document.querySelector('.zero')

                    value ++
                    
                    cartValue.textContent = value

                    console.log("cartValue",cartValue)

                }) 
            })
            // -------------------------------------------

        })
}) 