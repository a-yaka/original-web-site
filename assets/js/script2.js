function toggleVisibility(id){
    const options = ["player_options", "time_options", "level_options"];
    options.forEach(option => {
        const element = document.getElementById(option);
        if(option === id) {
            element.classList.toggle("hidden");
        } else {
            element.classList.add("hidden");
        }
    })
}