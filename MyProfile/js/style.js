var container = document.getElementById('container');
var info = document.getElementById('info');
var box = document.getElementById('box');
var linked = document.getElementById('linked');
var insta = document.getElementById('insta');
var git = document.getElementById('git');
var twit = document.getElementById('twit');
var strt = 0;
var hover = () => {
    info.style.animation = 'up 1s ease-in-out forwards';
    info.style.display = 'flex';
    box.style.animation = 'expand 1s ease-in-out forwards';
    linked.style.top = '0';
    linked.style.left = '0';
    insta.style.top = '0';
    insta.style.left = '50%';
    git.style.top = '50%';
    git.style.left = '0%';
    twit.style.top = '49%';
    twit.style.left = '49%';
}
var nothover = () => {
    info.style.animation = 'down 1s ease-in-out forwards';
    box.style.animation = 'compress 1s ease-in-out forwards';
}

var stay = () => {
    info.style.bottom = '80px';
    box.style.height = '450px'
    box.style.width = '450px'
    box.style.transform = 'rotate(45deg)'
}

var fixl = () => {
    linked.style.top = '14%';
    linked.style.left = '14%';
    insta.style.top = '0';
    insta.style.left = '50%';
    git.style.top = '50%';
    git.style.left = '0%';
    twit.style.top = '49%';
    twit.style.left = '49%';
}
var fixi = () => {
    linked.style.top = '0';
    linked.style.left = '0';
    insta.style.top = '14%';
    insta.style.left = '25%';
    git.style.top = '50%';
    git.style.left = '0%';
    twit.style.top = '49%';
    twit.style.left = '49%';
}
var fixg = () => {
    linked.style.top = '0';
    linked.style.left = '0';
    insta.style.top = '0';
    insta.style.left = '50%';
    git.style.top = '25%';
    git.style.left = '14%';
    twit.style.top = '49%';
    twit.style.left = '49%';
}
var fixt = () => {
    linked.style.top = '0';
    linked.style.left = '0';
    insta.style.top = '0';
    insta.style.left = '50%';
    git.style.top = '50%';
    git.style.left = '0%';
    twit.style.top = '22%';
    twit.style.left = '22%';
}