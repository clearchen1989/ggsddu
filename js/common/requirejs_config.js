function initrequirejs(){
    requirejs.config({
        paths: {
            "jquery": "jquery.min",
            "select": "../data/main_select",
        }
    });
    
    requirejs.config({
        paths: {
            "primary_upper01":"../data/primary_upper/01",
            "primary_upper02":"../data/primary_upper/02",
        }
    });
}