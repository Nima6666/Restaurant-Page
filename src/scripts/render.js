import contentCre from './contents';

const renderContent = (() => {

    const body = document.querySelector('body');
    const contentpage = document.createElement('div');
    contentpage.id = "home";
    body.appendChild(contentpage);

    const content = (tag) => {
        contentpage.id = (`${tag.classList.value}`);

        if (contentpage.id == tag.classList.value) {
            contentCre.getId(contentpage.id);
            contentCre[(`${contentpage.id}`)](contentpage.id);
        };
    
    };

    const defa = () => {
        contentCre.getId(contentpage.id);
        contentCre[(contentpage.id)]();

    };

    const check = (a) => {
        // console.log(contentpage.id);
        console.log(a.classList.value);

        const todeac = document.querySelector(`.${contentpage.id}`);
        // console.log(todeac);

        //if (contentpage.id == a.classList.value)

    }

    return {
        content,
        defa,
        check
    }

})()

export default renderContent;
