let grid_container_node = document.querySelector('.grid_container')
let control_panel_node = document.querySelector('.control_panel')

function initialize_grid() {
    // 960 / square size -> gives a decent ratio
    let size = 10
    let total = size ** 2
    let pixel_size = 860 / size
    for (let j = 0; j < total; j++) {
        let grid_node = document.createElement('div')
        grid_node.classList.add('grid_node')
        grid_node.style.backgroundColor = 'white'
        grid_node.style.border = "1px solid black"
        grid_container_node.appendChild(grid_node)
        grid_node.style.width = pixel_size + "px"
        grid_node.style.height = pixel_size + "px"
        grid_node.style.flexShrink = 0
    }
}

initialize_grid()

function grid_behavior() {

    grid_container_node.addEventListener('mouseover', e => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let node = e.target
        console.log(Array.from(node.classList))
        if (node.classList.contains('grid_node')) {
            node.style.backgroundColor = "#" + randomColor
        }
    })

    control_panel_node.addEventListener('click', function handler(e){
        let target = e.target
        switch(Array.from(target.classList)[0]){
            case 'reset-button':
                let grid_nodes = document.querySelectorAll('.grid_node')
                Array.from(grid_nodes).forEach(node=>{
                    node.style.backgroundColor = 'white'
                })
        }
    })


}

grid_behavior()
