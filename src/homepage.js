import donutsRow from './anastasiia-chepinska-qZ6uvJHLHFc-unsplash.jpg'

const homepage = () => {
const content = document.querySelector('#content');

const heading = document.createElement('h1');
    heading.textContent = `Flourr Donuts`;
    heading.setAttribute('id', 'heading');
    content.appendChild(heading);

const imgDonuts = document.createElement('img');
    imgDonuts.setAttribute('src', donutsRow);
    imgDonuts.setAttribute('id', 'donuts');
    imgDonuts.setAttribute('alt', 'variety of donuts in a row')
    content.appendChild(imgDonuts);

const paraFlavor = document.createElement('p');
    paraFlavor.textContent = `Enjoy our delicious, flavor-packed donuts, 
                            made fresh from the oven beginning every morning at 5am!`;
    paraFlavor.setAttribute('id', 'byline');
    content.appendChild(paraFlavor);

const subheading = document.createElement('h2');
    subheading.textContent = `Make it your own!`
    subheading.setAttribute('id', 'subheading');
    content.appendChild(subheading);

const paraCustomizeDonut = document.createElement('p');
    paraCustomizeDonut.textContent = `At Flourr Donuts, you can choose from a variety of donut types, frostings, 
                                    and toppings to suit your flavor-tastic desires!`;
    paraCustomizeDonut.setAttribute('id', 'customdonut');
    content.appendChild(paraCustomizeDonut);

const paraAttrib = document.createElement('p');
    paraAttrib.className = `attrib`;
    let paraBegin = document.createTextNode("Photo by ");
const linkAttribAuthor = document.createElement('a');
    linkAttribAuthor.href = `https://unsplash.com/@anastasiiachepinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`;
    linkAttribAuthor.textContent = `Anastasiia Chepinska`;
    let paraMiddle = document.createTextNode(" on ");
const linkAttribSite = document.createElement('a');
    linkAttribSite.href = `https://unsplash.com/photos/qZ6uvJHLHFc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
    linkAttribSite.textContent = `Unsplash`;
    paraAttrib.appendChild(paraBegin);
    paraAttrib.appendChild(linkAttribAuthor);
    paraAttrib.appendChild(paraMiddle);
    paraAttrib.appendChild(linkAttribSite);
    content.appendChild(paraAttrib);
}

export default homepage;