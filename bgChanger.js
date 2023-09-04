const button = document.querySelectorAll('.button')
//console.log(button);
const body = document.querySelector('body')

button.forEach( function (btn) {
    btn.addEventListener('click',function (e) {
        //console.log(e);
        // console.log(e.target.id);
        /***if-else***/
        // if (e.target.id === "darkslategray") {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === "darkorange") {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === "crimson") {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === "lightgreen") {
        //     body.style.backgroundColor = e.target.id
        // }

        /*switch*/
        switch (e.target.id) {
            case "darkslategray":
                body.style.backgroundColor = e.target.id
                break;
            case "darkorange":
                body.style.backgroundColor = e.target.id
                break;
            case "crimson":
                body.style.backgroundColor = e.target.id
                break;
            case "lightgreen":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
} )