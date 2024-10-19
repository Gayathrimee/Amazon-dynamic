const leftSpanDiv = document.createElement('div');
leftSpanDiv.className = 'left-span';
leftSpanDiv.innerHTML = `<span>${cont.h2}</span>`;

leftSpanDiv.addEventListener('click', () => {
    const allRightSections = document.querySelectorAll('.right-section');
    allRightSections.forEach(section => section.style.display = 'none');
    
    document.getElementById(`right-section-${index}`).style.display = 'block';
});

leftDiv.appendChild(leftSpanDiv);
lowerBody.append(leftDiv);

const rightSection = document.createElement('div');
rightSection.className = 'right-section';
rightSection.id = `right-section-${index}`; 
rightSection.style.display = 'none'; 

if(index === 0){
    rightSection.style.display = 'block'
}

//  h3
const heading = document.createElement('div');
heading.className = 'heading';
heading.innerHTML = `<h3>${cont.h3}</h3>`;
rightSection.appendChild(heading);

//  subs (h4 and spans)
cont.subs.forEach(sub => {
    const subDiv = document.createElement('div');
    subDiv.className = 'sub-div';

    if (sub.h4) {
        const h4 = document.createElement('h4');
        h4.innerText = sub.h4;
        subDiv.appendChild(h4);
    }

    sub.span.forEach(spanText => {
        const span = document.createElement('span');
        span.innerText = spanText;
        subDiv.appendChild(span);
    });

    rightSection.appendChild(subDiv);
});

rightDiv.appendChild(rightSection);