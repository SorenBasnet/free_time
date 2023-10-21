/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

/**
 * 
 * Go to http://numbersapi.com/#42 for more information 
 * the api sends back value in json format 
 * no authentication key is required 
 *  
 * Here is a non-exclusive list of web APIs:

- [toddmotto/public-apis: A collective list of public JSON APIs for use in web development.](https://github.com/toddmotto/public-apis)

- [ProgrammableWeb - APIs, Mashups and the Web as Platform](https://www.programmableweb.com/)

 *  
 */

async function getData(url){
    return fetch(url).then(response => response.json()).catch(error => console.log(error)); 
}

async function get_individual(num, all_numbers) {


    let number = parseInt(num);
    let url = `http://numbersapi.com/${number}?json`
    let data = await getData(url); 

    let url_less = `http://numbersapi.com/${number-1}?json`
    let data_less = await getData(url_less); 

    let url_more = `http://numbersapi.com/${number+1}?json`
    let data_more = await getData(url_more); 


    let info_section = document.createElement("div"); 
    let number_para = document.createElement("div"); 
    let paragraph = document.createElement("div");

    number_para.innerText = number 
    paragraph.innerText = data.text; 

    let info_section_less = document.createElement("div"); 
    let number_para_less = document.createElement("div"); 
    let paragraph1 = document.createElement("div");

    number_para_less.innerText = number -1; 
    paragraph1.innerText = data_less.text;

    let info_section_more = document.createElement("div"); 
    let number_para_more = document.createElement("div"); 
    let paragraph2 = document.createElement("div");

    number_para_more.innerText = number + 1; 
    paragraph2.innerText = data_more.text; 

    info_section_less.appendChild(number_para_less); 
    info_section_less.appendChild(paragraph1); 

    info_section.appendChild(number_para); 
    info_section.appendChild(paragraph); 

    info_section_more.appendChild(number_para_more); 
    info_section_more.appendChild(paragraph2); 

    all_numbers.appendChild(info_section_less);
    all_numbers.appendChild(info_section); 
    all_numbers.appendChild(info_section_more);



    
}

async function get_batch(num, all_numbers) {

    let number = parseInt(num);
    let url = `http://numbersapi.com/${number-1}..${number+1}`
    let data = await getData(url); 

    console.log(data[`${number}`]);


    let info_section = document.createElement("div"); 
    let number_para = document.createElement("div"); 
    let paragraph = document.createElement("div");

    number_para.innerText = number 
    paragraph.innerText = data[`${number}`]

    let info_section_less = document.createElement("div"); 
    let number_para_less = document.createElement("div"); 
    let paragraph1 = document.createElement("div");

     number_para_less.innerText = number -1; 
     paragraph1.innerText = data[`${number-1}`];

    let info_section_more = document.createElement("div"); 
    let number_para_more = document.createElement("div"); 
    let paragraph2 = document.createElement("div");

     number_para_more.innerText = number + 1; 
     paragraph2.innerText = data[`${number+1}`]; 

    info_section_less.appendChild(number_para_less); 
    info_section_less.appendChild(paragraph1); 

    info_section.appendChild(number_para); 
    info_section.appendChild(paragraph); 

    info_section_more.appendChild(number_para_more); 
    info_section_more.appendChild(paragraph2); 

    all_numbers.appendChild(info_section_less);
    all_numbers.appendChild(info_section); 
    all_numbers.appendChild(info_section_more);

}

async function clickedon() {
    let paragraph_section = document.getElementById("number_info"); 
    paragraph_section.innerText = "";
    let num = parseInt(document.querySelector('#number').value);
    let all_numbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}
