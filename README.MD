Finishing Odin Project - EAS
- Deployed -> [Link](https://ccelest1.github.io/etch-a-sketch/)

# 1 - Webpage w/ 16*16 grid of square divs
[x] Create divs w/ JS (for, iterate using children nodes and appending to a parent)
[x] Grid is within a container div
    - Practice flex
    - Mange borders and margins

# 2 - Hover effect
[x] Grid divs change color when mouse passes over them
    * using event listener for hover, css for hover to change
    * random color using (performant I'm assuming)
        ```js
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        node.style.backgroundColor = "#"+randomColor
        ```

# 3 - Button to screen top
[x] Prompt -> Removal -> Generation
    1. Send user a popup asking for number of squares per side for new grid
    2. (entered)
    3. remove existing grid and new grid should be generated in same total space as prior -> 960px wide
        - User limit = 100
        - Research Prompting
            * Ex: type in 64 -> gen 64*64 grid group



## EC
[x] - Randomize squares RGB values with each interaction
[ ] - Darkening effect -> each interaction darkens square by 10% -> achieve fully black square in ten interactions
    * ```js
       let opacity_interaction = Number(node.style.opacity)+.1
       node.style.opacity = opacity_interaction > 1? 1 : opacity_interaction
      ```
[ ] - Lightening effect
