let grid_container_node = document.querySelector('.grid_container')
let control_panel_node_1 = document.querySelector('.control_panel_1')
let dimension_input = document.querySelector('input')

function initialize_grid(dimension_input) {
    let size = null;
    if (!dimension_input) {
        size = 16
    } else {
        size = dimension_input
    }
    // 960 / square size -> gives a decent ratio
    let total = size ** 2
    let width = 700
    let pixel_size = width / size

    for (let i = 0; i < total; i++) {
        let grid_node = document.createElement('div')
        grid_node.classList.add('grid_ode')
        grid_node.style.backgroundColor = 'white'
        grid_node.style.border = "1px solid black"
        grid_node.style.width = pixel_size + "px"
        grid_node.style.height = pixel_size + "px"
        grid_node.style.flexShrink = 1
        grid_node.style.flexBasis = width / size - 1
        grid_container_node.appendChild(grid_node)
    }
}

initialize_grid()

function grid_behavior() {

    grid_container_node.addEventListener('mouseover', e => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let node = e.target
        if (node.classList.contains('grid_node')) {
            node.style.backgroundColor = "#" + randomColor
        }
    })

    const testing_input = (input_param) => {
        const warning = document.createElement('p');

        let dimension_div = document.querySelector('.div-dimension')
        let enter_dimension = document.querySelector('.dimension-text')

        if (Number(input_param)) {
            let dimension = Number(input_param)
            if (dimension > 100 && !dimension_div.querySelector('.warning_number')) {
                warning.textContent = 'Only numbers below 100'
                warning.classList.add('warning_number')
                if (dimension_div.querySelector('.warning_string')) {
                    let warning_string = dimension_div.querySelector('.warning_string')
                    warning_string.remove()
                }
                dimension_div.insertBefore(warning, enter_dimension)
                return false
            }
            if (dimension <= 100) {
                let children = grid_container_node.children
                Array.from(children).forEach(node => {
                    node.remove()
                })

                if (dimension_div.querySelector('.warning_number')) {
                    dimension_div.querySelector('.warning_number').remove()
                }
                if (dimension_div.querySelector('.warning_string')) {
                    dimension_div.querySelector('.warning_string').remove()
                }
                return true
            }
        } else {
            warning.textContent = 'Please enter a number!'
            warning.classList.add('warning_string')
            if (!dimension_div.querySelector('.warning_string')) {
                if (dimension_div.querySelector('.warning_number')) {
                    let warning_number = dimension_div.querySelector('.warning_number')
                    warning_number.remove()
                }
                dimension_div.insertBefore(warning, enter_dimension)
            }
            return false
        }

    }

    control_panel_node_1.addEventListener('click', e => {
        let target = e.target
        switch (Array.from(target.classList)[0]) {
            case 'reset-button':
                let grid_nodes = document.querySelectorAll('.grid_node')
                Array.from(grid_nodes).forEach(node => {
                    node.style.backgroundColor = 'white'
                })
                break
            case 'submit-dimension':
                let dimension_text = dimension_input.value
                if (testing_input(dimension_text)) {
                    initialize_grid(Number(dimension_text))
                }

        }
    })

    control_panel_node_1.addEventListener('keydown', e => {
        if (e.key === 'Enter' && dimension_input.value) {
            let dimension_text = dimension_input.value
            if (testing_input(dimension_text)) {
                initialize_grid(Number(dimension_text))
            }
        }
    })


}

grid_behavior()
