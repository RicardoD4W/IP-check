const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b47a50bc33msh5b59a511e550edbp156cf5jsndf53f2174c07',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};


const fetchIPinfo = ip =>{
    return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, options)
    .then(res => res.json())
    .catch(err => console.log(err));
}


const $ = selector => document.querySelector(selector);

const $form = $('.form');
const $input = $('.input');
const $submit = $('.submit');
const $results = $('.results');

$form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const {value} = $input;
    if(!value) return;

    $submit.setAttribute('disable', '');
    $submit.setAttribute('aria-busy', 'true');

    const ipInfo = await fetchIPinfo(value);

    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 1);
    }

    $submit.removeAttribute('disable');
    $submit.removeAttribute('aria-busy');
});

