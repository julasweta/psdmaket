// подключение файлов стилей и шрифтов
@import '../css/reset';
@import '../../node_modules/normalize.css/normalize';
@import url('https://fonts.googleapis.com/css2?family=Oregano&family=PT+Serif&family=Roboto&display=swap');

//переменные
$oregano: Oregano,
    cursive;
$roboto: Roboto,
    sans - serif;
$myriad: myriad - pro,
    sans - serif;

//убираем нижнюю прокрутку
html {
    overflow - x: hidden;
}

a {
    text - decoration: none;
}

body {
    background - color: #ffffff;
    font - family: $oregano;
    font - size: 87.5 % ;

}


.header {
    background - image: url('../images/src/header.jpg');
    width: 100 % ;
    height: 100 vh;

    background - repeat: no - repeat;
    background - size: cover;

}

.header_top {
    background - color: transparentize(#252a35, .3);

    width: 100%;

    height: 100px;

    position: relative;

    display: inline-block;

}



.logo {



    position: static;

    color: white;

    z-index: -1;

    padding-top: 2%;

    padding-left: 4%;



}



.logotyp {

    background-image: url('../images/src/logo.png');

    height: 100px;

    width: auto;

    background-repeat: no-repeat;

    z-index: -1;

}



.menu {

    font-family: $roboto;



    position: fixed;

    left: 30%;

    margin-top: -7%;



    ol li {

        display: inline-block;



        a {

            color: rgb(255, 255, 255);

            margin-right: 3.3em;



            &:hover {

                border-bottom: 2px solid # 0b e60b;
    }
}
}
}
.hotline {
    width: 50 % ;
    position: absolute;
    top: 5 % ;
    left: 70 % ;
    display: inline - block;

}


