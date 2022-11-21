let lastpose = 0;
document.querySelector('#pic2').addEventListener('mousemove',function (e) {
lastpose = e.pageX ;
    console.log(lastpose)

    document.querySelector('#pic2').addEventListener('mousemove',function () {
        document.querySelector('#pic2').style.width = (lastpose + 76 )+'px';
    });
});

// let lastpose = 0 ;
// document.querySelector('#MyPic').addEventListener('mousemove',function (e) {
//
//     console.log(lastpose)
//     lastpose += e.pageX ;
//     if (lastpose < e.pageX){
//         document.querySelector('#MyPic').style.left=(e.pageX + 1000)+'px';
//         console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz' );
//     }
//
//     else if (lastpose > e.pageX) {
//         document.querySelector('#MyPic').style.left=(e.pageX - 1000)+'px';
//         console.log('ssss')
//     }
// });
