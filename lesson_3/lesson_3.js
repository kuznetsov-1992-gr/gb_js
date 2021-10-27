
const data = {
    price: 100,
    title: 'good'
}

function send(url, method = 'GET', data = {}, headers = {}, timout =15000){
    return new Promise((res, rej) => {
        let xhr;

        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();

        }else if (window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }


        Object.entries(headers).forEach(([key, velue])=>{
            xhr.setRequestHeader(key, velue)
        })
        // xhr.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded')

        xhr.timeout = timout;

        xhr.ontimeout = function(){
            // код, если привышенно время ожидания
            rej()
        }
        xhr.onreadystatechange = function(){
            // Код выполняется после получения ответа
            if(xhr.readyState === 4){
                //Эот код выполняется после выполнения запроса
                if(xhr.status < 400){
                    rej(xhr.responseText)
                    //обработка(ответа)
                }else if(xhr.status >= 400){
                    res(xhr.responseText)
                    //обработка события (ошибки)
                }
            }
        }

        xhr.open(method, url, true)

        xhr.send(JSON.stringify(data));
    })
    
}

send('http://myserver.com')
.then((data) => {

})
.catch((data)=>{

})


fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', {
    method: 'POST',
    headers: {
        'content-type': 'application/JSON'
    },
    body: JSON.stringify(data)
})
.then((res)=>{
    return res.json()
})
.then((data)=>{
console.log(data)
})
.catch()



new Promise((resolve, reject) =>{
    send(reject, resolve)
})
.then((data)=>{
    return new Promise ((res, rej) => {
        send(rej, res)
    })
})
.then((data) => {

})
.catch((error) => {

})