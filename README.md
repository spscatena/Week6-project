# Fun Translations Week 6 Project

![](https://media.giphy.com/media/EOpZ7XsVfTN2E/giphy.gif)

## Production Description
A fun site where the user can enter text into an input field to be translated into Minion, Sweedish Chef or Pirate language.

## Wireframes: 
Home Page: 
![](https://raw.githubusercontent.com/spscatena/translate-project/master/wireframe-translate-home.png)

Pirate Page: 
![](https://raw.githubusercontent.com/spscatena/translate-project/master/wireframe-translate-pirate-page.png)

Minion Page: 
![](https://raw.githubusercontent.com/spscatena/translate-project/master/wireframe-translate-minion-page.png)

Chef Page: 
![](https://raw.githubusercontent.com/spscatena/translate-project/master/wireframe-translate-chef-page.png)

## MVP and Post MVP
- Call three post axios calls to retireve a translation of text entered in by the user. 
- Retrieve translation and present new text to the user. 
- Will include for react router links and 6 components
- Custom CSS

## Post MVP
- Incorporating animation and stylization



## Component Hierarchy

```
<Header>
  <Link to Pages>
<Main>
  <Input Data>
  <Retun Data>
</Main>
<Footer>

```
## Technologies 
React, AJAX, HTML, CSS 


## Code Snippit
Animation library to add interesting animation transition to an image. This bit of code is activating the animation once the translation appears. 

```
{this.props.pirateMessage !== "" &&
          <Animated animationIn="fadeInRight" animationOut="fadeInRight" isVisible={true} animationInDuration="3000">
            <div id="pirate-shipt">
              <img src={pirateship} />
            </div>
          </Animated>
        }

```
## Areas of trouble
I ran into issues with animating the Sweedish Chef. I used positioning to place him where I wanted him to be on the page, however when I used the animation that was imported, I could not figure out how to determin his starting position. 
