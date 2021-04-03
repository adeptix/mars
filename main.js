const dataFromMars = [
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

function postData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dataFromMars.push(data)
            resolve()
        }, 1500)
    })
}

function getData() {
    setTimeout(() => {
        dataFromMars.forEach((dataFromMars) => {
            console.log(
                `${dataFromMars.date}, ${dataFromMars.temperature}, ${dataFromMars.windspeed}, ${dataFromMars.pressure}`
            )
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