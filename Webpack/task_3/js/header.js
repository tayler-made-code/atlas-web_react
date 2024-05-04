import $ from 'jquery';
import './header.css';

$('body').append('<header></header>');
$('header').appand('<div id="logo"></div>');
$('header').appand('<h1>Holberton Dashboard</h1>');
console.log('Init header');