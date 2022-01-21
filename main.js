thing =  " ";
animal= [ ];
statu=" ";


function preload(){
   
}

function start(){
    detective=ml5.objectDetector("cocossd",loaded);
    document.getElementById("sta").innerHTML= statu; 
    thing=document.getElementById("found").value;
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    vid=createCapture(VIDEO);
    vid.size(400,400);
    vid.hide();
}

function loaded(){
    console.log("model chalu"); 
    statu="loading 00000";
}

function getresult(error,results){
    if (error) {
        console.log(error);
    } 
        console.log(results);
        animal=results;
}

function draw(){
    
    image(vid,0,0,400,400);

    if (statu != " "){
        
        detective.detect(vid,getresult);

        for(i=0; i<animal.length; i++){
              
            if ( animal[i].label == thing ) {

                vid.stop();

                r = random(255);
                g=random(255);
                b= random(255);
                


                fill(r,g,b);
                stroke(r,g,b);
                noFill();
        
                pers=floor(animal[i].confidence*100);
        
                rect( animal[i].x , animal[i].y,animal[i].width,animal[i].height );
                text(animal[i].label + " "+ pers + " % " ,animal[i].x +10 ,animal[i].y+ 10 );
            
                statu=  thing + " FOUND " ;
                document.getElementById("sta").innerHTML= statu;
                document.getElementById("noo").innerHTML= " Number Of Objects = " + animal.length;

            } else{
                 
                r = random(255);
                g=random(255);
                b= random(255);
                
                fill(r,g,b);
                stroke(r,g,b);
                noFill();
        
                pers=floor(animal[i].confidence*100);
        
                rect( animal[i].x , animal[i].y,animal[i].width,animal[i].height );
                text(animal[i].label + " "+ pers + " % " ,animal[i].x +10 ,animal[i].y+ 10 );
            
                statu= thing + " NOT FOUND "
                document.getElementById("sta").innerHTML= statu;
                document.getElementById("noo").innerHTML= " Number Of Objects = " + animal.length;

            } 
    
        }

    }


    
}
//order for giving a shape it's things === "( x , y , width, height )"//