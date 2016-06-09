    var loadstyle = function(filename) {
        for (var i = 0; i < filename.length; i++) {
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename[i]+'.css')
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref)
        }            
    }
    var loadscript = function(filename) {
        for (var i = 0; i < filename.length; i++) {
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename[i]+'.js')        
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref)
        }
    }

    var cargastyle = loadstyle      ([ 
                                        "css/project.min",
                                        "css/base.min"
                                    ]) ////dynamically load and add this .css file

    var cargaswcript =  loadscript   ([
                                        // "components/jquery/jquery-2.1.1/jquery-2.1.1.min",
                                        // "components/angular/angular.min",
                                        // "components/angular/angular-router",
                                        // "components/angular/angular-route-segment.min",
                                        "components/angular/ui-bootstrap-tpls-1.3.3.min",
                                        
                                        // "components/angular/angular-ui-router",
                                        // "components/angular/resource",
                                        // "components/angular/resource",
                                        // "components/angular/resource",
                                        // "js/app",
                                        // "js/services/services",
                                        // "js/rute",
                                        

                                    ]) //dynamically load and add this .js file

    
