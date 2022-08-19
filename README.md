# Casey Tansey Portfolio

This project was created with the intention of being used as my Phase 2 Project in the Software Engineering Program at Flatiron. The guidelines included creating single-page application to demonstrate knowledge of Javascript, React, and HTML/CSS. Within the application, `json-sever` had to be used to create a RESTful API. With the guidelines set, I decided to make an application to use as my portfolio to demonstrate my work in both Website Development and Graphic Design.

The purpose of developing this website was to show attributions of myself through design. This fits in terms of color scheme, typography, and overall layout and aesthetic. When creating the design of the application, Procreate and Canva were used to come up with rough blueprints of designs that would fit my "character." Figma was the used to create the first "official" layout, and eventually the final UI layout of the design. When implementing the design, [styled-components][0] was used with react to implement a dynamic flow.

![HomePageGif](https://media.giphy.com/media/wI9dnwZUKivnoHERP2/giphy.gif)

---

To open this repository:

1. Fork and clone
2. Input into terminal

```
$ npm install
$ json-server --watch db.json
$ npm start
```

3. Navigate to Application

## Home Page

---

When opening the application, the page is first directed to the home page which shows a logo I created depicting a sketch of myself. There is also options to navigate to the different pages within the app through the navigation bar in the header, or listed content within the footer. Within the home page, there are also options to click to quickly go see a portfolio of my website development or graphic designs. Finally, there is an option for light or dark mode which changes the color scheme of the whole application.

![isDarkModeGif](https://media.giphy.com/media/a9OKDLySgUSlWNk362/giphy.gif)

---

## About Page

---

After navigating to the about page, there is a photo of myself, along with my contact information. Also within this page, there is information about what I am currently passionate about or pursuing. Hobbies I love and enjoy are then listed right under my passion with an image and a description to match.

![AboutPageGif](https://media.giphy.com/media/i86JoAEpo3hfBhmRZp/giphy.gif)

---

## Portfolio Page

---

When portfolio is clicked within the navigation bar, it will direct to a portfolio selection page that features another logo (sketch of myself) with two buttons to choose between visiting the website or graphic portfolio. After one is selected, the corresponding page renders with a portfolio of different projects with a navigation feature at the top to switch between the website or graphic portfolio.

![PortfolioPageGif](https://media.giphy.com/media/zO3F0eiNhSqpwDqpOK/giphy.gif)

### **Website Development**

---

The website development page holds a portfolio of past website development projects that I have developed. Each project features its own card that holds information of the project including when the website was developed, application used, and a link to the website itself. There is also a link to more information about the project along with a sample image from application.

![WebDevPageGif](https://media.giphy.com/media/rzUJiH5xy50oneu7SG/giphy.gif)

#### Project Page

---

After clicking for more information about a website project, more information will load about the project that includes a image gallery that is used from the library [React Image Gallery][1]. For each project, a selection of images are featured that show the final project in production, or other samples that were created. The date the application was created, links to website and github, and the programs used to create the project are also featured. Finally, the purpose of the project demonstrate why the application was created, and what the application is meant to accomplish.

![WProjectPageGif](https://media.giphy.com/media/UAN47A3uxG7Uski7gt/giphy.gif)

### **Graphic Design**

---

The graphic design page holds a portfolio of past graphic design projects that I have created. Each project features its own card that holds information of the project including when the graphic was developed and application used. There is also a button, that when clicked, directs to more information about the project.

![GraphicDesignPageGif](https://media.giphy.com/media/WAepnimpfckcgufzc3/giphy.gif)

#### Project Page

---

After clicking for more information about a graphic project, more information will load about the project that includes a image gallery that is used from the library [React Image Gallery][1]. For each project, a selection of images are featured that show the final project in production, or other samples that were created. The date the graphic was created and the programs used to create the project are also featured. Finally, the purpose of the project demonstrate why the graphic was created, and what the graphic is meant to accomplish.

![GProjectPageGif](https://media.giphy.com/media/p5GQqrsE8hftwS43lS/giphy.gif)

---

## Resume Page

The resume page includes a pdf copy of my resume that is located in an `iframe` HTML tag. This allows for viewers to download, print, or send the resume from the website itself.

![ResumePageGif](https://media.giphy.com/media/wWgAZEzbfuBCHQ3fiz/giphy.gif)

---

## Blog Page

The blog page includes a card for each blog post that I was add to my [Medium][2] account. Each blog post references a project that was completed throughout each phase through Flatiron. Within each of these posts, there is a useful guide to follow apply programming that I found useful within the each of the corresponding phases.

![BlogPageGif](https://media.giphy.com/media/wl3KvdXlqOarldg4Kz/giphy.gif)

---

## Contact Page

The contact page includes my contact information once again, along with a form that users can fill out to then submit. After the user clicks to submit the form, the information that user entered will be saved, so ideally the user can be contacted back with their corresponding question.

![ContactPageGif](https://media.giphy.com/media/VDeADQQHSYoNAwEbzF/giphy.gif)

---

[0]: https://styled-components.com/
[1]: https://www.npmjs.com/package/react-image-gallery
[2]: https://medium.com/@ctansey12600

---
