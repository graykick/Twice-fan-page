$(".scrolldown a").click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

$(".logo").click(() => {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
})

let video = document.getElementById("bgvid");
video.volume = 0.1;
console.log("aaaaaaaaaa");

function bigImg(node) {
    console.log("aaa");
    this.display = "none";
}

var cursorX;
var cursorY;

var cursorX2;
var cursorY2

var moveX;
var moveY;

document.onmousemove = function(e) {
    cursorX = e.pageX + window.pageXOffset;
    cursorY = e.pageY + window.pageYOffset;

    moveX = cursorX - cursorX2;
    moveY = cursorY - cursorY2;

    cursorX2 = cursorX;
    cursorY2 = cursorY2;



    cursorY = -(cursorY) + (document.getElementById("stage").offsetHeight / 2);
    cursorX -= (document.getElementById("stage").offsetWidth / 2);
}

window.addEventListener("resize", () => {
    let bigArrW = document.getElementsByTagName("body");
    let bigW = bigArrW[0].offsetWidth;
    let smallW = document.getElementById("bgvid").offsetWidth;

    let resultW = bigW - smallW;
    document.getElementById("bgvid").style.transform = "translate(" + resultW + "px," + "0)" + "scale(1.2,1.2)";
})


document.getElementById("mask").addEventListener("mousemove", () => {

    document.getElementById("twice").style.transform = "translate(" + (cursorX / 40) + "px," + cursorY / 40 + "px)";
    document.getElementById("thestory").style.transform = "translate(" + -(cursorX / 40) + "px," + -(cursorY / 40) + "px)";
    document.getElementById("bgvid").style.transform = "translate(" + cursorX / 8 + "px," + cursorY / 8 + "px)" + "scale(1.2,1.2)";
})

document.getElementById("title").addEventListener("mousemove", () => {
    document.getElementById("twice").style.transform = "translate(" + cursorX / 40 + "px," + cursorY / 40 + "px)";
    document.getElementById("thestory").style.transform = "translate(" + (-cursorX / 40) + "px," + (-cursorY / 40) + "px)";
    document.getElementById("bgvid").style.transform = "translate(" + cursorX / 8 + "px," + cursorY / 8 + "px)" + "scale(1.2,1.2)";
})

document.getElementById("stage2").addEventListener("mousemove", () => {
    document.getElementById("stage2bg").style.transform = "translate(" + (cursorX / 40) + "px," + cursorY / 40 + "px)";
})


