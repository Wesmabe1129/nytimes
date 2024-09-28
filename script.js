
const URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=e3iSJWaAh52oSIDNAWe8OuPJzVoGaPI3';

const updateData = (posts) => {
    const section = document.getElementById('section');
    const titleArray = [];
    const contributorArray = [];
    const descriptionArray = [];
    const bookImageArray = [];
    
    posts.forEach((post, index) => {
        titleArray.push(post.title);
        contributorArray.push(post.contributor);
        descriptionArray.push(post.description);
        bookImageArray.push(post.book_image);

        
        const mainContainer = document.createElement('div');
        const imgContainer = document.createElement('div');
        const infoContainer = document.createElement('div');
        const infos = document.createElement('div');
        const btnContainer = document.createElement('div');
        const viewBtn = document.createElement('span');
        const buyBtn = document.createElement('span');
        const img_book = document.createElement('img');

        img_book.src = post.book_image;
        imgContainer.appendChild(img_book);
        
        /* 
        #B2C2B7
        #C1B1BE
        #F2C297
        */
        infoContainer.style.display = 'flex';
        infoContainer.style.justifyContent = 'space-between';
        infoContainer.style.width = `${100}vw`;
        infoContainer.style.backgroundColor = '#B2A59B';


        infos.style.maxWidth = `${700}px`;
        
        const infoWrapper = document.createElement('div');

        const infoTitle = document.createElement('h3');
        infoTitle.textContent = `Title: ${post.title}`;
        infoTitle.style.margin = 0;
        const infoContributor = document.createElement('p');
        infoContributor.textContent = `Author: ${post.contributor}`;

        infoWrapper.appendChild(infoTitle);
        infoWrapper.appendChild(infoContributor);

        infoWrapper.style.display = 'flex';
        infoWrapper.style.flexDirection = 'column';
        infoWrapper.style.justifyContent = 'center';
        

        infoContainer.appendChild(infoWrapper);

        btnContainer.style.display = 'flex';
        btnContainer.style.flexDirection = "column"
        btnContainer.style.justifyContent = 'space-between';

        
        viewBtn.textContent = `View`;
        viewBtn.style.position = 'relative';
        viewBtn.style.textDecoration = 'none';
        viewBtn.style.color = 'black';
        viewBtn.style.textAlign = 'center';
        viewBtn.style.alignItems = 'center';
        viewBtn.style.justifyContent = 'center';
        viewBtn.style.padding = `${0.5}rem ${0.5}rem ${0.5}rem`;
        viewBtn.style.width = `${5}rem`;
        viewBtn.style.height = `${1}rem`;
        viewBtn.style.backgroundColor = '#C1B1BE';
        viewBtn.href = '';
        viewBtn.style.cursor = 'pointer';

        const titleTag = document.getElementById('titleTag')
        const titleName = document.getElementById('titleName')
        const authorTag = document.getElementById('authorTag')
        const authorName = document.getElementById('authorName')
        const descriptionTag = document.getElementById('descriptionTag')
        const descriptionDetail = document.getElementById('descriptionDetail')
        const bookImage = document.getElementById('bookImage');

        viewBtn.addEventListener('click', function() {
            const viewSection = document.getElementById('viewSection');
            const rightPannel = document.getElementById('right-pannel');

            viewSection.style.display = 'flex';

            switch(index){
                case 0:
                    // window.location.href = 'https://example.com/first-page';
                    

                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[0]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[0]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[0]}`;
                    
                    bookImage.src = `${bookImageArray[0]}`;

                    
                    section.style.display = 'none';
                    break;
                    
                case 1:

                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[1]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[1]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[1]}`;
                    
                    bookImage.src = `${bookImageArray[1]}`;


        
                    section.style.display = 'none';
                    break;
                case 2:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[2]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[2]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[2]}`;
                    
                    bookImage.src = `${bookImageArray[2]}`;



                    
                    section.style.display = 'none';
                    break;
                case 3:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[3]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[3]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[3]}`;
                    
                    bookImage.src = `${bookImageArray[3]}`;
                
                    
                    section.style.display = 'none';
                    break;
                case 4:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[4]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[4]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[4]}`;
                    
                    bookImage.src = `${bookImageArray[4]}`;


                    section.style.display = 'none';
                    break;
                case 5:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[5]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[5]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[5]}`;
                    
                    bookImage.src = `${bookImageArray[5]}`;



                    
                    section.style.display = 'none';
                    break;
                case 6:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[6]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[6]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[6]}`;
                    
                    bookImage.src = `${bookImageArray[6]}`;



                    
                    section.style.display = 'none';
                    break;
                case 7:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[7]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[7]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[7]}`;
                    
                    bookImage.src = `${bookImageArray[7]}`;



                    
                    section.style.display = 'none';
                    break;
                case 8:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[8]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[8]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[8]}`;
                    
                    bookImage.src = `${bookImageArray[8]}`;



                    
                    section.style.display = 'none';
                    break;
                case 9:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[9]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[9]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[9]}`;
                    
                    bookImage.src = `${bookImageArray[9]}`;



                    
                    section.style.display = 'none';
                    break;
                case 10:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[10]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[10]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[10]}`;
                    
                    bookImage.src = `${bookImageArray[10]}`;




                    
                    section.style.display = 'none';
                    break;
                case 11:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[11]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[11]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[11]}`;
                    
                    bookImage.src = `${bookImageArray[11]}`;



                    
                    section.style.display = 'none';
                    break;
                case 12:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[12]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[12]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[12]}`;
                    
                    bookImage.src = `${bookImageArray[12]}`;



                    
                    section.style.display = 'none';
                    break;
                case 13:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[13]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[13]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[13]}`;
                    
                    bookImage.src = `${bookImageArray[13]}`;



                    
                    section.style.display = 'none';
                    break;
                case 14:
                    titleTag.textContent = 'Title: ';
                    titleName.textContent = `${titleArray[14]}`;

                    authorTag.textContent = 'Author: ';
                    authorName.textContent = `${contributorArray[14]}`;
                    
                    descriptionTag.textContent = 'Description: ';
                    descriptionDetail.textContent = `${descriptionArray[14]}`;
                    
                    bookImage.src = `${bookImageArray[14]}`;



                    
                    section.style.display = 'none';
                    break;
            }
        });

        buyBtn.textContent = 'Buy';
        buyBtn.style.position = 'relative';
        buyBtn.style.textDecoration = 'none';
        buyBtn.style.color = 'black';
        buyBtn.style.textAlign = 'center';
        buyBtn.style.alignItems = 'center';
        buyBtn.style.justifyContent = 'center';
        buyBtn.style.padding = `${0.5}rem ${0.5}rem ${0.5}rem`;
        buyBtn.style.width = `${5}rem`;
        buyBtn.style.height = `${1}rem`;
        buyBtn.style.backgroundColor = '#F2C297';
        buyBtn.href = '';
        
        btnContainer.appendChild(viewBtn);
        btnContainer.appendChild(buyBtn);
        infoContainer.appendChild(btnContainer);



        mainContainer.appendChild(imgContainer);
        mainContainer.appendChild(infoContainer);


        mainContainer.style.display = 'flex';
        mainContainer.style.position = 'relative';
        mainContainer.style.flexDirection = 'row';
        mainContainer.style.width = `${100}%`;
        mainContainer.style.height = `${100}%`;
        mainContainer.style.alignItems = 'center'
        mainContainer.style.justifyContent = 'space-between';

        section.appendChild(mainContainer);

        // Function to apply styles based on media query match
        const mediaQueryPhone = window.matchMedia("(max-width: 480px)");
        const mediaQueryTablet = window.matchMedia("(min-width: 481px) and (max-width: 779px)");
        const mediaQueryLaptop = window.matchMedia("(min-width: 780px) and (max-width: 1023px)");
        const mediaQueryDesktop = window.matchMedia("(min-width: 1024px)");

        const handleScreenResize = () => {
            if (mediaQueryPhone.matches) {
                // Apply styles for small screens
                imgContainer.style.marginLeft = `${1}rem`;

                img_book.style.width = '4rem';
                img_book.style.height = '6rem';
                img_book.style.marginRight = '2rem';

                infoTitle.style.fontSize = '0.5rem';
                infoContributor.style.fontSize = '0.425rem';

                viewBtn.style.width = '2rem';
                viewBtn.style.height = '0.5rem';
                viewBtn.style.fontSize = '0.5rem';
                viewBtn.style.marginBottom = '10px';

                buyBtn.style.width = '2rem';
                buyBtn.style.height = '0.5rem';
                buyBtn.style.fontSize = '0.5rem';

                
                infoContainer.style.padding = '1rem 0.5rem 1rem';
                infoContainer.style.marginRight = '3rem';

                infoWrapper.style.display = 'flex';
                infoWrapper.style.flexDirection = 'column';
                infoWrapper.style.justifyContent = 'center';
                infoWrapper.style.marginLeft = '1rem';

                infoContainer.style.maxWidth = '700px';

                // mainContainer.style.padding = '2rem 1.5rem 2rem';

            } else if (mediaQueryTablet.matches) {
                // Apply styles for large screens
                img_book.style.width = '5rem';
                img_book.style.height = '6.5rem';

                infoTitle.style.fontSize = '0.625rem';
                infoContributor.style.fontSize = '0.5rem';

                viewBtn.style.width = '2rem';
                viewBtn.style.height = '0.5rem';
                viewBtn.style.fontSize = '0.5rem';
                viewBtn.style.marginBottom = '10px';

                buyBtn.style.width = '2rem';
                buyBtn.style.height = '0.5rem';
                buyBtn.style.fontSize = '0.5rem';

                
                
                imgContainer.style.marginLeft = '2rem';

                infoContainer.style.padding = '1.5rem 1rem 1.5rem';
                infoContainer.style.marginRight = '6rem';
                mainContainer.style.padding = '2rem 1.5rem 2rem';
            
            } else if (mediaQueryLaptop.matches) {
                // Apply styles for large screens
                img_book.style.width = '6rem';
                img_book.style.height = '8rem';

                infoTitle.style.fontSize = '1rem';
                infoContributor.style.fontSize = '0.75rem';

                viewBtn.style.width = '4rem';
                viewBtn.style.height = '1rem';
                viewBtn.style.fontSize = '0.75rem';
                viewBtn.style.marginBottom = '10px';

                buyBtn.style.width = '4rem';
                buyBtn.style.height = '1rem';
                buyBtn.style.fontSize = '0.75rem';

                
                
                imgContainer.style.marginLeft = '2rem';

                infoContainer.style.padding = '2.5rem 1.5rem 2.5rem';
                infoContainer.style.marginRight = '6rem';
                mainContainer.style.padding = '2rem 1.5rem 2rem';
            
            } else if (mediaQueryDesktop.matches) {
                // Apply styles for large screens
                img_book.style.width = '10rem';
                img_book.style.height = '13rem';


                viewBtn.style.width = '5rem';
                viewBtn.style.height = '1.5rem';
                viewBtn.style.fontSize = '1rem';
                viewBtn.style.marginBottom = '10px';

                buyBtn.style.width = '5rem';
                buyBtn.style.height = '1.5rem';;
                buyBtn.style.fontSize = '1rem';
                
                infoTitle.style.fontSize = '1.5rem';
                infoContributor.style.fontSize = '1rem';

                infoContainer.style.padding = '2.5rem 1.5rem 2.5rem';
                infoContainer.style.marginRight = '6rem';

                infoWrapper.style.display = 'flex';
                infoWrapper.style.flexDirection = 'column';
                infoWrapper.style.justifyContent = 'center';
                infoWrapper.style.marginLeft = '2rem';

                infoContainer.style.maxWidth = '700px';

                mainContainer.style.padding = '2rem 1.5rem 2rem';
            }
        };

        // Initial check
        handleScreenResize();

        // Add event listeners to listen for changes in screen size
        mediaQueryPhone.addEventListener('change', handleScreenResize);
        mediaQueryTablet.addEventListener('change', handleScreenResize);
        mediaQueryLaptop.addEventListener('change', handleScreenResize);
        mediaQueryDesktop.addEventListener('change', handleScreenResize);
    });
    

};



const btnFind = document.getElementById('btn-find');
const catLabel = document.getElementById('cat-label');

btnFind.addEventListener('click', async() => {
    // event.preventDefault();
    section.style.display = 'flex';
    catLabel.textContent = 'Hardcover Fiction';
    try {
        const main = document.getElementById('main');
        main.style.display = 'none';
        backBtn.style.display = 'flex';


        // const res = await fetch('/bookAPI.json');
        const res = await fetch(URL);
        

        if (!res.ok) {
            throw new Error("Could not Find Any");
        }


        const data = await res.json();
        updateData(data.results.books);
    }catch(e) {
        console.log('error', e);
    }
});

const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function() {
    if (viewSection.style.display === 'flex') {
        // main.style.display = '';
        section.style.display = 'flex';
        viewSection.style.display = 'none';
    }

    else if (section.style.display === 'flex') {
        main.style.display = 'flex';
        section.style.display = 'none';
        backBtn.style.display = 'none';

        catLabel.textContent = 'Book';
    }
})




