//------------------------------(home)-------------------------------
let menuWidth = $("#menu").outerWidth(true);
$("#menu").css("left",`-${menuWidth}`);

$("#openMenu").click(function(){
    
    if(($("#menu").css("left"))=="0px")
        {
            $("#menu").animate({left:`-${menuWidth}`},1000)
            ,
            $("#openMenu").animate({left:`0px`},1000)    
              
        }
    else
        {
           $("#menu").animate({left:`0px`},1000) ,

            $("#openMenu").animate({left:menuWidth} ,1000)   
        }
})

$("#closebtn").click(function(){
           
    $("#menu").animate({left:`-${menuWidth}`},1000)
    ,
    $("#openMenu").animate({left:`0px`},1000)      
    
})


$("a[href^='#']").click(function(){
    
    let aHref = $(this).attr("href")

    
    let profileOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:profileOffset} , 1000)


})
//----------------------------------------------------------------------

//----------------------------------(singer)----------------------------
let singers = [
    {h3:"Singer one" , p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    
    ,
    {h3:"Singer two" , p:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
    
    ,
    {h3:"Singer three" , p:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
    ,
    {h3:"Singer four" , p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
]

let singersData ="";
for(let i=0; i<singers.length; i++)
{
    singersData +=`<h3 style="font-size:30px;cursor:pointer" class="p-1" onclick="singerInfo(${i})">ٍ${singers[i].h3}</h3> 
                <p id="singer${i}">${singers[i].p}</p>`
}
document.getElementById("singer").innerHTML=singersData;

  for(let i=0; i<singers.length; i++) 
      {

        $(`#singer${i}`).slideUp(0);
      }

function singerInfo(id)
{
  for(let i=0; i<singers.length; i++) 
      {
          if(i==id)
              {
                  $(`#singer${i}`).slideToggle(1000);
                  
              }
          else
              {
                  $(`#singer${i}`).slideUp(1000);
              }
      }
}
//----------------------------------------------------------------------

//----------------------------------(duration)----------------------------
function calcDuration()
{
    let presentDate = new Date();
    let eventDate = new Date("12/5/22020");
    
    let presentTime =  presentDate.getTime();
    let eventTime = eventDate.getTime();
    let diffTime = eventTime - presentTime;
    
    let seconds = Math.floor(diffTime/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    
    seconds = seconds%60;
    minutes = minutes%60;
    hours = hours%24;
    
    document.getElementById("days").innerHTML = `<h3>${days} days</h3>`;
    document.getElementById("hours").innerHTML =`<h3>${hours} hours</h3>`;
    document.getElementById("minutes").innerHTML = `<h3>${minutes} minutes</h3>`;
    document.getElementById("seconds").innerHTML = `<h3>${seconds} seconds</h3>`;    
    
    setTimeout(calcDuration,1000);
    
}
calcDuration();
//----------------------------------------------------------------------

//----------------------------------(join us)----------------------------
let inputMessage = document.getElementById("inputMessage");

inputMessage.onkeyup= function(){
    
    let charCount = 100;
    let messageLength = inputMessage.value.length;
    let diffMessageLength = charCount - messageLength; 
    if(diffMessageLength < 0 )
        {
            document.getElementById("inputCounter").innerHTML="your available character finished "
        }
    else
        {
            document.getElementById("inputCounter").innerHTML=diffMessageLength;
        }
    
}


//----------------------------------------------------------------------
