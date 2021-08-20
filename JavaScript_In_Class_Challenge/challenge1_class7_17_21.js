// I.O.C.E

//I = Input
//O = Output
//C = Constraints
//E = Edge Case

var nike = {
    "marketing" : {},
    "advertisement" : {},
    "engineering" : {
        "team": ["Nick", "Bijan", "Sierra"],
        "budget": '185,000',
        "projects" : {
            "accomplished": ["projectNike", "Airforce", "Test"],
            'yearReleased' : ['shoesreleased']
        }
    }
}

var accomplishedArray = nike.engineering.projects.accomplished
for(var i=0; i < accomplishedArray.length; i++) {
    accomplishedArray = accomplishedArray[i] + "!";
    
}
console.log(nike.engineering.projects.accomplished)
console.log(accomplishedArray)