const allData = [
    {
        date: '1 июля 2020 г.',
        temperature: '-70,7 ° F',
        windspeed: '11,5 миль/ч',
        pressure: '766,9  ПА',
    },
    {
        date: '2 июля 2020 г.',
        temperature: '-69,6 ° F',
        windspeed: '10 миль/ч',
        pressure: '765  ПА',
    },
]

let t = document.querySelector('#card_tml')
let wr = document.querySelector('.wrapper')


class MarsInfo {
    constructor(info) {
        let clone = document.importNode(t.content, true);
        clone.querySelector('button').addEventListener('click', () => {
            console.log(info)
        })

        clone.querySelector('.date').textContent += info.date
        clone.querySelector('.tmp').textContent += info.temperature
        clone.querySelector('.wind').textContent += info.windspeed
        clone.querySelector('.press').textContent += info.pressure

        wr.appendChild(clone);
    }
}

function postData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            allData.push(data)
            resolve()
        }, 1500)
    })
}

function getData() {
    setTimeout(() => {
        allData.forEach((dataFromMars) => {
            console.log(
                `${dataFromMars.date}, ${dataFromMars.temperature}, ${dataFromMars.windspeed}, ${dataFromMars.pressure}`
            )

            new MarsInfo(dataFromMars)
        })
    }, 1000)
}

postData(
    {
        date: '3 июля 2020 г.',
        temperature: '-70,7 ° F',
        windspeed: '11,5 миль/ч',
        pressure: '766,9  ПА',
    }
).then(getData)