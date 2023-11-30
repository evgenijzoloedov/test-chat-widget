// hideChat(0);
//
// $('#prime').click(function() {
//     toggleFab();
// });

let fetchStyle = function(url) {
    return new Promise((resolve, reject) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.onload = () => resolve();
        link.onerror = () => reject();
        link.href = url;

        let headScript = document.querySelector('script');
        headScript.parentNode.insertBefore(link, headScript);
    });
};


function toggleClass (el, className){
    el.classList.toggle(className)
}




function init(){
    console.log(123)
    fetchStyle('style.css')
        .then(
            () => console.log("style loaded succesfully"),
            () => console.error("style could not be loaded"),
        );
    const container = document.createElement('div', )

    container.className = "fabs"


    const iframe = document.createElement('iframe')
    iframe.className = 'chat'
    iframe.width =600
    iframe.height =400
    iframe.src ='https://www.google.ru/drive/'



    const a = document.createElement('a')
    a.id = "prime"
    a.className = "fab"
    a.addEventListener('click', ()=>{
        toggleClass(i,"zmdi-comment-outline")
        toggleClass(i,"zmdi-close")
        toggleClass(i,"is-active")
        toggleClass(i,"is-visible")
        toggleClass(a,"is-float")
        toggleClass(a,"is-visible")
        toggleClass(iframe,"is-visible")
    })

    const i = document.createElement('i')




    i.className = "prime zmdi zmdi-comment-outline"


    a.appendChild(i)


    container.appendChild(iframe)
    container.appendChild(a)


    document.body.appendChild(container)

}
















// //Toggle chat and links
// function toggleFab() {
//     $('.prime').toggleClass('zmdi-comment-outline');
//     $('.prime').toggleClass('zmdi-close');
//     $('.prime').toggleClass('is-active');
//     $('.prime').toggleClass('is-visible');
//     $('#prime').toggleClass('is-float');
//     $('.chat').toggleClass('is-visible');
//     $('.fab').toggleClass('is-visible');
//
// }
//
// $('#chat_first_screen').click(function(e) {
//     hideChat(1);
// });
//
// $('#chat_second_screen').click(function(e) {
//     hideChat(2);
// });
//
// $('#chat_third_screen').click(function(e) {
//     hideChat(3);
// });
//
// $('#chat_fourth_screen').click(function(e) {
//     hideChat(4);
// });
//
// $('#chat_fullscreen_loader').click(function(e) {
//     $('.fullscreen').toggleClass('zmdi-window-maximize');
//     $('.fullscreen').toggleClass('zmdi-window-restore');
//     $('.chat').toggleClass('chat_fullscreen');
//     $('.fab').toggleClass('is-hide');
//     $('.header_img').toggleClass('change_img');
//     $('.img_container').toggleClass('change_img');
//     $('.chat_header').toggleClass('chat_header2');
//     $('.fab_field').toggleClass('fab_field2');
//     $('.chat_converse').toggleClass('chat_converse2');
//     //$('#chat_converse').css('display', 'none');
//     // $('#chat_body').css('display', 'none');
//     // $('#chat_form').css('display', 'none');
//     // $('.chat_login').css('display', 'none');
//     // $('#chat_fullscreen').css('display', 'block');
// });
//
// function hideChat(hide) {
//     switch (hide) {
//         case 0:
//             $('#chat_converse').css('display', 'none');
//             $('#chat_body').css('display', 'none');
//             $('#chat_form').css('display', 'none');
//             $('.chat_login').css('display', 'block');
//             $('.chat_fullscreen_loader').css('display', 'none');
//             $('#chat_fullscreen').css('display', 'none');
//             break;
//         case 1:
//             $('#chat_converse').css('display', 'block');
//             $('#chat_body').css('display', 'none');
//             $('#chat_form').css('display', 'none');
//             $('.chat_login').css('display', 'none');
//             $('.chat_fullscreen_loader').css('display', 'block');
//             break;
//         case 2:
//             $('#chat_converse').css('display', 'none');
//             $('#chat_body').css('display', 'block');
//             $('#chat_form').css('display', 'none');
//             $('.chat_login').css('display', 'none');
//             $('.chat_fullscreen_loader').css('display', 'block');
//             break;
//         case 3:
//             $('#chat_converse').css('display', 'none');
//             $('#chat_body').css('display', 'none');
//             $('#chat_form').css('display', 'block');
//             $('.chat_login').css('display', 'none');
//             $('.chat_fullscreen_loader').css('display', 'block');
//             break;
//         case 4:
//             $('#chat_converse').css('display', 'none');
//             $('#chat_body').css('display', 'none');
//             $('#chat_form').css('display', 'none');
//             $('.chat_login').css('display', 'none');
//             $('.chat_fullscreen_loader').css('display', 'block');
//             $('#chat_fullscreen').css('display', 'block');
//             break;
//     }
// }

init()