//
// if ($(window).width() > 480) {
//     var menuDowun = false;
//     var uls = $(".scrollmenu");
//     var leftes = $(".left");
//     var listes = [];
//
//     for (let loop = 0; loop < 9; loop++) {
//         listes[loop] = {};
//         listes[loop].menuDowun = false;
//         listes[loop].element = uls[loop];
//         listes[loop].element2 = leftes[loop];
//         uls[loop].addEventListener("mousedown", () => {
//             listes[loop].menuDowun = true;
//             console.log("down");
//         })
//
//         uls[loop].addEventListener("mouseup", () => {
//             listes[loop].menuDowun = false;
//             console.log("up");
//         })
//
//         uls[loop].addEventListener("mouseleave", () => {
//             listes[loop].menuDowun = false;
//             console.log("leave");
//         })
//
//         uls[loop].addEventListener("mousemove", () => {
//             if (listes[loop].menuDowun) {
//                 let pxOffSet = $("#stage").width() * 0.1261904761904762;
//                 var style = getComputedStyle(listes[loop].element);
//                 var left = style.getPropertyValue("left");
//                 var left2 = left.split("p");
//                 left2[0] *= 1;
//                 console.log("drag = " + (1 + left2[0]) + " offset = " + pxOffSet);
//                 if (moveX > 0) {
//                     listes[loop].element.style.left = left2[0] + 3 + "px";
//                 } else {
//                     listes[loop].element.style.left = left2[0] - 3 + "px";
//                 }
//                 for (let innerloop = 0; innerloop < 6; innerloop++) {
//                     let center = listes[loop].element.offsetWidth / 2;
//                     let LIwidth = $(listes[loop].element).children("li").eq(innerloop).width();
//                     let LIleft = style.getPropertyValue("left");
//                     let LIleft2 = left.split("p");
//                     LIleft2[0] *= 1;
//                     console.log("checking " + (1 + innerloop) + " test = " + (LIleft2[0] + (innerloop * LIwidth)) + " center = " + center);
//                     if ((left2[0] + (innerloop * LIwidth) + (LIwidth / 2)) > (center - (LIwidth / 2)) && (left2[0] + (innerloop * LIwidth) + (LIwidth / 2)) < (center + (LIwidth / 2))) {
//                         $(listes[loop].element).children("li").eq(innerloop).css("background-color", "white");
//                         $(listes[loop].element).children("li").eq(innerloop).css("color", "black");
//                         $(listes[loop].element2).children(".playlist").children(".subtitle").children("div").eq(innerloop + 1).css({
//                             display: "block"
//                         });
//                         $(listes[loop].element2).children(".playlist").children(".subtitle").children("div").eq(innerloop + 1).children("audio").trigger('play');
//                         document.getElementById("bgvid").volume = 0;
//                         for (let ininerloop = 0; ininerloop < 9; ininerloop++) {
//                             if (ininerloop != loop) {
//                                 for (let inininerloop = 0; inininerloop < 6; inininerloop++) {
//                                     $(listes[ininerloop].element2).children(".playlist").children(".subtitle").children("div").eq(inininerloop + 1).children("audio").trigger('load');
//                                 }
//                             }
//                         }
//                     } else {
//                         $(listes[loop].element).children("li").eq(innerloop).css("color", "white");
//                         $(listes[loop].element).children("li").eq(innerloop).css("background-color", "black");
//
//                         //  $(listes[loop].element).children("li").eq(innerloop).css("background-color", "balck");
//                         $(listes[loop].element2).children(".playlist").children(".subtitle").children("div").eq(innerloop + 1).css({
//                             display: "none"
//                         });
//                         $(listes[loop].element2).children(".playlist").children(".subtitle").children("div").eq(innerloop + 1).children("audio").trigger('load');
//                     }
//                 }
//             }
//         })
//     }
// } else if ($(window).width() <= 480) {
var uls = $(".scrollmenu");
var leftes = $(".left");
var listes = [];

for (let loop = 0; loop < 9; loop++) {
    for (let innerloop = 0; innerloop < 6; innerloop++) {
        $(uls[loop]).children("li").eq(innerloop).click(() => {
            for (let ininerloop = 0; ininerloop < 9; ininerloop++) {
                for (let inininerloop = 0; inininerloop < 6; inininerloop++) {
                    $(leftes[ininerloop]).children(".playlist").children(".subtitle").children("div").eq(inininerloop + 1).children("audio").trigger('load');
                }
            }
            console.log("click");
            $(uls[loop]).children("li").eq(innerloop).css("color", "black");
            $(uls[loop]).children("li").eq(innerloop).css("background-color", "white");
            document.getElementById("bgvid").volume = 0;
            $(leftes[loop]).children(".playlist").children(".subtitle").children("div").eq(innerloop + 1).children("audio").trigger('play');
            $(leftes[loop]).children(".playlist").children(".subtitle").children("div").eq(innerloop + 1).css({
                display: "block"
            });
            for (let ininerloop = 0; ininerloop < 6; ininerloop++) {
                if (ininerloop != innerloop) {
                    $(uls[loop]).children("li").eq(ininerloop).css("color", "white");
                    $(uls[loop]).children("li").eq(ininerloop).css("background-color", "black");
                    $(leftes[loop]).children(".playlist").children(".subtitle").children("div").eq(ininerloop + 1).css({
                        display: "none"
                    });
                }
            }

        });
    }
}
